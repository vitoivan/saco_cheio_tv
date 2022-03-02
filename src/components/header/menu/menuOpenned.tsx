import React from 'react'; 
import { 
	MenuOpennedContainer as Container, 
	MenuOpennedHeader as Header, 
	MenuOpennedBody as Body,
	MenuOpennedFooter as Footer

} from './menuOpenStyle';
import { IoMdClose as Close, IoIosLogOut as Logout } from 'react-icons/io';
import { BsYoutube as Youtube } from 'react-icons/bs';
import { FaTelegramPlane as Telegram } from 'react-icons/fa';
import { IoHelpCircle as About } from 'react-icons/io5';
import { FaUserAlt as User } from 'react-icons/fa';

export interface IMenuOpennedComponentProps {
	openned: boolean,
	setOpenned: React.Dispatch<React.SetStateAction<boolean>>
}

export const MenuOppennedComponent = ({ openned, setOpenned }: IMenuOpennedComponentProps) => {
  return (
	  
	<Container className={`${ openned ? 'open' : '' }`}>
		<Header className='header'>
			<Close className='close btn' onClick={() => setOpenned(false)}/>
			<div className="contacts">
				<a href="https://www.youtube.com/channel/UCEi4mIXHbqrEGsLoywqKi5g" target="_blank">  <Youtube className='youtube btn'/>  </a>
				<a href="#">  <Telegram className='telegram btn'/>  </a>
			</div>
		</Header>
		<Body>
			<ul>
				<li> <a href='#'><User />  <span>Minha Conta</span></a> </li>
				<li> <a href='#'><About />  <span>Sobre</span></a> </li>
			</ul>
		</Body>
		<Footer> 
			<a href="#"> <Logout /> <span>Sair</span></a>
		</Footer>
	</Container>
  )
}