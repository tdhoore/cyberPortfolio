export const fadeInFlicker = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: [0, 0.8, 0, 0.3, 0.8, 1],
  },
  exit: {
    opacity: 0,
  },
  transition: {
    duration: 0.5,
    times: [0, 0.15, 0.3, 0.45, 0.6, 1],
    delay: 0.3,
  },
};

export const panelAnim = {
  initial: {
    x: -50,
    y: -50,
    scale: 1.2,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
  },
  exit: {
    x: 50,
    y: 50,
    scale: 0.8,
    opacity: 0,
    transition: {
      delay: 0,
      duration: 0.3,
    },
  },
  transition: {
    duration: 0.3,
    delay: 0.3,
    type: "spring",
    stiffness: 700,
    damping: 60,
  },
};

export const fadeInFlickerScale = {
  initial: {
    opacity: 0,
    scale: 1.05,
    filter:
      "drop-shadow(4px 4px 0 rgba(96, 202, 224, 0.5)) drop-shadow(-4px -4px 0 rgba(255, 68, 180, 0.5)",
  },
  animate: {
    opacity: [0, 0.8, 0, 0.3, 0.8, 1],
    scale: 1,
    filter: [
      "drop-shadow(4px 4px 0 rgba(96, 202, 224, 0.5)) drop-shadow(-4px -4px 0 rgba(255, 68, 180, 0.5)",
      "drop-shadow(12px 12px 0 rgba(96, 202, 224, 0.5)) drop-shadow(-12px -12px 0 rgba(255, 68, 180, 0.5)",
      "drop-shadow(12px 12px 0 rgba(96, 202, 224, 0.5)) drop-shadow(-12px -12px 0 rgba(255, 68, 180, 0.5)",
      "drop-shadow(8px 8px 0 rgba(96, 202, 224, 0.5)) drop-shadow(-8px -8px 0 rgba(255, 68, 180, 0.5)",
      "drop-shadow(0 0 0 rgba(96, 202, 224, 0.5)) drop-shadow(0 0 0 rgba(255, 68, 180, 0.5)",
      "drop-shadow(0 0 0 rgba(96, 202, 224, 0.5)) drop-shadow(0 0 0 rgba(255, 68, 180, 0.5)",
    ],
  },
  exit: {
    opacity: 0,
    scale: 1.05,
    filter:
      "drop-shadow(4px 4px 0 rgba(96, 202, 224, 0.5)) drop-shadow(-4px -4px 0 rgba(255, 68, 180, 0.5)",
  },
  transition: {
    duration: 0.5,
    times: [0, 0.15, 0.3, 0.45, 0.6, 1],
    delay: 0.3,
  },
};

export const fadeInFlickerHalf = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: [0, 0.4, 0, 0.2, 0.4, 0.6],
  },
  exit: {
    opacity: 0,
  },
  transition: {
    duration: 0.5,
    times: [0, 0.15, 0.3, 0.45, 0.6, 1],
    delay: 0.3,
  },
};

export const arrow = {
  initial: {
    opacity: 0,
    scale: 0,
    rotate: 45,
  },
  animate: {
    opacity: [0, 0.8, 0, 0.3, 0.8, 1],
    scale: 1,
    rotate: 45,
  },
  exit: {
    opacity: 0,
    scale: 0,
    rotate: 45,
  },
  transition: {
    duration: 0.3,
    times: [0, 0.15, 0.3, 0.45, 0.6, 1],
    delay: 0.3,
  },
};

export const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
  transition: {
    duration: 0.5,
  },
};

export const workTransitionIn = {
  initial: {
    opacity: 0,
    x: -30,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
  },
  transition: {
    duration: 0.3,
    delay: 0.3,
  },
};

export const workTransitionExit = {
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: 30,
    transition: {
      duration: 0.2,
      delay: 0.3,
    },
  },
};

export const fade = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
  transition: {
    duration: 0.2,
  },
};

export const updateWork = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: 20,
  },
  transition: {
    duration: 0.2,
  },
};
