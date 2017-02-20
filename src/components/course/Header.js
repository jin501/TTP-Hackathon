import React from 'react'
import { Segment, Image, Header, Button } from 'semantic-ui-react'

const CourseHeader = (props) => (
  <Segment padded>
     <Header as='h2'>Course Title</Header>
     <Button color='green'>Go to Course</Button>
  </Segment>
)

export default CourseHeader
