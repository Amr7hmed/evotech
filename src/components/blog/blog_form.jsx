import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faTextWidth,
} from "@fortawesome/free-solid-svg-icons";
import { MyInputField, MyTextField } from "../contact/MyField";
import Stars from "./stars";

const BlogSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(70, "Too Long!")
      .required("Name Is Required"),
    mobile: Yup.string()
      .min(10, "Too Short!")
      .max(12, "Too Long!")
      .required("Mobile Is Required"),
    email: Yup.string().email("Invalid email").required("Email Is Required"),
    title: Yup.string().required("Title Is Required"),
    message: Yup.string().required("Your Message Is Required"),
  });

function BlogForm() {
  return <section className="blog__form contenerform">
  <Formik
    initialValues={{
      name: "",
      mobile: "",
      title: "",
      email: "",
      message: "",
    }}
    validationSchema={BlogSchema}
    onSubmit={(values) => {
      console.log(values);
    }}
  >
    {(formik) => (
      <Form>
        <div className="row g-3">
          <div className="col-md-6 fielddiv">
            <span>
              <FontAwesomeIcon icon={faUser} />
            </span>
            <MyInputField name="name" type="text" placeholder="Name" />
          </div>
          <div className="col-md-6 fielddiv">
            <span>
              <FontAwesomeIcon icon={faEnvelopeOpen} />
            </span>
            <MyInputField name="email" type="text" placeholder="Email" />
          </div>

          <div className="col-md-12 fielddiv" style={{ height: "180px" }}>
            <span>
              <FontAwesomeIcon icon={faTextWidth} />
            </span>
            <MyTextField
              name="message"
              type="textarea"
              placeholder="Your Comment"
            />
          </div>

          <div className="col-12 buttonfield">
            <button type="submit" className="btn">
                <img src="./assets/images/icon/solid.png" alt="Submit" />
                Submit
                </button>
          </div>
        </div>
      </Form>
    )}
  </Formik></section>;
}

export default BlogForm;

/*



function FormContact() {
  return (
  );
}

export default FormContact;


*/
