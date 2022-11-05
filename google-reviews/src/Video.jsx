import {Composition} from 'remotion';
import {Comixer} from './Comixer';

export const RemotionVideo = () => {
	const duration = 15
	const frames = 30
	const durationInFrames = frames * duration

	return (
		<>
			<Composition
				id="Comixer"
				component={Comixer}
				durationInFrames={durationInFrames}
				fps={frames}
				width={1080}
				height={1920}
			/>
		</>
	);
};
