import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariantsRight = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1.5,
      ease: 'easeInOut',
    },
  },
};

const scaleVariantsLeft = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1.5,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 1.0 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hi, My Name is</p>
            <h1 className="head-text">Ryan</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="bold-text" style={{ marginTop: 10 }}>
            I am a highly motivated software engineer graduate from Coding Dojo.
            Ever since I was a little kid I had an interest in coding. It all started from me playing videos games. I wondered how I could make one myself, so I googled it
            and from there on began my journey into programming. After some time of messing with code myself I attended Palm Beach State College where I studied Computer Science to
            ofically start my career path. After my adventures at PBSC I found Coding Dojo. So I applied for their next cohort and got in! After a intuitive 14 week 3 stack program I 
            graduated with a certificate in Software Development. Since then I have continued to expand my knowledge with my own research and projects. I work great in a team 
            environments but I can also do amazing work alone. Very eager to grow and learn new things. Fast learner and can easily adapt to my surroundings.
          </p>
        </div>      

      </div>
    </motion.div>

    <motion.div
      variants={scaleVariantsLeft}
      whileInView={scaleVariantsLeft.whileInView}
      className="app__header-circles-left"
    >
      {[images.redux, images.node, images.sass].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        src={images.profile}
        alt="profile_circle"
        className="overlay_pic"
      />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariantsRight}
      whileInView={scaleVariantsRight.whileInView}
      className="app__header-circles"
    >
      {[images.react, images.javascript, images.html].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');
