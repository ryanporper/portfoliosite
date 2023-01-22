import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';

const About = () => (
  <motion.div
    whileInView={{ scale: [0, 1] }}
    transition={{ duration: 1.0, ease: 'easeInOut' }}
  >
    <h2 className="head-text">About <span>me</span></h2>
    <p className="bold-text" style={{ marginTop: 10 }}>
      Hi, my name is Ryan. I am a highly motivated software engineer graduate from  
      <a href='https://www.codingdojo.com/online-coding-bootcamp-full-time' alt='coding dojo'> Coding Dojo. </a> 
      Ever since I was a little kid I had an interest in coding. It all started from me playing videos games. I wondered how I could make one myself, so I googled it
      and from there on began my journey into programming. After some time of messing with code myself I attended Palm Beach State College where I studied Computer Science to
      ofically start my career path. After my adventures at PBSC I found Coding Dojo. They did not just seem like every other coding boot camp I have seen before. So I applied 
      for their next cohort and got in! After a intuitive 14 week 3 stack program I graduated with a certificate in Software Development. Since then I have continued to expand
      my knowledge with my own research and projects. I work great in a team environments but I can also do amazing work alone. Very eager to grow and learn new things. Fast learner
      and can easily adapt to my surroundings.
    </p>
  </motion.div>
);

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);