import React, { useState } from 'react'
import { Formik, Field, Form, useFormikContext } from 'formik'
import Animated from 'react-mount-animation'

import { MdWarningAmber } from 'react-icons/md'
import { FiChevronDown } from 'react-icons/fi'

import { initValuesContact } from '../../forms/initialValues'
import { contactValidationSchema } from '../../forms/validationSchema'
import { fadeIn, fadeOut } from '../../utils/animations'
import './Form.scss'

const ContactForm = ({ fields, submitText }) => {
  const [showMore, setShowMore] = useState(false)
  const toggleMoreInfo = () => setShowMore(prev => !prev)

  const handleSubmit = data => {
    console.log(data)
  }

  const [enable_form_field__budget,
    enable_form_field__first_name,
    enable_form_field__last_name,
    enable_form_field__company_name,
    enable_form_field__email,
    enable_form_field__idustry,
    enable_form_field__message,
    enable_form_field__phone,
    enable_form_field__website, industries] = fields

  return (
    <Formik
      initialValues={initValuesContact}
      validationSchema={contactValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => {
        return (
          <Form className="contact-form">
            <div className="fields-row">
              {enable_form_field__first_name && <FormGroup
                name="first_name"
                label="First Name"
                type="text"
                required />}

              {enable_form_field__last_name && <FormGroup name="last_name" label="Last Name" type="text" required />}
            </div>

            {enable_form_field__phone && <FormGroup name="phone" label="Contact Number" type="text" required />}
            {enable_form_field__email && <FormGroup name="email" label="Email Address" type="email" required />}
            {enable_form_field__message && <FormGroup name="message" label="Your Message" type="text" required />}

            <p>If you feel like, you can provide some additional information below</p>
            <span className="with-icon">
              <FiChevronDown className="icon" style={{ transform: `rotate(${showMore ? '180deg' : ''})` }} />
              <button
                type="button"
                className="btn btn-link"
                onClick={() => toggleMoreInfo()}>
                {showMore ? 'Hide' : 'Show'} Additional Fields
              </button>
            </span>
            <Animated.div
              show={showMore}
              mountAnim={fadeIn}
              unmountAnim={fadeOut}
              time={.3}
            >
              {enable_form_field__budget && <FormGroup name="budget" label="What is your budget?" type="text" />}
              {enable_form_field__company_name && <FormGroup name="company_name" label="Company Name" type="text" />}

              {/* TODO switch to a select input */}
              {enable_form_field__idustry && <FormGroup name="idustry" label="What is your industry?" as="select">
                <option value={"default"}>- choose from the list -</option>
                {industries && industries.map((item, i) => (
                  <option key={i} value={item.industry_name}>{item.industry_name}</option>
                ))}
                <option value={"other"}>Other</option>
              </FormGroup>}
              {enable_form_field__website && <FormGroup name="website" label="Your website" type="text" />}
            </Animated.div>

            <div>
              <button type="submit" className="btn">{submitText}</button>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}

export default ContactForm

const FormGroup = ({ name, label, placeholder, type, required, as, children }) => {
  const { errors, touched } = useFormikContext()
  return (
    <div className={`form-group ${errors[name] && touched[name] ? 'error' : ''}`}>
      <Animated.div
        className="form-error-message"
        show={Boolean(errors[name] && touched[name])}
        mountAnim={fadeIn}
        unmountAnim={fadeOut}
        time={.2}
      >
        <span className="with-icon">
          <MdWarningAmber className="icon" />{errors[name]}
        </span>
      </Animated.div>
      <Field
        required={required}
        placeholder={placeholder}
        className="form-field"
        type={type}
        name={name}
        id={name}
        as={as}
      >
        {children}
      </Field>
      <label htmlFor="message" className={`form-label ${required ? 'required' : ''}`}>{label}</label>
    </div>
  )
}

FormGroup.defaultProps = {
  as: 'input',
  required: false,
}