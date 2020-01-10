import React, { Component } from 'react'
import { Formik, Form, Field,ErrorMessage } from 'formik';
import PasswordStrengthBar from 'react-password-strength-bar';
import * as Yup from 'yup';

export default class Profile extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        firstName: '',
        lastName:'',
        address:'',
        country:'',
        message:''
    }      
  }
  render() {
    const handleChange = event => {
      console.log(event.target.value)
      this.setState({[event.target.name]: event.target.value})
      
    }
    return (
      <div>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          address: '',

        }}
        validationSchema={Yup.object().shape({
          firstName:Yup.string()
             .min(4, "Must be 15 characters or less")
            .required('First name is required'),
          lastName:Yup.string()
             .min(4, "Must be 15 characters or less")
            .required('Last name is required'),
          address:Yup.string()
            .required('Address is required'),
          country:Yup.string()
            .required('Country is required'),
        
      })}
      onSubmit={(values, actions) => {
      
        actions.setStatus(undefined);  
        setTimeout(() => { 
          actions.setStatus({
            successMsg: 'Profile has been added successfully.',
          });
        }, 100);
        actions.resetForm();
        
      }}
      
       
      >
        {({ errors, touched, validateField, validateForm,status }) => (
          <Form>
                  <div className="row">
                      <div className="col-12">
                      {status && status.successMsg ? (
                      <div className="success-msg"> {status.successMsg}</div>
                      ) : (
                      errors.successMsg && <div>{errors.successMsg}</div>
                      )}
                      </div>
                      </div>
                    <div className="row">
                    <div className="col-12">
                          <label htmlFor="email">First Name</label>
                          <Field name="firstName"  label="First Name" className="form-field" placeholder="First name" />
                          <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                      </div>
                      </div>
                      <div className="row">
                      <div className="col-12">
                          <label htmlFor="password">Last Name</label>
                          <Field name="lastName"  label="Last Name" className="form-field" placeholder="Last name" />
                          <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                      </div>
                      </div>
                      <div className="row">
                      <div className="col-12">
                          <label htmlFor="address">Address</label>
                          <Field name="address"  label="address" className="form-field" placeholder="Address" />
                          <ErrorMessage name="address" component="div" className="invalid-feedback"  />
                      </div>
                      </div>
                      <div className="row">
                      <div className="col-12">
                          <label htmlFor="country">Country</label>
                          <Field name="country" as="select" className="form-field">
                          <option value="">Select</option>
                          <option value="Germany">Germany</option>
                          <option value="Austria"> Austria</option>
                          <option value="Switzerland"> Switzerland</option>
                          </Field>
                          <ErrorMessage name="country" component="div" className="invalid-feedback"  />
                      </div>
                      </div>
                      <div className="row">
                      <div className="col-12">
                        <button type="submit" className="btn btn-primary mr-2">Register</button>
                      
                      </div>
                      </div>
                     
          </Form>
        )}
      </Formik>
    </div>
    )
  }
}
