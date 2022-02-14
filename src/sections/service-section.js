/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box } from 'theme-ui';
import FeatureCardColumn from 'components/feature-card-column.js';
import Group from 'assets/services/group.png';
import Flag from 'assets/services/flag.png';
import Company from 'assets/services/company.png';

const data = [
  {
    id: 1,
    imgSrc: Flag,
    title: 'OUR AREAS OF INTERVENTION',
    altText: 'Flag',
    text: `– Public affairs

    
      – Corporate strategy
      – Leaders advisory
      – Marketing and corporate communication
      – Corporate organization (HR, IS, Quality, Training …)
      – Investment advisory and Entrepreneurship
      – Development of business opportunities
      – Project Management
      – Intermediation
    `,
  },
  {
    id: 2,
    imgSrc: Group,
    title: 'OUR EXPERTISE',
    altText: 'Group',
    text:
      '– Strategic positioning & branding – Lobbying et networking  – Communication strategy and media relations – Digital communication Crisis management – Economic intelligence',
  },
  {
    id: 3,
    imgSrc: Company,
    title: 'WHO WE ADVISE    ',
    altText: 'Company',
    text: `In Morocco and worldwide we advise :
    – Institutions
    – Embassies
    – Foundations and NGO’s
    – Professional organizations
    – Corporations (Global groups, SME’s and very small innovatives companies)
    
    The variety of our clients leads us to intervene in different fields such as :
    
    – Finance and investment
    – Human resources
    – Healthcare
    – Construction
    – Education
    – Finance and Insurance
    – Industry and Energy
    – Tourism
    – Agriculture and food industry
    – Trade and Crafts
    – Telecoms and Internet
    – Research and Training`,
  },
];

export default function KeyFeature() {
  return (
    <section>
      <Container>
        <Box sx={styles.flex}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  flex: {
    width: '100%',
    mx: 'auto',
    display: 'flex',
    justifyContent: 'spaceBetween',
    alignItems: 'start',
  },
};
