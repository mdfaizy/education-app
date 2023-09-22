import './Pricing.css';


const Pricing = () => {
  return (
    <div>
      <div className="row_4" id="row_4">
        <div className="free">
            <div className="free1">
                <h4>Free</h4>
            </div>
            <div className="dolar">
            <h3><sup>$</sup>0<span> / month</span></h3>
            <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li className="na">Pharetra massa</li>
                <li className="na">Massa ultricies mi</li>
              </ul>
            <div className="free_butt">
                <a href="#" className="btn-buy">Buy Now</a>
            </div>
        </div>
        </div>
{/* <!-- 1 --> */}
        <div className="free">
            <div className="free1" id="free1">
                <h4>Business</h4>
            </div>
            <div className="dolar">
               <h3><sup>$</sup>19<span> / month</span></h3>
             <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li className="na">Massa ultricies mi</li>
              </ul>
              <div className="free_butt">
                <a href="#" className="btn-buy">Buy Now</a>
            </div>
        </div>
        </div>
        {/* <!-- 2 --> */}
        <div className="free">
            <div className="free1">
                <h4>Developer</h4>
            </div>
            <div className="dolar">
                <h3><sup>$</sup>29<span> / month</span></h3>
                <ul>
                    <li>Aida dere</li>
                    <li>Nec feugiat nisl</li>
                    <li>Nulla at volutpat dola</li>
                    <li>Pharetra massa</li>
                    <li>Massa ultricies mi</li>
                  </ul>
                  <div className="free_butt">
                    <a href="#" className="btn-buy">Buy Now</a>
                </div>
        </div>
        </div> 
               {/* <!--3  --> */}
        <div className="free" id="free4">

            <div className="free1">
                <span className="advanced">Advanced</span>
                <h4>Ultimate</h4>
            </div>
            <div className="dolar">
                <h3><sup>$</sup>49<span> / month</span></h3>
                <ul>
                    <li>Aida dere</li>
                    <li>Nec feugiat nisl</li>
                    <li>Nulla at volutpat dola</li>
                    <li>Pharetra massa</li>
                    <li>Massa ultricies mi</li>
                  </ul>
                  <div className="free_butt">
                    <a href="#" className="btn-buy">Buy Now</a>
                </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Pricing