import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
//=========== Components ==================

import Header from './Components/Header';
import Footer from './Components/Footer';

//============== Pages ===================

import Home from './Pages/Home';
import Users from './Pages/Popular';
import Contact from './Pages/Contact';
import CreateResume from './Pages/CreateResume';
import Resume from './Pages/Resume';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="App" style={{ minHeight: "82vh" }}  >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/popular" element={<Users />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/createResume' element={ <CreateResume /> } />
            <Route path='/resume' element={ <Resume /> } />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
