import React from 'react'; 
import { Container } from './headerStyles';
import { LogoComponent } from './logo/logo';
import { MenuComponent } from './menu/menu';

export const HeaderComponent = () => {
  return (
	  
	<Container>
		<LogoComponent />
		<MenuComponent />
	</Container>
  )
}