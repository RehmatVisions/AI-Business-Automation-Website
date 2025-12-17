 import React from 'react'
import Home from './components/AI';
 import Home from AIAutomationLanding;
const App = () => {
  return (
    <div>
      {/* 1. Layout folder: Navbar, Footer, */}
      {/* Example: <Navbar /> and <Footer /> */}
      
      {/* 2. Pages: Full screens like Home,.... .... */}
      {/* Example: <Home />  */}

      {/* 3. Components: Small reusable pieces like Button, Card, Modal */}
      {/* Example: <Button /> or <Card /> */}

      
      <h1 className='text-red-400 text-2xl font-bold'>
        Start Your Feature
      </h1>

       <Home/>
    </div>
  )
}

export default App
