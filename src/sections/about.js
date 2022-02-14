/** @jsx jsx */
import { jsx, Container, Box, Image } from 'theme-ui';
import TextFeature from 'components/text-feature';

import aboutThumb from 'assets/about.jpg';
import teamThumb from 'assets/team1.jpg';

const data = {
  company: {
    subTitle: 'About Us',
    title: 'AFRICAN BUSINESS DEVELOPMENT',
    description:
      'is a consulting firm specializing in strategy and influence. We assist decision-makers in governments, public institutions, businesses, foundations and NGOs and opinion leaders. Our founders came together to offer a new service based on a combination of financial and political skills.The scope and diversity of our experience enables us to provide strategic guidance combining complementary expertise. Thus, we enable our clients to understand complex situations and provide guidance and decisive impetus to their projects. An exceptional and very effective network of contacts in larger firms , and governments in Morocco and Africa.  The utmost discretion is assured.',
  },

  me: {
    title: 'HASSAN M. LAHLOU',
    description:
      '30 years experience in the business world in Morocco and abroad . High level of expertise in consulting and strategic planning . It has an extensive network and strong credibility with key public and private stakeholders active in Africa . It gradually develops a platform for high performance board that can support the players on the continent.Expert in cooperation and partnership for development and project management as well as human relations. He has a recognized experience in management of all types of crisis.',
  },
};

export default function About() {
  return (
    <section id='about'>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.company.subTitle}
            title={data.company.title}
            description={data.company.description}
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <Image src={aboutThumb} alt='Thumbnail' />
        </Box>
      </Container>
      <Container sx={styles.containerBox}>
        <Box sx={styles.thumbnail}>
          <Image src={teamThumb} alt='Thumbnail' />
        </Box>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.me.subTitle}
            title={data.me.title}
            description={data.me.description}
          />
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
