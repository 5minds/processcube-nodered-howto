import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import Logo from '/public/ProcessCube-Logo.png';

const Home: React.FC = () => {
  return (
    <main className={styles.container}>
      <div className={styles.flexContainer}>
        <h1 className={styles.heading}>Welcome to the</h1>
        <Image
          className={styles.processcubeLogo}
          src={Logo}
          alt="5Minds ProcessCube"
          width={546}
          height={322}
          priority
        />
      </div>

      <div className={styles.linksContainer}>
        <Link
          href="https://processcube.io/docs/intro"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={styles.heading2}>
            Docs <span className={styles.span}>-&gt;</span>
          </h2>
          <p className={styles.paragraph}>Learn more about the ProcessCube and how to use it.</p>
        </Link>

        <Link
          href="https://processcube.io/course/intro"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={styles.heading2}>
            Course <span className={styles.span}>-&gt;</span>
          </h2>
          <p className={styles.paragraph}>Learn how to use the ProcessCube in a step-by-step course.</p>
        </Link>
      </div>
    </main>
  );
};

export default Home;
