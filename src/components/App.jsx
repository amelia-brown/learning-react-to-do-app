import uuid from 'node-uuid';
import React from 'React';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: " ",
      notes: []
    };
  }
  render() {
    const notes = this.state.notes;
    return (
        <div>
          <input type="text"
                 placeholder="New Task"
                 onKeyDown={::this.handleSubmit}
                 onChange={::this.handleChange}
                 value={this.state.value} />
          <button onClick={::this.handleSubmit}>+</button>
          <ul>{notes.map(note =>
            <li key={note.id}>
              <p style={{textDecoration:note.done?'line-through':'none'}}>{note.task}</p>
              <button onClick={
                (event) => {
                  return ::this.handleDelete(event, note.id);
                }
              }>x</button>
              <button onClick={
                (event) => {
                  return ::this.strikeThrough(event, note.id);
                }
              }>-</button>
            </li>
          )}</ul>
        </div>
    );
  }
  handleSubmit(event) {
    if(event.type === 'click') {
      this.setState({
        notes: this.state.notes.concat([{
          id: uuid.v4(),
          task: this.state.value
        }])
      });
      this.setState({value: ''});
    } else if (event.keyCode === 13) {
      this.setState({
        notes: this.state.notes.concat([{
          id: uuid.v4(),
          task: this.state.value
        }])
      });
      this.setState({value: ''});
    }
  }
  handleChange(event) {
    return this.setState({value: event.target.value})
  }
  strikeThrough(event, id) {
    return this.setState({
      notes: this.state.notes.map(note => {
        if(note.id === id) {
          note.done = note.done? false : true;
        }
        return note;
      })
    });
  };
  handleDelete(event, id) {
    return this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    })
  };
}
