import styled from 'styled-components';

export const Card = styled.div<{inset?: boolean}>`
  padding: 20px;
  flex: auto;
  ${props => props.inset ?
    'box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.15), inset -2px -2px 25px rgba(256, 256, 256, 1);':
    'box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25), -2px -2px 10px rgba(256, 256, 256, 0.9);'
  }
  border: rgba(255 255 255 0.2) solid 1px;
  background: #EFEEEE;
  border-radius: 5px;
`;

export const Column = styled.div`
  height: 100%;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SkillTagContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
`;

export const BulletText = styled.div`
  font-size: 12px;
  line-height: 1.3em;
`;

export const Headline = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

export const HeadlineRight = styled.div`
  padding-left: 10px;
  text-align: right;
  font-size: 14px;
  font-weight: 500;
`;

export const Byline = styled.div`
  font-size: 12px;
  font-weight: 400;
`;

export const BylineRight = styled.div`
  padding-left: 10px;
  text-align: right;
  font-size: 12px;
  font-weight: 400;
`;

export const BulletWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 7.5px;
`;