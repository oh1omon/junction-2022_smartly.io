import {bundle} from '@remotion/bundler';
import {getCompositions, renderMedia} from '@remotion/renderer';
import express from 'express';
import path from 'path';
import url from 'url';
import fs from 'fs';
import cloudStorage from '@google-cloud/storage';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const app = express();
const port = 8080;
const compositionId = 'Comixer';

const bucketName = 'review-videos';
const keyPath = './key.json';

// Creating bundle
const entry = './src/index';
const bundleLocation = await bundle(path.resolve(entry), () => undefined, {
	webpackOverride: (config) => config,
});

app.use(express.json());

app.use('/static', express.static(path.join(__dirname, 'public')));

// Setting this as a health check point
app.get('/',(req,res)=>{
	res.send('Hi there from Google reviews server')
})

app.post('/', async (req, res) => {
	// Parametrize the video by passing arbitrary props to your component.
	// https://WEBSITE.CUM/?name=Theodore&isAuthor=true =
	const inputProps = req.body;

	console.log('render script started', inputProps)

	try {
		const comps = await getCompositions(bundleLocation, {
			// We will use getInputProps() in Remotion react app
			inputProps,
		});

		// Further there will be different compositions for different review sources. For now 'Comixer' is hardcoded
		const composition = comps.find((c) => c.id === compositionId);
		const randomName = new Date().valueOf();
		const outputLocation = `public/${randomName}.mp4`;

		console.log('video rendering started')

		await renderMedia({
			composition,
			serveUrl: bundleLocation,
			codec: 'h264',
			outputLocation,
			inputProps,
		});

		console.log('video rendered, starting saving to the cloud')

		// Creating Storage reference
		const storage = new cloudStorage.Storage({keyFilename: keyPath});

		console.log('video rendered, starting saving to the cloud 1')

		// Creating Bucket reference
		const bucket = storage.bucket(bucketName);

		console.log('video rendered, starting saving to the cloud 2')


		// Creating a reference of file for Cloud Storage Bucket
		const blobName = outputLocation.split('/')[1]
		const blob = bucket.file(blobName);
		const blobStream = blob.createWriteStream();

		console.log('video rendered, starting saving to the cloud 3')


		blobStream.on('error', (err) => {
			console.log(err.message);
			res.status(400).send('Ah shit, error with sending video to google cloud');
		});

		blobStream.on('finish', () => {
			// The public URL can be used to directly access the file via HTTP.
			const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;

			// Sending an object with link to the rendered video
			res.status(200).send({videoOutputLocation: publicUrl});
		});

		fs.readFile(outputLocation, (err, data) => {
			if (err) console.log(err);

			// Actually sending data to the Bucket
			blobStream.end(data);
		});
	} catch (e) {
		// Logging err message to console and sending err response to the client.
		console.log(e);
		res.send(`ERR: ${e.message}`);
	}
});

app.listen(port);

console.log(
	[
		`The server has started on http://localhost:${port}!`,
		'You can render a video by passing props as URL parameters.',
		'',
		'If you are running Hello World, try this:',
		'',
		`http://localhost:${port}?titleText=Hello,+World!&titleColor=red`,
		'',
	].join('\n')
);
