import { useState } from 'react';
import { Card, Button, Modal, Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import DataTable from '../../components/DataTable/DataTable';
import { Icon, Select } from '../../components';
import venues, { venueColumns } from '../../store/companies/VenueData';
import companies from '../../store/companies/CompanyData';

function Venues() {
const [showModal, setShowModal] = useState(false);

const handleShowModal = () => setShowModal(true);
const handleCloseModal = () => setShowModal(false);

return (
    <Layout title="Venues" content="container">
        <Block.Head>
            <Block.HeadBetween>
                <Block.HeadContent>
                    <Block.Title tag="h2">Venues</Block.Title>
                    <nav>
                        <ol className="breadcrumb breadcrumb-arrow mb-0">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Venues</li>
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
                                <span>Add Venues</span>
                            </Button>
                        </li>
                    </ul>
                </Block.HeadContent>
            </Block.HeadBetween>
        </Block.Head>

    <Block>
        <Card>
        <DataTable tableClassName="data-table-head-light table-responsive" data={venues} columns={venueColumns}/>
        </Card>
    </Block>

    <Modal className="add-company-modal" show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
        <Modal.Title>Add Venue</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form action="#">
            <Row className="g-3">
                <Col lg="12">
                    <Form.Group className="form-group">
                        <Form.Label htmlFor="firstname">Venue name</Form.Label>
                        <div className="form-control-wrap">
                            <Form.Control id="firstname" type="text" placeholder="Enter venue name"/>
                        </div>
                    </Form.Group>
                </Col>
                
                <Col lg="12">
                    <Form.Group className="form-group">
                        <Form.Label>Select Hall Type</Form.Label>
                        <div className="form-control-wrap">
                            <Select removeItemButton>
                                <option value="">Select hall type</option>
                                <option value="1">Indoor</option>
                                <option value="2">Outdoor</option>
                            </Select>
                        </div>
                    </Form.Group>
                </Col>
                <Col lg="12">
                    <Form.Group className="form-group">
                        <Form.Label>Company</Form.Label>
                        <div className="form-control-wrap">
                            <Select removeItemButton>
                                <option value="">Select Company</option>
                                <option value="1">Siva</option>
                                <option value="2">VM Pvt. Ltd</option>
                                <option value="2">Alnkrita</option>
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
                            <Button variant="primary" onClick={handleCloseModal}>Save</Button>
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

export default Venues;