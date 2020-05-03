import { Action } from "redux";

export default interface IAction<T> {
  type: string;
  item: T;
  items?: T[];
}
