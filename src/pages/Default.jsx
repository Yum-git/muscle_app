import React from "react";
import {Switch, Route} from 'react-router-dom';

import Container from '@material-ui/core/Container';

// 共通部分
import Header from "pages/common/Header";
import Footer from "pages/common/Footer";

// Roting枠
import Main from "pages/routing/Main";
import Setting from "pages/routing/Setting";
import Pose from "pages/routing/Pose";
import Graph from "pages/routing/Graph";
import Calender from "./routing/Calender";

// 学習枠
import Train from "pages/routing/Train";

// scss
import "styles/common.scss";


const Default = () => {
    return (
        <div id="app">
            <header>
                <Header />
            </header>
            <main>
                <Container fixed>
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route path="/setting" component={Setting} />
                        <Route path="/pose" component={Pose} />
                        <Route path="/train" component={Train} />
                        <Route path="/graph" component={Graph} />
                        <Route path="/calender" component={Calender} />
                        <Route render={() => <p>not found!</p>} />
                    </Switch>
                </Container>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Default;