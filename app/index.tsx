import * as React from 'react';
import * as ReactDOM from 'react-dom';

import '../scss/styles.scss';

let App = React.createClass({
  render(): any {
    return (
      <div>
        <h1>My React app</h1>
        
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));