/** @jsx jsx */
import { jsx, Container, Box, Image } from 'theme-ui';
import TextFeature from 'components/text-feature';

import servicesThumb from 'assets/services.jpeg';

const data = {
  subTitle: 'OUR Services',
  title: 'AFRICAN BUSINESS DEVELOPMENT',
  description:
    'accompanies its clients in the defining steps of their orientations, organization, development and positioning. To achieve this, we assist them in better understanding their environment, anticipating threats and opportunities, in order to gain an optimal position and influence In a context prone to rapid and sometimes disruptive changes generating multiple uncertainties, trusted advisory gains a decisive importance for leaders. Capitalizing on our breadth of expertise in different fields, we develop activities of high-level consulting to public and private sector in Africa and internationally Adapted to the specificities of Africa and respecting the highest ethical standards, our advisory services and our creative, operational and value-added solutions encourage the emergence of the continent.',
  btnName: 'Get Started',
  btnURL: 'pricing',
};

export default function Services() {
  return (
    <section>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <Image src={servicesThumb} alt='Thumbnail' />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: '20px',
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '90%', '90%', '50%'],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    mr: 'auto',
    ml: ['auto', null, null, null, 7],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
      borderRadius: '10px',
    },
  },
};
