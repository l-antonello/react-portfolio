import './styled-components/App.css';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components//Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {
    return (
        <>
            {/* <Header /> */}
            <About />
            <Portfolio />
            <Contact />
            <Resume />
            <Footer />
        </>
    );
}

export default App;
