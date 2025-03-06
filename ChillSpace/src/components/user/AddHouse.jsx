import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button, Container } from "react-bootstrap";

const AddHouse = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    stateId: "",
    cityId: "",
    areaId: "",
  });

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [areas, setAreas] = useState([]);

  // Fetch all states when component mounts
  useEffect(() => {
    const fetchStates = async () => {
      try {
        const res = await axios.get("/state/getallstates");
        console.log("States:", res.data);
        setStates(res.data.data || []);
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };
    fetchStates();
  }, []);

  // Fetch cities based on selected state
  useEffect(() => {
    if (formData.stateId) {
      const fetchCities = async () => {
        try {
          const res = await axios.get(`/city/getallcities/${formData.stateId}`);
          console.log("Cities:", res.data);
          setCities(res.data.data || []);
          setFormData((prev) => ({ ...prev, cityId: "", areaId: "" })); // Reset City & Area
        } catch (error) {
          console.error("Error fetching cities:", error);
        }
      };
      fetchCities();
    } else {
      setCities([]); // Clear cities if no state selected
    }
  }, [formData.stateId]);

  // Fetch areas based on selected city
  useEffect(() => {
    if (formData.cityId) {
      const fetchAreas = async () => {
        try {
          const res = await axios.get(`/area/getallarea/${formData.cityId}`);
          console.log("Areas:", res.data);
          setAreas(res.data.data || []);
          setFormData((prev) => ({ ...prev, areaId: "" })); // Reset Area
        } catch (error) {
          console.error("Error fetching areas:", error);
        }
      };
      fetchAreas();
    } else {
      setAreas([]); // Clear areas if no city selected
    }
  }, [formData.cityId]);

  // Handle form changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit form data
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("House Data Submitted:", formData);
    // Add API call here to save house details
  };

  return (
    <Container className="mt-5">
      <h2>Add a New House</h2>
      <Form onSubmit={handleSubmit}>
        {/* House Title */}
        <Form.Group controlId="formTitle">
          <Form.Label>House Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter house title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Price */}
        <Form.Group controlId="formPrice" className="mt-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Description */}
        <Form.Group controlId="formDescription" className="mt-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Image URL */}
        <Form.Group controlId="formImage" className="mt-3">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter image URL"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </Form.Group>

        {/* State Selection */}
        <Form.Group controlId="formState" className="mt-3">
          <Form.Label>Select State</Form.Label>
          <Form.Control
            as="select"
            name="stateId"
            value={formData.stateId}
            onChange={handleChange}
            required
          >
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state._id} value={state._id}>
                {state.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        {/* City Selection */}
        <Form.Group controlId="formCity" className="mt-3">
          <Form.Label>Select City</Form.Label>
          <Form.Control
            as="select"
            name="cityId"
            value={formData.cityId}
            onChange={handleChange}
            required
            disabled={!formData.stateId} // Disable if no state selected
          >
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city._id} value={city._id}>
                {city.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        {/* Area Selection */}
        <Form.Group controlId="formArea" className="mt-3">
          <Form.Label>Select Area</Form.Label>
          <Form.Control
            as="select"
            name="areaId"
            value={formData.areaId}
            onChange={handleChange}
            required
            disabled={!formData.cityId} // Disable if no city selected
          >
            <option value="">Select Area</option>
            {areas.map((area) => (
              <option key={area._id} value={area._id}>
                {area.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        {/* Submit Button */}
        <Button variant="primary" type="submit" className="mt-4">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AddHouse;
