

const contact = () => {
    return (
        <div className='max-w-[1200px] mx-auto bg-black sm:py-20 p-5' id='work'>
        <div>
            <h2 className=' text-4xl font-bold leading-tight primary-color'>Contact Me</h2>
        </div>
        <div className='max-w-[800px] mx-auto mt-6'>
            <div>
                <form action="https://getform.io/" method='post'>
                    <div className=' grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4'>
                       <div>
                       <div className=' mt-2 relative'>
                            <input type="text" placeholder='Your Name' className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-300 border-gray-200 rounded-md focus: border-pink-600 ' />
                            
                        </div> 
                       </div>
                        <div className=' mt-2 relative'>
                            <input type="text" placeholder='Your Name' className='  bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-300 border-gray-200 rounded-md focus: border-pink-600 ' />
                            
                        </div> 

                        <div className=' sm:col-span-2'>
                            <div className=' mt-3'>
                                <textarea name="" id="" placeholder='Your Message' className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-300 border-gray-200 rounded-md focus: border-pink-600   '  rows="4"></textarea>

                            </div>
                        </div>
                         
                         <div className=' sm:col-span-2'>
                            <button className=' text-xl w-full p-4 mt-2 font-semibold bg-p-color rounded-md'> Send </button>
                         </div>

                        

                    </div>

                </form>
            </div>
            <div>

            </div>
        </div>
        
    </div>
    );
};

export default contact;