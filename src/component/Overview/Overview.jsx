import { HiOutlineChevronRight } from "react-icons/hi2";
import {BiReceipt,BiCubeAlt } from 'react-icons/bi';
import { FaImages } from 'react-icons/fa';

import  './Overview.css';
const Overview = () => {
  return (
   
   <div className='main-over'>

    <div className="text-overview">
        <div className="text-over1">
            <h1>Why Choose Mentor?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.</p>
             <button >Learn More <HiOutlineChevronRight className="l-arrow"/></button>
        </div>
        <div className="over-text">
            <h1 className="React-over-icon"><BiReceipt/></h1>
            <h2> Corporis voluptates sit</h2>
            <p>
            Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip
            </p>
        </div>

        <div className="over-text"> 
            <h1 className="React-over-icon"><BiCubeAlt/></h1>
            <h2> Ullamco laboris ladore pan</h2>
            <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            </p>
        </div>


        <div className="over-text">
            <h1 className="React-over-icon"><FaImages/></h1>
            <h2> Labore consequatur</h2>
            <p>
            Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere
            </p>
        </div>

        
    </div>
   </div>
  )
}

export default Overview