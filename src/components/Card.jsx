import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import { useSpring, animated } from "react-spring";

import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    bannerDetailsContainer: {
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: 500,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundImage: "linear-gradient(180deg, transparent, black)",
    },
    twoLineText: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical",
    },
    detailsContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        color: "white",
        padding: theme.spacing(4),
    },
}));

export default function BasicSlider({ children, image, imageLink }) {
    const theme = useTheme();
    const classes = useStyles();

    const [containerProps, setContainerProps] = useSpring(() => ({
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    }));
    const [textProps, setTextProps] = useSpring(() => ({ opacity: 1 }));

    const onHover = () => {
        setContainerProps({ backgroundColor: "rgba(0, 0, 0, 0)" });
        setTextProps({ opacity: 0 });
    };

    const onLeave = () => {
        setContainerProps({ backgroundColor: "rgba(0, 0, 0, 0.5)" });
        setTextProps({ opacity: 1 });
    };

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card
                style={{
                    border: 0,
                    height: "100%",
                    background: `url("${image}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: 500,
                }}
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
                onClick={() => window.open(imageLink)}
                variant="outlined"
            >
                <animated.div
                    className={classes.bannerDetailsContainer}
                    style={containerProps}
                >
                    <CardContent style={{ padding: theme.spacing(3) }}>
                        <Grid container alignItems="flex-end">
                            <Grid item xs={12}>
                                <animated.div
                                    className={classes.detailsContainer}
                                    style={textProps}
                                >
                                    {children}
                                </animated.div>
                            </Grid>
                        </Grid>
                    </CardContent>
                </animated.div>
            </Card>
        </Grid>
    );
}
