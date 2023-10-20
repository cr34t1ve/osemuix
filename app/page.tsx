import styles from "./page.module.css";
import Link from "next/link";

const designingProjects = [
  {
    name: "MailPigeon",
    image: "/images/mailpigoen.svg",
    url: "https://mailpigeon-front.vercel.app/",
  },
  {
    name: "cvMason",
    image: "/images/cvmason.svg",
    url: "https://cosmic-log-resume-builder.vercel.app/",
  },
];

const buildingProjects = [
  {
    name: "Fluffyshelf",
    image: "/images/fluffyshelf.svg",
    url: "https://www.fluffyshelf.com/",
  },
  {
    name: "Auctionpapa",
    image: "/images/auctionpapa.svg",
    url: "https://www.auctionpapa.com/",
  },
  {
    name: "Spawn",
    image: "/images/spawn.svg",
    url: "https://www.scfaccra.com/",
  },
  {
    name: "Rare Goods Only",
    image: "/images/rgo.svg",
    url: "https://raregoodsonly.webflow.io/",
  },
];

export default function Page() {
  return (
    <main className={styles.max_width}>
      <div className="flex-sb sticky-bottom">
        <div className="column mw-435">
          <h1 className="mb-20">Hi, I&apos;m Sebastian</h1>
          <p className="mb-50">
            7 years experience in User interface and Product design,{" "}
            <strong>
              Previously at New Comma, Effects Studio & Expresspay.
            </strong>
          </p>
          <p className="mb-35">
            Currently building solutions to solve real life problems especially
            for Africa.
          </p>
          <p>
            If you ever want to have a chat about the products I am building,
            anime, weird science stuff or share a meme,{" "}
            <Link href="mailto:osemuix@gmail.com">feel free to reach out.</Link>
          </p>
        </div>
      </div>
      <div className="column">
        <h2 className="mb-10">Designing</h2>
        <div className="grid mb-35">
          {designingProjects.map((project) => (
            <GridItem key={project.name} {...project} />
          ))}
        </div>
        <h2 className="mb-10">BUILDING</h2>
        <div className="grid mb-35">
          {buildingProjects.map((project) => (
            <GridItem key={project.name} {...project} />
          ))}
        </div>
      </div>
    </main>
  );
}

function GridItem({
  name,
  image,
  url,
}: {
  name: string;
  image: string;
  url: string;
}) {
  return (
    <Link href={url} target="_blank" className="grid-item">
      <img src={image} alt={name} />
    </Link>
  );
}
