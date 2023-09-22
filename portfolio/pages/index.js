import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";


export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Manu Arora - Developer, Writer, Creator"
      description="This is a template built specifically for my blog - Creating a developer portfolio that gets you a job."
    >
      <Hero />
    </ContainerBlock>
  );
}

