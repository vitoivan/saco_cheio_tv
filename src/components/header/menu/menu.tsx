import React from 'react'; 
import { Container } from './menuStyles';
import { RiMenu3Line as Menu } from 'react-icons/ri'
import { MenuOppennedComponent } from './menuOpenned';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const MenuComponent = () => {

	const [openned, setOpenned] = React.useState<boolean>(false);
	const { pathname: path } = useLocation();
	
	return (
		<Container>
			{/* <Menu className='hamburguer' onClick={() => setOpenned(true)}/>
			<MenuOppennedComponent openned={openned} setOpenned={setOpenned} /> */}
			<nav>
				<Link to={'/'} className={ path === '/' ? 'active' : '' }>Home</Link>
				<Link to={'/support'} className={ path === "/support" ? "active" : "" }>Vire um apoiador</Link>
			</nav>
		</Container>
	)
}