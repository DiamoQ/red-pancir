const pxToRem = (px) => {
    const htmlElementFontSize = parseInt(getComputedStyle(document.documentElement).fontSize);

    return px / htmlElementFontSize;
}

export default pxToRem;