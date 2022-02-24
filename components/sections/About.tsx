import { motion } from 'framer-motion';
import Image from 'next/image';

import { AboutsType } from '../../types/sanity';
import { MotionWrapper, Wrapper } from '../wrappers';

type AboutProps = {
  abouts: AboutsType;
};

const About = ({ abouts }: AboutProps) => {
  return (
    <MotionWrapper>
      <Wrapper idName="about">
        <div className="flex flex-col">
          <h2 className="head-text">
            I Know that <span>Good Design</span> <br />
            means <span>Good Business</span>
          </h2>

          <div className="mt-8 flex flex-wrap items-start justify-center">
            {abouts.map((about, index) => (
              <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: 'tween' }}
                className="m-8 flex w-48 flex-col items-start justify-start 2xl:my-8 2xl:mx-8 2xl:w-64 "
                key={about.title! + index}
              >
                <div className="relative h-[170px] w-full overflow-hidden rounded-2xl 2xl:h-64">
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src={about.imgUrl!.asset!.url!}
                    alt={about.title!}
                  />
                </div>
                <h2 className="bold-text mt-5" style={{ marginTop: 20 }}>
                  {about.title}
                </h2>
                <p className="p-text mt-2.5" style={{ marginTop: 10 }}>
                  {about.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Wrapper>
    </MotionWrapper>
  );
};

export default About;
