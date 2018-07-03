import React from 'react';
import { Search, Info } from './user';
import { Route, Switch } from "react-router-dom";

// Components
import {
    Header
} from "conponents/layouts";

class App extends React.Component {
    render() {
        return (
            <div className="root">
                <div className="container">
                    <Header />
                    <Switch>
                        <Route exact path="/info" component={Info} />
                        <Route path="/" component={Search} />
                    </Switch>
                    <footer>
                        <img src="assets/images/amazon.png" alt="" />
                    </footer>
                </div>
            </div>
        );
    }
}

export default App;
