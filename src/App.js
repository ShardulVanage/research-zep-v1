import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Features from './components/Feature';
import Testimonials from './components/Testomonial';
import Faq from './components/Faq';


function App() {
  return (
    <div className="App">
      
      <Hero/>
      <Partners/>
      <Features/>
      <Testimonials/>
      <Faq/>
     
    </div>
  );
}

export default App;
