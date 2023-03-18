import css from './ContactForm.module.css';
export const ContactForm = ({
  handleSubmit,
  name,
  handleInputChange,
  number,
}) => (
  <form className={css.form} onSubmit={handleSubmit}>
    <label className={css.inputLable}>
      <p className={css.inputTitle}>Name</p>
      <input
        className={css.input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={name}
        onChange={handleInputChange}
        required
      />
    </label>
    <label className={css.inputLable}>
      <p className={css.inputTitle}>Number</p>
      <input
        className={css.input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={number}
        onChange={handleInputChange}
        required
      />
      <button className={css.submitBtn} type="submit">
        Add contact
      </button>
    </label>
  </form>
);
