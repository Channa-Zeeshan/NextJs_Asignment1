
import Link from "next/link";
import React from "react";

export default function Navbar(){
    return (<nav>
        <div className="flex bg-black h-14 justify-between items-center" >
            <div className="bg-green-200 ">  </div>
            <div className="flex justify-between text-white  w-2/6">
        <ul className="flex justify-between w-full" >
            <li >
                <Link href="../"> Home </Link>
                
            </li>
            <li>
            <Link href="../about"> About</Link>
            </li>
            <li>
            <Link href="../contact"> Contact Us</Link>
            </li>
            <li>
            <Link href="../career"> Career</Link>
            </li >
        </ul>
        </div>
        <div className="bg-blue-200"> </div>
      </div>
      </nav>
    );

}