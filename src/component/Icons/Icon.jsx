import { BiBarChartSquare,BiSolidPaintRoll,
  BiSolidCoinStack ,BiFingerprint,BiBroadcast,
  BiAnchor,BiReceipt} from "react-icons/bi";
  import { RiCalendarTodoLine,RiDiscLine } from 'react-icons/ri';
  import { FaStore } from 'react-icons/fa';
  import { RiGradienterLine,RiPriceTag2Line } from 'react-icons/ri';
import  './Icon.css'
const Icon = () => {
  return (
    <div className="main-over">

        <div className="over-items">

      <div className="over-icon">
     <h2><FaStore className="icon-1"/>Lorem Ipsum</h2>
      </div>
      <div className="over-icon">
<h2><BiBarChartSquare className="icon-2" /><span className="text-1">Dolor Sitema</span></h2></div>

<div className="over-icon">
<h2> <RiCalendarTodoLine className="icon-3"/>Sed perspiciatis</h2></div>
<div className="over-icon">
<h2> <BiSolidPaintRoll className="icon-4"/>Magni Dolores</h2></div>

<div className="over-icon">
<h2> <BiSolidCoinStack className="icon-5"/>Nemo Enim</h2></div>
<div className="over-icon">
<h2><RiGradienterLine className="icon-6"/>Eiusmod Tempor</h2></div>

<div className="over-icon">
<h2> <BiReceipt className="icon-7"/>Midela Teren</h2></div>
<div className="over-icon">
<h2><RiPriceTag2Line className="icon-8"/>Pira Neve</h2></div>

<div className="over-icon">
<h2> <BiAnchor className="icon-9"/>Dirada Pack</h2></div>
<div className="over-icon">
<h2 ><RiDiscLine className='icon-10'/>Moton Ideal</h2></div>
<div className="over-icon">
<h2> <BiBroadcast className="icon-11"/>Verdo Park</h2></div>
<div className="over-icon">
<h2> <BiFingerprint className="icon-12"/>Flavor Nivelanda</h2></div>
        </div>
    </div>
  )
}

export default Icon