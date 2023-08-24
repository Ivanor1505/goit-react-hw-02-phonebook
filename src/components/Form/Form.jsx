import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const formSchema = Yup.object({
    name: Yup.string()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        "Name must contain only letters, apostrophe, dash, and spaces"
      )
      .required("Name is required"),
    number: Yup.string()
      .matches(
        /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
        "Invalid phone number format"
      )
      .required("Phone number is required"),
  });

export const AddContactForm = ({ onAdd }) => {
    return (
        <Formik
            initialValues={{
                name: "",
                number: "",
            }}

        validationSchema={formSchema}
            
        onSubmit={(values, { resetForm }) => {
        onAdd(values);
        resetForm();
      }}
      >
            <Form>
                <label>Name
                    <Field name="name" type="text" />
                    <ErrorMessage name="name" component="div" />
                </label>
                <label>Number
                    <Field name="number" type="text" />
                    <ErrorMessage name="number" component="div" />
                </label>
                <button type="submit">Add contact</button>
        </Form>
      </Formik>
    
  );
}