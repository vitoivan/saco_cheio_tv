import React from 'react'
import { Comments } from '../../mocks/entities/Comments';
import { Container, StyledInput } from './styles'

interface IProps {
	comment : Comments;
	isResponse?: boolean;
	showResponse?: boolean;
}

export const Chat = ({ comment: cmt, isResponse = false }: IProps) => {

	const containerRef = React.useRef(null);
	const [respOpened, setRespOpenned] = React.useState<boolean>(false);
	const [response, setResponse] = React.useState<string>("");
	const [commentEl, setCommentEl] = React.useState<HTMLElement>({} as HTMLElement);
	const [seeMore, setSeeMore] = React.useState<boolean | null>(null);
	const ref = React.useRef(null);
	const commentRef = React.useRef(null);

	const submitResponse = (e: React.FormEvent) => {
		e.preventDefault();
		setResponse("");
		setRespOpenned(false);
	}
	const cancel = () => {
		setResponse("");
		setRespOpenned(false);
	}

		
	const addSCrollClassToTextArea = (respOpened) => {
		if (respOpened) {
			const c = ref.current ? ref.current : {} as HTMLTextAreaElement;
			const c1 = c.children;
			const c2 = c1[0].children;
			c2[0].classList?.add('scroll');
		}
	}

	const toggleSeeMore = () => {
		commentEl.classList.toggle('see-more');
		setSeeMore(!seeMore)
	}

	React.useEffect(() => {
		addSCrollClassToTextArea(respOpened);
	},[respOpened])


	React.useEffect(() => {
		const comment = commentRef.current ? commentRef.current : {} as HTMLDivElement;

		const styles = window.getComputedStyle(comment);
		const lH = parseInt(styles.lineHeight);
		const cH = parseInt(styles.height);
		const lineCount = Math.floor((cH / lH));
	
		if (lineCount > 3) {
			comment.classList.add('see-more')
			setSeeMore(true);
		}
		setCommentEl(comment);

	},[]) 


  return (
	<Container ref={containerRef} >
		<img src={"https://www.sacocheio.tv/static/media/programa4.24a8c6c6.png"} alt="profile" />
		<div className="content" >
			<h3 className='author'>{cmt.author} <span className='date'>{cmt.date || '00/00/0000'}</span></h3>

			<p className="comment" ref={commentRef}>
				{ cmt.text }
			</p>
			{
				seeMore !== null && (
					<span className="see-btn" onClick={() => toggleSeeMore()}>{ seeMore ? 'Ver mais' : 'Ver menos' }</span> 
				)
			}
			{ !isResponse && (<button className="answer" onClick={() => setRespOpenned(true)}>Responder</button>) }
			
			{respOpened && (
				<>
				<form className="response" onSubmit={submitResponse}>
					<StyledInput 
						hiddenLabel
						id="filled-hidden-label-normal"
						variant="filled"
						placeholder='Escreva sua resposta'
						multiline
						maxRows={15}
						onChange={(e) => setResponse(e.target.value)}
						value={response}
						ref={ref}
					/>
					<div className="buttons">
						<button onClick={() => cancel()}>Cancelar</button>
						<button type='submit' onClick={submitResponse}>Enviar</button>
					</div>
				</form>
				</>
			)}
		</div>
	</Container>
  )
}
