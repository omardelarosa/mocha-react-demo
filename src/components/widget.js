module.exports = React.createClass({

  getInitialState: function () {
    return {
      name: null,
      displayedAreaText: 'Nothing to see here'
    };
  },

  __handleChange: function (ev) {
    var text = React.findDOMNode(this.refs.nameInput).value;
    this.setState({
      name: text
    });
  },

  __handleClick: function (ev) {
    var currentName = this.state.name;
    this.setState({
      displayedAreaText: currentName
    });
  },

  render: function () {
    return (
      <div>
        <h1 ref='mainHeading'>My Widget</h1>
        <div>
          <input className='nameInput' onChange={ this.__handleChange } value={this.state.name} ref='nameInput'/>
          <button className='addButton' ref='addButton' onClick={ this.__handleClick }>Add your name</button>
          <div ref='displayArea'>
            { this.state.displayedAreaText }
          </div>
        </div>
      </div>
    );
  }

});
