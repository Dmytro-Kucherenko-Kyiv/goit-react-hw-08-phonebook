import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../Redux/contacts/operations';
import { getIsLoading } from '../Redux/contacts/selectors';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { ToastContainer } from 'react-toastify';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1 style={{ fontSize: '40px', color: '#041934', textAlign: 'center' }}>Phonebook</h1>
      <ContactForm />
      <Filter />
      <div style={{ fontSize: '20px', color: '#f0595b', textAlign: 'center' }}>{isLoading && 'Request in progress...'}</div>
      <ContactList />
      <ToastContainer position="top-left" autoClose={2000} />
    </>
  );
}
