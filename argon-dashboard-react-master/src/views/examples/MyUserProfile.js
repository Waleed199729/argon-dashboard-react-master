import React, { useEffect } from "react";
import UserHeader from "components/Headers/UserHeader";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUsers } from "redux/Actions";
import { updateUser } from "redux/Actions";

const MyUserProfile = () => {
  const editingUser = useSelector((state) => state.users.editingUser);
  const email = editingUser?.email;
  //   debugger;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  let initialValues = null;
  if (editingUser) {
    initialValues = {
      id: editingUser.id,
      username: editingUser.username,
      email: editingUser.email,
      firstName: editingUser.firstName,
      lastName: editingUser.lastName,
    };
  } else {
    initialValues = {
      id: 0,
      username: "",
      email: "",
      firstName: "",
      lastName: "",
    };
  }

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid Email Address")
      .required("Email is required"),
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
  });

  //   const handleSubmit = (values) => {
  //     alert("Data submitted");
  //     // console.log(values);
  //     dispatch(addUsers(values));
  //     navigate("/admin/myusertable");
  //   };
  const handleSubmit = (values) => {
    let newUser = values;
    newUser.id = Date.now(); //Date.now only give us the timeStamp
    debugger;
    // console.log(newUser);
    // if (editingUser) {
    //   const updatedRecord = {
    //     id: editingUser.id,
    //     username: values.username,
    //     email: values.email,
    //     firstName: values.firstName,
    //     lastName: values.lastName,
    //   };
    //   dispatch(updateUser(updatedRecord));
    // } else {
    dispatch(addUsers(newUser));
    // }
    navigate("/admin/myusertable");
    // Handle form submission
  };
  const editUser = (values, { resetForm }) => {
    console.log("value ", values);

    const updatedRecord = {
      id: editingUser.id,
      username: values.username,
      email: values.email,
      firstName: values.firstName,
      lastName: values.lastName,
    };
    // console.log(updatedRecord);
    dispatch(updateUser(updatedRecord));
    resetForm();
    navigate("/admin/myusertable");
  };

  return (
    <>
      <UserHeader />
      <Container className="mt--7 ml-9" fluid>
        <Row>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">My account</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Settings
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={email == null ? handleSubmit : editUser}
                  enableReinitialize={true}
                >
                  {(formik) => (
                    <Form>
                      <h6 className="heading-small text-muted mb-4">
                        User information
                      </h6>
                      <div className="pl-lg-4">
                        <Row>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-username"
                              >
                                Username
                              </label>
                              <Field
                                className="form-control-alternative"
                                name="username"
                                id="input-username"
                                placeholder="Username"
                                type="text"
                              />
                              <ErrorMessage
                                name="username"
                                component="div"
                                className="text-danger"
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-email"
                              >
                                Email address
                              </label>
                              <Field
                                className="form-control-alternative"
                                name="email"
                                id="input-email"
                                placeholder="jesse@example.com"
                                type="email"
                              />
                              <ErrorMessage
                                name="email"
                                component="div"
                                className="text-danger"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-first-name"
                              >
                                First name
                              </label>
                              <Field
                                className="form-control-alternative"
                                name="firstName"
                                id="input-first-name"
                                placeholder="First name"
                                type="text"
                              />
                              <ErrorMessage
                                name="firstName"
                                component="div"
                                className="text-danger"
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-last-name"
                              >
                                Last name
                              </label>
                              <Field
                                className="form-control-alternative"
                                name="lastName"
                                id="input-last-name"
                                placeholder="Last name"
                                type="text"
                              />
                              <ErrorMessage
                                name="lastName"
                                component="div"
                                className="text-danger"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                      </div>
                      <hr className="my-4" />
                      {email == null ? (
                        <Button color="primary" type="submit">
                          Submit
                        </Button>
                      ) : (
                        <Button color="primary" type="submit">
                          Update
                        </Button>
                      )}
                    </Form>
                  )}
                </Formik>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyUserProfile;

//  {/ Address /}
//  <h6 className="heading-small text-muted mb-4">
//  Contact information
// </h6>
// <div className="pl-lg-4">
//  <Row>
//      <Col md="12">
//          <FormGroup>
//              <label
//                  className="form-control-label"
//                  htmlFor="input-address"
//              >
//                  Address
//              </label>
//              <Input
//                  className="form-control-alternative"
//                  defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
//                  id="input-address"
//                  placeholder="Home Address"
//                  type="text"
//              />
//          </FormGroup>
//      </Col>
//  </Row>
//  <Row>
//      <Col lg="4">
//          <FormGroup>
//              <label
//                  className="form-control-label"
//                  htmlFor="input-city"
//              >
//                  City
//              </label>
//              <Input
//                  className="form-control-alternative"
//                  defaultValue="New York"
//                  id="input-city"
//                  placeholder="City"
//                  type="text"
//              />
//          </FormGroup>
//      </Col>
//      <Col lg="4">
//          <FormGroup>
//              <label
//                  className="form-control-label"
//                  htmlFor="input-country"
//              >
//                  Country
//              </label>
//              <Input
//                  className="form-control-alternative"
//                  defaultValue="United States"
//                  id="input-country"
//                  placeholder="Country"
//                  type="text"
//              />
//          </FormGroup>
//      </Col>
//      <Col lg="4">
//          <FormGroup>
//              <label
//                  className="form-control-label"
//                  htmlFor="input-country"
//              >
//                  Postal code
//              </label>
//              <Input
//                  className="form-control-alternative"
//                  id="input-postal-code"
//                  placeholder="Postal code"
//                  type="number"
//              />
//          </FormGroup>
//      </Col>
//  </Row>
// </div>
// <hr className="my-4" />
// {/ Description /}
// <h6 className="heading-small text-muted mb-4">About me</h6>
// <div className="pl-lg-4">
//  <FormGroup>
//      <label>About Me</label>
//      <Input
//          className="form-control-alternative"
//          placeholder="A few words about you ..."
//          rows="4"
//          defaultValue="A beautiful Dashboard for Bootstrap 4. It is Free and
// Open Source."
//          type="textarea"
//      />
//  </FormGroup>
// </div>
