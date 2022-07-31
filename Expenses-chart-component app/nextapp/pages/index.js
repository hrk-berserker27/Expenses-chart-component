import { Fragment, useState } from "react";
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
  return (
    <>
      <section>
        <h2> Spending - Last 7 days</h2>
        <div className="progress-bar-container">
          {Array.from(data).map((item) => (
            <div className="container" key={item.day}>
              <progress
                role="progressbar"
                max="60"
                value={item.amount}
              ></progress>
              <div className="day">{item.day}</div>
            </div>
          ))}
        </div>
        <footer>
          <section>
            Total this month <span>$478.33</span>
          </section>
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
      <main>
        <MyBalance balance="921.48" />
        <MySpending />
      </main>
    </Fragment>
  );
}
