import React from 'react';
import './Section7.scss';

const Section7 = ({label, styles}) => {
  return (
    <>
        <div className='benefits'>
            <div className='benefits__main'>
                <div className='benefits__left'>
                    <div style={{'height': '25px', 'display': 'flex', 'justify-content': 'space-between', 'align-item': 'center', 'width': '100%'}}>
                        <span>
                            <label style={{'font-size': '16px', 'font-weight': '600'}}>
                                Exclusive benefits
                            </label>
                        </span>
                        <span>
                            <label style={{'font-size': '16px', 'font-weight': '600'}}>
                                test
                            </label>
                        </span>
                    </div>
                    <div className='benefits__left-image'>
                        <img className='benefits__left-image' src='/Assets/Destination.png'/>
                    </div>
                </div>
            </div>
            <div className='benefits__right'>
                <label className='font-bauhaus' style={{'font-size': '44px'}}>
                    <strogn style={{'color': 'white'}}>Get <span style={{'color':'#7FD287'}}>exclusive</span> community benefits</strogn>
                </label>
                <lable style={{'font-size': '24px', 'color': 'white'}}>
                Enjoy great times at our in-person events and travel adventures created for women over 50. Meet likeminded women online and get to know them.
                </lable>
            </div>
        </div>
    </>
  );
};

export default Section7;
