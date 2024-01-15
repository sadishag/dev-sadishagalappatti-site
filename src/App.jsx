import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div id="section-container">
        <Section />
      </div>
      <Footer />
    </>
  );
}

export default App;
