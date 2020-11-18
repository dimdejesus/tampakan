import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import HoverCard from "./Card";

import { useTheme } from "@material-ui/core/styles";

export default function BasicSlider() {
    const theme = useTheme();

    return (
        <Grid container spacing={2} style={{ padding: theme.spacing(4) }}>
            <HoverCard image="/static/panels/1.png">
                <Typography variant="body2" style={{ color: "white" }}>
                    <b>Nearly 10,000 hectares of land</b> is the composition of
                    the final mining area (FMA) of the Tampakan Project, which
                    will impact the destruction of forests, leading to soil
                    erosion, air pollution, and a loss of biodiversity.
                </Typography>
                <Typography
                    variant="subtitle2"
                    style={{ marginTop: theme.spacing(2) }}
                >
                    <i>Photo credit: Google Maps</i>
                </Typography>
            </HoverCard>
            <HoverCard image="/static/panels/2.jpg">
                <Typography variant="body2" style={{ color: "white" }}>
                    <b>Almost 500,000 hectares of flooded area</b> in the event
                    of climate change can be inundated with 250 metric tons of
                    acid-forming waste rocks. <b>Over 800,000 trees</b> will be
                    cut putting areas near the mining site at higher risk of
                    experiencing flash floods and landslides.
                </Typography>
                <Typography
                    variant="subtitle2"
                    style={{ marginTop: theme.spacing(2) }}
                >
                    <i>Photo credit: Photo by Arnaud Mesureur on Unsplash</i>
                </Typography>
            </HoverCard>
            <HoverCard image="/static/panels/3.jpg">
                <Typography variant="body2" style={{ color: "white" }}>
                    <b>500 hectares of land</b> will be permanently altered by
                    the open pit. Imagine the equivalent of almost 2 Samal
                    islands that go 800 meters deep.
                </Typography>
                <Typography
                    variant="subtitle2"
                    style={{ marginTop: theme.spacing(2) }}
                >
                    <i>
                        Photo credit: Photo from The Smart Stones: Olivine
                        Foundation
                    </i>
                </Typography>
            </HoverCard>
            <HoverCard image="/static/panels/4.jpg">
                <Typography variant="body2" style={{ color: "white" }}>
                    <b>
                        Around 2,900 Lumads will be uprooted from their
                        ancestral lands.
                    </b>{" "}
                    Indigenous people take its identity and livelihood from
                    their ancestral lands. Their resettlement will also be the
                    process of them losing a part of their identity and losing
                    their social cohesion.
                </Typography>
                <Typography
                    variant="subtitle2"
                    style={{ marginTop: theme.spacing(2) }}
                >
                    <i>Photo credit: Bobby Timonera</i>
                </Typography>
            </HoverCard>
            <HoverCard image="/static/panels/5.png">
                <Typography variant="body2" style={{ color: "white" }}>
                    <b>985,730 hectares of watersheds</b> composed of the{" "}
                    <b>Catisan Allah Watershed</b> (South Cotabato and Sultan
                    Kudarat), <b>Marbel Watershed</b> (Cotabato), and{" "}
                    <b>Padada River Watershed</b> (Davao del Sur) are going to
                    be contaminated with the conduct of the Tampakan Project and
                    may impact the water supply within and beyond the affected
                    provinces.
                </Typography>
                <Typography
                    variant="subtitle2"
                    style={{ marginTop: theme.spacing(2) }}
                >
                    <i>
                        Map of Tampakan’s mining claim and the watersheds. Image
                        courtesy of CCCP.
                    </i>
                </Typography>
            </HoverCard>
            <HoverCard image="/static/panels/6.png">
                <Typography variant="body2" style={{ color: "white" }}>
                    Since 2010, the province of Cotabato has banned open-pit
                    mining. Yet, the Sagittarius Mines, Inc. still urges to
                    continue with the Tampakan Project despite the impending
                    legal conflicts.
                </Typography>
                <Typography
                    variant="subtitle2"
                    style={{ marginTop: theme.spacing(2) }}
                >
                    <i>Photo credit: Google Maps</i>
                </Typography>
            </HoverCard>
            <HoverCard image="/static/panels/7.jpg">
                <Typography variant="body2" style={{ color: "white" }}>
                    The Philippine Mining Act of 1995 is implemented to motivate
                    pro-miners to invest in mining in the country for increased
                    foreign investments and to create jobs for its people.
                    However, it spurred conflicts with the Indigenous Peoples
                    rights Act (IPRA). The law itself should manifest a
                    limitation in which it does not violate the rights of our
                    Lumads to their ancestral lands.
                </Typography>
                <Typography
                    variant="subtitle2"
                    style={{ marginTop: theme.spacing(2) }}
                >
                    <i>Photo credit: Dominik Vanyi</i>
                </Typography>
            </HoverCard>
            <HoverCard image="/static/panels/8.jpeg">
                <Typography variant="body2" style={{ color: "white" }}>
                    The Diocese of Marbel, headed by Bishop Cerilo Casicas, the
                    open-pit mining ban in South Cotabato “is very well aligned
                    with the Catholic Church’s encyclical on the environment,
                    the “Laudato Si.”
                </Typography>
                <br />
                <Typography variant="body2" style={{ color: "white" }}>
                    “146. In this sense, it is essential to show special care
                    for indigenous communities and their cultural traditions.
                    They are not merely one minority among others, but should be
                    the principal dialogue partners, especially when large
                    projects affecting their land are proposed.“
                </Typography>
                <Typography
                    variant="subtitle2"
                    style={{ marginTop: theme.spacing(2) }}
                >
                    <i>Photo credit: Strohscheidt/MISEREOR</i>
                </Typography>
            </HoverCard>
            <HoverCard image="/static/panels/9.jpg">
                <Typography variant="body2" style={{ color: "white" }}>
                    <b>14 FAULT LINES covering 83 km</b> snake underneath the
                    mining area which is only <b>12 km</b> away from Mt.
                    Matutum, an active volcano. This increases the seismic
                    activities on the site which can lead to spilling of the dam
                    alongside mine tailings and toxic mine wastes.
                </Typography>
                <Typography
                    variant="subtitle2"
                    style={{ marginTop: theme.spacing(2) }}
                >
                    <i>Photo credit: Andrew Buchanan on Unsplash</i>
                </Typography>
            </HoverCard>
        </Grid>
    );
}
