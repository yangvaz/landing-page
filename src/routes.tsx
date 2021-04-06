import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import OtherPage from "./pages/OtherPage";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/OtherPage" component={OtherPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
