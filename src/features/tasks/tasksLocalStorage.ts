import { Tasks } from "../../types";

const localStorageKey = "tasks";

export const saveTasksInLocalStorage = (tasks: Tasks[]): void =>
  localStorage.setItem(localStorageKey, JSON.stringify(tasks));

export const getTasksFromLocalStorage = (): Tasks[] => 
  JSON.parse(localStorage.getItem(localStorageKey)!) || [];
