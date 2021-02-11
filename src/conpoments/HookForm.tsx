import React from "react";
import { useForm, Controller } from "react-hook-form";
import ChildInput from "./ChildInput";
import ChildBotton from "./ChildBotton"
import {Select, MenuItem} from "@material-ui/core"
import RapMaterialSelect from "./RapMaterialSelect";

type Data = {
  example: string
  exampleRequired: string
  childInput: string
  childSelect: number
  materialUISelect: string
  RapMaterialUISelect: string
}

export default function HookForm(): JSX.Element {
  const { register, control, errors, handleSubmit } = useForm<Data>()
  const onSubmit = (data: Data) => { 
    console.log(data)
    console.log(errors)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    {/* register your input into the hook by invoking the "register" function */}
      <input name="example" defaultValue="test" ref={register} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input name="exampleRequired" ref={register()} />
      {/* errors will return when field validation fails  */}
      <ChildInput valueName="childInput" inputRef={register()} />
      <ChildBotton valueName="childSelect" inputRef={register({valueAsNumber: true})} />
      <Controller
        as={
          <Select name="materialUiSelect">
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
          </Select>
        }
        control={control}
        name="materialUISelect"
      />
      {/* 
        as だと工夫なしラップしているコンポーネントから値を取り出せない
        onBlur, onChange と value を下位のコンポーネントが受け取るようしていればいい
        ↓ は onBlur, onChange と value を定義しているため，as で自動的に挿入してくれる
      */}
      <Controller
        as={
          <RapMaterialSelect />
        }
        control={control}
        name="RapMaterialSelect"
      />
      <input type="submit" />
    </form>
  );
}