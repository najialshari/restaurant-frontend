import { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { useDispatch } from "react-redux";
import { subscribeAction } from "../../redux/actions/subscribers";
import { Grid, TextField, Button, Stack } from "@mui/material";

const Footer = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({ email: "" });
  const handleInputChange = (e) => setData({ [e.target.name]: e.target.value });
  const handleSubscribe = (e) => {
    e.preventDefault();
    dispatch(subscribeAction(data))
      .then(() => setData({ email: "" }))
      .catch((err) => console.error("subscribe:", err));
  };

  return (
    <footer>
      <div className="footer-section">
        <div className="sections">
          <div className="section">
            <h4>Follow</h4>
            <ul>
              <li>
                <Link className="footer-Link" to="/">
                  Facebook
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
            </ul>
          </div>

          <div className="section">
            <h4>Company</h4>
            <ul>
              <li>
                <Link className="footer-Link" to="/">
                  About us
                </Link>
              </li>
              <li>
                <Link className="footer-Link" to="/">
                  Support
                </Link>
              </li>
              <li>
                <Link className="footer-Link" to="/">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          <div className="section">
            <h4>Help</h4>
            <ul>
              <li>
                <Link className="footer-Link" to="/">
                  FAQs
                </Link>
              </li>
              <li>
                <Link className="footer-Link" to="/">
                  Terms of use
                </Link>
              </li>
              <li>
                <Link className="footer-Link" to="/">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="sub-section">
          <h3>Keep up to date</h3>
          <span>Join our newsletter for regular updates</span>
          <Stack direction={"row"} spacing={1}>
            <Grid item xs={12} >
              <TextField
                required
                size="small"
                name="email"
                id="email"
                sx={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                }}
                placeholder="Enter your email"
                value={data.email}
                onChange={(e) => handleInputChange(e)}
              />
            </Grid>
            <Button
              type="submit"
              variant="contained"
              onClick={handleSubscribe}
            >
              Subscribe
            </Button>
          </Stack>
        </div>
      </div>

      <div className="footer-company">
        <p>Designed by SYAN © 2023 Company, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
