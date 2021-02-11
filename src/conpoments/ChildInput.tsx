import React from "react";
import { FieldElement } from "react-hook-form";

// TODO: inputRef のタイプをつける
// react hook form の register だけを受け取れるように
// どうやって型指定したらいいかわからない
interface Props {
  valueName: string
  inputRef: any
}

export default function ChildInput(props: Props): JSX.Element {
  return (
    <input name={props.valueName} ref={props.inputRef} />
  );
}