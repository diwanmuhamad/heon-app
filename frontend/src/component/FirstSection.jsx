import styles from "../style";
import { scrollvariants,slideIn } from "../const";
import { robot } from "../assets";
import Button from "./Button";
import { motion } from 'framer-motion';

const FirstSection = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col sm:py-6 py-6 `}>
      <motion.div 
        variants={slideIn('left', "spring", 0, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{once:true}}
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[80px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Your Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Business</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[80px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Connector
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Be the part of our team to help grow MSME community and
          lead to connecting for all
        </p>
        <Button styles="sm:mt-6 mt-6" />
      </motion.div>

      <motion.div
       variants={slideIn('right', "spring", 0, 0.5)}
       initial="hidden"
       whileInView="show"
       viewport={{once:true}} 
      className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </motion.div>

    </section>
  );
};

export default FirstSection;