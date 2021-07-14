import styled from 'styled-components';

const Tag = styled.button<{backgroundColor?: string, textColor?: string, inset?: boolean, flat?: boolean}>`
  font-size: 12px;
  font-weight: 500;
  ${props => (props.textColor && (!props.inset || props.flat)) && `color: ${props.textColor};`}
  background: ${props => (!props.inset || props.flat) && props.backgroundColor ? props.backgroundColor : `#EFEEEE`};
  padding: 5px 10px;
  margin: 0px 5px 5px 0px;
  border-radius: 24px;
  ${props => !props.flat && (props.inset ? 
    'box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.35), inset -1px -1px 5px rgba(256, 256, 256, 0.5);':
    'box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5), -1px -1px 3px rgba(256, 256, 256, 1);')
  }
`;

export default Tag;
