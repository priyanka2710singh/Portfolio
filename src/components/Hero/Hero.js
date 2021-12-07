import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey there,<br />
        I'm Priyanka Singh.

      </SectionTitle>
      <SectionText>
        I am Building Mern stack Projects.<br/> Passionate about implementing and launching new projects.
        I have the ability to translate business requirements into technical solutions.

      </SectionText>
      <Button onClick={() => window.location = '#about'}>Learn More...</Button>
    </LeftSection>

  </Section>
);

export default Hero;