import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./Layout";
import NotFound from "./NotFound";
import Badges from "../pages/Badges";
import BadgeNew from "../pages/BadgeNew";
import BadgeEdit from "../pages/BadgeEdit";
import BadgeDetails from "../pages/BadgeDetails";
import PageAdvertisement from "../components/PageAdvertisement";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/badges" component={Badges}></Route>
          <Route exact path="/badges/new" component={BadgeNew}></Route>
          <Route
            exact
            path="/badges/:badgeId/edit"
            component={BadgeEdit}
          ></Route>
          <Route exact path="/badges/:badgeId" component={BadgeDetails}></Route>
          <Route
            exact
            path="/badges/test"
            component={PageAdvertisement}
          ></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
