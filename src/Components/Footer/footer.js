import { useRef,react, useState } from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { useDispatch } from "react-redux";
import { subscribeAction } from "../../redux/actions/subscribers";

const Footer = () => {
  const dispatch = useDispatch();

  const [subscribeData, setSubscribeData] = useState({
    email: ""
  });

  const handleInputChange = (e) => {
    subscribeData[e.target.name] = e.target.value;
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    await dispatch(subscribeAction(subscribeData))
      .then(() => console.log("subscribe: ", "sucess"))
      .catch((err) => console.error("subscribe:", err));
  };

  // const emailRef = useRef()
  // const [subscription, setSubscription] = useState({})

  // const subscribe = () => {

  //     fetch('https://www.wp-course.site//wp-json/youthink/subscribe', {
  //         method: 'post',
  //         body: JSON.stringify({ email: emailRef.current.value }),
  //         headers: {  'Content-Type': 'application/json' }
  //     }).then((response) => {
  //         response.json().then((json) => {
  //             setSubscription(json)
  //             setTimeout(() => {
  //                 setSubscription({})
  //                 emailRef.current.value = " "}, 2000)
  //         })
  //     })
  // }

  return (
    <footer>
      <div className="footer-section">
        <div className="sections">
          <div className="section">
            <h4>Section</h4>
            <ul>
              <li>
                <Link className="footer-Link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="footer-Link" to="/">
                  Features
                </Link>
              </li>
              <li>
                <Link className="footer-Link" to="/">
                  Pricing
                </Link>
              </li>
              <li>
                <Link className="footer-Link" to="/">
                  FAQs
                </Link>
              </li>
              <li>
                <Link className="footer-Link" to="/">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div className="section">
            <h4>Section</h4>
            <ul>
              <li>
                <Link className="footer-Link" to="/">
                  Twitter
                </Link>
              </li>
              <li>
                <Link className="footer-Link" to="/">
                  Instagram
                </Link>
              </li>
              <li>
                <Link className="footer-Link" to="/">
                  YouTube
                </Link>
              </li>
              <li>
                <Link className="footer-Link" to="/">
                  FaceBook
                </Link>
              </li>
              <li>
                <Link className="footer-Link" to="/">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="sub-section">
          <div>
            <h2>Subscribe to our newsletter</h2>
            <p>Monthly digest of whats new and exciting from us.</p>
            <div className="d-flex w-100 gap-2">
              <input
                className="sub-input"
                type="email"
                name="email"
                placeholder="Email address"
                // ref={emailRef}
                onChange={handleInputChange}
              />
              <button className="sub-btn" 
                    type="button" 
                    // onClick={subscribe}
                    onClick={handleSubscribe}
                    >
                Subscribe
              </button>
            </div>
            {/* {subscription.message && (
              <p
                className="sub-message"
                style={{ color: subscription.success ? "green" : "red" }}
              >
                {subscription.message}
              </p>
            )} */}
          </div>
        </div>
      </div>

      <div className="footer-company">
        <p>POWERED BY SYAN © 2022 Company, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
