import React from "react";
import {
  Form,
  FormGroup,
  Input,
  Card,
  CardTitle,
  CardText,
  Label,
} from "reactstrap";

const EditNoteForm = ({ note, handleChange }) => (
  <Form>
    <Card body>
      <FormGroup>
        <CardTitle>
          <h2>Edit the values to save changes</h2>
          <Label>Title</Label>
          <Input
            onBlur={handleChange}
            defaultValue={note.title}
            type="text"
            name="title"
          />
        </CardTitle>
        <Label>Content</Label>
        <Input
          onBlur={handleChange}
          defaultValue={note.content}
          type="textarea"
          name="content"
        />
      </FormGroup>
    </Card>
  </Form>
);

export default EditNoteForm;
