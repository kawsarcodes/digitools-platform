import Banner from "./component/Banner";
import Footer from "./component/Footer";
import NavBar from "./component/NavBar";
import Stats from "./component/Stats";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <NavBar />
      <Banner />
      <Stats />
      <Footer />
    </div>
  );
}