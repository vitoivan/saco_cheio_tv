import { TextField } from '@mui/material';
import styled from 'styled-components'


export const Container = styled.li`
	display: flex;
	gap: 2rem;
	margin-top: 2rem;
	width: 95%;
	padding: 1rem;
	border-top: 1px solid #fff5;

	&:nth-child(1) {
		margin-top: 2rem;
	}

	img {
		display: block;
		height: 70px;
		width: 70px;
		border-radius: 100%;
	}

	.author {
		display: flex;
		align-items: flex-end;
		font-size: 1.4rem;
		gap: 1rem;
		letter-spacing: .2rem;
		color: var(--yellow);
		margin: 0 0 .5rem 0;
		font-weight: 400;

		.date {
			color: var(--yellow);
			font-size: .9rem;
			letter-spacing: .1rem;
			font-weight: 500;
		}
	}

	.comment {
		font-size: 1rem;
		letter-spacing: .1rem;
		line-height: 1.5rem;
	}

	.content {
		width: 100%;
	}

	.answer {
		margin-left: auto;
		width: fit-content;	
		background: none;
		border: none;
		cursor: pointer;
		color: var(--yellow);
		font-size: .9rem;
		letter-spacing: .2rem;
		font-weight: 600;
	}

	.answer:hover {
		color: var(--white);
	}

	.response {
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		margin: 0rem 0 0rem 0;
		gap: 1rem;

		button { 
			background: none; 
			border: none;
			color: var(--yellow);
			font-weight: 600;
			cursor: pointer; 
			font-size: .9rem;
			letter-spacing: .2rem;
			text-transform: uppercase;
		}
		button:hover {
			color: var(--white);
		}
		
		.buttons {
			display: flex;
			gap: 1rem;
			letter-spacing: 1rem;
		}

		textarea {
			max-width: 100%;
			width: 100%;
			border: none;
			outline : none;
			caret-color: var(--yellow);
			color: #fff;
			font-size: 1.5rem;
			letter-spacing: .1rem;
			left: 0;
			bottom: 0;
			font-size: 1rem;
			max-height: 350px;
		}

		textarea::placeholder {
			color: var(--ph-color);
		}


	}
	.see-more {
		height: 72px;
		overflow: hidden;
	}

	.see-btn {
		color: var(--yellow);
		font-weight: 400;
		cursor: pointer;

		&:hover {
			text-decoration: underline;
		}
	}
	

	@media only screen and (max-width: 1365px) {
		
		width: 100%;
		gap: 1rem;
		margin-top: 0;
		
		.content .author {
			font-size: 1rem;
			letter-spacing: .1rem;
		}

		.content .comment {
			font-size: .9rem;
			line-height: 1rem;
		}

		.content .date {
			font-size: .8rem;
			letter-spacing: 0;
		}

		.see-btn {
			font-size: .8rem;
		}

		.answer {
			letter-spacing: .1rem;
			font-weight: 500;
			font-size: .8rem;
		}
		.comment {
			font-weight: 300;
			font-size: 1.1rem;
		}
		.see-btn {
			font-size: 1rem;
		}

		.author .date {
			font-weight: 400;
		}

		&:nth-child(1) {
			margin-top: 0rem;
		}

		.response button {
			font-size: .9rem;
			letter-spacing: 0;
		}
	}
	

	@media only screen and (max-width: 768px) {

		.answer {
			margin: 0;
			padding: 1rem 0;
		}

		.response {
			transform: translateX(-75px);
			margin-bottom: 2rem;
			width: calc(100% + 60px);
		}

	}
`;




export const StyledInput = styled(TextField)`
	width: 100%;


	.css-irrro2-MuiInputBase-root-MuiFilledInput-root:after {
		border-bottom: 2px solid var(--yellow);
	}

	.jCEJIg .css-irrro2-MuiInputBase-root-MuiFilledInput-root {
		background: none;
	}

	.css-irrro2-MuiInputBase-root-MuiFilledInput-root {
		background-color: rgba(0, 0, 0, 0.25);
		background: none;
	}
	
	.css-irrro2-MuiInputBase-root-MuiFilledInput-root:hover {
		background: none;
		background-color: transparent;
	}

	.css-irrro2-MuiInputBase-root-MuiFilledInput-root:before {
		border-bottom: 1px solid #fff;
	}

	.css-irrro2-MuiInputBase-root-MuiFilledInput-root:hover:not(.Mui-disabled):before {
		border-bottom: 1px solid #fff;
	}
`;
