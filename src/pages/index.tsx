import { Component } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";

class Home extends Component<any, any> {
    componentDidMount() {
        const countdown = document.querySelector("#countdown");

        // Set Launch Date (ms)

        const launchDate = new Date("Oct 1 2021 14:30:00").getTime();

        // Update Every Second
        const interval = setInterval(() => {
            // Get Current Date & Time
            const now = new Date().getTime();

            // Distance From Now to Launch Date
            const distance = launchDate - now;

            // Time Calcs
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display Result
            countdown!.innerHTML = `
                <div>${days}<span>Days</span></div>
                <div>${hours}<span>Hours</span></div>
                <div>${minutes}<span>Minutes</span></div>
                <div>${seconds}<span>Seconds</span></div>
            `;
        }, 1000);
    }

    twitterRedirect = () => {
        window.location.href = "https://twitter.com/nedanwr";
    }

    render(): JSX.Element {
        return (
            <div style={{
                background: "url('background.jpg') center center / cover fixed",
                width: "100vw",
                height: "100vh"
            }}>
                <Head>
                    <title>Naveed Ali Anwar — Web Designer & Developer</title>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    <meta name="description" content="Naveed Ali Anwar is a Web Designer & Developer creating highly quality designs and websites. Make your brand stand out with a modern, clean and professional website." />
                    <meta property="og:title" content="Naveed Ali Anwar — Web Designer & Developer" />
                    <meta property="og:description" content="Naveed Ali Anwar is a Web Designer & Developer creating highly quality designs and websites. Make your brand stand out with a modern, clean and professional website." />
                    <meta property="og:url" content="https://naveedalianwar.com" />
                    <meta property="og:site_name" content="Naveed Ali Anwar" />
                    <meta property="article:publisher" content="https://twitter.com/nedanwr" />
                    <meta property="og:image" content="https://naveedalianwar.com/branding.png" />
                    <meta property="og:image:width" content="64" />
                    <meta property="og:image:height" content="64" />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:creator" content="@nedanwr" />
                    <meta name="twitter:site" content="@nedanwr" />
                </Head>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/favicon.ico"
                    alt="Naveed Ali Anwar"
                    className={styles.branding}
                    onClick={this.twitterRedirect}
                />
                <div className={styles.overlay}></div>
                <main>
                    <h3 className={styles.subtitle}>Site Under Construction</h3>
                    <h1 className={styles.title}>Coming Soon</h1>
                    <div id="countdown" className={styles.countdown}></div>
                </main>
                <footer>
                    <h1 className={styles.copyright}>Copyright &copy; 2021 Naveed Ali Anwar. All Rights Reserved.</h1>
                </footer>
            </div>
        );
    }
}

export default Home;