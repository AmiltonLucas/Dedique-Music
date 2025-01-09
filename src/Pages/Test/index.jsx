import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import NavbarMobile from "../../Components/Navbar/NavbarMobile";
import SearchBar from "../../Components/Searchbar/Searchbar";
import UserPageComponent from "../../Components/UserComponents/UserComponent";

export default function TestPage() {
  return (
    <>
      <div className="bg-secondary/60 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-6xl rounded-lg p-2">
          <Navbar />
          <NavbarMobile />
          <Banner />
          <SearchBar />
          <div className="mt-6 rounded-xl bg-bg/50">
            <UserPageComponent />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
