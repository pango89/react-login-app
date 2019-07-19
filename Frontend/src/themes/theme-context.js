import { createMuiTheme } from "@material-ui/core/styles";

const defaultThemeStyles = {
  textFontSize: 12,
  overrides: {
    MuiSvgIcon: {
      root: {
        fontSize: 16
      }
    }
  }
};

/* Grid theme colors are placed in DataGrid -> styles.scss */
export const lightTheme = createMuiTheme({
  ...defaultThemeStyles,
  themeName: "light",
  AppBGColor: "#D9D9D9",
  HeaderBGColor: "#333333",
  HeaderSelectedText: "#05A792", // Also used for tab indicator
  HeaderDefaultTextColor: "#CCCCCC",
  ColumnHeaderTextColor: "#4D4D4D",
  ComponentHeader: "#ffffff",
  iconColor: "#666666",
  headerIconColor: "#CCCCCC",
  headerBorderColor: "#636363",
  MapDrawingColor: "#898989",
  gridIconBorderColor: "#929292",
  ModalBGColor: "#FFFFFF",
  TextColor: "#000000",
  scrollThumbColor: "#CCCCCC;",
  HighlightColor: "#CDEEEA",
  ErrorMessageColor: "#E2445C",
  tooltipBGColor: "#EFEFEE",
  tooltipText: "#3E3E3E",
  tooltipBorderColor: "#7D7D7E",
  menuHeaderBGColor: "#E6F6F4",
  gridTextColor: "#666666",
  rowViolationDotColor: "#D55A69",
  loadingBGColor: "#f7f7f7",
  gridBGColor: "#FFFFFF",
  terminalContentColor: "#000000",
  starIconColor: "#FFCA28",
  clickableLinkColor: "#B0E0E6",
  KPI: {
    KPISingleValue: "#00A7E1",
    KPILabel: "#666666",
    KPIPositive: "#1ADE67",
    KPINegative: "#E95970",
    KPIGoalValue: "#848484"
  },
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: "#05A792"
    },
    secondary: {
      main: "#000000"
    }
  },
  routeMapColorPalette: {
    IconsColors: [
      "#C41A76",
      "#7220C8",
      "#00636C",
      "#B22811",
      "#FF7800",
      "#2B20AA",
      "#3C3B3B",
      "#DA75AC",
      "#A223D5",
      "#30B845",
      "#ED5146",
      "#44A8EE",
      "#099B95",
      "#82493F",
      "#FF288A",
      "#44BE9E",
      "#086DA7",
      "#E5A70D"
    ],
    MarkerBorderColor: "#FFFFFF",
    MarkerTextColor: "#FFFFFF"
  },
  AnchorBGColor: "#CDCDCD",
  AnchorTextColor: "#666666",
  SelectedStopBorderColor: "#FF0000",
  ToggleIconColor: "#01917E"
});
