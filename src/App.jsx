import { useState, createContext  } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'


export const UserContext = createContext();

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const [comp, setComp] = useState('content');

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <UserContext.Provider value={comp}>
      <div className="grid-container">
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
          setComp={setComp}
        />
        <Home />
      </div>
    </UserContext.Provider>
  );
}

export default App