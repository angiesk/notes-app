import React, { Component } from "react";
import { Button, Container, Row, Col } from "reactstrap";

import ListNotes from "./components/ListNotes";
import AddNoteForm from "./components/AddNoteForm";
import EditNoteForm from "./components/EditNoteForm";

import { fetchNotes, fetchNote, updateNote, addNote } from "./api";
import Websocket from "react-websocket";
import swal from "sweetalert";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      note: {},
      current_note_id: 0,
      is_creating: true,
      is_fetching: true,
    };

    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleAddNote = this.handleAddNote.bind(this);
    this.getData = this.getData.bind(this);
    this.handleSaveNote = this.handleSaveNote.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    let data = await fetchNotes();
    this.setState({ notes: data, is_fetching: false });
  }

  async handleItemClick(id) {
    let selected_note = await fetchNote(id);

    this.setState((prevState) => {
      return {
        is_creating: false,
        current_note_id: id,
        note: selected_note,
      };
    });
  }

  handleAddNote() {
    this.setState((prevState) => {
      return { is_creating: true };
    });
  }

  async handleSaveNote(data) {
    await addNote(data);
    await this.getData();
  }

  handleData(data) {
    let result = JSON.parse(data);

    let current_note = this.state.note;
    if (current_note.id === result.id) {
      this.setState({ note: result });
    }
  }

  handleOnChange(e) {
    let updated_data = e.target.value;
    let current_note = this.state.note;
    if (e.target.name == "content") {
      current_note.content = updated_data;
    } else if (e.target.names == "title") {
      current_note.title = updated_data;
    }

    this.setState({
      note: current_note,
    });

    const socket = this.refs.socket;
    socket.state.ws.send(JSON.stringify(current_note));
    if (!this.state.is_creating) {
      swal("Done!!", "The note was updated successfully.", "success");
    }
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
              {this.state.is_fetching ? (
                "Loading..."
              ) : (
                <ListNotes
                  notes={this.state.notes}
                  handleItemClick={(id) => this.handleItemClick(id)}
                />
              )}
            </Col>
            <Col xs="8">
              {this.state.is_creating ? (
                <AddNoteForm handleSave={this.handleSaveNote} />
              ) : (
                <EditNoteForm
                  handleChange={this.handleOnChange}
                  note={this.state.note}
                />
              )}
              <Websocket
                ref="socket"
                url="ws://127.0.0.1:8000/ws/notes"
                onMessage={this.handleData.bind(this)}
              />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
