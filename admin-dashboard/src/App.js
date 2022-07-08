import './App.css';
import Sidenav from './components/Sidenav/Sidenav';
import Topnav from './components/Topnav/Topnav';
import Charts from './components/Pages/Charts/Charts';
// import Referrals from './components/Pages/Referrals/Referrals';
// import Settings from './components/Pages/Settings/Settings';

function App() {
  return (
    <div className="App">
      <Sidenav />
      <Topnav />
      <Charts />
      {/* <Settings /> */}
      
    </div>
  );
}

export default App;
