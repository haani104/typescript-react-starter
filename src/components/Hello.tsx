import * as React from 'react';

export interface IProps {
  enthusiasmLevel?: number;
  name: string,
  onDecrement?: () => void;
  onIncrement?: () => void;
}

function Hello({enthusiasmLevel = 1, name, onDecrement, onIncrement }: IProps) {
  if (enthusiasmLevel <= 0) {
    throw new Error('No enthu found')
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <div>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    </div>
  );
}

function getExclamationMarks(numchars: number) {
  return Array(numchars + 1).join('!')
}

export default Hello;