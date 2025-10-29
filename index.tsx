import Head from 'next/head';
import KenpokanAgent from '../components/KenpokanAgent';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kenpokan Probetraining</title>
      </Head>
      <main className="min-h-screen bg-gray-100 p-4">
        <KenpokanAgent />
      </main>
    </div>
  );
}