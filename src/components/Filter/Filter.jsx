import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => (
  <label>
    <p>Find contacts by name</p>
    <input name="text" type="text" value={value} onChange={onChange} />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
};
