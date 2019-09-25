import React from 'react'
import uniqueId from '../../util/kinda_unique_id'

class todoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uniqueId(),
      title: "",
      body: "",
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    debugger
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.target.value})
  }

  handleClick(e) {
    e.preventDefault();
    // let todo = this.setState({ 
    //   id: this.state.id,
    //   title: this.state.title,
    //   body: this.state.body
    // })
    this.props.receiveTodo(this.state);
  }
  render() {
    return (
      <>
        <h3>TO DO FORM</h3>
        <label htmlFor="title">Title:</label>
        <input onChange={this.handleChange('title')} id="title" type="text" value={this.state.title}/>

        <label htmlFor="body">Body:</label>
        <input onChange={this.handleChange('body')} id="body" type="text" value={this.state.body}/> 

        <input onClick={e => this.handleClick(e)} type="submit" value="Create Todo!"/>
      </>
    )
  }
}

export default todoForm;