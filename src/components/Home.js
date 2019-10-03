import React from 'react';

import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import img_airbnb from '../assets/Portfolio Cover - Airbnb NYC.jpg';

export default function Home() {
  let style = {
    sectionHeadDiv: {
      padding: '100px 0',
      backgroundColor: '#212121'
    }
  };

  let projectList = [
    {
      type: "ds",
      name: "Home buyer's Guide to Airbnb: NYC",
      subtitle: "Insights from data mining & linear regression on Airbnb’s datasets.",
      img: img_airbnb
    }
  ];

  let ds_blocks = [];
  let web_blocks = [];

  for (var i = 0; i < projectList.length; i++) {
    if (projectList[i].type === 'ds') {
      ds_blocks.push(
        <Card style={{width: 350, margin: 'auto'}} raised>
          <CardMedia
            image={img_airbnb}
            title={projectList[i].name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {projectList[i].name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Description here...
            </Typography>
          </CardContent>
        </Card>
      );
    } else {
      web_blocks.push(
        <Card style={{width: 350, margin: 'auto'}} raised>
          <CardMedia
            image={img_airbnb}
            title={projectList[i].name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {projectList[i].name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Description here...
            </Typography>
          </CardContent>
        </Card>
      );
    }
  }

  return (
    <div>
      <div style={{padding: '250px 0'}}>
        <Typography variant='h4' style={{width: '80%', margin: 'auto', lineHeight: 1.7}}>
          <span style={{fontWeight: 500, color: '#1e88e5'}}>Data Scientist</span>, <span style={{fontWeight: 500, color: '#e91e63'}}>Product Manager</span>, and <span style={{fontWeight: 500, color: '#4caf50'}}>Full-Stack Developer</span> passionate about tackling resource productivity
        </Typography>
        {/* <Typography variant='subtitle1'>(Energy, Water, Food, Human Capital)</Typography> */}
      </div>
      <div>
        <div style={style.sectionHeadDiv}>
          <Typography variant='h4' style={{color: 'white'}}><span role='img' aria-label='chart'>📊</span> Data Science</Typography>
        </div>
        <div style={{padding: '100px 0'}}>
          {ds_blocks}
        </div>
      </div>
      <div>
        <div style={style.sectionHeadDiv}>
          <Typography variant='h4' style={{color: 'white'}}><span role='img' aria-label='web'>🌍</span> Web</Typography>
        </div>
        <div style={{padding: '100px 0'}}>
          App blocks here.
        </div>
      </div>
    </div>
  );
}
