import Header from "./components/Header";
import classes from "./App.module.css";
import NewOpinion from "./components/NewOpinion";
import Opinions from "./components/Opinions";
import OpinionContextsProvider from "./store/OpinionContext";

const App = () => {
 
  return (
    <OpinionContextsProvider>
      <Header />
      <div className={classes.appContainer}>
        <div className={classes.appContent}>
          <NewOpinion />
          <Opinions />
        </div>
      </div>
    </OpinionContextsProvider>
  );
};

export default App;
