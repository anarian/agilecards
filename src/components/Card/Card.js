import React from 'react';
import './Card.scss';
import ColorContext from '../../styles/ColorContext';

function Card(props) {
  const [expanded, setExpanded] = React.useState(false);

  return <ColorContext.Consumer>
    {({ color, dark }) => <button {...props} onClick={() => setExpanded(!expanded)} type="button" className={`card ${expanded ? 'card--expanded' : ''}`}
      style={{ backgroundColor: color, color: dark ? '#000000' : '#ffffff' }} />}
  </ColorContext.Consumer>;
}

export default React.memo(Card);
