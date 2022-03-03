import React from 'react';
import { CarousselComponent } from '../components/caroussel/carousel';
import { HeaderComponent } from '../components/header/header';
import { OurProgramsComponent } from '../components/our-programs/our-programs';
import { SupportComponent } from '../components/support';
import { FooterComponent } from '../components/footer/footer'
import { useWindow } from '../providers/windowProvider';

export const Home = () => {

  const { windowWidth } = useWindow();

  return (
    <div className="App" id='#'>
        <HeaderComponent />
        { windowWidth > 1365 && <CarousselComponent /> }
        <OurProgramsComponent />
        <SupportComponent />
         <FooterComponent />
    </div>
  );
}
