import * as React from "react";
import * as styles from "./CardsLandingDisplayTemplate.module.css";
import _ from "lodash";
import { DetailsCard } from "@conduction/components";
import { Heading2, LeadParagraph } from "@gemeente-denhaag/components-react";
import { TEMPORARY_PORTFOLIOS } from "../../../../data/portfolio";
import { useTranslation } from "react-i18next";

interface CardsLandingDisplayTemplateProps {}

export const CardsLandingDisplayTemplate: React.FC<CardsLandingDisplayTemplateProps> = ({}) => {
  const { t } = useTranslation();

  const categories = TEMPORARY_PORTFOLIOS;

  return (
    <>
      <div className={styles.subHeading}>
        <Heading2>{t("Categories")}</Heading2>

        <LeadParagraph>
          Voor onderstaande gemeentelijke producten en diensten zijn Common Ground oplossingen beschikbaar.
        </LeadParagraph>
      </div>
      <div className={styles.ComponentsGrid}>
        {categories.map((categorie) => (
          <DetailsCard
            title={categorie.title}
            introduction={categorie.description}
            link={{ href: `/categories/${categorie.id}`, label: "details" }}
          />
        ))}
      </div>
    </>
  );
};
