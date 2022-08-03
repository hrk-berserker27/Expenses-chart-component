import { Fragment } from "react";
import Head from "next/head";
import data from "../public/data.json";
function MyBalance(props) {
  return (
    <>
      <header>
        <h1>My balance</h1>
        <h2>${props.balance}</h2>
        <svg
          width="72"
          height="48"
          viewBox="0 0 72 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <circle fill="#382314" cx="48" cy="24" r="24" />
            <circle stroke="#FFF" strokeWidth="2" cx="24" cy="24" r="23" />
          </g>
        </svg>
      </header>
    </>
  );
}

function MySpending() {
  //javascript -> I am proud of
  const newMap = new Map();
  const BalancingToEM = (amount) => {
    const maxValue = 55;
    return (10 / maxValue) * amount;
  };
  data.map((item) => newMap.set(item.day, BalancingToEM(item.amount)));
  const heightSetter = () => {
    if (typeof window !== "undefined") {
      const itemList = document.querySelectorAll(".progress");
      Array.from(itemList).map((item) => {
        const day = item.getAttribute("data-id");
        if (day === "wed") {
          item.style.backgroundColor = "hsl(186, 34%, 60%)";
        }
        const newHeight = newMap.get(day);
        item.style.setProperty("--dynamicHeight", `${newHeight}em`);
      });
    }
  };
  heightSetter();
  return (
    <>
      <section>
        <h2> Spending - Last 7 days</h2>
        <div className="progress-bar-container">
          {Array.from(data).map((item) => (
            <div className="container" key={item.day}>
              <div className="data-amount">${item.amount}</div>
              <div
                data-id={item.day}
                data-value={item.amount}
                className="progress"
              ></div>
              <div className="day">{item.day}</div>
            </div>
          ))}
        </div>
        <footer>
          <div className="section">
            Total this month <span>$478.33</span>
          </div>
          <aside>
            <div>+2.4% </div>
            <div>from last month</div>
          </aside>
        </footer>
      </section>
    </>
  );
}
export default function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>Expenses Chart Component | Frontend Mentor</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="my first next.js app" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./images/favicon-32x32.png"
        ></link>
      </Head>
      <main>
        <MyBalance balance="921.48" />
        <MySpending />
      </main>
    </Fragment>
  );
}
