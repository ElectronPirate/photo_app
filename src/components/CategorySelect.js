import React, { Component } from 'react';

class CategorySelect extends Component {

  constructor(props) {
    super(props);
    this.state = {
      category: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(evt){
    this.props.changeFilter(evt.target.value)
  }

  render () {
    return (
      <div>
      <label htmlFor='category'>Category:</label>
        <select
          name='category'
          id='category'

          onChange={this.handleInputChange}
        >
        <option value='Landscape'>Landscape</option>
        <option value='Plants'>Plants</option>
        <option value='Cities'>Cities</option>
        <option value='Animals'>Animals</option>
        <option value='Food'>All</option>
        </select>
      </div>
    )
  }
}

export default CategorySelect;
