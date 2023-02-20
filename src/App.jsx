import React from 'react'
// import StarRating from './components/StarRating'
import Contact from './contents/Contact'
import Tp2 from './contents/tp2'
// import  Search from './components/Search'
// import ContactForm from './components/ContactForm'
// import Memo from './components/memo'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"

function Home() {
  return <h2>Acceuil</h2>
}

function About() {
  return <h2>A proposo</h2>
}

// function Tp2() {
//   return (
//     <div>
//       <h1>Beau petit chien #1</h1>
//       <a href="https://cdn.pixabay.com/photo/2015/11/17/13/13/bulldog-1047518_1280.jpg">
//         <img src="https://cdn.pixabay.com/photo/2015/11/17/13/13/bulldog-1047518_1280.jpg" alt="Picture description" style={{width: '100%', maxWidth: '500px', borderRadius: '5px' }} />
//       </a>
//       <h1>Beau petit chien #2</h1>
//       <a href="https://cdn.pixabay.com/photo/2016/07/15/15/55/dachshund-1519374_1280.jpg">
//         <img src="https://cdn.pixabay.com/photo/2016/07/15/15/55/dachshund-1519374_1280.jpg" alt="Picture description" style={{width: '100%', maxWidth: '500px', borderRadius: '5px' }} />
//       </a>
//       <h1>Beau petit chien #3</h1>
//       <a href="https://cdn.pixabay.com/photo/2016/03/27/21/16/pet-1284307_1280.jpg">
//         <img src="https://cdn.pixabay.com/photo/2016/03/27/21/16/pet-1284307_1280.jpg" alt="Picture description" style={{width: '100%', maxWidth: '500px', borderRadius: '5px' }} />
//       </a>
//       <h1>Beau petit chien #4</h1>
//       <a href="	https://cdn.pixabay.com/photo/2014/08/21/14/51/dog-423398_1280.jpg">
//         <img src="https://cdn.pixabay.com/photo/2014/08/21/14/51/dog-423398_1280.jpg" alt="Picture description" style={{width: '100%', maxWidth: '500px', borderRadius: '5px' }} />
//       </a>
//     </div>
//   );
// }


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul type="square">
          
            <li>
              <Link to="/tp2">tp2</Link>
            </li>

            <li>
              <Link to="/apropos">A propos</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/">Accueil</Link>
            </li>
          </ul>
        </nav>
        {/* <div><Search/></div> */}
        {/* <div><StarRating rating={3}/></div> */}
        {/* <div><ContactForm/></div> */}
        {/* <div><Memo/></div> */}

        <Routes>
          <Route path="/tp2" element={<Tp2 />} />
          <Route path="/apropos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
