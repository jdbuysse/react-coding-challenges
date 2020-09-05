import React, { Component, useState } from 'react';

import RocketCore from './RocketCore';

export function FunctionalRocket() {
  const [initialLaunchTime] = useState(Date.now());

  return <RocketCore initialLaunchTime={initialLaunchTime} />;
}

export class ClassRocket extends Component {
  constructor() {
    super();

    this.state = {
      initialLaunchTime: Date.now()
    };
  }

  render() {
    const { initialLaunchTime } = this.state;

    return <RocketCore />;
  }
}
