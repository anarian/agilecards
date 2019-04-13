import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import './NavHeader.scss';
import ColorContext from '../../styles/ColorContext';

export default class NavHeader extends PureComponent {
  render() {
  return <ColorContext.Consumer>
    {({ color, dark }) => <div className={`nav-header ${dark ? 'nav-header--dark' : 'nav-header--light'}`} style={{ backgroundColor: color }}>
      <div className="row expanded collapse align-justify align-middle">
        <header className="column small-12 medium-3 nav-header__logo" {...this.props}>
          Agile Cards
      </header>
        <nav className="column small-12 medium-6 large-4 nav-header__links">
          <div className="row collapse">
            <div className="column">
              <NavLink to="/" exact className="nav-header__link" activeClassName="nav-header__link--active">Standard</NavLink>
            </div>
            <div className="column">
              <NavLink to="/fibonacci" className="nav-header__link" activeClassName="nav-header__link--active">Fibonacci</NavLink>
            </div>
            <div className="column">
              <NavLink to="/tshirt" className="nav-header__link" activeClassName="nav-header__link--active">T-Shirt</NavLink>
            </div>
          </div>
        </nav>
      </div>
    </div>}
  </ColorContext.Consumer>;
  }
}
