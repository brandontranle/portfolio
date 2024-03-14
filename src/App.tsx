import "./output.css";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MediaProvider } from "./util/MediaContext";

function App() {
  return (
    <MediaProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
      </Router>
    </MediaProvider>
  );
}

export default App;
