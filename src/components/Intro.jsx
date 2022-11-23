import React from 'react';

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-inter font-semibold">
        Joshua
      </h1>
      <p className="text-base md:text-xl mb-4 font-medium font-inter text-black/85">
        Front End Web Developer
      </p>
      <p className=" font-inter text-sm max-w-[560px] mb-6 font-bold text-left">
        I am a FullStack web developer specializing in using the latest web
        technologies. All projects on this page have utilized either{' '}
        <a>React</a> <a className="text-[#5ad2f7]">JS</a>, Next{' '}
        <a className="text-[#5ad2f7]">JS</a>,{' '}
        <a className="text-yellow-500">Javascript</a>,{' '}
        <a className="text-[#d05237]">HTML</a>,{' '}
        <a className="text-[#0471bb]">CSS</a>,{' '}
        <a className="text-[#38bdf8]">Tailwind</a>, or{' '}
        <a className="text-[#116149]">MonogoDB</a>. With these technologies and
        my problem solving solutions, I can build fast single-page application's
        or blazing full-stack web application's... or maybe something inbetween.
        <br />
        <br />
        Check out my work below or for quick access, or view my source code{' '}
        <a
          className="text-[#324cb7] hover:underline underline-offset-2"
          href="https://github.com/joshnev?tab=repositories"
          target="_blank"
        >
          here
        </a>
        .
      </p>
    </div>
  );
}

export default Intro;
