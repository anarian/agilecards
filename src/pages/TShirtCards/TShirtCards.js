import React, { Component } from 'react';
import Card from '../../components/Card';

export default class TShirtCards extends Component {
  render() {
    const options = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '∞', '?'];

    return <div className="row">
      {options.map(o => <div className="columns small-3 medium-2 large-1" key={o}>
        <Card>{o}</Card>
      </div>)}
    </div>;
  }
}
