import React from "react";
// import { PersistGate } from "redux-persist/integration/react";
// import { ThemeProvider } from "@material-ui/styles";
// import {MuiThemeProvider as ThemeProvider} from '@material-ui/core/styles';
import { store } from "@learn-nx/redux1";
import { Provider } from "react-redux";

export const wrapRootElement = ({ element, data }) => {
  return (
    <Provider store={store} loading={<h1>Loading</h1>}>
        {element}
    </Provider>
  );
};


/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it