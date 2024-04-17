import project1 from '../assets/proj1.png'
const Work = () => {
    return (
        <div className=" max-w-[1200px] mx-auto p-5" id="work">
            <div className="pb-8">
                <p className=" text-4xl mb-3 font-bold primary-color">work</p>
                <p className=" text-gray-400 ">Check out some of my recent work</p>
            </div>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

            <div className=" transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-black group rounded-md flex justify-center items-center h-48 bg-cover relative" >
                <img src={project1} alt="" />
                <div >
                    <span>project</span>
                </div>
            </div>





            </div>



        </div>
    );
};

export default Work;