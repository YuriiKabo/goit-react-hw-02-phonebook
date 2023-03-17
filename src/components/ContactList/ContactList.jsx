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
