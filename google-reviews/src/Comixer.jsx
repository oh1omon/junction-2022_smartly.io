import {AbsoluteFill, Audio, Img, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import './Comixer.css';
import { Icon } from '@iconify/react';
import { Noise } from './Noise';

export const Comixer = () => {
	const frame = useCurrentFrame()
	const { width, height} = useVideoConfig();
	const imageUrl = 'https://jeven.fi/wp-content/uploads/2019/09/tacobell-4.jpg';
	const absolutePosStyle = {position: 'absolute', marginLeft: 'auto', marginRight: 'auto', left: 0, right: 0, textAlign: 'center'}

	const titleFade = (frame - 80) / -10
	const imageFade = (frame - 90) / -10
	const reviewFade = (frame - 100) / -10

	const title2Fade = Math.min(1, (frame - 105) / 10)
	const image2Fade = Math.min(1, (frame - 110) / 10)
	const review1Fade = Math.min(1, (frame - 120) / 10)
	const review2Fade = Math.min(1, (frame - 170) / 10)
	const review3Fade = Math.min(1, (frame - 220) / 10)

	const screen2Fade = (frame - 300) / -10

	const imageGallery1 = Math.min(1, (frame - 310) / 10)
	const imageGallery2 = Math.min(1, (frame - 350) / 10)
	const imageGallery3 = Math.min(1, (frame - 390) / 10)
	const imageGallery4 = Math.min(1, (frame - 430) / 10)

	


	return (
		<AbsoluteFill style={{backgroundColor: 'white'}}>
			<Audio src={staticFile("music1.mp3")} />
			
			{/* First Screen */}
			<div>
			<div style={{...absolutePosStyle, top: 80, opacity: titleFade}}>
				<h1 style={{ fontSize: 100, margin: 0, padding: 0 }}>Joe’s Haircut</h1>
				<p style={{ fontSize: 60, margin: 0, padding: 0 }}>Kaczyńskiego 32</p>
			</div>
			<div style={{...absolutePosStyle, top: 400, opacity: imageFade}}>
				<Img style={{ height: 1100, width: 700, objectFit: 'cover' }} src={imageUrl}/>
			</div>
			<div style={{...absolutePosStyle, bottom: 80, opacity: reviewFade}}>
				<p style={{ fontSize: 80, margin: 0, padding: 0, fontWeight: 'bold' }}>Google Reviews</p>
				<div style={{ display: 'flex', justifyContent: 'center', paddingTop: 30 }}>
					{Array(5).fill('').map(() => <Icon icon="bxs:star" height={60} width={60} color='#FBBF24'/>)}
				</div>
			</div>
			</div>

			{/* Second Screen */}
			<div style={{ opacity: screen2Fade }}>
			<div style={{position: 'absolute', textAlign: 'right', top: 50, right: 100, width: 500, opacity: title2Fade}}>
				<h1 style={{ fontSize: 80, margin: 0, padding: 0 }}>Joe’s Haircut</h1>
				<p style={{ fontSize: 50, margin: 0, padding: 0 }}>Kaczyńskiego 32</p>
			</div>

			<Img style={{ position: 'absolute', left: -250, top: -300, height: 700, width: 700, objectFit: 'cover', borderRadius: 500, opacity: image2Fade }} src={imageUrl}/>

			<div style={{ position: 'absolute', top: 500, left: 100, width: 900, opacity: review1Fade}}>
				<p style={{ fontSize: 50, margin: 0, padding: 0, paddingBottom: 30 }}>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
				{Array(5).fill('').map(() => <Icon icon="bxs:star" height={60} width={60} color='#FBBF24'/>)}
			</div>

			<div style={{ position: 'absolute', top: 850, left: 100, width: 900, opacity: review2Fade}}>
				<p style={{ fontSize: 50, margin: 0, padding: 0, paddingBottom: 30 }}>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
				{Array(5).fill('').map(() => <Icon icon="bxs:star" height={60} width={60} color='#FBBF24'/>)}
			</div>

			<div style={{ position: 'absolute', top: 1200, left: 100, width: 900, opacity: review3Fade}}>
				<p style={{ fontSize: 50, margin: 0, padding: 0, paddingBottom: 30 }}>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
				{Array(5).fill('').map(() => <Icon icon="bxs:star" height={60} width={60} color='#FBBF24'/>)}
			</div>

			<Img style={{ position: 'absolute', right: -250, bottom: -300, height: 700, width: 700, objectFit: 'cover', borderRadius: 500, opacity: image2Fade }} src={imageUrl}/>
			</div>

			{/* Third Screen */}
			<Img style={{ position: 'absolute', margin: 'auto', bottom: 0, top: 0, left: 0, right: 0, width, height, opacity: imageGallery1, objectFit: 'cover' }} src={imageUrl}/>
			<Img style={{ position: 'absolute', margin: 'auto', bottom: 0, top: 0, left: 0, right: 0, width, height, opacity: imageGallery2, objectFit: 'cover' }} src='https://media-cdn.tripadvisor.com/media/photo-s/16/a1/89/9e/taco-bell-sello.jpg'/>
			<Img style={{ position: 'absolute', margin: 'auto', bottom: 0, top: 0, left: 0, right: 0, width, height, opacity: imageGallery3, objectFit: 'cover' }} src='https://img.restaurantguru.com/w550/h367/re2c-Taco-Bell-Sello-interior.jpg'/>
			<Img style={{ position: 'absolute', margin: 'auto', bottom: 0, top: 0, left: 0, right: 0, width, height, opacity: imageGallery4, objectFit: 'cover' }} src='https://sndp.mediadelivery.fi/img/some/al/200379323.jpg'/>

			<Noise />
		</AbsoluteFill>
	);
};
