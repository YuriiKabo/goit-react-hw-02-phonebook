import PropTypes from 'prop-types';

export const ContactList = ({ contacts, deleteHandler }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <span>{name}: </span>
        <span>{number}</span>
        <button type="button" onClick={() => deleteHandler(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteHandler: PropTypes.func.isRequired,
};
