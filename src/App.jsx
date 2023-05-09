import React, { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return; //入力ボックスに何も文字が無ければ処理を実行しない
    const newTodos = [...incompleteTodos, todoText]; // incompleteTodos + todoText
    setIncompleteTodos(newTodos); //state変更
    setTodoText(""); //空文字を設定しなおす
  };
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos]; //現在のincompleteTodosをコピー
    //指定のインデックスの要素を削除
    /**
     * spliceを活用して削除する
     * 引数1: 何番目の要素か
     * 引数2: 引数1で指定した要素の番地から何個削除するか
     */
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos); //Todoの更新
  };
  const onClickComplete = (index) => {
    //alert(index);
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    //alert(index);
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];

    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>
          登録できるtodoは5個まで!ちゃんと消化して!
        </p>
      )}
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
