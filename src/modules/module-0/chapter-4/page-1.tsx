import React, {FC} from "react";

import PageContainer from "../../page";
import {Title, Paragraph, Img} from "../../page-components";
import img from "./page-1.png";

const Page: FC = () => {
  return (
    <PageContainer>
      <Title>Présentation des Ateliers Nutri Activ'</Title>
      <Paragraph padder>
        <Img src={img} mode="avatar-lg" />
      </Paragraph>
      <Paragraph align="left">
        Ils ont pour objectifs de permettre aux participants de prendre conscience de leurs
        comportements en matière d’alimentation et d’activité physique et d’échanger sur les
        comportements favorables à la santé pour les adopter.
      </Paragraph>
    </PageContainer>
  );
};

export default Page;
