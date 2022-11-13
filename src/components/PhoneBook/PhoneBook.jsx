import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ContactsContainer, Title, Text } from './PhoneBook.styled';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactLIst';
import Filter from 'components/Filter';
import { Container  } from 'components/Container/Container';
import Spinner from 'components/Spinner';
import { useContacts } from 'hooks';
import { contactsOperations } from 'redux/contacts';

const PhoneBook = () => {
  const dispatch = useDispatch();
  const { contacts, filter, loader, setFilter } = useContacts();

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  const handleFilterInput = event => {
    const { value } = event.target;
    setFilter(value);
  };

  const filterContacts = () => {
    if (contacts.length !== 0 && typeof contacts !== 'string') {
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter)
      );
    }
    return [];
  };

  const filteredContacts = filterContacts();

  return (
    <Container display="flex" justifyContent="center">
      <ContactsContainer>
        <Title>Phonebook</Title>
        <ContactForm />

        <Title>Contacts</Title>
        <Container display="flex" justifyContent="space-between">
          <Filter value={filter} onChange={handleFilterInput} />
          <Text>Total contacts: {filteredContacts.length}</Text>
        </Container>

        {loader ? (
          Spinner.threeCircles
        ) : (
          <ContactList contacts={filteredContacts} />
        )}
      </ContactsContainer>
    </Container >
  );
};

export default PhoneBook;
