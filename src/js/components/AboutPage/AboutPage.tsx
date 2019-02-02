import * as Styles from "./AboutPage.pcss";
import * as React from "react";
import Container from "@utils/Container";
import Page from "@utils/Page";
// Typescript doesn't like this?
//import Readme from "../../../../README.md";
const Readme = require("../../../../README.md");

const AboutPage = () => (
  <Page>
    <Container
      className={Styles.readme}
      dangerouslySetInnerHTML={{ __html: Readme }}
    />
  </Page>
);
export default AboutPage;