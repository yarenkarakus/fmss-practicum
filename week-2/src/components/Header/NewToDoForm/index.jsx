import React from "react";
import { Formik, Field, Form } from "formik";
import validationSchema from "./validations";
import { useTodo } from "../../../contexts/ToDoContext";

const NewToDoForm = () => {
  const { addTodo } = useTodo();

  return (
    <Formik
      initialValues={{
        text: "",
      }}
      onSubmit={(values, bag) => {
        console.log(values);

        addTodo(values.text);

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
