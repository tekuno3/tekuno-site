import "@emotion/react";

declare module "@emotion/react" {
    interface Theme {
        colors: Colors,
    }
}

interface Colors {
    primary: string,
    secondary: string,
    fg: string,
    bg: string,
}