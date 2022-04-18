import React from 'react'
import { Helmet } from 'react-helmet-async'
import ContactForm from '../../components/contact/contact_form';
import ContactInfo from '../../components/contact/contact_info';
import HeaderPage from '../../components/public/HeaderPage';

function ContactUs() {
    return (
        <>
            <Helmet>

                <meta charSet="utf-8" />
                <title> EvoTech || Contact Us </title>
                <meta name="description" content="EvoTech application" />
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="canonical" href="/about" />
            </Helmet>
            <div>
                <HeaderPage
                    Image="./assets/images/bg/blog_header.jpg"
                    Title="Contact Us"
                />
                <ContactForm />
                <ContactInfo />
            </div>
        </>
    )
}

export default ContactUs;