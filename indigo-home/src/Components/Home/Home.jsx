import Header from '../Header/Header';
import Section1 from '../Section1/Section1';
import Button from '../Button/Button';
import Section3 from '../Section3/Section3';
import Card from '../Card/Card';
import Section5Card from '../Section5Card/Section5Card';

import './Home.scss'

function Home() {

  return (
    <>
      <Header/>
      <Section1/>
      <section2 className="section2" >
        <label className='section2__label font-bauhaus'>#GirlPower</label>
        <label style={{'padding-top': '5px'}}>
          <Button label={'Join Now'} styles={{'width': '188px','height': '40px','padding': '8px 32px 8px 32px','gap': '4px','opacity': '0px'}} />
        </label>
      </section2>
      <Section3/>
      <section4 style={{'display': 'flex'}}>
        <Card num="41,000+" text="women empowered" count={3}/>
      </section4>
      <section5 className="section5">
        <label className='section5__label1 font-bauhaus'><strong> <span className="section5__labelgreen">Safest Destinations</span> For Solo Women Travellers</strong></label>
        <label className='section5__label2'>Specially curated for women traveller</label>
      </section5>
      <section5 style={{'display':'flex'}}>
        <Section5Card/>
        <Section5Card/>
        <Section5Card/>
      </section5>
    </>
  );
}

export default Home;
