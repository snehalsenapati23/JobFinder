import react from 'react'
import NavBar from './components/NavBar/Navbar'
import Search from './components/SearchDiv/Search'
import Jobs from './components/JobDiv/Jobs'
import Footer from './components/FooterDiv/Footer'
import Value from './components/ValueDiv/Value'
const App = () => {
  return (
  <div className='w-[85%] m-auto bg-white  '>
<NavBar />
<Search />
<Jobs />
<Value />
<Footer />

  </div>
  )
}

export default App