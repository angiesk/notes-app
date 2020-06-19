import React from "react";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import swal from "sweetalert";

class AddNoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", content: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.handleSave(this.state);
    swal("Done!!", "The note was saved successfully.", "success");

    // Clear the inputs
    this.setState({
      title: "",
      content: "",
    });
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label>Title</Label>
            <Input
              onChange={this.handleChange}
              name="title"
              type="text"
              value={this.state.title}
            />
          </FormGroup>
          <FormGroup>
            <Label>Content</Label>
            <Input
              onChange={this.handleChange}
              name="content"
              type="textarea"
              value={this.state.content}
            />
          </FormGroup>
          <Button
            className="save-btn"
            disabled={!this.state.title || !this.state.content}
          >
            Save Note
            <span className="save-btn__inner">
              <span className="save-btn__saves">
                <span className="save-btn__save"></span>
                <span className="save-btn__save"></span>
                <span className="save-btn__save"></span>
                <span className="save-btn__save"></span>
              </span>
            </span>
          </Button>
          <br />

          <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  result="blur"
                  stdDeviation="10"
                ></feGaussianBlur>
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
                  result="goo"
                ></feColorMatrix>
                <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
              </filter>
            </defs>
          </svg>
        </Form>
      </React.Fragment>
    );
  }
}

export default AddNoteForm;
