import React, { Component } from 'react'
import { Formik, Form, Field,ErrorMessage } from 'formik';
import PasswordStrengthBar from 'react-password-strength-bar';
import * as Yup from 'yup';

export default class Settings extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        email:'',
        password:'',
        message:''
    }      
  }

  render() {
    const handleChange = (event,setFieldValue) => {
      console.log(event.target.value)
      this.setState({[event.target.name]: event.target.value})
      setFieldValue('password', event.target.value); // data to password field for valitation
      
    }
    return (
      <div>
        <Formik
          initialValues={{
            email: '',
            password: '',
            confirmPassword: ''
          }}
          validationSchema={Yup.object().shape({
            
            email: Yup.string()
                .email('Email is invalid')
                .required('Email is required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required')
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
                  ),
            confirmPassword:  Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm Password is required')
        })}
        onSubmit={(values, actions) => {
            
          setTimeout(() => { 
            actions.setStatus({
              successMsg: 'Setting has been saved successfully.',
            });
          }, 100);
          actions.resetForm();
            
        }}
         
        >
          {({ errors, touched, validateField, validateForm,props,setFieldValue,status }) => (
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
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="text" className={'form-field' + (errors.email && touched.email ? ' is-invalid' : '')} placeholder="Email" />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-12">
                            <label htmlFor="password">Password</label>
                            <Field name="password" type="password" value={ this.state.password } onChange={data =>handleChange(data,setFieldValue)} 
                               
                            className={'form-field' + (errors.password && touched.password ? ' is-invalid' : '')} placeholder="Password" />
                            <PasswordStrengthBar password={this.state.password}  />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-12">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <Field name="confirmPassword" type="password" value={ this.state.confirmPassword }  className={'form-field' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} placeholder="Confirm Password" />
                            <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
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
