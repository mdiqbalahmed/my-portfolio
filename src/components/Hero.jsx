import img from '../assets/iqbal.png'
import { TypeAnimation } from 'react-type-animation';
import { AiFillLinkedin,AiFillGithub,AiFillFacebook } from "react-icons/ai";

const Hero = () => {
    return (
        <div className= ' bg-black grid grid-cols-1 sm:grid-cols-3 gap-8  max-w-[1200px] mx-auto py-12  '>
            
                <div className=' col-span-1 w-[300px] h-auto lg:w-[400px]'>
                    <img src={img} alt="hero img" />
                </div>
            
            <div className=' col-span-2 px-5 my-auto  '>
             <h1 className=' text-white text-4xl sm: text-3xl lg: text-4xl font-extrabold'>  
                <span className=' primary-color'>
                    I am a
                </span> <br />
            <TypeAnimation
      sequence={[
       
        'Frontend Devloper',
        1000, 
        'Web Devloper',
        1000,
        'React Devloper ',
        1000,
        
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
         </h1> 
            <p className=' text-white sm: text-lg my-6 lg:text-xl'>
                My name is Md Iqbal Ahmed and I am a Frontend Devloper
            </p>
            <div className=' text-5xl flex gap-7 text-orange-500'>
                    <AiFillLinkedin/>
                    <AiFillGithub/>
                    <AiFillFacebook/>

            </div>

            <div className=' my-8'>
               
                    <a href="" className=" text-white py-3 px-6 rounded-xl w-full mr-4 bg-gradient-to-tr from-orange-500 to-pink-500 w-full">
                        Download Resume
                    </a>
                    <a href="" className=" text-white py-3 px-6 rounded-xl w-full mr-4 hover:bg-gradient-to-tr from-orange-500 to-pink-500 border border-gray-400">
                        Contact
                    </a>
            </div>



            </div>
        </div>
    );
};

export default Hero;