import * as React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"
import AccentHeader from '../components/AccentHeader/AccentHeader'
import ContactForm from '../components/ContactForm/ContactForm'

// icons 
import { RiMailOpenLine } from 'react-icons/ri'
import { TiPhoneOutline } from 'react-icons/ti'
import { GrInstagram, GrVimeo } from 'react-icons/gr'
import { BsFacebook } from 'react-icons/bs'



const ContactPage = ({ data }) => {
  const { industries } = data.prismicIndustryTypes.data
  const document = data.prismicContactPage.data

  const {
    page_title,
    page_text,
    email_address,
    email_address_2,
    phone_number,
    phone_number_2,
    social_media
  } = document

  const {
    enable_form_field__budget,
    enable_form_field__company_name,
    enable_form_field__email,
    enable_form_field__first_name,
    enable_form_field__idustry,
    enable_form_field__last_name,
    enable_form_field__message,
    enable_form_field__phone,
    enable_form_field__website,
    form_submit_button_text,
    form_title } = document

  const fields = [
    enable_form_field__budget,
    enable_form_field__company_name,
    enable_form_field__email,
    enable_form_field__first_name,
    enable_form_field__idustry,
    enable_form_field__last_name,
    enable_form_field__message,
    enable_form_field__phone,
    enable_form_field__website,
    industries
  ]

  return (
    <Layout>
      <Seo title="Contact" />
      <div className="page no-hero">
        <section className="page-section content-wrapper">
          <AccentHeader>
            {page_title.text}
          </AccentHeader>
        </section>

        <section className="page-section content-wrapper">
          <div dangerouslySetInnerHTML={{ __html: page_text.html }}></div>
        </section>

        <section className="page-section content-wrapper">
          <h2 className="form-title">{form_title.text}</h2>
          <ContactForm fields={fields} submitText={form_submit_button_text} />
        </section>

        <section className="page-section content-wrapper">
          <div className="contact-details">
            {email_address && <ContactDetails label="Primary Email Address" value={email_address} icon={<RiMailOpenLine className="icon" />} />}
            {email_address_2 && <ContactDetails label="Secondary Email Address" value={email_address_2} icon={<RiMailOpenLine className="icon" />} />}
            {phone_number && <ContactDetails label="Primary Contact Number" value={phone_number} icon={<TiPhoneOutline className="icon" />} />}
            {phone_number_2 && <ContactDetails label="Secondary Contact Number" value={phone_number_2} icon={<TiPhoneOutline className="icon" />} />}

            {social_media && social_media.map(item => {
              let icon
              switch (item.label.toLowerCase()) {
                case "facebook": icon = <BsFacebook className="icon" />
                  break
                case "instagram": icon = <GrInstagram className="icon" />
                  break
                case "vimeo": icon = <GrVimeo className="icon" />
                  break
                default:
                  break
              }

              return (
                <>
                  {item.display && (
                    <ContactDetails
                      key={item.label}
                      label={item.label}
                      value={item.link.url}
                      as="link"
                      icon={icon}
                    />
                  )}
                </>
              )
            })}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default ContactPage

export const ContactDetails = ({ label, value, icon, as }) => (
  <div className="contact-detail-group">
    <h4 className="contact-detail-title">{label}</h4>
    {icon && <div className="contact-icon">{icon}</div>}
    {as === 'link'
      ? (
        <a href={value} className="link contact-detail" target="_blank" rel="noopener noreferrer" >
          Bince Productions on {label}
        </a>
      ) : (
        <div className="contact-detail">
          {value}
        </div>
      )
    }
  </div>
)

ContactDetails.defaultProps = {
  as: null
}

export const query = graphql`
query ContactPageQuery {
  prismicIndustryTypes {
    data {
      industries {
        industry_name
      }
    }
  }
  prismicContactPage {
    data {
      email_address
      email_address_2
      enable_form_field__budget
      enable_form_field__company_name
      enable_form_field__email
      enable_form_field__first_name
      enable_form_field__idustry
      enable_form_field__last_name
      enable_form_field__message
      enable_form_field__phone
      enable_form_field__website
      form_submit_button_text
      form_title {
        text
      }
      page_text {
        html
      }
      page_title {
        text
      }
      phone_number
      phone_number_2
      social_media {
        display
        label
        link {
          url
        }
      }
    }
  }
}`
