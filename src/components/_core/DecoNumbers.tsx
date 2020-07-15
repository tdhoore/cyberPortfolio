import React from "react";
import { motion } from "framer-motion";
import { fadeInFlicker } from "../anim/animationPresets";

const DecoNumbers = () => {
  return (
    <div className="pixFont blurEffectText decoNumbers">
      <motion.div
        {...fadeInFlicker}
        transition={{ ...fadeInFlicker.transition, delay: 0.4 }}
      >
        541
      </motion.div>
      <motion.div
        {...fadeInFlicker}
        transition={{ ...fadeInFlicker.transition, delay: 0.5 }}
      >
        680
      </motion.div>
      <motion.div
        {...fadeInFlicker}
        transition={{ ...fadeInFlicker.transition, delay: 0.6 }}
      >
        943
      </motion.div>
      <motion.div
        {...fadeInFlicker}
        transition={{ ...fadeInFlicker.transition, delay: 0.7 }}
      >
        274
      </motion.div>
    </div>
  );
};

export default DecoNumbers;
