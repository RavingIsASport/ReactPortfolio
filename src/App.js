import "./App.css";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="d-flex flex-column h-100">
      <main>
        <Main />
      </main>
      <Footer />
    </div>
  );
}
export default App;
