import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import "./index.scss";
export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <Row>
          <Col md={4}>
            <div className="login__left">
              <h3>Login Here</h3>
              <input
                type="text"
                id="userIdl"
                class="form-control"
                placeholder="Email *"
                name="user"
                required
              />
              <input
                type="text"
                id="userIdl"
                class="form-control"
                placeholder="Password *"
                name="user"
                required
              />
              <input type="submit" class="btnSubmit" value="Login" />
            </div>
          </Col>
          <Col md={8}>
            <div className="login__right">
              <h3>Signup Here</h3>
              <div className="signup-forms">
                <Row>
                  <Col>
                    <input
                      type="text"
                      id="userIdl"
                      class="form-control"
                      placeholder="First Name *"
                      name="user"
                      required
                    />
                  </Col>
                  <Col>
                    <input
                      type="text"
                      id="userIdl"
                      class="form-control"
                      placeholder="Middle Name "
                      name="user"
                      required
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <input
                      type="text"
                      id="userIdl"
                      class="form-control"
                      placeholder="Last Name *"
                      name="user"
                      required
                    />
                  </Col>
                  <Col>
                    <input
                      type="text"
                      id="userIdl"
                      class="form-control"
                      placeholder="Email *"
                      name="user"
                      required
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <input
                      type="text"
                      id="userIdl"
                      class="form-control"
                      placeholder="Password *"
                      name="user"
                      required
                    />
                  </Col>
                  <Col>
                    <input
                      type="text"
                      id="userIdl"
                      class="form-control"
                      placeholder="Confirm Password *"
                      name="user"
                      required
                    />
                  </Col>
                </Row>
                <input type="submit" class="btnSubmit" value="Signup" />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
