import { Button } from 'theme-ui';

export default (props) => {
  return <Button {...props} sx={styles}></Button>;
};
const styles = {
  cursor: 'pointer',
  borderRadius: '3px',
  padding: '0.7rem 2.5rem',
  border: 'none',
  webkitAppearance: ' none',
  webkitTouchCallout: 'none',
  webkitUserSelect: 'none',
  khtmlUserSelect: 'none',
  mozUserSelect: 'none',
  msUserSelect: 'none',
  userSelect: 'none',
  color: ' #fff',
  background: 'accent',

  '&:focus': {
    outline: 'none',
  },

  '&:disabled': {
    background: 'gray',
  },
};
