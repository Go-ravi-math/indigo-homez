import React from 'react';
import './Section5Card.scss';

const Section5Card = () => {
  return (
    <div className="card">
      <div className="card__image">
        <img className="card__image" alt="IndiGo Logo" src='https://s3-alpha-sig.figma.com/img/568f/526d/a3a3de58c1e8c6bcd2f6080786f02549?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gCU2H4wmKobnIL-E6pMthvjAlhkpI7ioWKY6b553AzEBPbhcb2NfigYG9QkJhNDmc0OBTTyA0faU7~A6fJmtxWFrgpg6pEqvp00wEsXZEtXjm8p8LvWYLskMVhRo6AitfOX~ntdK0qgoUcQM2X44cfN8M3ZnyCMNRAP9VZeV2vtnSzipGtVdSaDqA2BWiUlaXB-4-96HXcaJf89hlJ-six4qvW7UYCq7cWuWU8StfJ636GiqASOLbEdif6z-gdFXc1qdETkoRmTA1F0UokSghPQnsUvjaYxw42~8vg8Mo79O3msrbpxiSB2iRtLgKedG~J4hIh28QJOIx2ntdVlLpA__'/>
      </div>
      <div className="card__content">
        <h2 className="card__title font-bauhaus">Bangalore</h2>
        <p className="card__fare">Fare starting at 30,000</p>
      </div>
    </div>
  );
};

export default Section5Card;