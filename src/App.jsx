import React from "react";

import Landing from "./components/Landing";
import Description from "./components/Description";
import Slider from "./components/Slider";
import Form from "./components/Form";
import References from "./components/References";
import Footer from "./components/Footer";

import useGlobalStyles from "./styles/useGlobalStyles";

import firebase from "./utils/firebase";
import { useDocument } from "react-firebase-hooks/firestore";
import { useCountUp } from "react-countup";

function App() {
    const style = useGlobalStyles();

    const [value, loading, error] = useDocument(
        firebase.firestore().collection("counts").doc("signatures"),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );

    const { countUp, update } = useCountUp({
        start: 0,
        end: 0,
        separator: ",",
        useEasing: true,
        duration: 4,
    });

    React.useEffect(() => {
        if (value) {
            update(value.data().value);
        }
    }, [update, value, countUp]);

    return (
        <div className={style.container}>
            <Landing
                value={value}
                loading={loading}
                error={error}
                countUp={countUp}
            />
            <Form update={update} value={value} />
            <Description />
            <Slider />
            <References />
            <Footer />
            <div className={style.footer}>
                Copyright 2020 SAMAHAN Central Board | Developed by SAMAHAN
                Creative Team and SAMAHAN System Development
                <br />
                Web Design by{" "}
                <a
                    href="https://twitter.com/sonroyaalmerol"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Son Roy Almerol
                </a>{" "}
                and{" "}
                <a
                    href="https://twitter.com/jeyowthreeshwa"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Joeshua Dequiña
                </a>
            </div>
        </div>
    );
}

export default App;
