import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import { slideIn } from "../const";
import {motion} from 'framer-motion'

const ThirdSection = () => (
  <section id="product" className={layout.sectionReverse}>
    <motion.div 
     variants={slideIn("left", "spring", 0, 1)}
     initial="hidden"
     whileInView="show"
     viewport={{once:false, amount: 0.25}}
    className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </motion.div>

    <motion.div 
     variants={slideIn("right", "spring", 0, 1)}
     initial="hidden"
     whileInView="show"
     viewport={{once:false, amount: 0.25}}
    className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
        aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
        placerat.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>
    </motion.div>
  </section>
);

export default ThirdSection;