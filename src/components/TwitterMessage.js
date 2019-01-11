import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: props.maxChars,
      value: ""
    };
  }

  handleChange = event => {
    let newVal = 0;
    this.state.value < event.target.value
      ? (newVal = this.state.characters - 1)
      : (newVal = this.state.characters + 1);
    this.setState({
      characters: newVal,
      value: event.target.value
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.value}
          onChange={e => this.handleChange(e)}
        />
        <p> Remaining: {this.state.characters} </p>
      </div>
    );
  }
}

export default TwitterMessage;
