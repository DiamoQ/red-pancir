import pxToRem from "@/utils/pxToRem";

const MatchMedia = {
    mobile: window.matchMedia(`(width <= ${pxToRem(768.97)}rem)`),
}

export default MatchMedia;