import { useState } from "react";
import { Form, Input, Label, SubmitButton } from "./ContactForm.styled";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "Redux/contacts/selectors";
// import { nanoid } from "@reduxjs/toolkit";
import { addContact } from "Redux/contacts/operations";
import { toast } from 'react-toastify';

export const ContactForm = () => {

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

const handleSubmit = e => {
  e.preventDefault();

  const result = contacts.find(({ name }) =>
    name.toLocaleLowerCase() === e.target.name.value.toLocaleLowerCase());
  
  if (result) {
/*     const message = `${e.target.name.value} is already in contact`;
    alert(message); */
    toast.warn(
        `${e.target.name.value} is already in contact`,
        {
          position: 'top-right',
          autoClose: 2000,
        }
      );
  }
  else {
    dispatch(addContact({ name, number })).then(result => {
      if (result.meta.requestStatus === 'fulfilled') {
        setName('');
        setNumber('');
        return;
      }
      toast.error(`Something went wrong. Сontact ${e.target.name.value} was not added`);
    });;

      setName('');
      setNumber('');
  }
}
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

    return (
      <Form onSubmit={(e) => { handleSubmit(e) }}>

      <Label htmlFor="name"> Name

        <Input
          value={name}
          onChange={e => setName(e.currentTarget.value)}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

      </Label>

      <Label htmlFor="number"> Number

        <Input
          value={number}
          onChange={e => setNumber(e.currentTarget.value)}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

      </Label>

      <SubmitButton type="submit">Add contact</SubmitButton>

    </Form>
  )
  }