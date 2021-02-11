import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ChildBotton from "../conpoments/ChildBotton";
import { useForm } from "react-hook-form";

const {register, getValues} = useForm();

describe("pre test", () => {
  beforeEach(() => {
    render(<ChildBotton valueName="test" inputRef={register} />)
  })



})