import Link from "next/link";
import styles from "../styles/Project.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Project({
  data: { title, type, website, ongoing, description, stack, image },
}) {
  return (
    <div className={styles.card}>
      <a href={website} target="_blank" rel="noopener noreferrer">
        <div className={styles.header}>
          <Image
            src={image}
            height={570}
            width={998}
            alt={title}
            layout="responsive"
          />
        </div>
        <div className={styles.cardInfo}>
          <h2>{title}</h2>

          <div>
            <p>{type}</p>
            {ongoing ? <span>Ongoing</span> : null}
          </div>
          <p>{ongoing}</p>
          {/* <p>{description}</p> */}

          {stack.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </a>
    </div>
  );
}
