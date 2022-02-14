/** @jsx jsx */
import { jsx, Image, Box, Heading, Text } from 'theme-ui';

export default function FeatureCardColumn({
  src,
  altText = 'default alt text',
  title,
  text,
}) {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.round}>
        <Image src={src} altText={altText} sx={styles.img} />
      </Box>
      <Box sx={styles.wrapper}>
        <Heading sx={styles.wrapper.title}>{title}</Heading>
        <Text sx={styles.wrapper.subTitle}>{text}</Text>
      </Box>
    </Box>
  );
}

const styles = {
  card: {
    display: 'flex',
    alignItems: ['center', 'flex-start'],
    flexDirection: 'column',
    mb: -1,
    textAlign: 'center',
    px: [4, null, 0],
  },
  round: {
    margin: 'auto',
    mb: -2,
    width: '100px',
    height: '100px',
    backgroundColor: '#a5753e',
    borderRadius: '50%',
  },
  img: {
    padding: '20px',
  },

  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    title: {
      fontSize: 3,
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3],
    },
    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: '1.9',
    },
  },
};
