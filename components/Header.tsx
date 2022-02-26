import { useState } from 'react';
import Image from 'next/image';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { useOverlay } from '.';
import { onNavigate } from '../util';

const sections = [
  { name: 'landing', text: 'home' },
  { name: 'about', text: 'about' },
  { name: 'works', text: 'works' },
  { name: 'skills', text: 'skills' },
  { name: 'contact', text: 'contact' },
];

const Header = () => {
  const { dismiss, display, isOpen } = useOverlay();
  const [toggle, setToggle] = useState(false);

  const handleOpen = () => {
    setToggle(true);
    display();
  };

  const handleClose = () => {
    setToggle(false);
    dismiss();
  };

  const handleNavigate = (id: string) => {
    setToggle(false);
    dismiss();
    onNavigate(id);
  };

  return (
    <>
      <nav className="fixed z-10 flex w-full items-center justify-between bg-white bg-opacity-25 py-4 px-8 backdrop-blur-sm">
        <a
          href="#landing"
          className="relative flex h-[26px] w-[52px] cursor-pointer items-center justify-start md:h-10 md:w-20"
        >
          <Image
            src="/svgs/RD.svg"
            alt="logo"
            layout="fill"
            objectFit="contain"
          />
        </a>
        <ul className="hidden flex-1 items-center justify-center lg:flex">
          {sections.map(({ name, text }) => (
            <li
              className="p-text mx-4 my-2 flex cursor-pointer flex-col items-center justify-center"
              key={`link-${name}`}
            >
              <motion.div
                className="flex select-none flex-col font-medium  uppercase text-gray transition-colors duration-300 ease-in-out hover:text-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                draggable="false"
                onClick={() => onNavigate(name)}
                onDrag={(e) => e.preventDefault()}
              >
                {text}
              </motion.div>
            </li>
          ))}
        </ul>

        <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-white lg:hidden">
          <HiMenuAlt4
            className="cursor-pointer text-2xl"
            onClick={handleOpen}
          />
        </div>
      </nav>

      <AnimatePresence>
        {toggle && isOpen && (
          <motion.div
            className="fixed top-0 bottom-0 right-0 z-40 flex h-[100vh] w-3/5 flex-col items-end justify-end bg-white bg-cover bg-repeat p-4 pt-2 pr-2 shadow-[0px_0px_20px_rgba(168,168,168,0.35)] "
            style={{
              backgroundImage: 'url("/images/bgWhite.png")',
              backgroundPosition: '10% 10%',
            }}
            initial={{ x: '100%', opacity: 0 }}
            exit={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX
              className="my-3 mx-6 h-8 w-8 cursor-pointer text-secondary"
              onClick={handleClose}
            />
            <ul className="flex h-full w-full flex-col items-start justify-start">
              {sections.map(({ name, text }) => (
                <motion.li
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="m-4"
                  key={name}
                >
                  <div
                    className="cursor-pointer text-base font-medium uppercase text-gray transition-colors duration-300 ease-in-out hover:text-secondary"
                    draggable="false"
                    onClick={() => handleNavigate(name)}
                  >
                    {text}
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
