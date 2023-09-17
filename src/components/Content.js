import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Content.css';
export function Content(){
 return(
   <>
   <section className="App-header">
     <div className="App-text-box">
        <h1 className='Apphead'>ORGANIC STORE</h1>
        <p className='content-p'>A simplier way to grow healthy<br/>Be Healthy Stay Healthy</p>
     </div>
    </section>
    <section className="features">
        <h1 className='Apphead'> Provided Facilities By Us</h1>
        <p className='content-p'>We provide seamless and delightful shopping experience. </p>
        <div className="App-row">
            <div className ="features-col">
                <h3 className='content-name'>Fresh </h3>
                <p className='content-p'>Indulge in the pure essence of freshness at our facility,where every product has natural goodness</p>
            </div>
            <div className ="features-col">
                <h3 className='content-name'>Fast Delivery</h3>
                <p className='content-p'>Swiftly bridge the gap between craving and satisfaction with our lightning-fast delivery facility.</p>
            </div>
            <div className ="features-col">
                <h3 className='content-name'>Low Price</h3>
                <p className='content-p'>Discover the joy of smart shopping ,where low prices meet exceptional value.</p>
            </div>
        </div>
    </section>
    <section className="vegies">
          <h1 className='Apphead'>VEGETABLES</h1>
            <p className='content-p'>Fresh vegetables are nature's superheroes,packed with treasure trove of benefits.</p>
            <div className="App-row">
                <div className="vegies-col">
                    <img src={require('./photos/LL.jpg')}/>
                    <div className="layer">
                        <Link to="/leafy" ><h3 className='content-name'>LEAFY</h3></Link>
                    </div>
                </div>
                <div className="vegies-col">
                    <img src= {require('./photos/MM.jpg')}/>
                    <div className="layer">
                      <Link to="/marrow"><h3 className='content-name'>MARROW</h3></Link>
                    </div>

                </div>
                <div className="vegies-col">
                    <img src={require('./photos/Root.jpg')}/>
                    <div className="layer">
                        <Link to="/root"><h3 className='content-name'>ROOT</h3></Link>
                    </div>
                </div>
            </div>
        </section>
        <section className="Fruits">
          <h1 className='Apphead'>FRUITS</h1>
            <p className='content-p'>Fruits are an important part of a healthy diet.</p>
            <div className="App-row">
                <div className="Fruits-col">
                <Link to="/seasonal fruits"><img src={require('./photos/sis.jpg')}/></Link>

                        <h3 className='content-name'>Seasonal Fruits</h3>

                </div>
                <div className="Fruits-col">
                    <Link to="/exotic fruits"><img src={require('./photos/e.jpg')}/></Link>

                        <h3 className='content-name'>Exotic Fruits</h3>

                </div>
                <div className="Fruits-col">
                     <Link to="/juicy fruits"><img src={require('./photos/ju.jpg')}/></Link>

                        <h3 className='content-name'>Juicy Fruits</h3>

                </div>
            </div>
        </section>
    </>
    );
}
    