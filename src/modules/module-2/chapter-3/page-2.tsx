import React, {FC} from "react";

import PageContainer from "../../page";
import img from "./page-2.png";

const Page: FC = () => {
  return (
    <PageContainer
      layout="quiz"
      title="Quiz n°2"
      img={img}
      statment="Les vitamines sont des nutriments énergétiques."
      choices={[
        {
          label: "Vrai",
          isTrue: false,
        },
        {
          label: "Faux",
          isTrue: true,
        },
      ]}
      answer="FAUX : Les nutriments énergétiques sont les lipides, les glucides, les protéines et l’alcool."
    />
  );
};

export default Page;
