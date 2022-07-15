import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {FaGitlab} from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com' target='_blank' rel='noreferrer'><BsLinkedin/></a>
      <a href='https://www.github.com' target='_blank' rel='noreferrer'><BsGithub/></a>
      <a href='https://www.gitlab.com' target='_blank' rel='noreferrer'><FaGitlab/></a>
    </div>
  );
}

export default HeaderSocials;