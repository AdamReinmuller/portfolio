import React, { ReactNode } from 'react';

import { NavigationDots, SocialMedia } from '..';

type WrapperProps = {
  children?: ReactNode;
  idName: string;
  classNames?: any;
  style?: any;
};

const Wrapper = ({ children, idName, classNames, style }: WrapperProps) => {
  return (
    <div
      id={idName}
      className={`relative flex min-h-[100vh] w-full flex-row ${classNames}`}
      style={style}
    >
      <SocialMedia />
      <div className="flex w-full flex-1 items-center justify-center">
        {children}

        <div className="pointer-events-none absolute bottom-0 right-1 md:bottom-8 md:right-8 ">
          <p className="px-4 text-[8px] uppercase text-zinc-400 sm:px-8 md:text-sm">
            @2022 Rein
          </p>
        </div>
      </div>
      <NavigationDots active={idName} />
    </div>
  );
};

export default Wrapper;
