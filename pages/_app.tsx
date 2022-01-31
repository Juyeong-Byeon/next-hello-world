import "../styles/globals.css";
import { AppProps } from "next/app";
import NavBar from "../components/NavBar";
import Layout from "../components/Layout";

// next js가 항상 다른 페이지들을 그리기 전에 호출하는 HOC
// Component는 현제 페이지에서 그릴 컴포넌트이고, pageProps는 그 컴포넌트의 props
//일반적인 CSR앱의 MainView

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
