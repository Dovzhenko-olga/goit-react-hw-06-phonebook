import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './PhoneBook.module.css';
import * as actions from '../../redux/contact-actions';

const PhoneBook = ({ contact, onDeleteContact }) => (

  <ul className={styles.list}>
    {contact.map(({ id, name, number }) => (
      <li className={styles.item} key={id}>
        <span>{name}:</span> <span>{number}</span>
        <button className={styles.button} onClick={() => onDeleteContact(id)}>Delete</button>
      </li>
    ))}
  </ul>
);

PhoneBook.propTypes = {
  contact: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const filteredContacts = (contacts, filter) => {
    const normalizedSearch = filter.toLowerCase();
    return contacts.filter(({name}) =>
      name.toLowerCase().includes(normalizedSearch));
  }

const mapStateToProps = ({ contact: { contacts, filter }}) => ({
  contact: filteredContacts(contacts, filter),
});

const mapDispatchToProps = dispatch => ({
    onDeleteContact: contactId => dispatch(actions.deleteContact(contactId)),
  })

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);