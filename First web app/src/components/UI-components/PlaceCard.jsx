import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditButton from '@mui/icons-material/MoreHoriz';

const card = {
  display: "flex", 
  width: "90%", 
}

const dummyObject = [
    {
      id: 1,
      place: "Starbucks Esentai Mall",
      address: "Al-farabi cho-to tam "
    },
    {
      id: 2,
      place: "Arbat park",
      address: "Panfilov ulitsa"
    },
    {
      id: 3,
      place: "Medeo",
      address: "Almaty taularynda"
    },
    {
      id: 4,
      place: "SpaceX shuttle",
      address: "Mars"
    },
]

export default function PlaceCard() {
  
  return (
        dummyObject.map((data)=>
      <Card style={card} key={data.id}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.place}
              </Typography>
                  {data.address}
              <Typography variant="body2" color="text.secondary">
              </Typography>
            </CardContent>
            <CardActions>
              <Button ><EditButton onClick={console.log("works")}style={{color: "#BBBBBB"}}/></Button> 
            </CardActions>
          </Card>
    )
  );
}