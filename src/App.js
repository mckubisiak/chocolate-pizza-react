import './App.css';
import Header from './Header.js';
import Recipe from './Recipe.js';
import Footer from './Footer.js';
import ImageSection from './ImageSection.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <ImageSection />
        <Recipe />
        <Footer />
      
      </header>
    </div>
  );
}

export default App;
