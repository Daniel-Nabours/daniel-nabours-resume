import styled from 'styled-components'

const MockGrid = styled.div`
  display: flex;
  width: 100%;
`; 
const Column = styled.div`
  flex: 1 1 50%;
  text-align: ${props => `${props.align ? props.align : "center"}`};
  padding: 0 0.6em;
  margin-top: 1rem;
`;
const Wrapper = ({ component, percent }) => {
  const Component = component; //react capitalization rules are a thing
  return (
    <> 
          <Component percent={percent * 100}>
            <MockGrid> 
              <Column align="center">{`${percent*1000}h${percent===1 ? "+" : ""}`}</Column>
            </MockGrid>
          </Component>
    </>
  );
};



const Progressbar = ({ children, percent, innerRef, ...props}) => {
  percent = percent < 0 ? 0 : percent > 100 ? 100 : percent;
  if (innerRef) {
    props.ref = innerRef;
  }
  return (
    <div className="c-progress-bar" {...props}>
      {children}
      <div
        className="c-progress-bar__indicator"
        style={{ width: `${percent}%` }}
        aria-hidden={true}
      >
        <div
          className="c-progress-bar__indicator-inner"
          style={{ width: `${100 / percent * 100}%` }}
        >
          {children}
        </div>
      </div> 
    </div>
  );
};
 
export const Bar = ({ percent }) => {
   return <Wrapper percent={percent} component={Progressbar} />
}