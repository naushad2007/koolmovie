import React from 'react';
import { IndexLink } from 'react-router';
import BackButton from './BackButton';
import SearchButton from './SearchButton';
import SearchBox from './SearchBox';
import Styles from '../../css/header.pcss';

class Header extends React.Component {
  constructor() {
    super();
    this.toggleSearchBox = this.toggleSearchBox.bind(this);
    this.state = {
      toggleSearchBox: false,
    };
  }
  toggleSearchBox() {
    this.setState({ toggleSearchBox: this.state.toggleSearchBox ? false : true });
  }
  render() {
    return (
      <div className="header-container">
        <div className={Styles.header}>
          <div className={Styles.navigation}>
            <BackButton goBack={this.props.history.goBack} />
            <ul className={Styles.menu}>
              <li className={Styles.menulink}>
                <IndexLink activeClassName="active" to="/">Home</IndexLink>
              </li>
              <li className={Styles.menulink}>
                <IndexLink activeClassName="active" to="/about">About</IndexLink>
              </li>
            </ul>
            <SearchButton toggleSearchBox={this.toggleSearchBox} />
          </div>
        </div>
        <SearchBox collapsed={this.state.toggleSearchBox} toggleSearchBox={this.toggleSearchBox} />
      </div>
    );
  }
}

Header.propTypes = {
  history: React.PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

Header.defaultProps = {
  history: {},
};

export default Header;