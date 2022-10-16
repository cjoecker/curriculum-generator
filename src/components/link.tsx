import React from 'react';

interface Properties {
  children: string;
  href: string;
}

export const Link = ({ children, href }: Properties) => {
  return (
    <>
      <a className="underline" href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    </>
  );
};
