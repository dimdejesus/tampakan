import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
    container: {
        paddingBottom: 100,
    },
    leftContainer: {
        padding: 40,
    },
    rightContainer: {
        padding: 40,
    },
});

const Description = () => {
    const style = useStyles();

    return (
        <Grid
            container
            className={style.container}
            alignItems="center"
            justify="center"
        >
            <Grid item md={6} className={style.leftContainer}>
                <center>
                    <img
                        src="/static/tampakanlogo.svg"
                        alt="Tampakan"
                        style={{ width: "80%" }}
                    />
                </center>
            </Grid>
            <Grid item md={6} className={style.rightContainer}>
                <div>
                    <Typography variant="body1">
                        <b>Tayo Tayo Para Sa Tampakan</b> is an initiative of
                        the Ateneo de Davao University to show resistance
                        towards the commencement of the Tampakan Project of the
                        Sagittarius Mines, Inc. situated between Tampakan in
                        South Cotabato and Kiblawan in Davao del Sur. The said
                        project aims to exploit the world’s largest undeveloped
                        copper-gold deposit affecting 11 Blaan communities, 4
                        provinces and 16 municipalities in Mindanao..{" "}
                    </Typography>
                    <Typography variant="body1">
                        This movement demands ecological justice and integrity
                        that Mindanao deserves in order to preserve its uniquely
                        and beautifully diverse culture, people, and
                        environment.
                    </Typography>
                </div>
            </Grid>
        </Grid>
    );
};

export default Description;
