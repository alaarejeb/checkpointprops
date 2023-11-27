import React from 'react'
import Card from 'react-bootstrap/Card';


const Player = ({pic,name, team, nationality, jerseyNumber, age}) => {
  return (
    <div style={{display:'flex',flexDirection:'row'}}>
    <Card style={{width: '18rem', margin:'10px'}}>
    <Card.Img style={{ height: '420px', objectFit: 'cover' }} src={pic} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Team: {team} <br />
          Nationality: {nationality} <br />
          Jersey Number: {jerseyNumber} <br />
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>

    </div>
  )
}
Player.defaultProps ={
    name:'Player',
    team:'Fifa team',
    nationality:'Unknown',
    jerseyNumber:'?',
    age:'?'
}

export default Player  
                   