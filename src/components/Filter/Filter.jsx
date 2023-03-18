import PropTypes from 'prop-types';
import css from './filter.module.css';

export const Filter = ({ value, onChange }) => (
  <label className={css.filterLabel}>
    <p className={css.filterTitle}>Find contacts by name</p>
    <input
      className={css.filterInput}
      name="text"
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
