import PropTypes from 'prop-types';

const ThemeBtn = ({ onClick, isLight }) => {
  return (
    <div className='ThemeBtn'>
      <button
        className='theme-change-btn'
        onClick={() => {
          return onClick();
        }}
      >
        <i className={`fa-solid fa-${isLight ? 'sun' : 'moon'}`}></i>
      </button>
    </div>
  );
};

ThemeBtn.propTypes = {
  onClick: PropTypes.func,
  isLight: PropTypes.bool,
};

ThemeBtn.defaultProps = {
  onClick: null,
  isLight: true,
};

export default ThemeBtn;
