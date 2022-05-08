import './App.css'
import Header from './components/Header/Header.js'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Profile />
    </div>
  )
}

export default App;
