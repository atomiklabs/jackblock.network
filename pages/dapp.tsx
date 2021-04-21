import dynamic from 'next/dynamic';
import styles from '../styles/DApp.module.css';

export default function DApp() {
  // The dapp-interface can only work with the window object available in runtime.
  const App = dynamic(() => import('../modules/dapp-interface/src/App'), {
    // Dynamic import with Server-Sider Rendering flag turned off allows us to
    // call the component being imported on the client-side only.
    ssr: false,
  });

  return (
    <div className={styles.container}>
      <a href="/">Back to Home</a>
      <div className={styles.substrateUi}>
        <App />
      </div>
    </div>
  );
}
