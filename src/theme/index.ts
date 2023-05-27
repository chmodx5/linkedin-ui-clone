import { createTheme, ThemeOptions } from "@mui/material/styles";
import { red } from "@mui/material/colors";

interface CustomPaletteOptions {
    primary: {
        main: string;
    };
    secondary: {
        main: string;
    };
    accent?: {
        blue: string;
        purple: string;
        red: string;
        orange: string;
    };
}

interface CustomThemeOptions extends ThemeOptions {
    palette: CustomPaletteOptions;
}

const theme = createTheme({
    palette: {
        primary: {
            main: "#0A66C2",
        },
        secondary: {
            main: "#057642",
        },
        accent: {
            blue: "#00A0DC",
            purple: "#8D6CAB",
            red: "#DD5143",
            orange: "#E68523",
        },
    },
} as CustomThemeOptions);

export default theme;
