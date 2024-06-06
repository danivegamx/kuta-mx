import React from "react";

// Tipos para las acciones del reducer
type ActionTypes = "ERROR" | "LOADING" | "SAVE";

interface State<T> {
  item: T;
  loading: boolean;
  error: boolean;
}

interface Action<T> {
  type: ActionTypes;
  payload?: T | Error;
}

// Hook useLocalStorage
export function useLocalStorage<T>(itemName: string, initialValue: T) {
  const initialState = (initialValue: T): State<T> => ({
    item: initialValue,
    loading: true,
    error: false,
  });

  const reducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case "ERROR":
        return { ...state, error: true };
      case "LOADING":
        return { ...state, loading: false };
      case "SAVE":
        return { ...state, item: action.payload as T };
      default:
        return state;
    }
  };

  const [state, dispatch] = React.useReducer(reducer, initialState(initialValue));
  const { item, loading, error } = state;

  const onError = (error: Error) => {
    dispatch({ type: "ERROR", payload: error });
  };

  const onLoading = () => {
    dispatch({ type: "LOADING" });
  };

  const onSave = (item: T) => {
    dispatch({ type: "SAVE", payload: item });
  };

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem: T;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          onSave(parsedItem);
        }

        onLoading();
      } catch (error) {
        onLoading();
        onError(error as Error);
      }
    }, 3000);
  }, [itemName, initialValue]);

  const saveItem = (newItem: T) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    onSave(newItem);
  };

  return { item, saveItem, loading, error };
}