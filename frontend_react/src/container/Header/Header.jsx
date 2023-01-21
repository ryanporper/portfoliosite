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
      transition={{ duration: 1.5 }}
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
          <p className="p-text">Web Developer 💻</p>
          <p className="p-text">Full-stack Developer 🖥️</p>
          <p className="p-text">Frontend / Backend Developer 👨‍💻</p>
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
