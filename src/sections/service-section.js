/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import FeatureCardColumn from 'components/feature-card-column.js';
import Group from 'assets/services/group.png';
import Flag from 'assets/services/flag.png';
import Company from 'assets/services/company.png';

const data = [
  {
    id: 1,
    imgSrc: Group,
    altText: 'Group',
    text: 'A great knowledge of Africa and its challenges',
  },
  {
    id: 2,
    imgSrc: Company,
    altText: 'Companys',
    text: 'A range of innovative services in emerging sectors',
  },
  {
    id: 3,
    imgSrc: Flag,
    altText: 'Flag',
    text:
      'The guarantee of a reliable partner and a support that fits your needs',
  },
];

export default function KeyFeature() {
  return (
    <section>
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
