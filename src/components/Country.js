import React, { useEffect, useState } from "react";
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Chart from './Chart';

const Country = () => {
    const [search, setSearch] = useState("");
    const [lastUpdate, setLastUpdate] = useState([]);
    const [confirmed, setConfirmed] = useState([]);
    const [recovered, setRecovered] = useState([]);
    const [deaths, setDeaths] = useState([]);
    const [query, setQuery] = useState("india");
    const [provinces, setProvinces] = useState([]);

  useEffect(() => {
    getConfirmed();
    getRecovered();
    getDeaths();
    getLastUpdate();
    getProvinces();
  }, [ query ]);

  const getConfirmed = async() => {
    const response = await fetch(`https://covid19.mathdro.id/api/countries/${query}`);
    const data = await response.json();
    setConfirmed(data.confirmed);
  }
  const getRecovered = async() => {
    const response = await fetch(`https://covid19.mathdro.id/api/countries/${query}`);
    const data = await response.json();
    setRecovered(data.recovered);
  }
  const getDeaths = async() => {
    const response = await fetch(`https://covid19.mathdro.id/api/countries/${query}`);
    const data = await response.json();
    setDeaths(data.deaths);
  }
  const getLastUpdate = async() => {
    const response = await fetch(`https://covid19.mathdro.id/api/countries/${query}`);
    const data = await response.json();
    setLastUpdate(data.lastUpdate);
  }
  const getProvinces = async() => {
    const response = await fetch(`https://covid19.mathdro.id/api/countries/${query}/confirmed`);
    const data = await response.json();
    setProvinces(data);
  }
  const updateSearch = e => {
    setSearch(e.target.value);
  };
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="Country">
     <main className="mt-0">
     <h2>Country Wise Analysis</h2>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="Enter Country Name(default:INDIA)"
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="container Country">
        <h1>{search}</h1>
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
        <br></br>
        <Chart 
            confirmed={confirmed.value}
            recovered={recovered.value}
            deaths={deaths.value}
        /> 
        <br></br>
        <h3>State Wise Analysis</h3>
        <Table responsive striped bordered hover variant="dark" >
            <thead>
                <tr>
                    <th>State</th>
                    <th>Confirmed</th>
                    <th>Recovered</th>
                    <th>Active</th>
                    <th>Deaths</th>
                </tr>
            </thead>
            <tbody>
                {provinces.map(province => (
                    <tr>
                        <td>{province.provinceState}</td>
                        <td className="text-info">{province.confirmed}</td>
                        <td className="text-success">{province.recovered}</td>
                        <td className="text-warning">{province.active}</td>
                        <td className="text-danger">{province.deaths}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
      </div>
     </main>
    </div>
  );
};

export default Country;