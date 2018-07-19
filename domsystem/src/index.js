import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/Header';
import About from './components/About';
import Activity from './components/Activity';
import Production from './components/Production';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

function NotFound() {
    return (
        <div>
            Page not found
        </div>
    )
}

ReactDOM.render(
    <Router>
        <Route exact path="/" component={App}>
          <Switch>
            <Route exact path="/#1" component={Header} />
            <Route exact path="/#2" component={About} />
            <Route exact path="/#3" component={Activity} />
            <Route exact path="/#4" component={Production} />
            <Route exact path="/#5" component={Portfolio} />
            <Route exact path="/#6" component={Blog} />
            <Route exact path="/#7" component={Contact} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Route>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
