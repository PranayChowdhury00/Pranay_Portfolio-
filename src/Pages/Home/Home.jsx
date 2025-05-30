import React from 'react';
import Banner from '../Banner/Banner';
import MyAcive from '../MyAcive/MyAcive';
import ExperienceSection from '../ExperienceSection/ExperienceSection';
import SkillsSection from '../SkillsSection/SkillsSection';
import Education from '../Education/Education';
import MyProjects from '../MyProjects/MyProjects';
import Testimonials from '../Testimonials/Testimonials';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import Certificates from '../Certificates/Certificates';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MyAcive></MyAcive>
            <ExperienceSection></ExperienceSection>
            <Services></Services>
            <SkillsSection></SkillsSection>
            <Education></Education>
            
            <MyProjects></MyProjects>
            <Blog></Blog>
            <Testimonials></Testimonials>
            <Certificates></Certificates>
            <Contact></Contact>
        </div>
    );
};

export default Home;