import React, { Component } from 'react';
import Card from '../../components/Card';

export default class StandardCards extends Component {
  render() {
    const options = ['0', '1/2', '1', '2', '3', '5', '8', '13', '20', '40', '100', '∞', '?'];

    return <div className="row">
      {options.map(o => <div className="columns small-3 medium-2 large-1" key={o}>
        <Card>{o}</Card>
      </div>)}
    </div>;
  }
}
