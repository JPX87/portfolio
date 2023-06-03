import styled from 'styled-components'

const DivError = styled.div`
  background: #ffffff;
  max-width: calc(100vw - 100px);
  height: calc(100vh - 102px);
  margin: auto;
`
const ErrorMessage = styled.h1`
  margin: auto;
  width: max-content;
  height: max-content;
  color: #000000;
  display: block;
  text-align: center;
  margin: auto;
  margin-top: 20px;

  img {
    display: block;
    margin-top: 20px;
    max-width: 80vw;
    max-height: 70vh;
    border-radius: 20px;
  }
`

function Worksite() {
  return (
    <DivError>
      <ErrorMessage>
        Page en travaux :
        <img src="worksite.jpg" alt="" />
      </ErrorMessage>
    </DivError>
  )
}

export default Worksite
