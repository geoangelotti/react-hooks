import React, { useState } from 'react';

import CharPicker from './components/CharPicker';
import Character from './components/Character';

const App = () => {
  const [state, setState] = useState({
    selectedCharacter: 1,
    side: 'light',
    destroyed: false
  });

  const sideHandler = side => {
    setState({ ...state, side: side });
  };

  const charSelectHandler = event => {
    const charId = event.target.value;
    setState({ ...state, selectedCharacter: charId });
  };

  const destructionHandler = () => {
    setState({ ...state, destroyed: true });
  };

  let content = (
    <React.Fragment>
      <CharPicker
        side={state.side}
        selectedChar={state.selectedCharacter}
        onCharSelect={charSelectHandler}
      />
      <Character selectedChar={state.selectedCharacter} />
      <button onClick={() => sideHandler('light')}>
        Light Side
      </button>
      <button onClick={() => sideHandler('dark')}>Dark Side</button>
      {state.side === 'dark' && (
        <button onClick={destructionHandler}>DESTROY!</button>
      )}
    </React.Fragment>
  );

  if (state.destroyed) {
    content = <h1>Total destruction!</h1>;
  }
  return content;  
}

export default App;
