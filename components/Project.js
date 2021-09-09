import Image from "next/image";

export default function Project({
  data: { title, type, website, ongoing, description, stack, image },
}) {
  return (
    <div className="card">
      <a href={website} target="_blank" rel="noopener noreferrer">
        <div className="card-header">
          <Image
            src={image}
            height={570}
            width={998}
            alt={title}
            layout="responsive"
            priority={true}
          />
        </div>
        <div className="card-info">
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
