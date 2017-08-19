import React from 'react'
import ReactDOM from 'react-dom'
import {store} from './store/persistStore'
import { RootRouter } from "./index-router"
import './style/main.scss'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'

class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
  };

  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <Provider store={this.props.store}>
        <RootRouter />
      </Provider>
    )
  }
}

// Render Setup
// ------------------------------------
const MOUNT_NODE = document.getElementById('root');

let renderApp = () => {
  ReactDOM.render(
    <App store={store} />,
    MOUNT_NODE
  );
};

// Development Tools
// ------------------------------------
if (__DEV__) {
  const renderError = (error) => {
    const RedBox = require('redbox-react').default;
    ReactDOM.render(<RedBox error={error} />, MOUNT_NODE);
  };

  const renderApp0 = renderApp;
  renderApp = () => {
    try {
      renderApp0();
    } catch (e) {
      console.error(e);
      renderError(e);
    }
  };

  if (module.hot) {
    // Setup hot module replacement
    module.hot.accept([
      './index-router',
      './index',
      ],
      () => setImmediate(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE);
        renderApp();
      })
    );
  }
}

// Let's Go!
// ------------------------------------
if (!__TEST__)
  renderApp();
