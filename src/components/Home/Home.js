export const Home = () => {
    const Hour = null;
    const Minute = null;
    const Seconds = null;
    return(
    <>
      <div className="">
        {/* Head */}
        <div className=" h-4"></div>
        <div className="ml-auto mr-auto w-[90%] h-[70px] bg-gray-100 drop-shadow-xl rounded-full mb-20  flex">
          <div className="w-[70px] h-[100%]">
             <img className='w-full h-full' src='/flame.png' alt='ggg'/>
          </div>
          <div className="ml-auto py-5 px-3 w-full h-[100%]">
            <div className="text-2xl">
              FlameFinance
            </div>
          </div>
        </div>
        {/* Hero */}
        <div className="column sm:flex w-[95%] ml-auto mr-auto ">
          <div className="flex items-center justify-center mb-5 bg-gray-100 sm:w-[45%] w-[75%] h-[180px] sm:h-[300px] ml-auto drop-shadow-xl mr-auto rounded-xl">
            <div className="ml-auto mr-auto w-[80%]">
              <img className="ml-auto mr-auto w-[80%]" alt="hhh" src="/flame.png"/>
            </div>
          </div>
          <div className="flex items-center justify-center py-6 px-3 mb-4  bg-gray-100 sm:w-[45%] w-[75%] h-[300px] ml-auto mr-auto drop-shadow-xl rounded-xl">
            <div className="w-[100%]">
              <p  className="sm:text-xl  text-sm">'#1 Dex On Core Chain Ecosystem FlameFinance.</p>
              <p className="sm:text-xl text-sm">The Most Promising Decentralised Protocol On Core Chain, FlameFinance Uses and Utilize The Secured, Scalable and Decentralised Habits of Core Blockchain to build the most trusted, secured, fast and gas optimized Decentralised open and safe Marketplace for Core Chain Community.</p>
            </div>
          </div>  
        </div>
        {/* countdown */}
        <div className="column">
          <div className=" mb-5 mt-5 bg-gray-100 sm:w-[80%] w-[80%] h-[180px] sm:h-[230px] ml-auto drop-shadow-xl mr-auto rounded-xl">
            <div className="ml-auto mr-auto w-full mt-4 mb-5 flex items-center justify-center ">
              <h1 className="py-6 px-3 text-xl sm:text-3xl">Launch Count Down</h1>
            </div>
            <div className="ml-auto mr-auto w-[80%] flex items-center justify-center">
              <div className="sm:w-[180px] w-[80px] sm:py-1 py-3 px-1 items-center justify-center flex drop-shadow-xl sm:h-[70px] h-[40px] rounded-full  bg-[#53DEE9] ml-auto mr-auto">
                <span className="flex items-center justify-center drop-shadow-xl sm:w-[80%] sm:h-[40px] w-[90%] h-[25px] sm:text-xl text-sm bg-white rounded-full">{`${Hour} hours`}</span>
              </div>
              <div className="sm:w-[180px] w-[80px] sm:py-1 py-3 px-1 items-center justify-center flex drop-shadow-xl sm:h-[70px] h-[40px] rounded-full  bg-[#53DEE9] ml-auto mr-auto">
                <span className="flex items-center justify-center drop-shadow-xl sm:w-[80%] sm:h-[40px] w-[90%] h-[25px] sm:text-xl text-sm bg-white rounded-full">{`${Minute} mins`}</span>
              </div>
              <div className="sm:w-[180px] w-[80px] sm:py-1 py-3 px-1 items-center justify-center flex drop-shadow-xl sm:h-[70px] h-[40px] rounded-full bg-[#53DEE9] ml-auto mr-auto">
                <span className="flex items-center justify-center drop-shadow-xl sm:w-[80%] sm:h-[40px] w-[90%] h-[25px] sm:text-xl text-sm bg-white rounded-full">{`${Seconds} secs`}</span>
              </div>
            </div>
           </div>
        </div>

        
        {/* body */}
        <div></div>
        {/* footer */}
      </div>
    </>
    )
}