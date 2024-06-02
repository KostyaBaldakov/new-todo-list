import {
  get,
  orderByChild,
  push,
  query,
  ref,
  set,
  remove,
} from "firebase/database";
import { db } from "../firebase";

export const createTodo = (newTodo) =>
  push(ref(db, "todos"), newTodo).then(({ key }) => key);

export const readTodos = (searchPhrase = "", isAlphabetSorting = false) => {
  const todosDbRef = ref(db, "todos");
  const ordingField = isAlphabetSorting ? "title" : "id";

  return get(query(todosDbRef, orderByChild(ordingField))).then((snapshot) => {
    let loadedTodos = [];

    snapshot.forEach((todoSnapshot) => {
      const id = todoSnapshot.key;
      const { title, completed } = todoSnapshot.val();
      loadedTodos.push({ id, title, completed });
    });

    if (searchPhrase !== "") {
      loadedTodos = loadedTodos.filter(
        ({ title }) =>
          title.toLowerCase().indexOf(searchPhrase.toLowerCase()) >= 0
      );
    }
    return isAlphabetSorting ? loadedTodos : loadedTodos.reverse();
  });
};

export const updateTodo = (todoData) =>
  set(ref(db, `todos/${todoData.id}`), todoData);

export const deleteTodo = (todoId) => remove(ref(db, `todos/${todoId}`));
