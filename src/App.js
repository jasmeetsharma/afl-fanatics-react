import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MainContainer from './Components/MainContainer';
import { BrowserRouter as Router } from 'react-router-dom'
import '../src/assets/icofont/icofont.min.css'

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
          <MainContainer />
          <Footer />
        </Router>
    </div>
  );
}

export default App;
