import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/contact-actions';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={styles.search}>
    <span className={styles.title}>
      Find contacts by name
    </span>
    <input className={styles.input} type="text" value={value} onChange={onChange} />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  value: state.contact.filter
})

const mapDispatchToProps = dispatch => ({
  onChange: (e) => dispatch(changeFilter(e.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);