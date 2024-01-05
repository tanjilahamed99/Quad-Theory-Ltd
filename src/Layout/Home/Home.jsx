import Banner from "../../Pages/Home/Banner/Banner";
import Navbar from "../../Shared/Navbar/Navbar";

const Home = () => {
    return (
        <div className="container mx-auto py-5">
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Home;