// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import About from './pages/AboutUs';
import Customer from './pages/Customer';
import Login from './pages/Login';
import MyNavsScroll from './component/MyNavsScroll';
import TopArtist from './pages/TopArtist';
import TopArtwork from './pages/TopArtwork';

function App() {
  return (
    <div>
     <MyNavsScroll/>
      <section id='home'><Home/></section>
      <section id='about'><About/></section>
      <section id='customer'><Customer/></section>
      <section id='login'><Login/></section>
      <section id='topartist'><TopArtist/></section>
      <section id='toparwork'><TopArtwork/></section>
    </div>
  );
}

export default App;
