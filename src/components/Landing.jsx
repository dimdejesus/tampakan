import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    container: {
        position: "relative",
        padding: 0,
    },
    headerContainer: {
        width: "100vw",
        padding: 0,
        marginTop: theme.spacing(4),
    },
    clouds: {
        backgroundImage: 'url("/static/clouds.svg")',
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        height: "20vh",
        width: "100vw",
    },
    logo: {
        backgroundImage: 'url("/static/tampakanlogotype.svg")',
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        height: "clamp(0vh, 30vw, 25vh)",
    },
    counterContainer: {
        width: "100vw",
        color: "#004E3C",
        textAlign: "center",
        verticalAlign: "middle",
        padding: theme.spacing(4),
    },
    counterText: {
        fontSize: "clamp(100%, 2rem + 6vw, 7rem)",
        fontWeight: 800,
        padding: 0,
        margin: 0,
    },
}));

const Landing = ({ error, loading, value, countUp }) => {
    const style = useStyles();

    return (
        <>
            <div className={style.container}>
                <div className={style.headerContainer}>
                    <center>
                        <img
                            src="/static/partners.png"
                            alt="Tampakan Partners"
                            style={{ width: "clamp(200px, 20vw, 20vw)" }}
                        />
                    </center>
                    <div className={style.clouds}>
                        <div className={style.logo} />
                    </div>
                </div>
                <div className={style.counterContainer}>
                    {error && (
                        <Typography className={style.counterText}>
                            Count error!
                        </Typography>
                    )}
                    {loading && (
                        <Typography className={style.counterText}>
                            Counting...
                        </Typography>
                    )}
                    {value && (
                        <Typography className={style.counterText}>
                            {countUp}
                        </Typography>
                    )}
                    <Typography variant="subtitle1">
                        have signed for <b>ecological justice</b> and{" "}
                        <b>integrity</b>!
                    </Typography>
                </div>
            </div>
        </>
    );
};

export default Landing;
