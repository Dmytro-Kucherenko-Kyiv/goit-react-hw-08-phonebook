import { Input, Label, LabelWrap } from "./Filter.styled";
import { useDispatch, useSelector } from "react-redux";
import { contactsFilter } from "../redux/filterSlice";
import { getFilter } from "../redux/selectors"

export const Filter = () => {
  
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  
  return (

    <LabelWrap>
      <Label htmlFor='filter'> Find contacts by name
        <Input
          type='text'
          name='filter'
          value={filter}
          onChange={e => dispatch(contactsFilter(e.target.value))}
        />
      </Label>
    </LabelWrap>
  )
}