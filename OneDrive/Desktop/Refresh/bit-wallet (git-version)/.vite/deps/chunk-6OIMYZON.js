import {
  requirePropFactory_default
} from "./chunk-O3W7XU2M.js";
import {
  useDefaultProps
} from "./chunk-F6GTIXEO.js";
import {
  useTheme
} from "./chunk-DHK2N5U5.js";
import {
  extendSxProp,
  handleBreakpoints,
  resolveBreakpointValues,
  styled_default
} from "./chunk-B3LZYEJY.js";
import {
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  require_jsx_runtime,
  require_prop_types
} from "./chunk-6LXTNIWL.js";
import {
  clsx_default
} from "./chunk-2KHBIA62.js";
import {
  require_react
} from "./chunk-TWJRYSII.js";
import {
  __toESM
} from "./chunk-DC5AMYBS.js";

// node_modules/@mui/material/Grid/Grid.js
var React2 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/@mui/material/Grid/GridContext.js
var React = __toESM(require_react());
var GridContext = React.createContext();
if (true) {
  GridContext.displayName = "GridContext";
}
var GridContext_default = GridContext;

// node_modules/@mui/material/Grid/gridClasses.js
function getGridUtilityClass(slot) {
  return generateUtilityClass("MuiGrid", slot);
}
var SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var DIRECTIONS = ["column-reverse", "column", "row-reverse", "row"];
var WRAPS = ["nowrap", "wrap-reverse", "wrap"];
var GRID_SIZES = ["auto", true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var gridClasses = generateUtilityClasses("MuiGrid", [
  "root",
  "container",
  "item",
  "zeroMinWidth",
  // spacings
  ...SPACINGS.map((spacing) => `spacing-xs-${spacing}`),
  // direction values
  ...DIRECTIONS.map((direction) => `direction-xs-${direction}`),
  // wrap values
  ...WRAPS.map((wrap) => `wrap-xs-${wrap}`),
  // grid sizes for all breakpoints
  ...GRID_SIZES.map((size) => `grid-xs-${size}`),
  ...GRID_SIZES.map((size) => `grid-sm-${size}`),
  ...GRID_SIZES.map((size) => `grid-md-${size}`),
  ...GRID_SIZES.map((size) => `grid-lg-${size}`),
  ...GRID_SIZES.map((size) => `grid-xl-${size}`)
]);
var gridClasses_default = gridClasses;

// node_modules/@mui/material/Grid/Grid.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
function generateGrid({
  theme,
  ownerState
}) {
  let size;
  return theme.breakpoints.keys.reduce((globalStyles, breakpoint) => {
    let styles = {};
    if (ownerState[breakpoint]) {
      size = ownerState[breakpoint];
    }
    if (!size) {
      return globalStyles;
    }
    if (size === true) {
      styles = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: "100%"
      };
    } else if (size === "auto") {
      styles = {
        flexBasis: "auto",
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: "none",
        width: "auto"
      };
    } else {
      const columnsBreakpointValues = resolveBreakpointValues({
        values: ownerState.columns,
        breakpoints: theme.breakpoints.values
      });
      const columnValue = typeof columnsBreakpointValues === "object" ? columnsBreakpointValues[breakpoint] : columnsBreakpointValues;
      if (columnValue === void 0 || columnValue === null) {
        return globalStyles;
      }
      const width = `${Math.round(size / columnValue * 1e8) / 1e6}%`;
      let more = {};
      if (ownerState.container && ownerState.item && ownerState.columnSpacing !== 0) {
        const themeSpacing = theme.spacing(ownerState.columnSpacing);
        if (themeSpacing !== "0px") {
          const fullWidth = `calc(${width} + ${themeSpacing})`;
          more = {
            flexBasis: fullWidth,
            maxWidth: fullWidth
          };
        }
      }
      styles = {
        flexBasis: width,
        flexGrow: 0,
        maxWidth: width,
        ...more
      };
    }
    if (theme.breakpoints.values[breakpoint] === 0) {
      Object.assign(globalStyles, styles);
    } else {
      globalStyles[theme.breakpoints.up(breakpoint)] = styles;
    }
    return globalStyles;
  }, {});
}
function generateDirection({
  theme,
  ownerState
}) {
  const directionValues = resolveBreakpointValues({
    values: ownerState.direction,
    breakpoints: theme.breakpoints.values
  });
  return handleBreakpoints({
    theme
  }, directionValues, (propValue) => {
    const output = {
      flexDirection: propValue
    };
    if (propValue.startsWith("column")) {
      output[`& > .${gridClasses_default.item}`] = {
        maxWidth: "none"
      };
    }
    return output;
  });
}
function extractZeroValueBreakpointKeys({
  breakpoints,
  values
}) {
  let nonZeroKey = "";
  Object.keys(values).forEach((key) => {
    if (nonZeroKey !== "") {
      return;
    }
    if (values[key] !== 0) {
      nonZeroKey = key;
    }
  });
  const sortedBreakpointKeysByValue = Object.keys(breakpoints).sort((a, b) => {
    return breakpoints[a] - breakpoints[b];
  });
  return sortedBreakpointKeysByValue.slice(0, sortedBreakpointKeysByValue.indexOf(nonZeroKey));
}
function generateRowGap({
  theme,
  ownerState
}) {
  const {
    container,
    rowSpacing
  } = ownerState;
  let styles = {};
  if (container && rowSpacing !== 0) {
    const rowSpacingValues = resolveBreakpointValues({
      values: rowSpacing,
      breakpoints: theme.breakpoints.values
    });
    let zeroValueBreakpointKeys;
    if (typeof rowSpacingValues === "object") {
      zeroValueBreakpointKeys = extractZeroValueBreakpointKeys({
        breakpoints: theme.breakpoints.values,
        values: rowSpacingValues
      });
    }
    styles = handleBreakpoints({
      theme
    }, rowSpacingValues, (propValue, breakpoint) => {
      const themeSpacing = theme.spacing(propValue);
      if (themeSpacing !== "0px") {
        return {
          marginTop: `calc(-1 * ${themeSpacing})`,
          [`& > .${gridClasses_default.item}`]: {
            paddingTop: themeSpacing
          }
        };
      }
      if (zeroValueBreakpointKeys == null ? void 0 : zeroValueBreakpointKeys.includes(breakpoint)) {
        return {};
      }
      return {
        marginTop: 0,
        [`& > .${gridClasses_default.item}`]: {
          paddingTop: 0
        }
      };
    });
  }
  return styles;
}
function generateColumnGap({
  theme,
  ownerState
}) {
  const {
    container,
    columnSpacing
  } = ownerState;
  let styles = {};
  if (container && columnSpacing !== 0) {
    const columnSpacingValues = resolveBreakpointValues({
      values: columnSpacing,
      breakpoints: theme.breakpoints.values
    });
    let zeroValueBreakpointKeys;
    if (typeof columnSpacingValues === "object") {
      zeroValueBreakpointKeys = extractZeroValueBreakpointKeys({
        breakpoints: theme.breakpoints.values,
        values: columnSpacingValues
      });
    }
    styles = handleBreakpoints({
      theme
    }, columnSpacingValues, (propValue, breakpoint) => {
      const themeSpacing = theme.spacing(propValue);
      if (themeSpacing !== "0px") {
        const negativeValue = `calc(-1 * ${themeSpacing})`;
        return {
          width: `calc(100% + ${themeSpacing})`,
          marginLeft: negativeValue,
          [`& > .${gridClasses_default.item}`]: {
            paddingLeft: themeSpacing
          }
        };
      }
      if (zeroValueBreakpointKeys == null ? void 0 : zeroValueBreakpointKeys.includes(breakpoint)) {
        return {};
      }
      return {
        width: "100%",
        marginLeft: 0,
        [`& > .${gridClasses_default.item}`]: {
          paddingLeft: 0
        }
      };
    });
  }
  return styles;
}
function resolveSpacingStyles(spacing, breakpoints, styles = {}) {
  if (!spacing || spacing <= 0) {
    return [];
  }
  if (typeof spacing === "string" && !Number.isNaN(Number(spacing)) || typeof spacing === "number") {
    return [styles[`spacing-xs-${String(spacing)}`]];
  }
  const spacingStyles = [];
  breakpoints.forEach((breakpoint) => {
    const value = spacing[breakpoint];
    if (Number(value) > 0) {
      spacingStyles.push(styles[`spacing-${breakpoint}-${String(value)}`]);
    }
  });
  return spacingStyles;
}
var GridRoot = styled_default("div", {
  name: "MuiGrid",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    const {
      container,
      direction,
      item,
      spacing,
      wrap,
      zeroMinWidth,
      breakpoints
    } = ownerState;
    let spacingStyles = [];
    if (container) {
      spacingStyles = resolveSpacingStyles(spacing, breakpoints, styles);
    }
    const breakpointsStyles = [];
    breakpoints.forEach((breakpoint) => {
      const value = ownerState[breakpoint];
      if (value) {
        breakpointsStyles.push(styles[`grid-${breakpoint}-${String(value)}`]);
      }
    });
    return [styles.root, container && styles.container, item && styles.item, zeroMinWidth && styles.zeroMinWidth, ...spacingStyles, direction !== "row" && styles[`direction-xs-${String(direction)}`], wrap !== "wrap" && styles[`wrap-xs-${String(wrap)}`], ...breakpointsStyles];
  }
})(
  // FIXME(romgrk): Can't use memoTheme here
  ({
    ownerState
  }) => ({
    boxSizing: "border-box",
    ...ownerState.container && {
      display: "flex",
      flexWrap: "wrap",
      width: "100%"
    },
    ...ownerState.item && {
      margin: 0
      // For instance, it's useful when used with a `figure` element.
    },
    ...ownerState.zeroMinWidth && {
      minWidth: 0
    },
    ...ownerState.wrap !== "wrap" && {
      flexWrap: ownerState.wrap
    }
  }),
  generateDirection,
  generateRowGap,
  generateColumnGap,
  generateGrid
);
function resolveSpacingClasses(spacing, breakpoints) {
  if (!spacing || spacing <= 0) {
    return [];
  }
  if (typeof spacing === "string" && !Number.isNaN(Number(spacing)) || typeof spacing === "number") {
    return [`spacing-xs-${String(spacing)}`];
  }
  const classes = [];
  breakpoints.forEach((breakpoint) => {
    const value = spacing[breakpoint];
    if (Number(value) > 0) {
      const className = `spacing-${breakpoint}-${String(value)}`;
      classes.push(className);
    }
  });
  return classes;
}
var useUtilityClasses = (ownerState) => {
  const {
    classes,
    container,
    direction,
    item,
    spacing,
    wrap,
    zeroMinWidth,
    breakpoints
  } = ownerState;
  let spacingClasses = [];
  if (container) {
    spacingClasses = resolveSpacingClasses(spacing, breakpoints);
  }
  const breakpointsClasses = [];
  breakpoints.forEach((breakpoint) => {
    const value = ownerState[breakpoint];
    if (value) {
      breakpointsClasses.push(`grid-${breakpoint}-${String(value)}`);
    }
  });
  const slots = {
    root: ["root", container && "container", item && "item", zeroMinWidth && "zeroMinWidth", ...spacingClasses, direction !== "row" && `direction-xs-${String(direction)}`, wrap !== "wrap" && `wrap-xs-${String(wrap)}`, ...breakpointsClasses]
  };
  return composeClasses(slots, getGridUtilityClass, classes);
};
var Grid = React2.forwardRef(function Grid2(inProps, ref) {
  const themeProps = useDefaultProps({
    props: inProps,
    name: "MuiGrid"
  });
  const {
    breakpoints
  } = useTheme();
  const props = extendSxProp(themeProps);
  const {
    className,
    columns: columnsProp,
    columnSpacing: columnSpacingProp,
    component = "div",
    container = false,
    direction = "row",
    item = false,
    rowSpacing: rowSpacingProp,
    spacing = 0,
    wrap = "wrap",
    zeroMinWidth = false,
    ...other
  } = props;
  const rowSpacing = rowSpacingProp || spacing;
  const columnSpacing = columnSpacingProp || spacing;
  const columnsContext = React2.useContext(GridContext_default);
  const columns = container ? columnsProp || 12 : columnsContext;
  const breakpointsValues = {};
  const otherFiltered = {
    ...other
  };
  breakpoints.keys.forEach((breakpoint) => {
    if (other[breakpoint] != null) {
      breakpointsValues[breakpoint] = other[breakpoint];
      delete otherFiltered[breakpoint];
    }
  });
  const ownerState = {
    ...props,
    columns,
    container,
    direction,
    item,
    rowSpacing,
    columnSpacing,
    wrap,
    zeroMinWidth,
    spacing,
    ...breakpointsValues,
    breakpoints: breakpoints.keys
  };
  const classes = useUtilityClasses(ownerState);
  return (0, import_jsx_runtime.jsx)(GridContext_default.Provider, {
    value: columns,
    children: (0, import_jsx_runtime.jsx)(GridRoot, {
      ownerState,
      className: clsx_default(classes.root, className),
      as: component,
      ref,
      ...otherFiltered
    })
  });
});
true ? Grid.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types.default.object,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * The number of columns.
   * @default 12
   */
  columns: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.number), import_prop_types.default.number, import_prop_types.default.object]),
  /**
   * Defines the horizontal space between the type `item` components.
   * It overrides the value of the `spacing` prop.
   */
  columnSpacing: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string])), import_prop_types.default.number, import_prop_types.default.object, import_prop_types.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * If `true`, the component will have the flex *container* behavior.
   * You should be wrapping *items* with a *container*.
   * @default false
   */
  container: import_prop_types.default.bool,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'row'
   */
  direction: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["column-reverse", "column", "row-reverse", "row"]), import_prop_types.default.arrayOf(import_prop_types.default.oneOf(["column-reverse", "column", "row-reverse", "row"])), import_prop_types.default.object]),
  /**
   * If `true`, the component will have the flex *item* behavior.
   * You should be wrapping *items* with a *container*.
   * @default false
   */
  item: import_prop_types.default.bool,
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `lg` breakpoint and wider screens if not overridden.
   * @default false
   */
  lg: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["auto"]), import_prop_types.default.number, import_prop_types.default.bool]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `md` breakpoint and wider screens if not overridden.
   * @default false
   */
  md: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["auto"]), import_prop_types.default.number, import_prop_types.default.bool]),
  /**
   * Defines the vertical space between the type `item` components.
   * It overrides the value of the `spacing` prop.
   */
  rowSpacing: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string])), import_prop_types.default.number, import_prop_types.default.object, import_prop_types.default.string]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `sm` breakpoint and wider screens if not overridden.
   * @default false
   */
  sm: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["auto"]), import_prop_types.default.number, import_prop_types.default.bool]),
  /**
   * Defines the space between the type `item` components.
   * It can only be used on a type `container` component.
   * @default 0
   */
  spacing: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string])), import_prop_types.default.number, import_prop_types.default.object, import_prop_types.default.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
  /**
   * Defines the `flex-wrap` style property.
   * It's applied for all screen sizes.
   * @default 'wrap'
   */
  wrap: import_prop_types.default.oneOf(["nowrap", "wrap-reverse", "wrap"]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `xl` breakpoint and wider screens if not overridden.
   * @default false
   */
  xl: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["auto"]), import_prop_types.default.number, import_prop_types.default.bool]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for all the screen sizes with the lowest priority.
   * @default false
   */
  xs: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["auto"]), import_prop_types.default.number, import_prop_types.default.bool]),
  /**
   * If `true`, it sets `min-width: 0` on the item.
   * Refer to the limitations section of the documentation to better understand the use case.
   * @default false
   */
  zeroMinWidth: import_prop_types.default.bool
} : void 0;
if (true) {
  const requireProp = requirePropFactory_default("Grid", Grid);
  Grid["propTypes"] = {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    ...Grid.propTypes,
    direction: requireProp("container"),
    lg: requireProp("item"),
    md: requireProp("item"),
    sm: requireProp("item"),
    spacing: requireProp("container"),
    wrap: requireProp("container"),
    xs: requireProp("item"),
    zeroMinWidth: requireProp("item")
  };
}
var Grid_default = Grid;

export {
  getGridUtilityClass,
  gridClasses_default,
  Grid_default
};
//# sourceMappingURL=chunk-6OIMYZON.js.map
