import Head from 'next/head'

import { Provider } from "react-redux";
import { ConfigureStore } from "../redux/configureStore";
import Mainpage from './Mainpage';

const store = ConfigureStore();

export default function Home() {
  return (
    <Provider store={store}>
      <Head>
          <title>Setup</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <Mainpage/>
      </div>
    </Provider>
  )
}
