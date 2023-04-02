import React from 'react';
import { Row, Col, Card, Form, Button} from 'react-bootstrap';
import { Link} from "react-router-dom";

import Layout from '../../layout/fullpage';

import {Media, MediaGroup, Image, OverlineTitle, Logo} from '../../components';

const AuthLoginPage= () => {

  return (
    <>
        <Layout title="Login" centered>
            <div className="container p-2 p-sm-4">
                <Card className="overflow-hidden card-gutter-lg rounded-4 card-auth card-auth-mh">
                    <Row className="g-0 flex-lg-row-reverse">
                        <Col lg="5">
                            <Card.Body className="h-100 d-flex flex-column justify-content-center">
                                <div className="nk-block-head text-center">
                                    <div className="nk-block-head-content">
                                        <h3 className="nk-block-title mb-1">Login to Account</h3>
                                        <p className="small">Please sign-in to your account</p>
                                    </div>
                                </div>
                                <Form action="#">
                                    <Row className="gy-3">
                                        <Col className="col-12">
                                            <Form.Group className="form-group">
                                                <Form.Label htmlFor="email">Email</Form.Label>
                                                <div className="form-control-wrap">
                                                    <Form.Control type="text" id="email" defaultValue={"venuemanagement@mail.com"} placeholder="Enter email" required/>
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col className="col-12">
                                            <Form.Group className="form-group">
                                                <Form.Label htmlFor="password">Password</Form.Label>
                                                <div className="form-control-wrap">
                                                    <Form.Control type="text" id="password" defaultValue={"12345678"} placeholder="Enter password" required/>
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col className="col-12 ">
                                            <div className="d-flex flex-wrap justify-content-between">
                                                {/* <Form.Check 
                                                    className="form-check-sm"
                                                    type="checkbox"
                                                    id="rememberMe"
                                                    label="Remember Me"
                                                />
                                                <Link to="/auths/auth-reset" className="small">Forgot Password?</Link> */}
                                            </div>
                                        </Col>
                                        <Col className="col-12">
                                            <div className="d-grid">
                                                <Link className="w-100" to="/dashboard">
                                                <Button className="w-100" type="submit">Login to account</Button>
                                                </Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </Form>
                                
                            </Card.Body>
                        </Col>
                        <Col lg="7">
                            <Card.Body className="bg-darker is-theme has-mask has-mask-1 h-100 d-flex flex-column justify-content-end">
                                <div className="mask mask-1"></div>
                                <div className="brand-logo">
                                    <Logo />
                                </div>
                                <div className="row">
                                    <div className="col-sm-11">
                                        <div className="mt-4">
                                            <div className="h1 title mb-3">Welcome back to <br/> VenueManagement</div>
                                        </div>
                                    </div>
                                </div>
                                
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </div>
        </Layout>
    </>
  )
}

export default AuthLoginPage;
