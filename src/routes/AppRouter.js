import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HomePage from "../pages/HomePage"

const AppRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact={true} component={HomePage} />
            </Switch>
        </Router>
    )
}

export default AppRoutes
