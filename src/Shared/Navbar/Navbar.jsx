import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaArrowDown } from "react-icons/fa";

const Navbar = () => {

    const ulLInks = <>

        <li><a>Home</a></li>
        <li><a>Details</a></li>
        <li><a>Category</a></li>
        <li><a>My Favorite</a></li>
        <li><a>Profile</a></li>
        <li><a>Login/Sign Up</a></li>

    </>

    return (
        <div className="flex justify-between items-center px-3 gap-3">
            <div className="md:w-[20%]">
                <a className="md:text-xl font-extrabold">pti.</a>
            </div>
            <div className=" md:w-[60%] flex items-center md:gap-3 gap-2">
                <div className="relative md:w-[70%]">
                    <input className="py-3 md:pl-10 pl-9 md:pr-3 bg-white rounded-lg md:w-full" type="text" placeholder="Search Audiobook" />
                    <FaSearch className="absolute top-4 left-3 md:text-xl  font-bold text-orange-500"></FaSearch>
                </div>
                <div className="md:w-[20%] relative group">
                    <button className="bg-white font-bold gap-1 text-sm flex md:justify-between items-center md:w-full py-3 px-2 rounded-md">MENU <FaArrowDown className="text-orange-500"></FaArrowDown></button>
                    <ul className="absolute group-hover:-mt-3 group-hover:top-16 text-xs md:text-base group-hover:-left- -mt-[20000px]  w-full  bg-white rounded-xl space-y-1 p-3 font-medium">
                        {
                            ulLInks
                        }
                    </ul>
                </div>
            </div>
            <div className="hidden md:flex">
                <CgProfile className="bg-orange-500 text-white rounded-full text-4xl"></CgProfile>
            </div>
        </div>
    );
};

export default Navbar;