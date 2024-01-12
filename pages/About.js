import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import Counter from '@/components/Counter'
import styles from '@/styles/About.module.css'


export default function About() {
    return(
        <>
            <Header/>
            <main className={styles.main}>
                <h1>About Page</h1>
                <Counter/>
            </main>
            <Footer/>
        </>
    )
}