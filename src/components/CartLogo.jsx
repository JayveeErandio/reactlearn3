import { useEffect, useState, useContext } from "react";
import { motion } from "motion/react";
import { UserContext } from "../data/userdata";

export default function CartLogo({ animation = "idle", className }) {
  const bodyVariants = {
    seek: {
      skewX: [0, 4, 8, 8, 0, -8, -8, -4, 0],
      x: [0, -3, -5, -5, 0, 5, 5, 3, 0],
      y: [0, 7, 0, 0, 7, 0, 0, 7, 0],
      scaleY: [1, 0.8, 1, 1, 0.8, 1, 1, 0.8, 1],
      transition: {
        duration: 1.5,
        ease: "linear",
        times: [0, 0.1, 0.2, 0.4, 0.5, 0.6, 0.8, 0.9, 1],
      },
    },
    breath: {
      scaleX: [1, 1.02, 1],
      scaleY: [1, 0.95, 1],
      y: [0, 3, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
      },
    },
    bounce: {
      scaleX: [1, 0.91, 0.91, 1.2, 1],
      scaleY: [1, 1.21, 1.21, 0.8, 1],
      transition: {
        duration: 0.4,
        times: [0, 0.3, 0.45, 0.7, 1],
      },
    },
  };
  const faceVariants = {
    seek: {
      skewX: [0, 4, 8, 8, 0, -8, -8, -4, 0],
      x: [0, -3, -5, -5, 0, 5, 5, 3, 0],
      y: [0, 5, 0, 0, 5, 0, 0, 5, 0],
      scaleY: [1, 0.8, 1, 1, 0.8, 1, 1, 0.8, 1],
      transition: {
        duration: 1.5,
        ease: "linear",
        times: [0, 0.1, 0.2, 0.4, 0.5, 0.6, 0.8, 0.9, 1],
      },
    },
    sad: {
      translateY: [0, 3],
    },
  };
  const mouthVariants = {
    seek: {
      d: [
        "M 40 53 Q 52 63 64 53",
        "M 40 53 Q 51 58 62 55.5", //midcompute
        "M 40 53 Q 50 53 60 58", //frame2 stop1

        "M 40 53 Q 50 53 60 58", //frame2 stop2
        "M 50 54 Q 55 54 60 56.5", //midcompute
        "M 60 55 Q 60 55 60 55", //frame3 stop1

        "M 60 55 Q 60 55 60 55", //frame3 stop2
        "M 50 54 Q 54 59 62 54", //midcompute
        "M 40 53 Q 52 63 64 53",
      ],
      strokeWidth: [4.5, 4.5, 4.5, 4.5, 7, 9.5, 9.5, 7, 4.5],
      transition: {
        duration: 1.5,
        ease: "linear",
        times: [0, 0.1, 0.2, 0.4, 0.5, 0.6, 0.8, 0.9, 1],
      },
    },
    breath: {
      d: "M 40 53 Q 52 63 64 53",
    },
    sad: {
      d: ["M 40 53 Q 52 63 64 53", "M 43 56 Q 52 48 61 56"],
    },
  };

  const { userData, setUserData } = useContext(UserContext);

  const [invert, setInvert] = useState(false);

  useEffect(() => {
    setInvert(
      document.querySelector("body").getAttribute("data-theme") == "dark",
    );
  }, [userData]);

  return (
    <svg
      className={className}
      strokeLinejoin="round"
      strokeLinecap="round"
      viewBox="-7 -7 112 114"
      width="70px"
      height="70px"
    >
      <motion.g
        id="body"
        variants={bodyVariants}
        animate={animation}
        style={{
          transition: "none",
        }}
      >
        <path
          strokeWidth="6.4"
          stroke="#333"
          d="M10 20 H 20 L 30 75 H 80 M 22 31 H 84 L 75 66 H 29"
          fill="none"
        />
        <g>
          <circle id="cir" r="5" cx="30" cy="85" fill="#333" />
          <use href="#cir" x="47" />
        </g>
        <motion.g
          variants={faceVariants}
          animate={animation}
          style={{
            transition: "none",
          }}
        >
          <g>
            <g>
              <use href="#cir" x="12" y="-41" />
              {invert ? (
                <circle r="1.5" cx="42" cy="44" fill="#aaa" />
              ) : (
                <circle r="1.5" cx="43.5" cy="42.5" fill="white" />
              )}
            </g>
            <g>
              <use href="#cir" x="33" y="-41" />
              {invert ? (
                <circle r="1.5" cx="63" cy="44" fill="#aaa" />
              ) : (
                <circle r="1.5" cx="64.5" cy="42.5" fill="white" />
              )}
            </g>
          </g>
          <motion.path
            id="tae"
            variants={mouthVariants}
            animate={animation}
            style={{
              transition: "none",
            }}
            fill="none"
            d="M 40 53 Q 52 63 64 53"
            strokeWidth="4.5"
            stroke="#333"
          />
        </motion.g>
      </motion.g>
    </svg>
  );
}
