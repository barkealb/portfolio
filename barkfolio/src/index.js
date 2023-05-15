import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import { getMaxListeners } from "process";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();


