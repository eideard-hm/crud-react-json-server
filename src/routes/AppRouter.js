import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "../components/Header"
import HomePage from "../pages/HomePage"
import NewMotorcyclePage from "../pages/NewMotorcyclePage"

const AppRoutes = () => {
    return (
        <Router>
            <Header brand="React App" />
            <Switch>
                <Route path="/" exact={true} component={HomePage} />
                <Route path="/new" exact={true} component={NewMotorcyclePage} />
            </Switch>
        </Router>
    )
}

export default AppRoutes
