import React from "react";

import PageContainer from "../../page";
import {Paragraph, Img} from "../../page-components";
import img from "./page-4.png";

export default () => {
  return (
    <PageContainer>
      <Paragraph padder>
        <Img src={img} mode="halfscreen" />
      </Paragraph>
      <Paragraph>Merci de votre participation active et bravo pour votre assiduité.</Paragraph>
      <Paragraph>
        Vous avez terminé l’ensemble des modules liés à la formation distancielle.
      </Paragraph>
    </PageContainer>
  );
};
