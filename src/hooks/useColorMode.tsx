import { useContext } from "react";
import ColorModeContext from "../contexts/colorModeContext";

const useColorMode = () => useContext(ColorModeContext);

export default useColorMode;
