import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Paragraph, Img} from "../../page-components";
import img from "./page-8.png";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Les recommandations pour une alimentation équilibrée</Title>
      <Paragraph padder>
        <Img src={img} mode="avatar-lg" />
      </Paragraph>
      <Paragraph padder>
        <strong>2 à 3 produits laitiers par jour</strong> (avant 75 ans, 2 par jour)
      </Paragraph>
      <Paragraph>
        Privilégier les produits nature, les plus riches en calcium, les moins gras et les moins
        salés : lait, fromage blanc…
      </Paragraph>
    </PageContainer>
  );
};

export default Page;
