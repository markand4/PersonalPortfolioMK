import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import AboutMe from "../components/AboutMe";


export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Mark Kurpiel's portfolio"
      description="My site to display who I am and what I do"
    >
      <AboutMe />
    </ContainerBlock>
  );
}

