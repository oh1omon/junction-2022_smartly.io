import {
	AbsoluteFill,
	Audio,
	getInputProps,
	Img,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import './Comixer.css';
import {Icon} from '@iconify/react';
import {Noise} from './Noise';

export const Comixer = () => {
	const {reviews, title, address, photos} = getInputProps();

	const frame = useCurrentFrame();
	const {width, height} = useVideoConfig();
	const imageUrl = 'https://jeven.fi/wp-content/uploads/2019/09/tacobell-4.jpg';
	const absolutePosStyle = {
		position: 'absolute',
		marginLeft: 'auto',
		marginRight: 'auto',
		left: 0,
		right: 0,
		textAlign: 'center',
	};

	const titleFade = (frame - 80) / -10;
	const imageFade = (frame - 90) / -10;
	const reviewFade = (frame - 100) / -10;

	const title2Fade = Math.min(1, (frame - 105) / 10);
	const image2Fade = Math.min(1, (frame - 110) / 10);
	const review1Fade = Math.min(1, (frame - 120) / 10);
	const review2Fade = Math.min(1, (frame - 170) / 10);
	const review3Fade = Math.min(1, (frame - 220) / 10);

	const reviewFades = [review1Fade, review2Fade, review3Fade];

	const screen2Fade = (frame - 300) / -10;

	const imageGallery1 = Math.min(1, (frame - 310) / 10);
	const imageGallery2 = Math.min(1, (frame - 350) / 10);
	const imageGallery3 = Math.min(1, (frame - 390) / 10);
	const imageGallery4 = Math.min(1, (frame - 430) / 10);

	const imageGalleryFades = [
		imageGallery1,
		imageGallery2,
		imageGallery3,
		imageGallery4,
	];

	return (
		<AbsoluteFill style={{backgroundColor: 'white'}}>
			<Audio src={staticFile('music1.mp3')} />

			{/* First Screen */}
			<div>
				<div style={{...absolutePosStyle, top: 80, opacity: titleFade}}>
					<h1 style={{fontSize: 100, margin: 0, padding: 0}}>{title}</h1>
					<p style={{fontSize: 60, margin: 0, padding: 0}}>{address}</p>
				</div>
				<div style={{...absolutePosStyle, top: 400, opacity: imageFade}}>
					<Img
						style={{height: 1100, width: 700, objectFit: 'cover'}}
						src={imageUrl}
					/>
				</div>
				<div style={{...absolutePosStyle, bottom: 80, opacity: reviewFade}}>
					<p style={{fontSize: 80, margin: 0, padding: 0, fontWeight: 'bold'}}>
						Google Reviews
					</p>
					<div
						style={{display: 'flex', justifyContent: 'center', paddingTop: 30}}
					>
						{Array(5)
							.fill('')
							.map(() => (
								<Icon icon="bxs:star" height={60} width={60} color="#FBBF24" />
							))}
					</div>
				</div>
			</div>

			{/* Second Screen */}
			<div style={{opacity: screen2Fade}}>
				<div
					style={{
						position: 'absolute',
						textAlign: 'right',
						top: 50,
						right: 100,
						width: 500,
						opacity: title2Fade,
					}}
				>
					<h1 style={{fontSize: 80, margin: 0, padding: 0}}>{title}</h1>
					<p style={{fontSize: 50, margin: 0, padding: 0}}>{address}</p>
				</div>

				<Img
					style={{
						position: 'absolute',
						left: -250,
						top: -300,
						height: 700,
						width: 700,
						objectFit: 'cover',
						borderRadius: 500,
						opacity: image2Fade,
					}}
					src={imageUrl}
				/>

				{reviews.slice(0, 4).map((review, index) => {
					return (
						<div
							style={{
								position: 'absolute',
								top: 500 + index * 300,
								left: 100,
								width: 900,
								opacity: reviewFades[index],
							}}
						>
							<p
								style={{fontSize: 50, margin: 0, padding: 0, paddingBottom: 30}}
							>
								{review.text}
							</p>
							{Array(review.rating)
								.fill('')
								.map(() => (
									<Icon
										icon="bxs:star"
										height={60}
										width={60}
										color="#FBBF24"
									/>
								))}
						</div>
					);
				})}

				<Img
					style={{
						position: 'absolute',
						right: -250,
						bottom: -300,
						height: 700,
						width: 700,
						objectFit: 'cover',
						borderRadius: 500,
						opacity: image2Fade,
					}}
					src={imageUrl}
				/>
			</div>

			{/* Third Screen */}
			{photos.map((photo, index) => {
				return (
					<Img
						style={{
							position: 'absolute',
							margin: 'auto',
							bottom: 0,
							top: 0,
							left: 0,
							right: 0,
							width,
							height,
							opacity: imageGalleryFades[index],
							objectFit: 'cover',
						}}
						src={photo}
					/>
				);
			})}
			<Noise />
		</AbsoluteFill>
	);
};
