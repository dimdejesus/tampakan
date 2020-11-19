import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    container: {
        position: "relative",
        height: "clamp(65vh, 55vw, 90vh)",
    },
    footerContainer: {
        position: "absolute",
        backgroundImage: 'url("/static/maincut.svg")',
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: "clamp(70vh, 40vw, 100vh)",
        bottom: 0,
    },
});

const Description = () => {
    const style = useStyles();

    return (
        <div className={style.container}>
            <div className={style.footerContainer} />
        </div>
    );
};

export default Description;
