import styled from '@emotion/styled'

export default styled.div`
  max-width: ${props => props.size === 'large' ? '1210px' : '1000px'};
  padding: 0 15px;
  margin: 0 auto;
`;