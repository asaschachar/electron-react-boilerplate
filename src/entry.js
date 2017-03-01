import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'optimizely-oui';

ReactDOM.render(
  (
    <div className="push-double">
      <h1>Hello, world!</h1>
      <Button>Submit</Button>
    </div>
  ),
  document.getElementById('root')
);
