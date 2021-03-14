import { Suspense } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { defaultTheme } from '../../theme';
import NavBar from '../NavBar';
import { CssBaseline } from '@material-ui/core';
import routes from '../../routes';
import Home from '../Home';
//import MeetingProvider from '../../context/meeting/MeetingProvider';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 2,
    padding: theme.spacing(6),
  },
}));

function App() {
  const styles = useStyles();
  // defaultTheme will be used for private routes,
  // publicTheme for public routes.

  return (
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <div className={styles.root}>
            <CssBaseline />
            <NavBar />
            <div className={styles.content}>
              <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                  {routes.map((route, i) => (
                    <Route
                      key={i}
                      path={route.path}
                      exact={route.exact}
                      render={(props) => (
                        <route.component {...props} routes={route.routes} />
                      )}
                    />
                  ))}
                  <Route component={Home} />
                </Switch>
              </Suspense>
            </div>
          </div>
        </ThemeProvider>
      </BrowserRouter>
  );
}

export default App;
