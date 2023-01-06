import "./App.css";
import NavBar from "./NavBar/NavBar";
import Details from "./Details/Details";
import FigCaption from "./FigCaption/FigCaption";
import CardSection from "./CardSection/CardSection";
import SubSection from "./SubSection/SubSection";
import Summary from "./Summary/Summary";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Details></Details>
      <FigCaption></FigCaption>
      <CardSection></CardSection>
      <SubSection></SubSection>
      <Summary></Summary>
      <Footer></Footer>
    </div>
  );
}

export default App;
