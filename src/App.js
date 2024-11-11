import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Banner } from './components/Banner';
import { Vision } from './components/Contact';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';
import { Skills } from './components/Skills';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Banner />
      <Skills />
      <Experience />
      <Vision />
      <Footer />
    </div>
  );
}

export default App;
