import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import HoverCard from './Card';

import {  useTheme } from '@material-ui/core/styles';

export default function BasicSlider() {
  const theme = useTheme();

  return (
    <Grid container spacing={2} style={{ padding: theme.spacing(4) }}>
      <HoverCard image="/static/panels/1.png">
        <Typography variant="body2" style={{ color: 'white' }}>
          <b>9,605 hectares of land</b> is the composition of the final mining area (FMA) of the Tampakan Project, which will impact the destruction of forests, leading to soil erosion, air pollution, and a loss of biodiversity.
        </Typography>
      </HoverCard>
      <HoverCard image="/static/panels/2.jpg">
        <Typography variant="body2" style={{ color: 'white' }}>
          <b>800,000 trees</b> will be cut and in effect will put barangays near the site at higher risk of experiencing flash floods and landslides.
        </Typography>
        <Typography variant="subtitle2" style={{ marginTop: theme.spacing(2) }}>
          <i>Photo credit: Photo by Arnaud Mesureur on Unsplash</i>
        </Typography>
      </HoverCard>
      <HoverCard image="/static/panels/3.jpg">
        <Typography variant="body2" style={{ color: 'white' }}>
          <b>Almost 4,000 hectares</b> of lush rainforest will be cleared and dug. It is as big as the entire City of Manila except it is a one big hole.
        </Typography>
      </HoverCard>
      <HoverCard image="/static/panels/4.png">
        <Typography variant="body2" style={{ color: 'white' }}>
          <b>5,000 of our indigenous people</b> in over 1,000 households will resettle in the execution of the Tampakan Project
        </Typography>
      </HoverCard>
      <HoverCard image="/static/panels/5.png">
        <Typography variant="body2" style={{ color: 'white' }}>
          <b>985,730 hectares of watersheds</b> composed of the <b>Catisan Allah Watershed</b> (South Cotabato and Sultan Kudarat), <b>Marbel Watershed</b> (Cotabato), and <b>Padada River Watershed</b> (Davao del Sur) are going to be contaminated with the conduct of the Tampakan Project and may impact the water supply within and beyond the affected provinces. 
        </Typography>
        <Typography variant="subtitle2" style={{ marginTop: theme.spacing(2) }}>
          <i>The Allah River flows in Mindanao, located in the provinces of South Cotabato and Sultan Kudarat. It is 120 kilometres (75 mi) in length.</i>
        </Typography>
      </HoverCard>
      <HoverCard image="/static/panels/6.png">
        <Typography variant="body2" style={{ color: 'white' }}>
          Since 2010, the province of Cotabato has banned open-pit mining. Yet, the Sagittarius Mines, Inc. still urges to continue with the Tampakan Project despite the impending legal conflicts.
        </Typography>
      </HoverCard>
      <HoverCard image="/static/panels/7.jpg">
        <Typography variant="body2" style={{ color: 'white' }}>
          The Philippine Mining Act of 1995 is implemented to motivate pro-miners to invest in mining in the country for increased foreign investments and to create jobs for its people. However, it spurred conflicts with the Indigenous Peoples rights Act (IPRA). The law itself should manifest a limitation in which it does not violate the rights of our Lumads to their ancestral lands.
        </Typography>
      </HoverCard>
      <HoverCard image="/static/panels/8.jpeg">
        <Typography variant="body2" style={{ color: 'white' }}>
          The Diocese of Marbel, headed by Bishop Cerilo Casicas, the open-pit mining ban in South Cotabato “is very well aligned with the Catholic Church’s encyclical on the environment, the “Laudato Si.”
        </Typography>
        <br />
        <Typography variant="body2" style={{ color: 'white' }}>
          “146. In this sense, it is essential to show special care for indigenous communities and their cultural traditions. They are not merely one minority among others, but should be the principal dialogue partners, especially when large projects affecting their land are proposed.“
        </Typography>
        <Typography variant="subtitle2" style={{ marginTop: theme.spacing(2) }}>
          <i>Photo credit: Strohscheidt/MISEREOR</i>
        </Typography>
      </HoverCard>
      <HoverCard image="/static/panels/9.jpg">
        <Typography variant="body2" style={{ color: 'white' }}>
          25 years of continuing to fight against the Tampakan Project that has been started to be explored 30 years ago and their eagerness to pursue the project, we stay vigilant and ardent to protect our Tampakan.
        </Typography>
        <Typography variant="subtitle2" style={{ marginTop: theme.spacing(2) }}>
          <i>Photo credit: Bobby Timonera</i>
        </Typography>
      </HoverCard>
    </Grid>
  );
}