import React, { useState, useEffect, useReducer } from "react";
import { Container, Display, Expression, Result, KeysRow, Key } from "./styles";
import { ResolveExpression, ReduceExpression, ExpressionProps } from "./util";

const { clear, backspace, copy } = ExpressionProps;

function Main() {
  const [result, setResult] = useState(0);
  const [expression, setExpression] = useReducer(ReduceExpression, "");

  useEffect(() => {
    let result = ResolveExpression(expression) || 0;
    if (result instanceof Error) {
      // console.error(result);
      result = "?";
    }
    setResult(result);
  }, [expression]);

  const keypad = [
    ["7", "8", "9", "+"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "*"],
    [{ label: "Back", backspace }, "0", ".", "/"],
    [{ label: "Clear", clear }, "(", ")", { label: "Copy Result", copy }],
  ];

  function getKeyValue(key) {
    const { label, handler } =
      key instanceof Object
        ? { label: key.label, handler: () => setExpression(key) }
        : { label: key, handler: () => setExpression({ label: key }) };

    return (
      <Key key={label} onClick={handler}>
        {label}
      </Key>
    );
  }

  return (
    <Container>
      <Display>
        <Expression>{expression}</Expression>
        <Result>= {result}</Result>
      </Display>
      {keypad.map((row, i) => {
        return (
          <KeysRow key={i}>{row.map((key, i) => getKeyValue(key))}</KeysRow>
        );
      })}
    </Container>
  );
}

export default Main;
