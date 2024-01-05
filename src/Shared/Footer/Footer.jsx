
import footerImage from '../../../public/Image2.png'

const Footer = () => {
    return (
        <footer className="p-10 bg-orange-400 flex justify-center gap-20 items-center">
            <div className='w-1/2'>
                <div className='relative'>
                    <input className='p-3 rounded-full w-full' type="text" />
                    <button className="p-2 bg-orange-500 rounded-2xl absolute top-1 right-5">Subscribe</button>
                </div>
            </div>
            <div className='w-1/2'>
                <img className='w-1/2 mx-auto' src={footerImage} alt="" />
            </div>
        </footer>
    );
};

export default Footer;