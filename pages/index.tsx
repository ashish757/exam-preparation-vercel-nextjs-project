import styles from './Home.module.scss'
// COMPONENTS
import Hero from '../components/home/Hero';
import Features from '../components/home/Features'
import Footer from "../components/home/Footer"
import LiveCounter from '../components/home/LiveCounter';
import QuickStart from '../components/home/QuickStart';


export default function Home() {
	return (
		<main className={styles.main}>
			<Hero />
			<Features />
			<QuickStart />
			<LiveCounter />
			<Footer />
		</main>
	)
}
