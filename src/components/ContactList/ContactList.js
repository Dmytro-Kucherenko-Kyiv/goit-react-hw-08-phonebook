import { DeleteButton, Item, ItemStyle, List } from "./ContactList.styled";
import { useSelector } from "react-redux";
import { getContacts } from "../redux/selectors";
import { getFilter } from "../redux/selectors";
import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contactsOperations"

export const ContactList = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = filter === '' ? contacts: contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

return(
  <List>
    {filteredContacts.map((contact) => 
      <Item key={contact.id}>
        <ItemStyle />

        {contact.name} : {contact.number}

        <DeleteButton type="button" onClick={() => dispatch(deleteContact(contact.id))}>Delete</DeleteButton>
      </Item>)}
    </List>
)
}