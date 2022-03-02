import React from 'react';
import { CarousselComponent } from '../components/caroussel/carousel';
import { HeaderComponent } from '../components/header/header';
import { OurProgramsComponent } from '../components/our-programs/our-programs';
import { SupportComponent } from '../components/support';
import { FooterComponent } from '../components/footer/footer'


export const Home = () => {
  return (
    <div className="App" id='#'>
        <HeaderComponent />
        <CarousselComponent />
        <OurProgramsComponent />
        <SupportComponent />
        <FooterComponent />
    </div>
  );
}
