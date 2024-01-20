import React from "react";
import { useFormik } from "formik";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { ADD_PUBLIC_FILE } from "../../graphql/query";
import { useMutation } from '@apollo/client';

import Row from "react-bootstrap/Row";
const AddPublicFile = ({ onCallback }) => {
    const [addData] = useMutation(ADD_PUBLIC_FILE);

    const formik = useFormik({
    initialValues: {
      fileName: "",
      url: "",
      uploadDate: "",
      lastUsed: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.fileName) {
        errors.email = "fileName is required";
      }

      if (!values.url) {
        errors.url = "url is required";
      }
      if (!values.uploadDate) {
        errors.uploadDate = "uploadDate is required";
      }
      if (!values.lastUsed) {
        errors.lastUsed = "lastUsed is required";
      }

      return errors;
    },
    onSubmit: async (values, actions) => {
        try{
            console.log("value os arreis",values)
            let t=null
            t=  await addData({
                variables: values
              });
              t &&onCallback();
            


        }
        catch(err)
        {
        console.log("err irs",err)
        }
     
        // Handle form submission
      console.log("Form submitted:", values);
      // Reset the form after submission
      //actions.resetForm();
    },
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="fileName">
            <Form.Label>FileName</Form.Label>
            <Form.Control
              
              placeholder="First Name"
              type="text"
              name="fileName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fileName}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          {formik.touched.fileName && formik.errors.fileName && (
            <div class="error">{formik.errors.fileName}</div>
          )}
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="url">
            <Form.Label>URL</Form.Label>
            <Form.Control
              required
              placeholder="url"
              type="text"
              name="url"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.url}
            />

            {formik.touched.url && formik.errors.url && (
              <div  class="error">{formik.errors.url}</div>
            )}
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="uploadDate">
            <Form.Label>UploadDate</Form.Label>
            <Form.Control
              
              placeholder="uploadDate"
              type="text"
              name="uploadDate"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.uploadDate}
            />
            {formik.touched.uploadDate && formik.errors.uploadDate && (
              <div  class="error">{formik.errors.uploadDate}</div>
            )}
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="lastUsed">
            <Form.Label>LastUsed</Form.Label>
            <Form.Control
              required
              placeholder="lastUsed"
              type="text"
              name="lastUsed"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastUsed}
            />            
              {formik.touched.lastUsed && formik.errors.lastUsed && (
              <div  class="error">{formik.errors.lastUsed}</div>
            )}
       
          </Form.Group>
        </Row>

        <Button type="submit">Submit form</Button>
      </Form>
    </>

  );
};

export default AddPublicFile;
