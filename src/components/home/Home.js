import Header from "../header/Header.js";
import Footer from "../footer/Footer.js";
import Tours from "../tours/Tours.js";

function Home(props) {
  return (
    <>
      <Header />

      <Tours lol={props.jsonData} />

      <Footer />
    </>
  );
}

export default Home;
