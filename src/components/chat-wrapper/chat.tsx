import React from 'react'
import styled from 'styled-components';
import { Comments } from '../../mocks/entities/Comments'
import { Chat } from './chatComponent';
import { AiFillCaretDown, AiOutlineCaretUp } from 'react-icons/ai'


interface IProps {
	comment : Comments;
}

interface ILineData {
	lineHeight: number,
	lineCount: number,
	height: number;
}



const responses = [
	{
		id : 'asdasd',
		date : "15/12/2021",
		author : "Pedro",
		text : "Lorem ipsum ",
		episodeId : 1
	},
	{
		id : 'dasdas',
		date : "15/12/2021",
		author : "Pedro",
		text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa officiis excepturi doloribus voluptate minus ad debitis quas totam exercitationem, quidem consequatur voluptas, possimus natus praesentium veritatis eos similique. Quibusdam, nam!",
		episodeId : 1
	},
 	{
		id : 'zxczcx',
		date : "15/12/2021",
		author : "Pedro",
		text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa officiis excepturi doloribus voluptate minus ad debitis quas totam exercitationem, quidem consequatur voluptas, possimus natus praesentium veritatis eos similique. Quibusdam, nam!similique. Quibusdam, nasimilique. Quibusdam, na",
		episodeId : 1
	},
 
]

const Container = styled.div`
	
	.show-responses {
		color: var(--yellow);
		cursor: pointer;
		font-size: 1rem;
		position: relative ;
		left: 7.5rem;
		bottom: 2.6rem;
		font-weight: 600;
		display: flex;
		align-items: center;
		gap: .5rem;
		user-select: none;
		width: fit-content;

		svg  path{
			color: var(--yellow);
		}
		&:hover {
			text-decoration: underline;
			user-select: none;
		}
	}

	.responses {
		max-width: 100%;
	}	


`

export const ChatComponent = ({ comment: cmt }: IProps) => {
	
	const [showResponse, setShowResponse] = React.useState(false);
	return (
		<Container>
			<Chat comment={cmt}/>
			<div className="responses">
				<span 
					className='show-responses' 
					onClick={() => setShowResponse(!showResponse)}>
						{!showResponse ? ( 
							<>
								{`Ver ${responses.length} respostas`} <AiFillCaretDown /> 
							</> 
						) : (
							<>
								{`Ocultar ${responses.length} respostas`} <AiOutlineCaretUp />
							</>
						)}
				</span>
				{ showResponse && (
					responses.map((r,i) => {
						return <Chat comment={r} isResponse key={r.id || i} /> 
					})
				)}
			</div>
		</Container>
  )
}
