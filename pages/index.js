import Head from 'next/head'

import { Provider } from "react-redux";
import { ConfigureStore } from "../redux/configureStore";

const store = ConfigureStore();

export default function Home() {
  return (
    <Provider store={store}>
      <Head>
          <title>Setup</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <h2>Setup</h2>
      </div>
    </Provider>
  )
}
