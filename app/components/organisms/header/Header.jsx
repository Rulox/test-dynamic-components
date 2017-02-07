import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

require('./_style.scss');

const HEADER_URL = 'https://static.pexels.com/photos/220444/pexels-photo-220444.jpeg';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      title: 'Your Company'
    };

    this.startEdit = this.startEdit.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  startEdit() {
    this.setState({edit: true});
  }

  onClickSave() {
    this.setState({edit: false});
  }

  render() {
    const buttonStyle = {
      top: 12,
      left: 20,
      position: 'absolute',
      display: `${this.state.edit ? 'block' : 'none'}`
    };

    return (
      <div className="header" style={{"backgroundImage": `url(${ HEADER_URL })`}}>

        <RaisedButton onTouchTap={this.onClickSave} primary={true} label="Save Changes" style={buttonStyle} />
        <input
          onClick={this.startEdit}
          className={`${this.state.edit ? 'edit' : ''}`}
          type="text"
          defaultValue={this.state.title}
          readOnly={`${this.state.edit ? '' : 'readOnly'}`}
        />
      </div>
    )
  }
}

export default Header;