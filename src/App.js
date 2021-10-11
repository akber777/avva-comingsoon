import { Route, Switch } from "react-router";
import ComingSoon from "./pages/comingSoon/comingSoon";
import Title from "./components/helmet/helmet";

function App() {
  return (
    <div className="App">
      <Title>
        <link rel="icon" href={require("./assets/images/logo.svg").default} />
      </Title>
      <Switch>
        <Route path="" component={ComingSoon} />
      </Switch>
    </div>
  );
}

export default App;
