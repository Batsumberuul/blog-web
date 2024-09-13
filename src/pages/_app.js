import "@/styles/globals.css";
import Layout from "./layout";

import { DataContextProvider } from "@/component/DataContext";

export default function App({ Component, pageProps }) {
  return (
    <DataContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DataContextProvider>
  );
}
