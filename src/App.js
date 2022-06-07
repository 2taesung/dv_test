import {useState} from 'react';
import { Navbar, Container, Nav, Dropdown, Button } from 'react-bootstrap';
import './App.css';
import LineChart from './charts/Line';
import LineChart2 from './charts/Line2';
// import ProductCard from './component/Productcard';
import Login from './component/Login';
// import Datepicker from './component/Datepicker';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import data from './data';
import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [startDate, setStartDate] = useState(new Date("2022/06/01"));
  const [endDate, setEndDate] = useState(new Date("2022/06/01"));
  const [envData, setEnvData] = useState([]);
  return (
    <div className="App">

      <Navbar bg="dark" variant="dark" style={{display: 'block'}}>
        <Container>
          <img src={process.env.PUBLIC_URL + '/logo.png'} width="50px" height="50px" alt=''/>
          <Navbar.Brand href="/">NEXTON</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="dv">dv</Nav.Link>
            <Nav.Link href="/">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={   
          <>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop:80 }}>
              <Login></Login>
            </div>   
          </>
        }/>
        <Route path="/dv" element={
          <>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <div className="row">
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <div style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
                    <DatePicker
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                    />
                    <DatePicker
                        selected={endDate}
                        onChange={date => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                    />
                  </div>
                  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                        S3
                      </Dropdown.Toggle>
                      <Dropdown.Menu variant="dark">
                        <Dropdown.Item href="#/action-1" active>
                          S3
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">S4</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">N1</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Button onClick={()=>{
                      axios.post('http://127.0.0.1:3011/get', {
                        startDate: startDate,
                        endDate: endDate,
                      })
                      .then((data)=>{
                        const temp = [...data.data]
                        setEnvData(temp)
                        console.log('클릭')
                      })
                      .catch(()=>{ console.log('실패')})
                    }}>적용</Button>
                  </div>
                </div>
              </div>
            </div>
            <div style={{marginRight:30, display: 'flex', justifyContent: 'end'}}>
              <Button style={{marginRight:10}}>풍속+</Button>
              <Button>조도+</Button>
            </div>
            <LineChart2 envData={envData}/>
            <LineChart/>
          </>
        }/>
      </Routes>
    </div>
  );
}

export default App;
