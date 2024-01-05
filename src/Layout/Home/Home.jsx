import Banner from "../../Pages/Home/Banner/Banner";
import Popular from "../../Pages/Home/Popular/Popular";
import Recommended from "../../Pages/Home/Recommended/Recommended";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";

const Home = () => {
    return (
        <div className="container mx-auto py-5">
            <Navbar></Navbar>
            <Banner></Banner>
            <Popular></Popular>
            <Recommended></Recommended>
            <Footer></Footer>
        </div>
    );
};

export default Home;