import { useState } from 'react';
import { Card, Button, Modal, Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import DataTable from '../../components/DataTable/DataTable';
import { Icon, Select } from '../../components';
import company, { companyColumns } from '../../store/companies/CompanyData';
import companies from '../../store/companies/CompanyData';

function Companies() {
const [showModal, setShowModal] = useState(false);

const handleShowModal = () => setShowModal(true);
const handleCloseModal = () => setShowModal(false);

return (
    <Layout title="Companies" content="container">
        <Block.Head>
            <Block.HeadBetween>
                <Block.HeadContent>
                    <Block.Title tag="h2">Companies</Block.Title>
                    <nav>
                        <ol className="breadcrumb breadcrumb-arrow mb-0">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Company</li>
                        </ol>
                    </nav>
                </Block.HeadContent>
                <Block.HeadContent>
                    <ul className="d-flex">
                        <li>
                            <Button className="d-md-none" size="md" variant="primary" onClick={handleShowModal}>
                                <Icon name="plus"/>
                                <span>Add</span>
                            </Button>
                        </li>
                        <li>
                            <Button className="d-none d-md-inline-flex" variant="primary" onClick={handleShowModal}>
                                <Icon name="plus"/>
                                <span>Add Company</span>
                            </Button>
                        </li>
                    </ul>
                </Block.HeadContent>
            </Block.HeadBetween>
        </Block.Head>

    <Block>
        <Card>
        <DataTable tableClassName="data-table-head-light table-responsive" data={company} columns={companyColumns}/>
        </Card>
    </Block>

    <Modal className="add-company-modal" show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
        <Modal.Title>Add Company</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form action="#">
            <Row className="g-3">
                <Col lg="6">
                    <Form.Group className="form-group">
                        <Form.Label>Select Package</Form.Label>
                        <div className="form-control-wrap">
                            <Select removeItemButton>
                                <option value="">Select Package</option>
                                <option value="1">Gold</option>
                                <option value="2">Silver</option>
                                <option value="2">Bronze</option>
                            </Select>
                        </div>
                    </Form.Group>
                </Col>
                <Col lg="6">
                    <Form.Group className="form-group">
                        <Form.Label htmlFor="firstname">Company Name</Form.Label>
                        <div className="form-control-wrap">
                            <Form.Control id="firstname" type="text" placeholder="Enter company name"/>
                        </div>
                    </Form.Group>
                </Col>
                <Col lg="6">
                    <Form.Group className="form-group">
                        <Form.Label htmlFor="firstname">First Name</Form.Label>
                        <div className="form-control-wrap">
                            <Form.Control id="firstname" type="text" placeholder="Enter first name"/>
                        </div>
                    </Form.Group>
                </Col>
                <Col lg="6">
                    <Form.Group className="form-group">
                        <Form.Label htmlFor="firstname">Last Name</Form.Label>
                        <div className="form-control-wrap">
                            <Form.Control id="firstname" type="text" placeholder="Enter last name"/>
                        </div>
                    </Form.Group>
                </Col>
                <Col lg="6">
                    <Form.Group className="form-group">
                        <Form.Label htmlFor="lastname">Contact Number.</Form.Label>
                        <div className="form-control-wrap">
                            <Form.Control id="lastname" type="number" placeholder="Enter Mobile No."/>
                        </div>
                    </Form.Group>
                </Col>
                
                <Col lg="6">
                    <Form.Group className="form-group">
                        <Form.Label htmlFor="lastname">Email ID</Form.Label>
                        <div className="form-control-wrap">
                            <Form.Control id="lastname" type="number" placeholder="Enter Email ID"/>
                        </div>
                    </Form.Group>
                </Col>
                <Col lg="6">
                    <Form.Group className="form-group">
                        <Form.Label>Type of company</Form.Label>
                        <div className="form-control-wrap">
                            <Select>
                                <option value="">Select Type of company</option>
                                <option value="1">Hotel</option>
                                <option value="2">Banquet Hall</option>
                                <option value="3">Conventional Center</option>
                                <option value="4">Function Hall/Gardens</option>
                            </Select>
                        </div>
                    </Form.Group>
                </Col>
                <Col lg="6">
                    <Form.Group className="form-group">
                        <Form.Label htmlFor="lastname">PAN card</Form.Label>
                        <div className="form-control-wrap">
                            <Form.Control id="lastname" type="number" placeholder="PAN card"/>
                        </div>
                    </Form.Group>
                </Col>
                <Col lg="6">
                    <Form.Group className="form-group">
                        <Form.Label htmlFor="lastname">GST Number</Form.Label>
                        <div className="form-control-wrap">
                            <Form.Control id="lastname" type="number" placeholder="GST Number"/>
                        </div>
                    </Form.Group>
                </Col>
                <Col lg="6">
                    <Form.Group className="form-group">
                        <Form.Label htmlFor="lastname">Discount Code</Form.Label>
                        <div className="form-control-wrap">
                            <Form.Control id="lastname" type="number" placeholder="Enter Discount Code"/>
                        </div>
                    </Form.Group>
                </Col>
                <Col lg="6">
                    <Form.Group className="form-group">
                        <Form.Label>State</Form.Label>
                        <div className="form-control-wrap">
                            <Select removeItemButton>
                                <option value="">Select State</option>
                                <option value="1">Telangana (TS)</option>
                                <option value="2">Andhra Pradesh (AP)</option>
                            </Select>
                        </div>
                    </Form.Group>
                </Col>
                <Col lg="6">
                    <Form.Group className="form-group">
                        <Form.Label>City</Form.Label>
                        <div className="form-control-wrap">
                            <Select removeItemButton>
                                <option value="">Select City</option>
                                <option value="1">Hyderabad</option>
                                <option value="2">Ranga reddy</option>
                                <option value="2">Vijayawada</option>
                                <option value="2">Vizag</option>
                            </Select>
                        </div>
                    </Form.Group>
                </Col>
                <Col lg="12">
                    <Form.Group className="form-group">
                        <Form.Label htmlFor="lastname">Address</Form.Label>
                        <div className="form-control-wrap">
                            <Form.Control as="textarea" rows="3" id="lastname" type="number" placeholder="Enter Address"/>
                        </div>
                    </Form.Group>
                </Col>
                <Col lg="12">
                    <Form.Group className="form-group">
                        <Form.Label htmlFor="lastname">Referal Code</Form.Label>
                        <div className="form-control-wrap">
                            <Form.Control id="lastname" type="number" placeholder="Enter Referal Code"/>
                        </div>
                    </Form.Group>
                </Col>
                <Col lg="12">
                    <div className="d-flex justify-content-end gap g-2">
                        <div className="gap-col">
                            <button type="button" className="border-0 btn" onClick={handleCloseModal}>Discard</button>
                        </div>
                        <div className="gap-col">
                            <Button variant="primary" onClick={handleCloseModal}>Pay Now</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Form>
        </Modal.Body>
    </Modal>

    </Layout>
)
}

export default Companies;