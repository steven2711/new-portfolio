import Link from "next/link";

export default function Button({ text, path, direction }) {
  return (
    <>
      {direction === "down" ? (
        <div className="buttonDown">
          <Link href={path}>
            <a>{text}</a>
          </Link>
        </div>
      ) : direction === "up" ? (
        <div className="buttonUp">
          <Link href={path}>
            <a>{text}</a>
          </Link>
        </div>
      ) : null}
    </>
  );
}
