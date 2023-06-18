import { DeleteButton, Item, ItemStyle, List, Title, Text } from "./ContactList.styled";
import { getContacts, getFilter } from 'Redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'Redux/contacts/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = filter === '' ? contacts: contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
  <>
    <Title>Contacts</Title>
      {contacts.length === 0 && (
        <p>You don't have any contacts. Please add some ...</p>
      )}
    <List>
      {filteredContacts.map((contact) => 
        <Item key={contact.id}>
          <ItemStyle />

        <Text>{contact.name} : {contact.number}</Text>

          <DeleteButton type="button" onClick={() => dispatch(deleteContact(contact.id))}>Delete</DeleteButton>
        </Item>)}
    </List>
  </>
)
};