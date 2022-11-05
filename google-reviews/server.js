import {bundle} from '@remotion/bundler';
import {getCompositions, renderMedia} from '@remotion/renderer';
import express from 'express';
import path from 'path';
import url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const app = express();
const port = 8000;
const compositionId = 'Comixer';

// Creating bundle
const entry = './src/index';
const bundleLocation = await bundle(path.resolve(entry), () => undefined, {
	webpackOverride: (config) => config,
});

app.use(express.json())

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
	// Parametrize the video by passing arbitrary props to your component.
	// https://WEBSITE.CUM/?name=Theodore&isAuthor=true =
	const inputProps = req.body;

	try {
		const comps = await getCompositions(bundleLocation, {
			// We will use getInputProps() in Remotion react app
			inputProps,
		});

		// Further there will be different compositions for different review sources. For now 'Comixer' is hardcoded
		const composition = comps.find((c) => c.id === compositionId);
		const randomName = new Date().valueOf();
		const outputLocation = `public/${randomName}.mp4`;

		await renderMedia({
			composition,
			serveUrl: bundleLocation,
			codec: 'h264',
			outputLocation,
			inputProps,
		});

		// Sending an object with link to the rendered video
		res.send({videoOutputLocation: outputLocation});
	} catch (e) {
		// Logging err message to console and sending err response to the client.
		console.log(e.message);
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
