import Hero from "./components/Hero";
import Features from "./components/Features";
import PropertiesList from "./components/PropertiesList";
import Content from "./components/Content";
import Form from "./components/Form";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Features/>
      <PropertiesList/>
      <Content/>
      <Form/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;
