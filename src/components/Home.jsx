import React from "react";
import "./home.css";
import Icon from "../assets/Icon/icon_upadted.png";
import screenshot1 from "../assets/Screenshots/S1.png";
import screenshot2 from "../assets/Screenshots/S2.png";
import screenshot3 from "../assets/Screenshots/S3.png";
import screenshot4 from "../assets/Screenshots/S4.jpg";
const Home = () => {
  return (
    <div className="home">
      <div
        class="chr-homepage-hero__animation chr-homepage-hero__animation--top-right environment environment--active"
        data-environment="win|mac|linux,ALL,ALL"
      >
        <img
          data-comp="LazyLoader"
          class="js-lazy-load  js-lazy-async"
          src="https://google.com/chrome/static/images/homepage/hero-anim-top-right.webp"
          data-src="https://google.com/chrome/static/images/homepage/hero-anim-top-right.webp"
          srcset="https://google.com/chrome/static/images/homepage/hero-anim-top-right.webp 1x, https://google.com/chrome/static/images/homepage/hero-anim-top-right-2x.webp 2x"
          data-srcset="https://google.com/chrome/static/images/homepage/hero-anim-top-right.webp 1x, https://google.com/chrome/static/images/homepage/hero-anim-top-right-2x.webp 2x"
          aria-hidden="true"
          data-img-fallback="https://google.com/chrome/static/images/fallback/homepage/hero-anim.jpg"
        />
      </div>
      <div
        class="chr-homepage-hero__animation chr-homepage-hero__animation--middle-right environment environment--active"
        data-environment="win|mac|linux,ALL,ALL"
      >
        <img
          data-comp="LazyLoader"
          class="js-lazy-load  js-lazy-async"
          src=" https://google.com/chrome/static/images/homepage/hero-anim-middle.webp"
          data-src=" https://google.com/chrome/static/images/homepage/hero-anim-middle.webp"
          srcset=" https://google.com/chrome/static/images/homepage/hero-anim-middle.webp 1x,  https://google.com/chrome/static/images/homepage/hero-anim-middle-2x.webp 2x"
          data-srcset=" https://google.com/chrome/static/images/homepage/hero-anim-middle.webp 1x, /chrome/static/images/homepage/hero-anim-middle-2x.webp 2x"
          aria-hidden="true"
          data-img-fallback=" https://google.com/chrome/static/images/fallback/homepage/hero-anim.jpg"
        />
      </div>
      <section className="part1">
        <img className="svg" src={Icon} />
        <h1 className="homehead">
          A mini personal accounting app to manage your income and expenses
        </h1>
        <div className="home-download">
          <a
            className="navbar-download"
            target="blank"
            href="https://play.google.com/store/apps/details?id=com.company.expensedeck"
          >
            Download App
          </a>
        </div>
        <div className="small">
          <br />
          <p
            id="js-simplified-legal-links"
            class="chr-homepage-hero__simplified-links channel-win64-stable chr-copy chr-copy--legal show"
            aria-hidden="false"
          >
            By downloading Paisamonitor, you agree to the{" "}
            <a
              class="chr-full-bleed-hero__simplified-link"
              href="/terms"
              target="_blank"
              rel="noopener"
              ga-on="click"
              ga-event-category="chrome-body-link"
              ga-event-action="clicked"
              ga-event-label="terms:google"
            >
              Terms and conditions and privacy policy
            </a>
            &nbsp;
          </p>
        </div>
      </section>
      <div class="section part2 container">
        <div class="section-content">
          <h2 class="section-title">Easy and faster</h2>
          <p class="section-text">
            With Paisa Monitor, managing your finances is easier and faster. Say
            goodbye to manually calculating your transactions and struggling to
            keep track of your spending. Our intuitive and easy-to-use app is
            designed to help you take control of your money and stay organized.
            <br />
            Adding a new transaction is quick and effortless. Enter the amount,
            choose a category, and select the payment mode. Our app keeps all
            the details of your transactions, allowing you to access your
            financial summary by month, quarter, or year at any time.
          </p>
        </div>
        <div class="section-image">
          <img src={screenshot1} alt="Image Description" />
        </div>
      </div>
      <div class="section op part3 container">
        <div class="section-image">
          <img src={screenshot2} alt="Image Description" />
        </div>
        <div class="section-content">
          <h2 class="section-title">Manage daily income and expense</h2>
          <p class="section-text">
            Our app features a user-friendly interface that allows you to add
            new transactions with just a few taps. Choose from 15+ predefined
            income and expense categories, and add, edit, or delete categories
            based on your needs.
            <br />
            Paisa Monitor is the perfect tool for anyone who wants to simplify
            their financial management and stay on top of their daily income and
            expenses. Download the app now and take the first step towards
            financial freedom.
          </p>
        </div>
      </div>

      <div class="section part2 container">
        <div class="section-content">
          <h2 class="section-title">Daily reminder </h2>
          <p class="section-text">
            With Paisa Monitor, you never have to worry about forgetting to
            track your daily transactions. Our app features a daily reminder
            that prompts you to enter your transactions, ensuring you never miss
            a beat when managing your finances.
            <br />
            The daily reminder feature is handy for those with busy schedules
            who may need to remember to track their transactions regularly. With
            our app, you can stay on top of your finances even when on the go.
          </p>
        </div>
        <div class="section-image">
          <img src={screenshot3} alt="Image Description" />
        </div>
      </div>
      <div class="section op part3 container">
        <div class="section-image">
          <img src={screenshot4} alt="Image Description" />
        </div>
        <div class="section-content">
          <h2 class="section-title">refer and earn</h2>
          <p class="section-text">
            With Paisa Monitor, you get a powerful tool to manage your finances
            and an opportunity to earn money by sharing the app with your
            friends and family. All you have to do is to register yourself for
            affiliate on our website and start sharing the app with your
            network, and you can start earning money immediately.
            <br />
            So why wait? Share Paisa Monitor with your friends and family today,
            and start earning money while helping them manage their finances
            better. With our app, everyone wins.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
