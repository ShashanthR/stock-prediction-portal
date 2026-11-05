import './assets/css/style.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="main-content">
        <Main />
      </main>
      <Footer />
    </div>
    
  )
}

export default App
