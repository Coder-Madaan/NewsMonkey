import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter } from 'react-router-dom';
import { Route,Routes } from 'react-router';

// export default class App extends Component {
 
//   render() {
//     return (
//       <BrowserRouter>
//       <div>
//         <Navbar/>
//         <Routes>
//             <Route exact path="/general"><News pageSize={8} country="in" category="general"/></Route>
//             <Route exact path="/health"><News pageSize={8} country="in" category="health"/></Route>
//             <Route exact path="/entertainment"><News pageSize={8} country="in" category="entertainment"/></Route>
//             <Route exact path="/health"><News pageSize={8} country="in" category="health"/></Route>
//             <Route exact path="/business"><News pageSize={8} country="in" category="business"/></Route>
//             <Route exact path="/science"><News pageSize={8} country="in" category="science"/></Route>
//             <Route exact path="/sports"><News pageSize={8} country="in" category="sports"/></Route>
        
//         </Routes>
//       </div>
//       </BrowserRouter>
//     )
//   }
// }

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<News key='general' pageSize={6} country='in' category='general' />}></Route>
            <Route exact path='/entertainment' element={<News key='entertainment' pageSize={6} country='in' category='entertainment' />}></Route>
            <Route exact path='/health' element={<News key='health' pageSize={6} country='in' category='health' />}></Route>
            <Route exact path='/science' element={<News key='science' pageSize={6} country='in' category='science' />}></Route>
            <Route exact path='/sports' element={<News key='sports' pageSize={6} country='in' category='sports' />}></Route>
            <Route exact path='/technology' element={<News key='technology' pageSize={6} country='in' category='technology' />}></Route>
            <Route exact path='/business' element={<News key='business' pageSize={6} country='in' category='business' />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}






