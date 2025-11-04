export const Button = {
  baseStyle: {
    borderRadius: "md",
    fontWeight: "semibold",
    transition: "all 0.2s ease",
    _focusVisible: {
      outline: "2px solid",
      outlineColor: "brand.500",
      outlineOffset: "2px",
    },
  },
  defaultProps: {
    variant: "accent",
    size: "md",
  },
};
