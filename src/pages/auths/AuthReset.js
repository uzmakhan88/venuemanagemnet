import React from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

import Layout from '../../layout/fullpage';

import {Media, MediaGroup, Image, Logo} from '../../components';

function AuthResetPage() {
  return (
    <Layout title="Forgot Password" centered>
        <div className="container p-2 p-sm-4">
            <Card className="overflow-hidden card-gutter-lg rounded-4 card-auth card-auth-mh">
                <Row className="g-0 flex-lg-row-reverse">
                    <Col lg="5">
                        <Card.Body className="h-100 d-flex flex-column justify-content-center">
                            <div className="nk-block-head text-center">
                                <div className="nk-block-head-content">
                                    <h3 className="nk-block-title mb-2">Reset password</h3>
                                    <p className="small col-md-10 mx-auto">If you forgot your password, don't worry! we’ll email you instructions to reset your password.</p>
                                </div>
                            </div>
                            <Form action="#">
                                <Row className="gy-3">
                                    <Col className="col-12">
                                        <Form.Group className="form-group">
                                            <Form.Label htmlFor="email">Email</Form.Label>
                                            <div className="form-control-wrap">
                                                <Form.Control type="email" id="email" placeholder="Enter email address"/>
                                            </div>
                                        </Form.Group>
                                    </Col>
                                    <Col className="col-12">
                                        <div className="d-grid">
                                            <Button type="submit">Send Reset Link</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Form>
                            <div className="text-center mt-4">
                                <p className="small"><Link to="/auths/auth-login">Back to Login</Link></p>
                            </div>
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
                                        <div className="h1 title mb-3">Welcome to <br/> our community</div>
                                        <p>Discover how to manage Two-Factor Authentication in Joomla. The two-factor authentication in Joomla is a very popular security practice.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5">
                                <MediaGroup className="media-group-overlap">
                                    <Media size="sm" shape="circle" border className="border-white">
                                        <Image src="/images/avatar/a.jpg" alt="" />
                                    </Media>
                                    <Media size="sm" shape="circle" border className="border-white">
                                        <Image src="/images/avatar/b.jpg" alt="" />
                                    </Media>
                                    <Media size="sm" shape="circle" border className="border-white">
                                        <Image src="/images/avatar/c.jpg" alt="" />
                                    </Media>
                                    <Media size="sm" shape="circle" border className="border-white">
                                        <Image src="/images/avatar/d.jpg" alt="" />
                                    </Media>
                                </MediaGroup>
                                <p className="small mt-2">More than 2k people joined us, it's your turn</p>
                            </div>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </div>
    </Layout>
  )
}

export default AuthResetPage;
