// import PropTypes from 'prop-types';
import styles from './Contacts.module.css';

const ContactItem = ({ name, number, onDelete }) => {
  return (
    <li>
      <span>{name} : </span>
      <span>{number}</span>
      <button className={styles.button} onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};

// ContactItem.propTypes = {
//   contact: PropTypes.objectOf(PropTypes.string).isRequired,
// };

export default ContactItem;
