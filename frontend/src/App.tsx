import Header from "./components/Header"
import SalesCards from "./components/SalesCard"

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
          <SalesCards />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
