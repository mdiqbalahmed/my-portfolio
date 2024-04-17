import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'
const Skills = () => {
    return (
        <div className='border border-gray-700 text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-6 place-items-center md:justify-between md:items-center md: flex   '>
            <h2 className=" text-gray-700 text-xl md:text-4xl font-bold m-4">
                My <br />Tech <br />Stack
            </h2>

            <div className=" flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
                <img src={html} alt="" />
            </div>
            <div className=" flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
                <img src={css} alt="" />
            </div>
            <div className=" flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
                <img src={js} alt="" />
            </div>
            <div className=" flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
                <img src={tailwind} alt="" />
            </div>
            <div className=" flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
                <img src={react} alt="" />
            </div>



        </div>
    );
};

export default Skills;