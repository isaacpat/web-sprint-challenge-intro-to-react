import React, { useState } from 'react'

function Character({ character }) { // ❗ Add the props
  const [showHomeworld, setShowHomeworld] = useState(false);
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld

const toggleHomeworld = () => {
  setShowHomeworld(!showHomeworld)
};

  return (
    <div className='character-card' onClick={toggleHomeworld}>
      <h3 className='character-name'>{character.name}</h3>
      {showHomeworld && (
        <p className='character-planet'>{character.homeworld}</p>
      )}
      {/* Use the same markup with the same attributes as in the mock */}
    </div>
  )
}

export default Character
