import React from "react";
import { Router, Switch, Route } from "react-router-dom";

import HomePage from "pages/HomePage";
import GamePage from "pages/GamePage";

import { history } from "utils/history";

function App() {
    return (
        <div className="App">
            <Router history={history}>
                <Switch>
                    <Route path="/game" component={GamePage} />
                    <Route path="/" component={HomePage} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
