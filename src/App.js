// src/App.js

import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    address: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
    terms: false,
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  const provinces = [
    'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 
    'Newfoundland and Labrador', 'Nova Scotia', 'Ontario', 
    'Prince Edward Island', 'Quebec', 'Saskatchewan'
  ];

  return (
    <Container className="p-4" style={{ border: '2px solid green' }}>
      <h2 className="text-center">Data Entry Form</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formFullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="1234 Main St"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control
            type="text"
            placeholder="Apartment, studio, or floor"
            name="address2"
            value={formData.address2}
            onChange={handleChange}
          />
        </Form.Group>

        <Row>
          <Col md={4}>
            <Form.Group controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formProvince">
              <Form.Label>Province</Form.Label>
              <Form.Control
                as="select"
                name="province"
                value={formData.province}
                onChange={handleChange}
                required
              >
                <option value="">Choose...</option>
                {provinces.map((province) => (
                  <option key={province} value={province}>
                    {province}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formPostalCode">
              <Form.Label>Postal Code</Form.Label>
              <Form.Control
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="formTerms">
          <Form.Check
            type="checkbox"
            label="Agree Terms & Condition?"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>

      {submittedData && (
        <div className="output-table mt-4">
          <table>
            <tbody>
              <tr>
                <td className="label">Email:</td>
                <td>{submittedData.email}</td>
              </tr>
              <tr>
                <td className="label">Full Name:</td>
                <td>{submittedData.fullName}</td>
              </tr>
              <tr>
                <td className="label">Address:</td>
                <td>{submittedData.address}</td>
              </tr>
              <tr>
                <td className="label">City:</td>
                <td>{submittedData.city}</td>
              </tr>
              <tr>
                <td className="label">Province:</td>
                <td>{submittedData.province}</td>
              </tr>
              <tr>
                <td className="label">Postal Code:</td>
                <td>{submittedData.postalCode}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </Container>
  );
}

export default App;