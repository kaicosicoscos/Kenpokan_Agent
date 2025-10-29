import Head from 'next/head';
import KenpokanAgent from '../components/KenpokanAgent';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kenpokan Probetraining</title>
      </Head>
      <KenpokanAgent />
    </>
  );
}