import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

require('./_style.scss');


class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      title: 'Block Title - Click to edit',
      content: 'Editable <strong> content </strong>. \nHTML Supported \n(WYSIWYG editor in the future :P)\n Click to edit'
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
      display: `${this.state.edit ? 'inline-block' : 'none'}`,
      marginTop: 25
    };

    return (
      <div className="content">
        <input
          onClick={this.startEdit}
          className={`${this.state.edit ? 'edit' : ''}` + ' title'}
          type="text"
          defaultValue={this.state.title}
          readOnly={`${this.state.edit ? '' : 'readOnly'}`}
        />

        <textarea
          onClick={this.startEdit}
          className={`${this.state.edit ? 'edit' : ''}` + ' body'}
          type="textarea"
          defaultValue={this.state.content}
          readOnly={`${this.state.edit ? '' : 'readOnly'}`}
          rows="4"
        />

        <RaisedButton onTouchTap={this.onClickSave} primary={true} label="Save Changes" style={buttonStyle} />
      </div>
    )
  }
}


export default Content;