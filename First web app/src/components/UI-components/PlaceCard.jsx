import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditButton from '@mui/icons-material/MoreHoriz';
import { Backdrop } from '@mui/material';

const card = {
  display: "flex", 
  justifyContent: "space-between",
  width: "90%", 
}

const dummyObject = [
    {
      id: 1,
      place: "Starbucks Esentai Mall",
      address: "Al-farabi cho-to tam",
      isActive: false,
    },
    {
      id: 2,
      place: "Arbat park",
      address: "Panfilov ulitsa",
      isActive: false,
    },
    {
      id: 3,
      place: "Medeo",
      address: "Almaty taularynda",
      isActive: false,
    },
    {
      id: 4,
      place: "SpaceX shuttle",
      address: "Mars",
      isActive: false,
    },
]

export default function PlaceCard() {
  const [edit, setEdit]= React.useState(false);


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
              <Button onClick={()=> setEdit(true)}><EditButton style={{color: "#BBBBBB"}}/></Button> 
            </CardActions>
            <Backdrop
               sx={{ color: '#fff', zIndex: "0"}}
               open={edit}
               onClick={()=>setEdit(false)}/>
              {edit && <h1>Hello</h1>}
      </Card>
    )
  );
}