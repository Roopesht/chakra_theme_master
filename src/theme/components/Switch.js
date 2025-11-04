export const Switch = {
  baseStyle: (props) => ({
    track: {
      borderRadius: "full",
      transition: "all 0.2s ease",
      _checked: {
        bg: props.colorMode === "dark" ? "brand.500" : "brand.600",
      },
    },
    thumb: {
      bg: "white",
      borderRadius: "50%",
      transition: "transform 0.2s ease",
    },
  }),
};
