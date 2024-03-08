"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const [robots, setRobots] = useState<string>("index,follow");
  const [header, setHeader] = useState<string>("Index Me");

  const [loadingMessage, setLoadingMessage] = useState<string>("Loading Data");

  const searchParams = useSearchParams();

  const waitTime = Number.parseInt(searchParams.get("wait") || "2500");
  const loadTime = Number.parseInt(searchParams.get("load") || "2");

  useEffect(() => {
    setTimeout(() => {
      setRobots("noindex, nofollow");
      setHeader("Don't Index Me");
    }, waitTime);

    fetch(`https://httpbin.org/delay/${loadTime}`)
      .then((data) => {
        setLoadingMessage("Data is now loaded");
      })
      .catch((err) => {
        setLoadingMessage("Error loading data!");
        console.error(err);
      });
  }, [waitTime, loadTime]);

  return (
    <main className={styles.main}>
      <Helmet>
        <meta name="robots" content={robots} />
      </Helmet>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
      </div>

      <h1>{header}</h1>

      <p>{loadingMessage}</p>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <span>+</span>
        <Image
          src="/amplify.svg"
          alt="Amplify Logo"
          width={45}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://docs.amplify.aws/gen2/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Review documentation for Amplify's code-first DX (Gen 2).</p>
        </a>

        <a
          href="https://docs.amplify.aws/gen2/start/quickstart/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Quickstart <span>-&gt;</span>
          </h2>
          <p>Follow a tutorial to build a fullstack app with Amplify Gen 2.</p>
        </a>

        <a
          href="https://docs.amplify.aws/gen2/build-a-backend/auth/set-up-auth/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Auth <span>-&gt;</span>
          </h2>
          <p>Zero-config Auth UI components with social sign-in and MFA.</p>
        </a>

        <a
          href="https://docs.amplify.aws/gen2/build-a-backend/data/set-up-data/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Data <span>-&gt;</span>
          </h2>
          <p>Fully-typed real-time API with NoSQL database.</p>
        </a>
      </div>
    </main>
  );
}
