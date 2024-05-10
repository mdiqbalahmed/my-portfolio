import project1 from '../assets/proj1.png'

const Works = () => {
    return (
        <div className=" max-w-[1200px] mx-auto p-5" id="work">
            <div className="pb-8">
                <p className=" text-4xl mb-3 font-bold primary-color">work</p>
                <p className=" text-gray-400 ">Check out some of my recent work</p>
            </div>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

            <a className="p-4 max-w-lg border border-orange-600 rounded-2xl hover:shadow-xl hover:shadow-orange-700 flex flex-col items-center"
    href="#">
   <img className='shadow rounded-lg overflow-hidden border w-full' src="https://i.ibb.co/YTrkkFr/image.png" alt="" />
    <div className="mt-8">
        
        <div className="mt-5 ">
            <a href="https://wedding-management-phi.vercel.app/"><button type="button" className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Live Site</button></a>
            <a href="https://github.com/mdiqbalahmed/Wedding-management"><button type="button" className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900 ml-10">Code Link</button></a>
        </div>
    </div>
</a>
<a className="p-4 max-w-lg border border-orange-600 rounded-2xl hover:shadow-xl hover:shadow-orange-700 flex flex-col items-center"
    href="#">
   <img className='shadow rounded-lg overflow-hidden border w-full' src="https://i.ibb.co/RQ227NB/image.png" alt="" />
    <div className="mt-8">
        
        <div className="mt-5 ">
            <a href="https://wonderful-jelly-1046c2.netlify.app/"><button type="button" className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Live Site</button></a>
            <a href="https://github.com/mdiqbalahmed/News-Blogs"><button type="button" className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900 ml-10">Code Link</button></a>
        </div>
    </div>
</a>

<a className="p-4 max-w-lg border border-orange-600 rounded-2xl hover:shadow-xl hover:shadow-orange-700 flex flex-col items-center"
    href="#">
   <img className='shadow rounded-lg overflow-hidden border w-full' src="https://i.ibb.co/c3Hbs41/image.png" alt="" />
    <div className="mt-8">
        
        <div className="mt-5 ">
            <a href="https://663e1a9cfed9c21672231dc2--calm-zuccutto-1c7147.netlify.app/"><button type="button" className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Live Site</button></a>
            <a href="https://github.com/mdiqbalahmed/Read-Blogs"><button type="button" className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900 ml-10">Code Link</button></a>
        </div>
    </div>
</a>


            </div>



        </div>
    );
};

export default Works;