import { useState } from 'react';

export default function useToggle(initialState) {
  const [state, setState] = useState(initialState);

  const toggleOpen = () => {
    setState((prevState) => !prevState);
  };

  return [state, toggleOpen];
}
