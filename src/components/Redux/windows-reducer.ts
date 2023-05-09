import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
  expandedWindows: Array<any>;
  // [
  //   {
  //     id: "string",
  //     props: { type: "string", name: "string" },
  //     clusterName: "chat|board",
  //   },
  // ],
  windowsOptions: Array<any>;
  // [
  //   {
  //     id: "string",
  //     options: {
  //       width: "number",
  //       height: "number",
  //       top: "number",
  //       left: "number",
  //       fullscreen: "bool",
  //       minimized: "bool",
  //     },
  //   },
  // ],
};

const initialState: InitialStateType = {
  expandedWindows: [],
  windowsOptions: [],
};

const windowsSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    openWindow: (state, action: PayloadAction<any>) => {
      const windowId = action.payload.windowId;

      const expandedWindows = state.expandedWindows;
      const windowsOptions = state.windowsOptions;

      const filteredExpandedWindows = expandedWindows
        .filter((window) => window.id !== windowId)
        .concat({
          id: windowId,
          props: { ...action.payload.props },
          clusterName: action.payload.clusterName,
        });

      const filteredWindowsOptions = windowsOptions
        .filter((window) => window.id !== windowId)
        .concat({
          id: windowId,
          options: { ...action.payload?.windowOptions } || {},
        });

      [state.expandedWindows, state.windowsOptions] = [
        filteredExpandedWindows,
        filteredWindowsOptions,
      ];
    },
    closeWindow: (state, action: PayloadAction<any>) => {
      const windowId = action.payload.windowId;

      const expandedWindows = state.expandedWindows;
      const windowsOptions = state.windowsOptions;

      const filteredExpandedWindows = expandedWindows.filter(
        (window) => window.id !== windowId
      );

      const filteredWindowsOptions = windowsOptions.filter(
        (window) => window.id !== windowId
      );

      [state.expandedWindows, state.windowsOptions] = [
        filteredExpandedWindows,
        filteredWindowsOptions,
      ];
    },
    toFrontWindow: (state, action: PayloadAction<any>) => {
      const windowId = action.payload.windowId;

      const expandedWindows = state.expandedWindows;
      const windowsOptions = state.windowsOptions;

      const filteredExpandedWindows = state.expandedWindows
        .filter((window) => {
          return window.id !== windowId;
        })
        .concat(expandedWindows.find((window) => window.id === windowId));

      const filteredWindowsOptions = windowsOptions.map((window) => {
        if (window.id === windowId) {
          return {
            ...window,
            options: {
              ...window.options,
              minimized: false,
            },
          };
        }
        return window;
      });

      [state.expandedWindows, state.windowsOptions] = [
        filteredExpandedWindows,
        filteredWindowsOptions,
      ];
    },
    minimizeWindow: (state, action: PayloadAction<any>) => {
      const windowId = action.payload.windowId;

      const expandedWindows = state.expandedWindows;
      const windowsOptions = state.windowsOptions;

      const filteredExpandedWindows = [
        expandedWindows.find((window) => window.id === windowId),
        ...expandedWindows.filter((window) => window.id !== windowId),
      ];

      const filteredWindowsOptions = windowsOptions.map((window) => {
        if (window.id === windowId) {
          return {
            ...window,
            options: {
              ...window.options,
              minimized: !window.options.minimized,
            },
          };
        }
        return window;
      });

      [state.expandedWindows, state.windowsOptions] = [
        filteredExpandedWindows,
        filteredWindowsOptions,
      ];
    },
    fullscreenWindow: (state, action: PayloadAction<any>) => {
      const windowId = action.payload.windowId;

      const windowsOptions = state.windowsOptions;

      const filteredWindowsOptions = windowsOptions.map((windowElem) => {
        if (windowElem.id === windowId) {
          return {
            ...windowElem,
            options: {
              ...windowElem.options,
              fullscreen: !windowElem.options.fullscreen,
            },
          };
        }
        return windowElem;
      });
      console.log("wefdsgf", filteredWindowsOptions);

      state.windowsOptions = filteredWindowsOptions;
    },
  },
});

export const {
  openWindow,
  closeWindow,
  toFrontWindow,
  minimizeWindow,
  fullscreenWindow,
} = windowsSlice.actions;

export default windowsSlice.reducer;
