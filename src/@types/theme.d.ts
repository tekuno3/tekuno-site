import "@emotion/react";

declare module "@emotion/react" {
    interface Theme {
        colors: Colors,
        fonts: Fonts,
    }
}

interface Colors {
    primary: string,
    secondary: string,
    fg: string,
    bg: string,
}

interface Fonts {
    fontFamily: {
        primary: string,
    },
    size: {
        small: string,
        medium: string,
        large: string,
    }
}
