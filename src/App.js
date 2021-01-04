import React, { Component } from 'react';
import {
  Navbar, Nav, Container, Form, Button, Breadcrumb, Row, Col, NavDropdown, Spinner, Tabs, Tab, Table,
  ProgressBar,
  Pagination
} from 'react-bootstrap';

class App
  extends Component {
  state = {}
  render() {
    return (
      <Container fluid className="pb-sm-3">
        <Navbar bg="dark" variant="dark" style={{ marginRight: "-15px", marginLeft: "-15px" }}>
          <Navbar.Brand href="/">Akses Sport</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Item>
              <Nav.Link href="#">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Berita</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Live Scores</Nav.Link>
            </Nav.Item>
            <NavDropdown title="Piala&Liga">
              <NavDropdown.Item href="#">1</NavDropdown.Item>
              <NavDropdown.Item href="#">2</NavDropdown.Item>
              <NavDropdown.Item href="#">3</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item>
              <Nav.Link href="#">Transfer Pemain</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Tim</Nav.Link>
            </Nav.Item>
          </Nav>
          <Form inline>
            <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
            <Button type="button" variant="outline-info">Search</Button>
          </Form>
        </Navbar>
        <Row>
          <Col md={{ offset: "7", span: "auto" }} className="pb-sm-2">
            <Breadcrumb className>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="#">Liga Inggris</Breadcrumb.Item>
              <Breadcrumb.Item href="#" active>Transfer Pemain</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col md={{ offset: "2" }}>
            <h5>Rumor Tranfer Pemain</h5>
          </Col>
          <Col md={{ offset: "4" }} >
            <Spinner animation="border" variant="success" />
            <Spinner animation="grow" variant="success" />
          </Col>
        </Row>
        <Row>
          <Col md={{ span: "auto", offset: "2" }}>
            <Tabs >
              <Tab eventKey="semuaTransfer" title="Semua Transfer">
                <Tab.Content>
                  <p>Ini berita mengenai tranfer Pemain</p>
                  <Table>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Nama Pemain</th>
                        <th>Tim</th>
                        <th>Transfer</th>
                        <th>Proses Transfer</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>MAROUANE FELLAINI</td>
                        <td>MANCHESTER UNITED</td>
                        <td>SHANDONG LUNENG</td>
                        <td><ProgressBar now={85} label="85%" striped /></td>
                      </tr>

                      <tr>
                        <td>2</td>
                        <td>LUIS NANI</td>
                        <td>SPORTINGG CP</td>
                        <td>ORLANDO CITY</td>
                        <td><ProgressBar now={55} label="55%" striped /></td>
                      </tr>

                      <tr>
                        <td>3</td>
                        <td>MAREK HAMSIK</td>
                        <td>NAPOLI</td>
                        <td>DALIAN YIFANG</td>
                        <td><ProgressBar now={95} label="95%" striped /></td>
                      </tr>

                      <tr>
                        <td>4</td>
                        <td>SARDAR AZMOUN</td>
                        <td>RUBIN KAZAN</td>
                        <td>ZENIT ST PETERSBURG</td>
                        <td><ProgressBar now={100} label="100%" striped /></td>
                      </tr>

                      <tr>
                        <td>5</td>
                        <td>MICHY BATSHUAYI</td>
                        <td>CHELSEA</td>
                        <td>CRYSTAL PALACE</td>
                        <td><ProgressBar now={50} label="50%" striped /></td>
                      </tr>

                      <tr>
                        <td>6</td>
                        <td>LUCAS PIAZON</td>
                        <td>CHELSEA</td>
                        <td>CHIEVO</td>
                        <td><ProgressBar now={100} label="100%" striped /></td>
                      </tr>
                    </tbody>
                  </Table>
                  <Pagination>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item>1</Pagination.Item>
                    <Pagination.Ellipsis />

                    <Pagination.Item>10</Pagination.Item>
                    <Pagination.Item>11</Pagination.Item>
                    <Pagination.Item>12</Pagination.Item>
                    <Pagination.Item>13</Pagination.Item>
                    <Pagination.Item>14</Pagination.Item>
                    <Pagination.Ellipsis />

                    <Pagination.Item>20</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                  </Pagination>
                  <Button type="button" className="mr-sm-2">Informasi</Button>
                  <Button type="button">Versi Website</Button>
                </Tab.Content>
              </Tab>
              <Tab eventKey="ligaPrimerInggris" title="Liga Primer Inggris">
                <p>Ini berita mengenai Liga Primer Inggris</p>
              </Tab>
              <Tab eventKey="serieA" title="Serie A">
                <p>Ini berita mengenai Serie A </p>
              </Tab>
              <Tab eventKey="divisiPrimera" title="Divisi Primera">
                <p>Ini berita mengenai Divisi Primera </p>
              </Tab>
              <Tab eventKey="bundesliga" title="Bundesliga">
                <p>Ini berita mengenai Bundes Liga </p>
              </Tab>
              <Tab eventKey="liga1Indonesia" title="Liga 1 Indonesia">
                <p>Ini berita mengenai Liga 1 Indonesia </p>
              </Tab>
            </Tabs>
          </Col>
        </Row>



      </Container >

    );
  }
}

export default App
  ;