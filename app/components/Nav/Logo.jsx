"use client";

import { motion } from "framer-motion";

export default function Logo() {
  return (
    <div>
      <motion.svg
        width={37}
        height={75}
        // className="h-12 w-12"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 47.42 98.09"
        // style="enable-background:new 0 0 47.42 98.09;"
        xmlSpace="preserve"
      >
        <motion.g>
          <motion.path
            initial={{ pathLength: 0, fill: "none" }}
            animate={{
              pathLength: 1,
              transition: { fill: "#ffffff", delay: "1" },
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            className="st0"
            d="M46.77,11.89c0,0-4.38-10.94-15.49-10.94S15.5,11.89,15.5,11.89s3.6,11.02,16.14,11.02
		S46.77,11.89,46.77,11.89z"
            // fill="#ffffff"
            stroke="#1E1E1E"
            strokeWidth="1"
            strokeMiterlimit="10"
          />
          <motion.circle
            className="st1"
            fill="#303032"
            cx="31.55"
            cy="11.51"
            r="6.39"
          />
          <motion.polyline
            className="st2"
            fill="none"
            stroke="#1E1E1E"
            strokeWidth="1"
            strokeMiterlimit="10"
            points="15.43,11.93 15.43,69.11 0,69.11"
          />
          <motion.path
            className="st1"
            d="M0,81.59v16.5h15.41c0,0,0.67-8.25-8.3-8.25c0,0,8.31-2.47,8.31-8.25H0z"
            fill="#303032"
          />
        </motion.g>
      </motion.svg>
    </div>
  );
}
