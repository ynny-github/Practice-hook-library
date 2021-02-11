import React from "react";
import { useForm } from "react-hook-form";
import ChildInput from "./ChildInput";
import ChildBotton from "./ChildBotton"

type Data = {
  example: string
  exampleRequired: string
  childInput: string
  childSelect: number
}

export default function HookForm(): JSX.Element {
  const { register, errors, handleSubmit } = useForm<Data>()
  const onSubmit = (data: Data) => { 
    console.log(data)
    console.log(errors)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    {/* register your input into the hook by invoking the "register" function */}
      <input name="example" defaultValue="test" ref={register} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input name="exampleRequired" ref={register({ required: true })} />
      {/* errors will return when field validation fails  */}
      <ChildInput valueName="childInput" inputRef={register({required: true, max: 2})} />
      <ChildBotton valueName="childSelect" inputRef={register({valueAsNumber: true})} />
      <input type="submit" />
    </form>
  );
}