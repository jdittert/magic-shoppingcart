import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Store } from './pages/Store'
import { Navbar } from './pages/Navbar';
import { Footer } from './components/Footer';
import { Container } from 'react-bootstrap';
import { Contact } from './pages/Contact';
import { Content } from './pages/Content';
import { Events } from './pages/Events';
import { Ultra } from './pages/Ultra';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import { ArticleContentUltra } from './pages/ArticleContentUltra';
import { ArticleContentFree } from './pages/ArticleContentFree';
import './styles/custom.css'
import { Attributions } from './pages/Attributions';

function App() {
  return (
    <>
    <ShoppingCartProvider>
    <Navbar />
    <Container>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Store />} />
        <Route path='/content' element={<Content />} />
        <Route path='/article-ultra' element={<ArticleContentUltra />} />
        <Route path='/article-free/:id' element={<ArticleContentFree />} />
        <Route path='/events' element={<Events />} />
        <Route path='/ultra' element={<Ultra />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/attributions' element={<Attributions />} />
      </Routes>
    </Container>
    <Footer />
    </ShoppingCartProvider>
    </>
  )
}

export default App