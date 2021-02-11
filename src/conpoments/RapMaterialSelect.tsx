import { MenuItem, Select } from "@material-ui/core";
import React from "react";

interface Props {
  onChange: VoidFunction | undefined
  onBlur: VoidFunction | undefined
  value: number | string | undefined
}
export default function RapMaterialSelect(props: any): JSX.Element {
  return (
    <Select onChange={props.onChange} onBlur={props.onBlur} value={props.value}>
      <MenuItem value={1}>1</MenuItem>
      <MenuItem value={2}>2</MenuItem>
    </Select>
  );
}
RapMaterialSelect.defaultProps = {
  onChange: undefined,
  onBlur: undefined,
  value: undefined
};