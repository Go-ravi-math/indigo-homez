import React from 'react';
import './WTwidget.scss';
import Button from '../Button/Button';

const WTwidget = () => {
  return (
    <>
        <form className='wt-widget'>
            <formheader className="wt-widget__field">
                <div style={{'display': 'flex'}}>
                    <span className='wt-widget__field-head'>
                        <input className='wt-widget__field-radio' type="radio" id="html" name="fav_language" value="HTML"/>
                        <label className='wt-widget__field-radio-label'>One Way</label>
                    </span>
                    <span className='wt-widget__field-head'>
                        <input className='wt-widget__field-radio' type="radio" id="html" name="fav_language" value="HTML"/>
                        <label  className='wt-widget__field-radio-label'>Round Trip</label>
                    </span>
                    <span className='wt-widget__field-head'>
                        <input className='wt-widget__field-radio' type="radio" id="html" name="fav_language" value="HTML"/>
                        <label  className='wt-widget__field-radio-label'>Multi City</label>
                    </span>
                </div>
                <span className='wt-widget__field-head' style={{'float':'right'}}>
                    <select className='wt-widget__field-select'>
                        <option value="0">INR</option>
                        <option value="1">Audi</option>
                    </select>   
                </span>
            </formheader>
            <formbody className="wt-widget__body">
                <div className='wt-widget__body-bodyContainer'>
                    <div className='wt-widget__body-body'>
                        <div style={{'display':'flex', 'flex-direction': 'column', 'width':'268px', 'height': '94px', 'justify-content': 'center', 'padding-left':'12px'}}>
                            <div style={{'display':'flex', 'width':'242px', 'height': '94px', 'justify-content': 'center'}}>
                                <div style={{'display':'flex', 'flex-direction': 'column', 'width':'268px', 'height': '94px', 'justify-content': 'center'}}>
                                    <label style={{ 'font-size': '12px', 'font-weight': '400', 'line-height': '18px', 'padding-bottom': '5px'}}>
                                    From
                                    </label>
                                    <label style={{ 'font-size': '16px', 'font-weight': '500', 'line-height': '24px'}}>
                                    <strong>Flying from?</strong>
                                    </label>
                                    <label style={{ 'font-size': '16px', 'font-weight': '300', 'line-height': '24px'}}>
                                    Search by place/ airport
                                    </label>
                                </div>
                                <div style={{'display':'flex', 'width':'25px', 'justify-content': 'center', 'height': '94px','align-items': 'center'}}>
                                    <img className="card__image" alt="IndiGo Logo" src="/Assets/icons/vector1.png"/>
                                </div>
                            </div>
                        </div>
                        <div style={{'display':'flex', 'flex-direction': 'column', 'width':'268px', 'height': '94px', 'justify-content': 'center', 'border-right': '1px solid #DAF1FF', 'padding-left':'12px'}}>
                            <label style={{ 'font-size': '12px', 'font-weight': '400', 'line-height': '18px', 'padding-bottom': '5px'}}>
                              To
                            </label>
                            <label style={{ 'font-size': '16px', 'font-weight': '500', 'line-height': '24px'}}>
                              <strong>Going To?</strong>
                            </label>
                            <label style={{ 'font-size': '16px', 'font-weight': '300', 'line-height': '24px'}}>
                              Search by place/ airport
                            </label>
                        </div>
                        <div style={{'display':'flex', 'flex-direction': 'column', 'width':'160px', 'height': '94px', 'justify-content': 'center', 'border-right': '1px solid #DAF1FF', 'padding-left':'12px'}}>
                            <label style={{ 'font-size': '12px', 'font-weight': '400', 'line-height': '18px', 'padding-bottom': '5px'}}>
                              Departure
                            </label>
                            <label style={{ 'font-size': '16px', 'font-weight': '500', 'line-height': '24px'}}>
                              <strong>Date</strong>
                            </label>
                            <label style={{ 'font-size': '16px', 'font-weight': '300', 'line-height': '24px'}}>
                            Departure
                            </label>
                        </div>
                        <div style={{'display':'flex', 'flex-direction': 'column', 'width':'160px', 'height': '94px', 'justify-content': 'center', 'border-right': '1px solid #DAF1FF', 'padding-left':'12px'}}>
                            <label style={{ 'font-size': '12px', 'font-weight': '400', 'line-height': '18px', 'padding-bottom': '5px'}}>
                              Return
                            </label>
                            <label style={{ 'font-size': '16px', 'font-weight': '500', 'line-height': '24px'}}>
                              <strong>Save More</strong>
                            </label>
                            <label style={{ 'font-size': '16px', 'font-weight': '300', 'line-height': '24px'}}>
                            Add Return
                            </label>
                        </div>
                        <div style={{'display':'flex', 'flex-direction': 'column', 'width':'248px', 'height': '94px', 'justify-content': 'center', 'padding-left':'12px'}}>
                            <label style={{ 'font-size': '12px', 'font-weight': '400', 'line-height': '18px', 'padding-bottom': '5px'}}>
                              Travellers + Special Fare
                            </label>
                            <label style={{ 'font-size': '16px', 'font-weight': '500', 'line-height': '24px', 'color':'#000099'}}>
                              <strong>1 Passenger</strong>
                            </label>
                            <label style={{ 'font-size': '16px', 'font-weight': '300', 'line-height': '24px'}}>
                            Adult
                            </label>
                        </div>
                    </div>
                </div>
            </formbody>
            <formfooter className="wt-widget__footer">
                <div style={{'width': '264px','height': '44px','border-radius': '12px', 'border': '1px', 'border': '1px solid #DAF1FF','display': 'flex', 'align-items': 'center', 'padding-left': '10px', 'justify-content': 'center', 'color': '#25304B'}}>
                    <label style={{'font-size': '16px'}}>I am travelling for _ _ _ _ _ _ _ _ _</label>
                </div>
                <div style={{'height': '44px','display': 'flex', 'align-items': 'center', 'justify-content': 'center'}}>
                    <label  style={{'float': 'left', 'margin':'0 40px 0 0', 'font-size':'16px', 'font-weight': '500', 'color': '#000099'}}>+ ADD PROMOCODE </label>
                    <Button label={'Search'} styles={{'width': '121px','height': '40px','padding': '8px 32px 8px 32px','gap': '4px','opacity': '0px'}} />
                </div>
            </formfooter>
        </form>
    </>
  );
};

export default WTwidget;
