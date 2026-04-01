import Footer from "./component/Footer";
import NavBar from "./component/NavBar";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <NavBar />
      <div className="flex-grow py-20 text-center">
        <h1 className="text-4xl font-bold">Welcome to DigiTools</h1>
      </div>
      <Footer />
    </div>
  );
}