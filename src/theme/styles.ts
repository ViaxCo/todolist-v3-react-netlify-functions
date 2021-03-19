import colors from "./foundations/colors";
const { main, secondary, viaxco } = colors;

type Props = {
  theme: object;
  colorMode: string;
};

const styles = {
  global: (props: Props) => ({
    //   My resets
    "*, *::before, *::after": {
      boxSizing: "border-box",
    },
    "*": {
      margin: "0",
      padding: "0",
      WebkitTapHighlightColor: "transparent",
    },
    // styles for the `html`
    html: {
      minWidth: "fit-content",
    },
    // styles for the `body`
    body: {
      bg: secondary.blue,
      bgImage:
        props.colorMode === "light"
          ? `-webkit-linear-gradient(65deg, ${main.blue} 50%, ${secondary.blue} 50%)`
          : `-webkit-linear-gradient(65deg, ${main.blue} 50%, ${viaxco[300]} 50%)`,
      bgRepeat: "no-repeat",
      minHeight: { base: "100vh", md: "1000px" },
      minWidth: "fit-content",
    },
    ".container": {
      minHeight: { base: "100vh", md: "1000px" },
    },
    ".blender": {
      width: "2.5rem",
      height: "2.5rem",
      position: "absolute",
      borderRadius: "50%",
      zIndex: -10,
      pointerEvents: "none",
      background: `${main.blue}`,
    },
    ".main": {
      top: "10.2rem",
      right: "calc(50% - 5.55rem)",
      zIndex: 10,
    },
    ".about": {
      top: "7.95rem",
      right: "calc(50% - 1.3rem)",
      zIndex: 10,
    },
    ".box": {
      maxW: { base: "320px", md: "400px" },
      m: "50px auto",
      borderRadius: "5px",
    },
  }),
};

export default styles;
