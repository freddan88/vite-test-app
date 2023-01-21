interface IAction {
  [key: string]: string;
}

function filterReducer(state: object, action: IAction) {
  return { ...state, ...action };
}

export default filterReducer;
