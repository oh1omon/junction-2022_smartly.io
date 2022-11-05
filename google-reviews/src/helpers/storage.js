const bucketName = 'review-videos';
const keyPath = './key.json';
const {Storage} = require('@google-cloud/storage');

// This function returns ready bucket object
const init = () => {
	const storage = new Storage({keyFilename: keyPath});

	return storage.bucket(bucketName)
};

export default init();
