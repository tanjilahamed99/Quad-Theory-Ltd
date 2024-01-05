import axios from "axios";
import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


const Popular = () => {

    const [popular, setPopular] = useState([])

    useEffect(() => {
        axios.get('http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10')
            .then(res => setPopular(res.data.Items))
    }, [])


    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 4,
            spacing: 15,
        },
    })


    return (
        <div className="px-5">
            <div className="flex justify-between mb-3 ">
                <h2 className="text-lg font-bold">Popular</h2>
                <div>
                    <button className="text-lg text-orange-500 font-bold" onClick={() => document.getElementById('my_modal_5').showModal()}>Add More</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            
                            <div className="modal-action">
                                <form method="dialog">
                                    <button className="">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
            <div ref={sliderRef} className="keen-slider">
                {
                    popular?.map((item, idx) => <div
                        className={`keen-slider__slide number-slide${idx}`}
                        key={item.Id}>
                        <img className="md:w-full lg:h-[300px] h-[100px] w-[500px]" src={item?.ImageUrl} alt="" />
                        <h2 className="text-center font-semibold mt-2 md:text-lg text-sm">{item?.Name}</h2>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Popular;