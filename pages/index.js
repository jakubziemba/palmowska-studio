import styled, { keyframes } from 'styled-components';

export default function Home() {
	return (
		<Main>
			<Loader />
			<TextContainer>
				<Heading>Kamila Palmowska</Heading>
				<Subheading>interior design studio</Subheading>
				<Paragraph>website coming soon</Paragraph>
			</TextContainer>
			<Footer>
				<Paragraph>contact:</Paragraph>
				<Paragraph>
					<a href='tel:+48600897821'>600 897 821</a>
				</Paragraph>
				<Paragraph>
					<a href='mailto:hello@kamilapalmowska.com'>hello@kamilapalmowska.com</a>
				</Paragraph>
			</Footer>
		</Main>
	);
}

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
	background: #8099d1;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0;
`;

export const TextContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	top: 50%;
	transform: translateY(-50%);
`;

export const Footer = styled.footer`
	margin-top: auto;
	margin-bottom: 4rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	position: relative;
	bottom: 0;
`;

export const Heading = styled.h1`
	color: #f3dedb;
	margin: 0;
	white-space: nowrap;
	font-size: 10vw;
	letter-spacing: 0.01em;
	font-weight: 300;
	-webkit-font-smoothing: antialiased;
	line-height: 0.65;
`;

export const Subheading = styled.h2`
	font-size: 4vw;
	color: #f3dedb;
	font-weight: 300;
	-webkit-font-smoothing: antialiased;
`;

export const Paragraph = styled.p`
	font-size: 1rem;
	color: #f3dedb;
	font-weight: 300;
	-webkit-font-smoothing: antialiased;
	line-height: 1;
	margin-bottom: 0;

	@media (min-width: 600px) {
		font-size: 1.5rem;
	}
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
	pointer-events: none;
`;
