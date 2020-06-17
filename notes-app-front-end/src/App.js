import React, { Component } from "react";
import { Button, Container, Row, Col } from "reactstrap";

import ListNotes from "./components/ListNotes";

var notes1 = [
  {
    id: 1,
    title: "First",
    content: "Abc",
    created_at: "2020-06-16T08:53:06.789784Z",
    updated_at: "2020-06-16T08:53:06.789828Z",
  },
  {
    id: 2,
    title: "Second",
    content: "some",
    created_at: "2020-06-16T08:55:48.923630Z",
    updated_at: "2020-06-16T08:55:48.923660Z",
  },
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: notes1,
      current_note_id: 0,
      is_creating: true,
    };
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleAddNote = this.handleAddNote.bind(this);
  }

  handleItemClick(id) {
    this.setState((prevState) => {
      return { is_creating: false, current_note_id: id };
    });
  }
  handleAddNote() {
    this.setState((prevState) => {
      return { is_creating: true };
    });
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col xs="8">
              <h2 className="margin-top-22">Realtime Notes</h2>
            </Col>
            <Col xs="4">
              <Button
                color="default"
                className="margin-top-5 icon-btn add-btn"
                onClick={this.handleAddNote}
              >
                <div className="add-icon"></div>
                <div className="btn-txt">Add a New Note</div>
              </Button>
            </Col>
          </Row>
          <Row className="margin-top-5">
            <Col xs="4">
              <ListNotes
                notes={this.state.notes}
                handleItemClick={(id) => this.handleItemClick(id)}
              />
            </Col>
            <Col xs="8">
              <p>Content/ Editing Here</p>
              {this.state.is_creating
                ? "Creating Now.."
                : `Editing note with id : ${this.state.current_note_id}`}
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
