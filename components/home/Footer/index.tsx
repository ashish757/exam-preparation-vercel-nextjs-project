import styles from './Footer.module.scss';
import Link from "next/link"
import Logo from "../../Logo"
import { ChevronRight, Facebook, LinkedIn, Instagram, Twitter } from "@material-ui/icons";


// 18681e 1et761 1d3c45

const ImpLink = ({ url, text }) => {

    return (
        <>
            <Link href={url}>
                <a> <ChevronRight /> {text}</a>
            </Link>
            <style jsx>
                {`
                    a {
                        display: flex;
                        align-items: center;
                        color: #fff;
                    }
                    a svg {
                        color: #03e36e;
                    }
                `}
            </style>
        </>


    )
}

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.top}></div>
            <div className={styles.middle}>
                <div className={styles.start}>
                    <div className={styles.info}>
                        <Logo/> <br />
                        <p>
                            <em>Qui repudiandae et eum dolores alias sed ea. Qui suscipit veniam excepturi quod.</em>
                        </p><br />
                        <p>
                            A108 Adam Street <br />
                                NY 535022, USA<br /><br />
                            <strong>Phone:</strong> +1 5589 55488 55<br />
                            <strong>Email:</strong> info@example.com<br />
                        </p><br />
                        <div className={styles.socialLinks} >
                            <a><Twitter /></a>
                            <a><Facebook /></a>
                            <a><Instagram /></a>
                            <a><LinkedIn /></a>
                        </div>
                    </div>
                </div>
                <div className={styles.center}>
                    <h1> Useful Links </h1><br/>
                    <ImpLink url="/" text="Home" />
                    <ImpLink url="/about" text="About" />
                    <ImpLink url="/contact" text="Contact" />
                    <ImpLink url="/donate" text="Donate" />
                </div>
                <div className={styles.end}> Quaq </div>
            </div>
            <div className={styles.bottom}>©️ 2021 FearBite</div>
        </footer>
    )
}
