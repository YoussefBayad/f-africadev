import { Input, Textarea } from 'theme-ui';

export default ({ error, ...rest }) => (
  <Input {...rest} sx={error ? styles && styles.error : styles} />
);

const styles = {
  width: ' 100%',
  boxSizing: 'border-box',
  border: '2px solid ',
  borderColor: 'accent',
  padding: ' 0.8rem 1rem',
  borderRadius: '7px',
  marginBottom: '0.5rem',
  transition: '0.3s',

  error: {
    borderColor: '#ff4136',
  },

  '&:placeholder': {
    color: '#a7a7a7',
  },
};
