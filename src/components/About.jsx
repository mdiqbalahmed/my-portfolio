import aboutimg from '../assets/about.jpg'
const About = () => {
    return (
        <div className="text-white max-w-[1200px] mx-auto my-11">
            <div className="md:grid md:grid-cols-2 sm:py-16">
                <div className="mt-4 md:mt-0 text-left flex">
                    <div className=" my-auto MX-6">
                        <h2 className="text-4xl font-bold mb-4 primary-color"> About Me</h2>
                        <p className="text-base lg:lext-lg">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis ex facere exercitationem error facilis a, repellat odit? Voluptatibus ipsa, consectetur quaerat voluptatem ratione voluptas rem voluptates quae nisi quos.
                        </p>
                        
                    </div>
                </div>
                 <img src={aboutimg}  className="mx-auto rounded-lg py-8 px-5 md:py-0 w-72 h-96"alt="" />
            </div>
        </div>
    );
};

export default About;