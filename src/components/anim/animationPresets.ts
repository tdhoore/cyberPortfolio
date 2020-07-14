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

export const scaleLine = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
  },
  exit: {
    scale: 0,
  },
  transition: {
    duration: 0.3,
    delay: 0.3,
  },
};

export const fadeIn3D = {
  initial: {
    opacity: 0,
    x: "8px",
    y: "-8px",
    scale: 1.05,
  },
  animate: {
    opacity: 1,
    x: "0",
    y: "0",
    scale: 1,
  },
  exit: {
    opacity: 0,
    x: "8px",
    y: "-8px",
    scale: 1.05,
  },
  transition: {
    duration: 0.5,
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
    delay: 0.3,
  },
};
