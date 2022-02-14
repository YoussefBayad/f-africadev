/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import FeatureCardColumn from 'components/feature-card-column.js';
import Africa from 'assets/key-feature/africa.png';
import Contract from 'assets/key-feature/contract.png';
import Idea from 'assets/key-feature/idea.png';

const data = [
  {
    id: 1,
    imgSrc: Africa,
    altText: 'Africa',
    text: 'A great knowledge of Africa and its challenges',
  },
  {
    id: 2,
    imgSrc: Idea,
    altText: 'Ideas',
    text: 'A range of innovative services in emerging sectors',
  },
  {
    id: 3,
    imgSrc: Contract,
    altText: 'Contract',
    text:
      'The guarantee of a reliable partner and a support that fits your needs',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }}>
      <Container>
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: '100%',
    mx: 'auto',
    gridGap: '100px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 2fr))',
  },
};
