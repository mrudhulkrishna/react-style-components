import React from 'react';
import { styles } from './Styles';

function Comp3() {
  return (
    <div>
        <h1 style={styles.Header}>Header</h1>
        <p style={styles.Content}>content</p>
        <h4 style={styles.Footer}>footer</h4>
    </div>
  )
}

export default Comp3