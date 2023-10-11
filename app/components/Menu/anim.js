const transition = { duration: 0.5, ease: [0.76, 0, 0.24, 1] };

export const menuHeight = {
  initial: {
    height: 0,
  },
  enter: {
    height: "100vh",
    transition,
  },
  exit: {
    height: 0,
    transition: { ...transition, duration: 0.3 },
  },
};

export const translate = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  enter: (i) => ({
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
      delay: i * 0.02 + 0.05,
      opacity: { duration: 0.3 },
    },
  }),
  exit: (i) => ({
    y: "100%",
    transition: { duration: 0.2, ease: [0.76, 0, 0.24, 1], delay: i * 0.01 },
  }),
};
