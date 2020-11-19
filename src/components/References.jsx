import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    linksContainer: {
        marginLeft: "3%",
        display: "flex",
        flexDirection: "column",
    },
});

const References = () => {
    const style = useStyles();
    return (
        <div className={style.linksContainer}>
            <Typography variant="h4">REFERENCES</Typography>
            <ul>
                <li>
                    <a
                        href="https://www2.slideshare.net/no2mininginpalawan/tampakan-mine-project-eis-main-report-april-2011-8480064?from_action=sav"
                        target="_blank"
                        rel="noreferrer"
                    >
                        https://www2.slideshare.net/no2mininginpalawan/tampakan-mine-project-eis-main-report-april-2011-8480064?from_action=save
                    </a>
                </li>
                <li>
                    <a
                        href="https://www2.slideshare.net/no2miningph/to-mine-or-not-to-mine-the-case-of-the-tampakan-coppergold-project-mindanao-philippines"
                        target="_blank"
                        rel="noreferrer"
                    >
                        https://www2.slideshare.net/no2miningph/to-mine-or-not-to-mine-the-case-of-the-tampakan-coppergold-project-mindanao-philippines
                    </a>
                </li>
                <li>
                    <a
                        href="https://asmhub.mn/uploads/files/hria-human-rights-impact-assessment-tampakan-copper-gold-project-august2013.pdf"
                        target="_blank"
                        rel="noreferrer"
                    >
                        https://asmhub.mn/uploads/files/hria-human-rights-impact-assessment-tampakan-copper-gold-project-august2013.pdf
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default References;
