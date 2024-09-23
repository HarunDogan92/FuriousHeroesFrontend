import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Container, Row, Col } from 'react-grid-system';
import grass from '../resources/grass.png'; 
import smithyImage from '../resources/smithy.png'; // Add images for each structure
import breweryImage from '../resources/alchemy.png';
import barracksImage from '../resources/barracks.png';
import stallsImage from '../resources/stalls.png';
import upgradeImg from '../resources/upgrade.png';
import goldImg from '../resources/gold.png';


const Base = () => {
  const navigate = useNavigate()

  const goToSmithy = () => navigate('/smithy');
  const goToBrewery = () => navigate('/brewery');
  const goToBarracks = () => navigate('/barracks');
  const goToStalls = () => navigate('/stalls');
  return (
    <Container>
      <br />
      <br />
      <Row>
        <Col>
        <br />
        <br />
        <div><img src={localStorage.getItem('avatar') } width={500} height={500} /></div>
        </Col>
        <div style={{ position: 'relative', width: '800px', height: '800px' }}>
          <img src={grass} width={800} height={800} alt="grass" />

          <div style={{ position: 'absolute', top: '10%', left: '10%', zIndex: 1 }}>
            <img src={smithyImage} width={300} height={300} alt="smithy" />
          </div>
          <div style={{ position: 'absolute', top: '10%', left: '10%', zIndex: 1 }}>
            <img src={upgradeImg} width={60} height={60} alt="upgrade" />
            <button 
              style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
              onClick={goToSmithy}
            >
            </button>
          </div>
          <div style={{ position: 'absolute', top: '40%', left: '10%', zIndex: 1, fontSize: "30px", fontWeight: 'bold' }}>
            <img src={goldImg} width={60} height={60} alt="buy" />
            PURCHASE
            <button 
              style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
              onClick={goToSmithy}
            >
            </button>
          </div>

          <div style={{ position: 'absolute', top: '8%', right: '10%', zIndex: 1 }}>
            <img src={breweryImage} width={300} height={300} alt="brewery" />
          </div>
          <div style={{ position: 'absolute', top: '10%', right: '10%', zIndex: 1 }}>
            <img src={upgradeImg} width={60} height={60} alt="upgrade" />
            <button 
              style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
              onClick={goToSmithy}
            >
            </button>
          </div>
          <div style={{ position: 'absolute', top: '40%', right: '15%', zIndex: 1, fontSize: "30px", fontWeight: 'bold'  }}>
            <img src={goldImg} width={60} height={60} alt="buy" />
            PURCHASE
            <button 
              style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
              onClick={goToSmithy}
            >
            </button>
          </div>

          <div style={{ position: 'absolute', bottom: '2%', left: '10%', zIndex: 1 }}>
            <img src={barracksImage} width={300} height={300} alt="barracks" />
          </div>
          <div style={{ position: 'absolute', bottom: '30%', left: '10%', zIndex: 1 }}>
            <img src={upgradeImg} width={60} height={60} alt="upgrade" />
            <button 
              style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
              onClick={goToSmithy}
            >
            </button>
          </div>
          <div style={{ position: 'absolute', bottom: '5%', left: '10%', zIndex: 1, fontSize: "30px", fontWeight: 'bold'  }}>
            <img src={goldImg} width={60} height={60} alt="buy" />
            PURCHASE
            <button 
              style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
              onClick={goToSmithy}
            >
            </button>
          </div>

          <div style={{ position: 'absolute', bottom: '2%', right: '10%', zIndex: 1 }}>
            <img src={stallsImage} width={300} height={300} alt="stalls" />
          </div>
          <div style={{ position: 'absolute', bottom: '30%', right: '10%', zIndex: 1 }}>
            <img src={upgradeImg} width={60} height={60} alt="upgrade" />
            <button 
              style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
              onClick={goToSmithy}
            >
            </button>
          </div>
          <div style={{ position: 'absolute', bottom: '5%', right: '15%', zIndex: 1, fontSize: "30px", fontWeight: 'bold'  }}>
            <img src={goldImg} width={60} height={60} alt="buy" />
            PURCHASE
            <button 
              style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
              onClick={goToSmithy}
            >
            </button>
          </div>

        </div>
        <Col>
        </Col>
        <Col>
        test2
        </Col>
      </Row>
    </Container>
  )
}

export default Base