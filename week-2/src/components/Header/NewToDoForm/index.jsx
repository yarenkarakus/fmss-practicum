import React from "react";
import { Formik, Field, Form } from "formik";
import validationSchema from "./validations";

const NewToDoForm = () => {
  return (
    <Formik
      initialValues={{
        text: "",
      }}
      onSubmit={(values, bag) => {
        console.log(values);

        bag.resetForm();
      }}
      validationSchema={validationSchema}
    >
      <Form>
        <Field
          id="text"
          className="new-todo"
          placeholder="What needs to be done?"
          name="text"
          autoFocus
        />
      </Form>
    </Formik>
  );
};

export default NewToDoForm;
