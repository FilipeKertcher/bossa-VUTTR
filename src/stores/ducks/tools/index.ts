import IAction from "models/action";

import ITool from "models/tool";

export enum ToolsReducerActions {
  ADD_TOOL = "ADD_TOOL",
  REMOVE_TOOL = "REMOVE_TOOL",
  UPDATE_TOOL_LIST = "UPDATE_TOOL_LIST",
}

const toolsReducer = (state: ITool[] = [], action: IAction<ITool>) => {
  switch (action.type) {
    case ToolsReducerActions.ADD_TOOL:
      return [...state, action.item];
    case ToolsReducerActions.REMOVE_TOOL:
      const foundIndex = state.findIndex((x) => x.id === action.item.id);
      if (foundIndex === -1) return state;
      else
        return [...state.slice(0, foundIndex), ...state.slice(foundIndex + 1)];
    case ToolsReducerActions.UPDATE_TOOL_LIST:
      if (!!action.items) return action.items;
      return state;
    default:
      return state;
  }
};

export default toolsReducer;
