import React, { useEffect, useState } from 'react'
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

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8080/api/user/details', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          window.alert("Email doesn't exist");
          throw new Error("Failed to fetch");
        }
      })
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((error) => {
        window.alert('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const upgradeStructure = (structure) => {
    fetch('http://localhost:8080/api/base/' + structure , {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      },
    })
      .then((r) => {
        if (200 === r.status) {
          r.json().then((r) => setData(r))
        } else {
          window.alert("Update failed")
        }
      })
  }
  const goToBrewery = () => navigate('/brewery');
  const goToBarracks = () => navigate('/barracks');
  const goToStalls = () => navigate('/stalls');

  if (loading) {
    return <div>Loading...</div>
  }
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
          <div style={{ position: 'absolute', top: '10%', left: '10%', zIndex: 1, fontSize: "30px", fontWeight: 'bold' }}>
            <img src={upgradeImg} width={60} height={60} alt="upgrade" />
            <br/>
            <text>{data.smithy.woodCost}</text>
            <button 
              style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
              onClick={() => upgradeStructure('smithy')}
            >
            </button>
          </div>
          <div style={{ position: 'absolute', top: '40%', left: '10%', zIndex: 1, fontSize: "30px", fontWeight: 'bold' }}>
            <img src={goldImg} width={60} height={60} alt="buy" />
            PURCHASE
            <button 
              style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
              onClick={goToBrewery}
            >
            </button>
          </div>
          <div style={{ position: 'absolute', top: '8%', left: '22%', zIndex: 1, fontSize: "30px", fontWeight: 'bold' }}>
            LVL: {data.smithy.level}
          </div>

          <div style={{ position: 'absolute', top: '8%', right: '10%', zIndex: 1 }}>
            <img src={breweryImage} width={300} height={300} alt="brewery" />
          </div>
          <div style={{ position: 'absolute', top: '10%', right: '10%', zIndex: 1, fontSize: "30px", fontWeight: 'bold'  }}>
            <img src={upgradeImg} width={60} height={60} alt="upgrade" />
            <br/>
            <text>{data.alchemyBrewery.woodCost}</text>
            <button 
              style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
              onClick={() => upgradeStructure('alchemy-brewery')}
            >
            </button>
          </div>
          <div style={{ position: 'absolute', top: '40%', right: '15%', zIndex: 1, fontSize: "30px", fontWeight: 'bold'  }}>
            <img src={goldImg} width={60} height={60} alt="buy" />
            PURCHASE
            <button 
              style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
              onClick={goToBrewery}
            >
            </button>
          </div>
          <div style={{ position: 'absolute', top: '8%', right: '25%', zIndex: 1, fontSize: "30px", fontWeight: 'bold' }}>
            LVL: {data.alchemyBrewery.level}
          </div>

          <div style={{ position: 'absolute', bottom: '2%', left: '10%', zIndex: 1 }}>
            <img src={barracksImage} width={300} height={300} alt="barracks" />
          </div>
          <div style={{ position: 'absolute', bottom: '30%', left: '10%', zIndex: 1, fontSize: "30px", fontWeight: 'bold'  }}>
            <img src={upgradeImg} width={60} height={60} alt="upgrade" />
            <br/>
            <text>{data.barrack.woodCost}</text>
            <button 
              style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
              onClick={() => upgradeStructure('barracks')}
            >
            </button>
          </div>
          <div style={{ position: 'absolute', bottom: '5%', left: '10%', zIndex: 1, fontSize: "30px", fontWeight: 'bold'  }}>
            <img src={goldImg} width={60} height={60} alt="buy" />
            PURCHASE
            <button 
              style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
              onClick={goToBrewery}
            >
            </button>
          </div>
          <div style={{ position: 'absolute', bottom: '40%', left: '22%', zIndex: 1, fontSize: "30px", fontWeight: 'bold' }}>
            LVL: {data.barrack.level}
          </div>

          <div style={{ position: 'absolute', bottom: '2%', right: '10%', zIndex: 1 }}>
            <img src={stallsImage} width={300} height={300} alt="stalls" />
          </div>
          <div style={{ position: 'absolute', bottom: '30%', right: '10%', zIndex: 1, fontSize: "30px", fontWeight: 'bold'  }}>
            <img src={upgradeImg} width={60} height={60} alt="upgrade" />
            <br/>
            <text>{data.stall.woodCost}</text>
            <button 
              style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
              onClick={() => upgradeStructure('stall')}
            >
            </button>
          </div>
          <div style={{ position: 'absolute', bottom: '5%', right: '15%', zIndex: 1, fontSize: "30px", fontWeight: 'bold'  }}>
            <img src={goldImg} width={60} height={60} alt="buy" />
            PURCHASE
            <button 
              style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
              onClick={goToBrewery}
            >
            </button>
          </div>
          <div style={{ position: 'absolute', bottom: '40%', right: '25%', zIndex: 1, fontSize: "30px", fontWeight: 'bold' }}>
            LVL: {data.stall.level}
          </div>

        </div>
        <Col>
        </Col>
        <Col>
        <div style={{fontSize: "30px", fontWeight: 'bold' }}>
            User: {data.userName}
        </div>
        <br/>
        <div style={{fontSize: "30px", fontWeight: 'bold' }}>
            Wood: {data.wood}
        </div>
        <br/>
        <div style={{ fontSize: "30px", fontWeight: 'bold' }}>
            Gold: {data.gold}
        </div>
        <br/>
        <div style={{ fontSize: "30px", fontWeight: 'bold' }}>
            Herbs: {data.herbs}
        </div>
        <br/>
        <div style={{ fontSize: "30px", fontWeight: 'bold' }}>
            Metal: {data.metals}
        </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Base