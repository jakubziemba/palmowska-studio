import styled, { keyframes } from 'styled-components';

export default function Home() {
	return (
		<Main>
			<Loader />
			<Blobs></Blobs>
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

const FadeOut = keyframes`
	from {
		opacity: 1;
		} to {
			opacity: 0;
		}
`;

export const Main = styled.main`
	position: relative;
	width: 100%;
	height: 100vh;
	background: #063525;
	overflow: hidden;
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
	font-variation-settings: 'wght' 420;
	color: #dab1cf;
	margin: 0;
	white-space: nowrap;
	font-size: 10vw;
	letter-spacing: 0.01em;
`;

export const Loader = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: black;
	opacity: 1;
	z-index: 10000;
	animation: ${FadeOut} 2s ease-out forwards;
`;
