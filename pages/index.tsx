import { useRef, useState } from "react";

import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import Header from "../components/header";
import IntroOverlay from "../components/intro-overlay";
import SEO from "../components/seo";
import { useBallAnimation } from "../utils/hooks/use-ball-animation";
import { projectsList } from "../utils/project-data";

type HomepageProps = {
  project: string | false;
};

const Homepage: NextPage<HomepageProps> = ({ project }) => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const projectsRef = useRef(null);

  const completeAnimation = () => {
    setAnimationComplete(true);
    document.body.style.overflowY = "auto";
  };

  const executeScroll = () => projectsRef.current.scrollIntoView();

  const scrollToProject = () => {
    if (typeof window !== "undefined") {
      if (project) {
        // Use the hash to find the first element with that id
        const element = document.getElementById(project);

        if (element) {
          // Smooth scroll to that elment
          element.scrollIntoView();
        }
      }
    }
  };

  useBallAnimation({
    project,
    onComplete: completeAnimation,
    scrollTo: scrollToProject,
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container"
    >
      <SEO
        title="Bresk | digital art"
        url="https://bresk.xyz/"
      />
      {animationComplete === false && <IntroOverlay />}
      <div className="after-animation">
        <main className="main-home">
          <div className="cta">
            <h1 className="title">
              Bresk creates<span className="playful"> generative </span> art.
            </h1>
            <img
              src="/images/bresklisa.png"
              alt="Bresk"
              className="peep-image"
            />
          </div>

          <p className="job-title">
            <span className="text-reveal">
              @TheBresk
            </span>
          </p>
          <button className="scroll-indicator" onClick={executeScroll}>
            <span>Collections</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </main>
        <div className="project-container" ref={projectsRef}>
          {projectsList.map(
            (
              {
                name,
                description,
                longDescription,
                image,
                mobileImage,
                link,
                slug,
                code,
                attributes,
              },
              i
            ) => (
              <div className="project" key={i} id={slug}>
                <Link href={slug}>
                  <picture>
                    <source srcSet={image}  />
                    <img
                      className="project-image"
                      src={mobileImage}
                      alt={name}
                    />
                  </picture>
                </Link>
                <div className="project-info">
                  <Link href={slug}>
                    <h2>{name}</h2>
                  </Link>
                  {description.split("\n").map((str, index) => (
                    <p key={index}>{str}</p>
                  ))}
                  {longDescription && (
                    <Link href={slug}>
                      <button className="project-read-more">
                        <span>Read More</span>{" "}
                        <div className="read-more-arrow">
                          <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                      </button>
                    </Link>
                  )}
                  <h3>Attributes:</h3>
                  <ul className="attributes-list">
                    {attributes.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <motion.div className="project-btns">
                    {link && (
                      <motion.a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        title={`Open site of ${name}`}
                        className="project-btn"
                      >
                        Secondary Market
                      </motion.a>
                    )}
                    {code && (
                      <motion.a
                        href={code}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        title={`View rarity for ${name}`}
                        className="project-btn"
                      >
                        Rarity rankings
                      </motion.a>
                    )}
                  </motion.div>
                </div>
              </div>
            )
          )}
        </div>
        <footer>
          <h2>Bresk around the web</h2>
          <ul className="footer-links">
            <li>
              <motion.a
              
                href="https://opensea.io/TheBresk"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Bresk on OpenSea"
              >
                <img src="https://storage.googleapis.com/opensea-static/Logomark/Logomark-Transparent%20White.png" alt="OpenSea" width={40} />
                <span className="footer-hidden-text">OpenSea</span>
              </motion.a>
            </li>
            <li>
              <motion.a
                href="https://mintsquare.io/zksync/Bresk"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Bresk on Mintsquare"
              >
                <img src="https://mintsquare.sfo3.cdn.digitaloceanspaces.com/mintsquare/collections/mintsquarelogo.jpg" alt="Mintsquare" width={40} />
                <span className="footer-hidden-text">Mintsquare</span>
              </motion.a>
            </li>
            <li>
              <motion.a
                href="https://twitter.com/TheBresk"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Follow Bresk on Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
                <span className="footer-hidden-text">Twitter</span>
              </motion.a>
            </li>
          </ul>
        </footer>
      </div>
    </motion.div>
  );
};

export default Homepage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;

  const project = query?.project ?? false;

  return {
    props: {
      project,
    },
  };
};
