import styled from 'styled-components';

export const Container = styled.header`
	display: flex;
	justify-content: flex-start;
	gap: 5rem;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	padding: 1rem 3rem 1rem 3rem;
	z-index: 999;
	background: var(--header-bg);
	box-shadow: 2px 0px 17px -4px #000;
`;