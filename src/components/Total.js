import React, { useEffect, useState } from "react";
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Chart from './Chart';

const Worldwide = () => {
  const [confirmed, setConfirmed] = useState([]);
  const [recovered, setRecovered] = useState([]);
  const [deaths, setDeaths] = useState([]);
  const [lastUpdate, setLastUpdate] = useState([]);

  useEffect(() => {
    getConfirmed();
    getRecovered();
    getDeaths();
    getLastUpdate();
  }, []);

  const getConfirmed = async() => {
    const response = await fetch(`https://covid19.mathdro.id/api`);
    const data = await response.json();
    setConfirmed(data.confirmed);
  }
  const getRecovered = async() => {
    const response = await fetch(`https://covid19.mathdro.id/api`);
    const data = await response.json();
    setRecovered(data.recovered);
  }
  const getDeaths = async() => {
    const response = await fetch(`https://covid19.mathdro.id/api`);
    const data = await response.json();
    setDeaths(data.deaths);
  }
  const getLastUpdate = async() => {
    const response = await fetch(`https://covid19.mathdro.id/api`);
    const data = await response.json();
    setLastUpdate(data.lastUpdate);
  }

  return (
    <div className="WorldWide">
     <main>
      <div className="container">
      <h3>Around the Globe</h3>
        <CardDeck>
          <Card className="bg-info">
            <Card.Body>
              <Card.Title><u>Total Infected</u></Card.Title>
              <Card.Text><h2>{ confirmed.value }</h2></Card.Text>
              <Card.Text><h6>Number of infected cases from COVID-19</h6></Card.Text>
            </Card.Body>
            <Card.Footer>
              <small>Last updated {new Date(lastUpdate).toDateString()}</small>
            </Card.Footer>
          </Card>
          <Card className="bg-success">
            <Card.Body>
              <Card.Title><u>Total Recovered</u></Card.Title>
              <Card.Text><h2>{ recovered.value }</h2></Card.Text>
              <Card.Text><h6>Recovered Rate: { ((recovered.value*100)/confirmed.value) }%</h6></Card.Text>
              <Card.Text><h6>Number of recoveries from COVID-19</h6></Card.Text>
            </Card.Body>
            <Card.Footer>
              <small>Last updated {new Date(lastUpdate).toDateString()}</small>
            </Card.Footer>
          </Card>
          <Card  className="bg-danger">
            <Card.Body>
              <Card.Title><u>Total Death</u></Card.Title>
              <Card.Text><h2>{ deaths.value }</h2></Card.Text>
              <Card.Text><h6>Death Rate: { ((deaths.value*100)/confirmed.value) }%</h6></Card.Text>
              <Card.Text><h6>Number of deaths from COVID-19</h6></Card.Text>
            </Card.Body>
            <Card.Footer>
              <small>Last updated {new Date(lastUpdate).toDateString()}</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
      <div className="container">
        <h3>Overall CoronaVirus Graph</h3>
        <Chart 
            confirmed={confirmed.value}
            recovered={recovered.value}
            deaths={deaths.value}
        />
      </div>
     </main>
    </div>
  );
};

export default Worldwide;