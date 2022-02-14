/** @jsx jsx */
import { jsx, Container, Box, Image } from 'theme-ui';
import TextFeature from 'components/text-feature';

import aboutThumb from 'assets/about.jpg';

const data = {
  subTitle: 'About Us',
  title: 'AFRICAN BUSINESS DEVELOPMENT',
  description:
    'is a consulting firm specializing in strategy and influence. We assist decision-makers in governments, public institutions, businesses, foundations and NGOs and opinion leaders. Our founders came together to offer a new service based on a combination of financial and political skills.The scope and diversity of our experience enables us to provide strategic guidance combining complementary expertise. Thus, we enable our clients to understand complex situations and provide guidance and decisive impetus to their projects. An exceptional and very effective network of contacts in larger firms , and governments in Morocco and Africa.  The utmost discretion is assured.',
  btnName: 'Get Started',
  btnURL: 'pricing',
};

export default function About() {
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
          <Image src={aboutThumb} alt='Thumbnail' />
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
