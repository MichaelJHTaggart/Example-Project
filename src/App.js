import './App.css';
import Header from './components/Header';
import Routes from './Routes';
import axios from 'axios';


function App() {
  const [user, setUser] = useState()

  if (user) {
    return <div> {user.name} is logged in</div>
  }

  return (
    <div className="App">
      <Header />
      {Routes}
    </div>
  );
}

export default App;
