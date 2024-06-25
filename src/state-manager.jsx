import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const StateManagerContext = createContext({
  state: null,
  setState: () => {},

  updateState: () => {},
});

const checkEmptyObject = (obj) => Object.keys(obj).length === 0;

const getUpdatedState = (state, newStateData) =>
  Array.isArray(newStateData)
    ? updateStateArray(state, newStateData)
    : updateStateObject(state, newStateData);

const updateStateArray = (state, newStateData) =>
  newStateData.reduce((updatedState, { id, ...newItemData }) => {
    if (checkEmptyObject(newItemData)) {
      return updatedState.filter(({ id: idToCheck }) => idToCheck !== id);
    }

    const foundItem = state.find(({ id: itemId }) => itemId === id);

    if (!foundItem) {
      return [{ id, ...newItemData }, ...updatedState];
    }

    return updatedState.map((item) =>
      item.id === id ? { ...item, ...newItemData } : item
    );
  }, state);

const updateStateObject = (state, newStateData) =>
  Object.entries(newStateData).reduce(
    (updatedState, [key, value]) => ({
      ...updatedState,
      [key]:
        typeof value === "object" && value !== null
          ? getUpdatedState(updatedState[key], value)
          : value,
    }),
    state
  );

export const StateManager = ({ children, initialState }) => {
  const [state, setState] = useState(initialState);
  const updateState = (newStateData) =>
    setState(getUpdatedState(state, newStateData));
  return (
    <StateManagerContext.Provider value={{ state, setState, updateState }}>
      {children}
    </StateManagerContext.Provider>
  );
};

export const useStateManager = () => useContext(StateManagerContext);
