import {Composition} from 'remotion';
import {Comixer} from './Comixer';

export const RemotionVideo = () => {
	return (
		<>
			<Composition
				id="google-review"
				component={Comixer}
				durationInFrames={900}
				fps={60}
				width={1080}
				height={1920}
			/>
		</>
	);
};
