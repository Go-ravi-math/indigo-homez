import Header from '../Header/Header';
import Section1 from '../Section1/Section1';
import Button from '../Button/Button';
import Section3 from '../Section3/Section3';
import Card from '../Card/Card';
import Section5Card from '../Section5Card/Section5Card';
import WTwidget from '../WTwidget/WTwidget'
import Section7 from '../Section7/Section7';
import './Home.scss'
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import Blogs from '../Blogs/Blogs';
import InstagramPostCard from '../InstagramCard/InstagramPostCard'
import Footer from '../Footer/Footer';
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
        <label className='section5__label2'>SPECIALLY CURATED FOR WOMEN TRAVELLER</label>
      </section5>

      <section6 className="section6" style={{'display':'flex', 'flex-direction': 'column'}}>
        <top class="top" style={{'display':'flex'}}>
            <Section5Card style='' city='Bangalore' fare='Fare starting at 30,000' imageUrl='https://s3-alpha-sig.figma.com/img/568f/526d/a3a3de58c1e8c6bcd2f6080786f02549?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gCU2H4wmKobnIL-E6pMthvjAlhkpI7ioWKY6b553AzEBPbhcb2NfigYG9QkJhNDmc0OBTTyA0faU7~A6fJmtxWFrgpg6pEqvp00wEsXZEtXjm8p8LvWYLskMVhRo6AitfOX~ntdK0qgoUcQM2X44cfN8M3ZnyCMNRAP9VZeV2vtnSzipGtVdSaDqA2BWiUlaXB-4-96HXcaJf89hlJ-six4qvW7UYCq7cWuWU8StfJ636GiqASOLbEdif6z-gdFXc1qdETkoRmTA1F0UokSghPQnsUvjaYxw42~8vg8Mo79O3msrbpxiSB2iRtLgKedG~J4hIh28QJOIx2ntdVlLpA__'/>
            <Section5Card test={{'margin': '0 20px 0 20px'}} city='Jaisalmer' fare='Fare starting at 30,000' imageUrl='https://s3-alpha-sig.figma.com/img/cf46/2ccc/b8ab26dd84de92d5a14db5234623fd7c?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SxNyNBlHtkwKE5tc36lEY~tjNpeDyKziOTORkv~5-BWcT7OVYFZ6dP7gSsFKqis~duYLCcoK4L5xaw4Vdd~~LjZVcbjDxFXyr70t3dNw1rrnaJ~9InmEBN-5NvmdO2XX1V6z7gxSXAOop0Di5QomwdQVdY673mXedSz-cSNp36UixhwDkFwX6VvyfCBirS~nFJEKGRXROJcUEFzNw0yuNUVvShxpfe-JfGcUTChDULNnWBpcRhwsezq~9Sa4xxEyXsX3RJwJ9NSZlb2gtsAJha1ioKFVC8hFI9Y0cq7fFVEXCviusH0BsI9J8Bc7BO8G85ZYL4wqtHFYeTOBtkAlpw__'/>
            <Section5Card style='' city='Goa' fare='Fare starting at 30,000' imageUrl='https://s3-alpha-sig.figma.com/img/4b4a/bc27/b249c2312336f93d38858216d69fc867?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iSVAGzP-7qI235kIzgCuGgI3~lhHXgPx6jPnLWaMoTjbI7fttdQ-QYGPI-mX6EzuquO7p2Q8abU~1yPLhqBPEVz6vkrFn1ruFTK~FJgJPS063eLY8oUbJqa-mFN-GOSDYl1UUvNSuOhvQfIFDQkFleHYGwRGL9W3XYCD6v4tZNNFG6XKRkSf49Eu-nzSsVO3vWZk-IiAKSeScOBoi35YXDcCbmK0FVcVCmIE28nQ8y1QJV0N9kJrdTg0Ui0JYrhCMOD3NLxLdAZRo~pSIX3AxgU4ulWNmDyvzwBAwrLslv~9xRPtY6NwmX26QY88ixBpReOomnt31jEezDYT~bX2LQ__'/>
        </top>
        <bottom className="bottom">
            <WTwidget/>
        </bottom>
      </section6>
      <Section7/>
      <TestimonialCard/>
      <Blogs/>
      <InstagramPostCard/>
      <Footer/>
    </>
  );
}

export default Home;
