import './App.scss';
import AboutMe from './components/AboutMe';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';

function App() {

  return (
    <div className="App">
      <Header/>
      <Banner/>
      <AboutMe/>
      <Skills/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;
