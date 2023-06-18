import { Input, Label, LabelWrap } from "./Filter.styled";
import { useDispatch, useSelector } from "react-redux";
import { filterContact } from "Redux/contacts/contactsSlice";
import { getFilter } from "Redux/contacts/selectors";

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
          onChange={e => dispatch(filterContact(e.target.value))}
        />
      </Label>
    </LabelWrap>
  )
}