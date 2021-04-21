import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jack Block — decentralised community-driven lotteries</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{' '}
          <a href="https://www.jackblock.network">jackblock.network!</a>
        </h1>

        <p className={styles.description}>
          Get started with the platform by using the links below:
        </p>

        <div className={styles.grid}>
          <a
            href="https://devpost.com/software/jackblock-qwbosy"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h3>Into post &rarr;</h3>
            <p>
              Chainlink Virtual Hackathon Spring 2021: Winner Polkadot / Web3
              Prize
            </p>
          </a>

          <a href="dapp" className={styles.card}>
            <h3>dApp &rarr;</h3>
            <p>
              Try our dApp interface to place your bet and see if you were lucky
              to win!
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.atomiklabs.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img
            src="/vercel.svg"
            alt="Atomik Labs Logo"
            className={styles.logo}
          />
        </a>
      </footer>
    </div>
  );
}
