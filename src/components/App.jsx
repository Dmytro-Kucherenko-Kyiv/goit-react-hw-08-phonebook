import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { ContactForm } from "./ContactForm/ContactForm";
import { Layout } from "./Layout/Layout";
import { fetchContacts } from "./redux/contactsOperations"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getError, getIsLoading } from "./redux/selectors"

export const App = (props) => {

  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return (
      <Layout>
        <div style={{display: 'flex', 
        flexDirection: 'column', 
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#041934',
          backgroundColor: '#c3f5bf',
        }}>
        <h1>Phonebook</h1>
        <ContactForm />
          {isLoading && !error &&
              <b style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              fontSize: 20, 
              color: '#f0595b' }}>
                Request in progress...
            </b>}
        <h2>Contacts</h2>
        <Filter/>
        <ContactList/>
        </div>
      </Layout>
    )
  }