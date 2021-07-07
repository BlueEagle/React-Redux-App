import React from 'react'
import { generateActivity } from '../store/actions'
import { connect } from 'react-redux'
import { Button, Paper, Box } from '@material-ui/core'
import styled from 'styled-components'


const ContentDisplay = props => {
  // if (props.data.length !== 0) console.log('Data retrieved!')
  console.log("Data value:", props.data)

  return (
    <div>
      <h3>Click below to generate fun activity ideas!</h3>
      <Button onClick={props.generateActivity} variant="contained" color="primary">Generate activities!</Button>
      <StyledBox>
        <Paper elevation={3}>
          {props.isLoading && <p>Please wait, your data is loading...</p>}
          {props.error && <p className="error">Something went wrong: {props.error}</p>}
          {props.data !== null && (
            <StyledDiv>
              <h3>{props.data.activity}</h3>
              {/* <h4>Price: {props.data.price}</h4> */}
            </StyledDiv>
          )}
        </Paper>
      </StyledBox>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    data: state.data,
    error: state.error
  }
}

export default connect(
  mapStateToProps,
  {generateActivity}
)(ContentDisplay)

const StyledDiv = styled.div`
  padding: 1%;
  word-wrap: wrap;
`
const StyledBox = styled(Box)`
  margin-top: 2rem;
`