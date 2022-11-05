import {AbsoluteFill, useVideoConfig} from 'remotion';
import './Comixer.css';
import {Box, Checkbox, Typography} from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

export const Comixer = () => {
	const {fps, durationInFrames, width, heigth} = useVideoConfig();
	const imageUrl = 'https://jeven.fi/wp-content/uploads/2019/09/tacobell-4.jpg';
	return (
		<AbsoluteFill style={{backgroundColor: 'white'}}>
			<Box
				px={10}
				py={10}
				display="flex"
				flexDirection="column"
				height="100%"
				sx={{
					backgroundImage: `url(${imageUrl})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
				}}
				justifyContent="space-between"
			>
				<Box textAlign={'center'}>
					<Typography variant="h1" color="white" fontSize={150} fontWeight='bold'>
						Taco Bell
					</Typography>
				</Box>
				<Box
					bgcolor='grey.50'
					display='flex'
					alignItems='center'
					paddingY={4}
					paddingX={4}
					borderRadius={2}
					boxShadow={1}
				>
					<Box textAlign='left'>
						<Typography gutterBottom variant="h3">
							Street Address
						</Typography>
						<Typography gutterBottom variant="h4" color='text.secondary'>
							Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
						</Typography>
						<StarOutlineIcon />
					</Box>

				</Box>
			</Box>
		</AbsoluteFill>
	);
};
