import { useState } from 'react';
import { Card, Button, Modal, Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import DataTable from '../../components/DataTable/DataTable';
import { Icon, Select } from '../../components';
import PackagesData, { packageColumns } from '../../store/packages/PackagesData';

function Packages() {
const [showModal, setShowModal] = useState(false);

const handleShowModal = () => setShowModal(true);
const handleCloseModal = () => setShowModal(false);

return (
    <Layout title="Packages" content="container">
        <Block.Head>
            <Block.HeadBetween>
                <Block.HeadContent>
                    <Block.Title tag="h2">Packages</Block.Title>
                    <nav>
                        <ol className="breadcrumb breadcrumb-arrow mb-0">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Packages</li>
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
                                <span>Add Packages</span>
                            </Button>
                        </li>
                    </ul>
                </Block.HeadContent>
            </Block.HeadBetween>
        </Block.Head>

    <Block>
        <Card>
        <DataTable tableClassName="data-table-head-light table-responsive" data={PackagesData} columns={packageColumns}/>
        </Card>
    </Block>

    <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
        <Modal.Title>Add Package</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form action="#">
            <Row className="g-3">
                <Col lg="12">
                    <Form.Group className="form-group">
                        <Form.Label htmlFor="firstname">Package Name</Form.Label>
                        <div className="form-control-wrap">
                            <Form.Control id="firstname" type="text" placeholder="Enter package name"/>
                        </div>
                    </Form.Group>
                </Col>
                <Col lg="12">
                    <Form.Group className="form-group">
                        <Form.Label htmlFor="lastname">Price</Form.Label>
                        <div className="form-control-wrap">
                            <Form.Control id="lastname" type="number" placeholder="Enter Price"/>
                        </div>
                    </Form.Group>
                </Col>
                <Col lg="12">
                    <Form.Group className="form-group">
                        <Form.Label>No of halls</Form.Label>
                        <div className="form-control-wrap">
                            <Select removeItemButton>
                                <option value="">Select a No of halls</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </Select>
                        </div>
                    </Form.Group>
                </Col>
                <Col lg="12">
                    <Form.Group className="form-group">
                        <Form.Label>Software Model</Form.Label>
                        <div className="form-control-wrap">
                            <Select>
                                <option selected value="1">Booking</option>
                            </Select>
                        </div>
                    </Form.Group>
                </Col>
                {/* <Col lg="12">
                    <Form.Group className="form-group">
                        <Form.Label>Validity</Form.Label>
                        <div className="form-control-wrap">
                        <Form.Check type="radio" name="flexRadioDefault" id="flexRadioDefault1" label="Monthly" defaultChecked/>
                        <Form.Check type="radio" name="flexRadioDefault" id="flexRadioDefault" label="Yearly"/>
                        </div>
                    </Form.Group>
                </Col> */}
                <Col lg="12">
                    <Form.Group className="form-group">
                        <Form.Label>Access</Form.Label>
                        <div className="form-control-wrap">
                            <Select removeItemButton>
                                <option value="">Select a No of Access</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </Select>
                        </div>
                    </Form.Group>
                </Col>
                <Col lg="12">
                    <div className="d-flex justify-content-end gap g-2">
                        <div className="gap-col">
                            <button type="button" className="border-0 btn" onClick={handleCloseModal}>Discard</button>
                        </div>
                        <div className="gap-col">
                            <Button variant="primary" onClick={handleCloseModal}>Add Package</Button>
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

export default Packages;