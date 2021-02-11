import React from "react";
import { FieldElement } from "react-hook-form";

// TODO: inputRef のタイプをつける
// react hook form の register だけを受け取れるように
// どうやって型指定したらいいかわからない
interface Props {
  valueName: string
  inputRef: any
}

export default function ChildBotton(props: Props): JSX.Element {
  return (
    <select name={props.valueName} ref={props.inputRef}>
        <option value={1}> 1 </option>
        <option value={2}> 2 </option>
        <option value={3}> 3 </option>
    </select>
  );
}