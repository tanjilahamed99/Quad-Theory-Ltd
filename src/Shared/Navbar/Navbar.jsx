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
        <div className="flex justify-between items-center">
            <div className="w-[20%]">
                <div className="">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    {/* <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 3</a></li>
                    </ul> */}
                </div>
                <a className="text-xl font-extrabold">pti.</a>
            </div>
            <div className=" hidden w-[60%] lg:flex items-center gap-3">
                <div className="relative w-[70%]">
                    <input className="py-3 pl-10 pr-3 bg-white rounded-lg w-full" type="text" placeholder="Search Audiobook" />
                    <FaSearch className="absolute top-4 left-2 text-xl font-bold text-orange-500"></FaSearch>
                </div>
                <div className="w-[20%] relative group">
                    <button className="bg-white font-bold flex justify-between items-center w-full py-3 px-2 rounded-md">MENU <FaArrowDown className="text-orange-500"></FaArrowDown></button>
                    <ul className="absolute group-hover:-mt-3 group-hover:top-16 -mt-[20000px]  w-full  bg-white rounded-xl space-y-1 p-3 font-medium">
                        {
                            ulLInks
                        }
                    </ul>
                </div>
            </div>
            <div className="">
                <CgProfile className="bg-orange-500 text-white rounded-full text-4xl"></CgProfile>
            </div>
        </div>
    );
};

export default Navbar;