import {
  Email,
  Facebook,
  Instagram,
  Phone,
  Room,
  Telegram,
  Twitter,
} from "@mui/icons-material";
import scss from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={scss.container}>
      <div className={scss.left}>
        <h1 className={scss.logo}>M&M</h1>
        <p className={scss.desc}>
          An incredible eye for what's next in fashion. A passionate drive to
          exceed expectations. For more than 10 years, we've worked to deliver
          the best possible shopping experience, helping our customers express
          their style—not just buy fashion.
        </p>
        <div className={scss.socialContainer}>
          <div className={scss.socialIcon} style={{ background: "#3B5999" }}>
            <Facebook />
          </div>
          <div className={scss.socialIcon} style={{ background: "#E4405f" }}>
            <Instagram />
          </div>
          <div className={scss.socialIcon} style={{ background: "#55ACEE" }}>
            <Twitter />
          </div>
          <div className={scss.socialIcon} style={{ background: "#E60023" }}>
            <Telegram />
          </div>
        </div>
      </div>

      <div className={scss.center}>
        <h3>Useful Links</h3>
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>Man Fashion</li>
          <li>Woman Fashion</li>
          <li>Accessories</li>
          <li>My Account</li>
          <li>Order Tracking</li>
          <li>Shipping</li>
          <li>Wishlist</li>
          <li>Terms</li>
        </ul>
      </div>

      <div className={scss.right}>
        <h3>Contact</h3>
        <div className={scss.contactItem}>
          <Room />
          <a
            href="https://goo.gl/maps/z2YDBytbwcwpQia79"
            target="_blank"
            rel="noopener noreferrer"
          >
            Armenia, 0026, Yerevan <br /> Arshakunyats Ave., 34/3 Building
          </a>
        </div>
        <div className={scss.contactItem}>
          <Phone />
          <a href="tel:+37411888888">(374-11) 888 888</a>
        </div>
        <div className={scss.contactItem}>
          <Email />
          <a href="mailto:m&mshop@outlook.com">m&mshop@outlook.com</a>
        </div>
        <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="payment" />
      </div>
    </div>
  );
};

export default Footer;
