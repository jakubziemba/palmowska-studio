import styled, { keyframes } from 'styled-components';

export default function Home() {
	return (
		<Main>
			<Blobs></Blobs>
			{/* <Blob color='#419D78' top='31%' left='58%'></Blob> */}
			{/* <Blob color='#C2E812' top='68%' left='38%'></Blob> */}
			<Heading>coming soon</Heading>
		</Main>
	);
}

const BlurInOut = keyframes`
  from {
    filter: blur(86px);
  } to {
    filter:blur(150px);
  }
`;

const FontWeight = keyframes`
  from {
    font-variation-settings: 'wght' 420;
  } to {
    font-variation-settings: 'wght' 650;
  }
`;

const FadeIn = keyframes`
	from {
		opacity: 0;
		} to {
			opacity: 1;
		}
`;

export const Main = styled.main`
	position: relative;
	opacity: 0;
	width: 100%;
	height: 100vh;
	background: #063525;
	overflow: hidden;
	animation: ${FadeIn} 2s linear forwards;
`;

export const Blobs = styled.div`
	position: absolute;
	top: -2%;
	left: 0;
	transform: translate(-50%, -50%);
	width: 500vw;
	height: 100vh;
	background-color: #e0a458;
	filter: blur(86px);
	animation: ${BlurInOut} 5s alternate infinite;
	z-index: 0;
	border-radius: 50%;
	opacity: 70%;
`;

export const Blob = styled.div`
	position: absolute;
	background-color: ${props => props.color};
	width: 20vw;
	height: 30vw;
	border-radius: 20px 100px 8px 69px;
	margin-bottom: 20px;
	z-index: 4;
	top: ${props => props.top};
	left: ${props => props.left};
	/* transform: translate(-50%, -50%); */
`;

export const Heading = styled.h1`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 10;
	/* font-variation-settings: 'wght' 420; */
	color: #dab1cf;
	margin: 0;
	white-space: nowrap;
	font-size: 10vw;
	animation: ${FontWeight} 5s ease-in-out alternate infinite, ${FadeIn} 2s linear forwards;
	letter-spacing: 0.01em;
	opacity: 0;
`;
