import Header from './com/layout/Header'
import Footer from './com/layout/Footer'
import {Switch, Route, Redirect} from 'react-router-dom'
import WorksPage from './com/pages/workspage'
import ServicesPage from './com/pages/servicespage'
import AboutPage from './com/pages/aboutpage'
import RequestPage from './com/pages/requestpage'
import { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <section className="app-wrapper">
                    <div className="app-content">
                        <Switch>
                            <Route exact path={'/works'}><WorksPage /></Route>
                            <Route exact path={'/services'}><ServicesPage /></Route>
                            <Route exact path={'/about'}><AboutPage /></Route>
                            <Route exact path={'/request'}><RequestPage /></Route>
                            <Route><Redirect to='/works'/></Route>
                        </Switch>
                    </div>
                </section>
                <Footer />
            </div>
        );
        // <Route exact path={'/'}><MainPage /></Route>
    }
}

export default App;
