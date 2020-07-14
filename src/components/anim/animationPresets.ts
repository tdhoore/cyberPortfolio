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
