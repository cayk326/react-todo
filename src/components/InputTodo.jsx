/**
 * タスクを入力し追加するためのコンポーネント
 */
import React from "react";

//JSとしてCSSを埋め込んでいく
//style.cssからinput-areaのcssへの関心を取り除き、対象のコンポーネントに関心を移せる
//デザイナーが別チームでいる場合は埋め込まない方が良いかも
const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="Todoを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
