import Header from "./components/Header";
import SalesCards from "./components/SalesCard";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ToastContainer />
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

export default App;
