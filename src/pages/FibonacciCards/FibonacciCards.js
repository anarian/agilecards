import React, { Component } from 'react';
import Card from '../../components/Card';
import CardIcon from '../../components/CardIcon';

export default class FibonacciCards extends Component {
  render() {
    const { dark } = this.props;
    const options = ['0', '1', '2', '3', '5', '8', '13', '21', '34', '55', '89', '144', '∞', '?', <CardIcon color={dark ? '#000000' : '#ffffff'} />];

    return <div className="row">
      {options.map((o, i) => <div className="columns small-3 medium-2 large-1" key={i}>
        <Card>{o}</Card>
      </div>)}
    </div>;
  }
}
