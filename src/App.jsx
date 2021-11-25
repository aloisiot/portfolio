import './style/App.scss';
import AboutMe from './components/AboutMe';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import DropDownMenu from './components/DropDownMenu';

function App() {

  return (
    <div className="App">
      <DropDownMenu/>
      <main>
        <Header/>
        <Banner/>
        <AboutMe/>
        <Skills/>
        <Portfolio/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
