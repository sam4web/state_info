import PropTypes from 'prop-types';

const Input = (props) => {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      let name = event.target.value;
      props.onKeyDown(name);
      event.target.value = '';
    }
  };

  return (
    <div className='Input'>
      <input className='searchBar' type='text' onKeyDown={handleKeyDown} />
    </div>
  );
};

Input.propTypes = {
  onKeyDown: PropTypes.func,
};

Input.defaultProps = {
  onKeyDown: null,
};

export default Input;
