
import React from "react";

export default function Home() {
  return (
     <section className="flex flex-col justify-around">
    <h1 className=" flex text-white justify-center text-3xl mb-5"> Assignment 01 & 02 </h1>

    <div className=" flex w-11/12 m-auto  h-64 justify-between gap-8">   
      <div className="bg-green-500 flex w-1/3 justify-center items-center text-white text-lg"> Box 1  </div> 
      <div className="bg-green-500 flex w-1/3 justify-center items-center text-white text-lg"> Box 2  </div> 
      <div className="bg-green-500 flex w-1/3 justify-center items-center text-white text-lg"> Box 3  </div> 
    </div>

    <div className="flex w-11/12 m-auto h-80 justify-between gap-8 mt-3">   
      <div className=" bg-red-500 w-1/2 flex justify-center items-center text-white text-lg">  Box 4 </div> 
      <div className=" bg-red-500 w-1/2 flex justify-center items-center text-white text-lg">  Box 5 </div>
       
    </div>
     </section>
   
  );
}
