import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
// import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Image alt="main" src="/favicon.ico" width={50} height={50} />
      <div>
        <Link href="/">
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>

        <Link href="/about">
          <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
      </div>

      {/* next js 만의 방식 컴포넌트 내부로 SELECTOR들이 한정된다.*/}
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>

      {/*
            // 기본적인 방법
            <a
              className={`${styles.link} ${
                router.pathname === "/" ? styles.active : ""
              }`}
            >
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a
              className={`${styles.link} ${
                router.pathname === "/about" ? styles.active : ""
              }`}
            >
              About
            </a> */}
    </nav>
  );
}
``;
