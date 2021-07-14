import {
  Headline,
  SubSubSection,
  Body,
  Byline
} from '../shared/StyledComponents';
import Category from '../shared/Category';
import { Publication } from '../../../data/publications';
import { formatDate } from '../../../utils/dateFormatter';

const PublicationSection = ({publications} : {publications : Publication[]}) => (
  <Category name="publications">
      {publications.map((p) => (
        <SubSubSection>
          <Headline>
            <Body>
              {p.title.toUpperCase()}
            </Body>
            <Body>
              {p.locations.map((l) => l.toUpperCase()).join(', ')}
            </Body>
          </Headline>
          <Byline>
            <Body>
            {formatDate(p.primary_date)}
            </Body>
          </Byline>
        </SubSubSection>
      ))}
    </Category>
);

export default PublicationSection;