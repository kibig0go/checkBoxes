let state = {
    selectedIds: []
  };

  export function getState() {
    return { ...state };
  }

  export function setState(newState) {
    state = { ...state, ...newState };
  }
