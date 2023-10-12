export const buttonVariants = {
  hidden: {
    opacity: 0,
    visibility: "hidden",
    scale: 0.8,
    transition: {
      duration: 0.15,
      visibility: {
        delay: 0.2,
        duration: 0,
      },
      scale: {
        duration: 0.2,
      },
    },
  },
  show: {
    opacity: 1,
    visibility: "visible",
    scale: 1,
    transition: {
      duration: 0.15,
      visibility: {
        delay: 0,
        duration: 0,
      },
      scale: {
        duration: 0.25,
      },
    },
  },
};
