import Link from "next/link";
import { motion } from "framer-motion";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type HeaderProps = {
  logoLink: string;
};

const Header = ({ logoLink }: HeaderProps) => {
  return (
    <header>
      <div className="header-container">
        <div className="logo-container">
          <Link href={logoLink}>
            <a>
              <img src="/logo.svg" alt="Bresk logo" />
            </a>
          </Link>
        </div>
        </div>
    </header>
  );
};

export default Header;
