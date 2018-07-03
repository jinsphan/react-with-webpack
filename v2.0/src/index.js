import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/es/integration/react'
import createAppStore from './store';

import 'styles/main.scss';
import App from 'containers/app';


// Redux Settings
const { persistor, store } = createAppStore();

class AppProvider extends React.Component {
    constructor(props) {
        super(props);
    }

    onBeforeLift = () => {
        // take some action before the gate lifts
    }

    render() {
        return (
            <Provider store={store}>
                <PersistGate
                    loading={<div>Loading...</div>}
                    onBeforeLift={this.onBeforeLift}
                    persistor={persistor}
                >
                    <Router><App /></Router>
                </PersistGate>
            </Provider>
        );
    }
}

ReactDOM.render((
    <AppProvider />
), document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}