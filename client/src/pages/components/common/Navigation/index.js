import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Brand from '../../images/avant.svg';
import { Switch, Route, Link, Router } from "react-router-dom";
import Styles from './nav.module.css';

// function Navigation() {
//     return (
//         <Router>
//             <div>
//                 {/* Navigation Bar Component */}
//                 <Navbar collapseOnSelect variant="light" bg="light" expand="lg" className={Styles.nav} >
//                     <Navbar.Brand href="#">
//                         <img src={Brand} className={`${Styles.image} d-inline-block`} alt="Logo" />
//                     </Navbar.Brand>

//                     <Navbar.Toggle aria-controls="club-nav" />

//                     <Navbar.Collapse id="club-nav" activeKey="/home">
//                         <Nav className="ml-auto">

//                             <Nav.Item>
//                                 <Nav.Link as={Link} to="/home">Home</Nav.Link>
//                             </Nav.Item>
//                             <Nav.Item>
//                                 <Nav.Link as={Link} to="/resources">Resources</Nav.Link>
//                             </Nav.Item>
//                             <Nav.Item>
//                                 <Nav.Link as={Link} to="/events">Events</Nav.Link>
//                             </Nav.Item>
//                             <Nav.Item>
//                                 <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
//                             </Nav.Item>
//                             <Nav.Item>
//                                 <Nav.Link as={Link} to="/#coordinators">Coordinators</Nav.Link>
//                             </Nav.Item>
//                             <Nav.Item>
//                                 <Nav.Link as={Link} to="/#contact">Contact Us</Nav.Link>
//                             </Nav.Item>

//                         </Nav>
//                     </Navbar.Collapse>

//                 </Navbar >


//                 {/* Routes */}
//                 <Switch>
//                     <Route exact path="/home" component={Home}>
//                         <Avant />
//                     </Route>
//                     <Route exact path="/resources" component={Resources}>
//                         <h1>Resources</h1>
//                     </Route>
//                     <Route exact path="/events" component={Events}>
//                         <h1>Events</h1>
//                     </Route>
//                     <Route exact path="/gallery" component={Gallery}>
//                         <h1>Gallery</h1>
//                     </Route>
//                     <Route exact path="/#coordinators" component={Coordinators}>
//                         <h1>Coordinators</h1>
//                     </Route>
//                     <Route exact path="/#contact" component={"Contact Us"}>
//                         <h1>Contact Us</h1>
//                     </Route>
//                 </Switch>
//             </div>
//         </Router>
//     );
// }

// export default Navigation;

//
// ---> Another Idea to implement Nav Bar
// class Navigation extends React.Component {
//     constructor(props) {
//         super(props);
//         this.links = props.links;
//     }

//     render() {

//         //Create A List of Nav Items using the passed array of Links
//         const list = this.links.map(tuple => {
//             const propertyName = Object.keys(tuple)[0];

//             return (
//                 <Nav.Item key={propertyName}>
//                     <Nav.Link as={Link} to={tuple[propertyName]}>propertyName</Nav.Link>
//                 </Nav.Item>
//             );
//         });

//         const routes = this.links.map(tuple => {
//             const propertyName = Object.keys(tuple)[0];

//             return (
//                 <Route key={tuple[propertyName]} path={tuple[propertyName]}>
//                     {tuple["component"]}
//                 </Route>
//             );
//         });

//         //Return the Nav Component
//         return (
//             <Router>
//                 <div>
//                     {/* Navigation Bar Component */}
//                     <Navbar collapseOnSelect variant="light" bg="light" expand="lg" className={Styles.nav}>
//                         <Navbar.Brand href="#">
//                             <img src={Brand} className={`${Styles.image} d-inline-block`} alt="Logo" />
//                         </Navbar.Brand>
//                         <Navbar.Toggle aria-controls="club-nav" />
//                         <Navbar.Collapse id="club-nav" activeKey="/home">
//                             <Nav className="ml-auto">
//                                 {list}
//                             </Nav>
//                         </Navbar.Collapse>
//                     </Navbar>

//                     {/* Routes */}
//                     <Switch>
//                         {routes}
//                     </Switch>
//                 </div>
//             </Router>
//         );
//     }
// }