import React from 'react'
import './App.css'
import ProductList from './components/ProductList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome to the web-store</h2>
      </header>
      <main>
        <ProductList />
      </main>
      <footer>
        <header className='App-footer'>
        <h4 >BuyNow button added By Rajeev Mishra</h4>
        </header>
      </footer>
    </div>
  )
}

export default App
