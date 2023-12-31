import { useSelector } from "react-redux";

import classes from "./App.module.css";
import Personal from "./components/Personal/Personal";
import Plans from "./components/Plans/Plans";
import Addons from "./components/Addons/Addons";
import Sidebar from "./components/Sidebar/Sidebar";
import Summary from "./components/Summary/Summary";
import ThankYou from "./components/ThankYou/ThankYou";
import ButtonNav from "./components/ButtonNav/ButtonNav";

function App() {
  const page = useSelector((state) => state.page.page);

  return (
    <div className={classes.App}>
      <Sidebar />
      <div className={classes.mainWrapper}>
        {page === 1 && <Personal />}
        {page === 2 && <Plans />}
        {page === 3 && <Addons />}
        {page === 4 && <Summary />}
        {page === 5 && <ThankYou />}
        {page !== 5 && <ButtonNav />}
      </div>
    </div>
  );
}

export default App;
