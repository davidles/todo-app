import { useReducer } from "react";

export const useTasks = (initialState = []) => {

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return [...state, {
          id: crypto.randomUUID(),
          title: action.title
        }];

      case 'REMOVE_TASK':
        return state.filter((item) => item.id !== action.id);

      default:
        return state;
    }
  }, initialState);

  return { state, dispatch };
}
