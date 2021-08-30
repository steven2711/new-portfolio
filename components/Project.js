import Link from "next/link";
import styles from "../styles/Project.module.css";
import Image from "next/image";
export default function Project({
  data: { title, type, website, ongoing, description, stack, image },
}) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <Image src={image} height={570} width={998} alt={title} />
      </div>
      <div className={styles.cardBody}>
        <h2>{title}</h2>
        <p>{type}</p>
        <p>{ongoing}</p>
        <p>{description}</p>
        <p>
          {stack.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </p>
      </div>
    </div>
  );
}
