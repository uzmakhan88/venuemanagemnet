import { useState } from 'react';
import { Card, Button, Modal, Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import DataTable from '../../components/DataTable/DataTable';
import { Icon, Select } from '../../components';
import enquiries, { enquiryColumns } from '../../store/companies/Enquiry';
import companies from '../../store/companies/CompanyData';

function Enquiry() {
const [showModal, setShowModal] = useState(false);

const handleShowModal = () => setShowModal(true);
const handleCloseModal = () => setShowModal(false);

return (
    <Layout title="Enquiries" content="container">
        <Block.Head>
            <Block.HeadBetween>
                <Block.HeadContent>
                    <Block.Title tag="h2">Enquiries</Block.Title>
                    <nav>
                        <ol className="breadcrumb breadcrumb-arrow mb-0">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Enquiries</li>
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
                                <span>Add Enquiry</span>
                            </Button>
                        </li>
                    </ul>
                </Block.HeadContent>
            </Block.HeadBetween>
        </Block.Head>

    <Block>
        <Card>
        <DataTable tableClassName="data-table-head-light table-responsive" data={enquiries} columns={enquiryColumns}/>
        </Card>
    </Block>

    <Modal className="add-company-modal" show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
        <Modal.Title>Add Enquiry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form action="#">
            <Row className="g-3">
                <Col lg="12">
                    <Form.Group className="form-group">
                        <Form.Label htmlFor="firstname">Name</Form.Label>
                        <div className="form-control-wrap">
                            <Form.Control id="firstname" type="text" placeholder="Enter venue name"/>
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
                        <Form.Label htmlFor="lastname">Contact Number.</Form.Label>
                        <div className="form-control-wrap">
                            <Form.Control id="lastname" type="number" placeholder="Enter Mobile No."/>
                        </div>
                    </Form.Group>
                </Col>
                <Col lg="12">
                    <Form.Group className="form-group">
                        <Form.Label htmlFor="lastname">Message</Form.Label>
                        <div className="form-control-wrap">
                            <Form.Control as="textarea" rows="3" id="lastname" placeholder="Enter Message"/>
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

export default Enquiry;