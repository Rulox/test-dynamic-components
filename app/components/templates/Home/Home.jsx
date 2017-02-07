import React from 'react';
import AppBar from 'material-ui/AppBar';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Content from '../../organisms/content/Content';
import Header from '../../organisms/header/Header';

require('./_style.scss');

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      components: [Header, Content],
      layout: [],
      value: -1,
      open: false
    };
    this.onHamburgerTap = this.onHamburgerTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);

  }

  onHamburgerTap(event) {
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  };

  addComponent(index) {
    this.setState({
      layout: this.state.layout.concat(this.state.components[index])
    });
    console.log(this.state.layout);
    this.handleRequestClose();
  }

  render() {
    return (
      <div>
        <AppBar
          title="Dynamic Components"
          onLeftIconButtonTouchTap={this.onHamburgerTap}
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem onClick={this.addComponent.bind(this, 0)} primaryText="Header" />
            <MenuItem onClick={this.addComponent.bind(this, 1)} primaryText="Title and Text" />
          </Menu>
        </Popover>

        <div className="wrapper">
          {
            this.state.layout.map((component, index) => {
              return (
                <div key={index}>
                  {React.createElement(component, {})}
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default Home;
