export const generateComponentVariants = (theme) => {
  const { variants } = theme.colors;
  const result = {};
  Object.keys(variants).forEach((v) => {
    result[v] = (props) => {
      const mode = props.colorMode === "dark" ? "dark" : "light";
      const bg = variants[v][mode];
      const color = mode === "dark" ? "white" : "black";
      return {
        bg,
        color,
        _hover: { opacity: 0.9, transform: "translateY(-1px)" },
      };
    };
  });
  return result;
};
