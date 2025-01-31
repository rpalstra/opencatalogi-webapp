import * as React from "react";
import * as styles from "./CategoriesTemplate.module.css";
import { Heading, Paragraph, Icon } from "@utrecht/component-library-react/dist/css-module";
import { Container } from "@conduction/components";
import { useTranslation } from "react-i18next";
import { TEMPORARY_PORTFOLIOS } from "../../data/portfolio";
import { CategoriesardsAccordionTemplate } from "../templateParts/categoriesCardsAccordion/CategoriesCardsAccordionTemplate";
import { IconExternalLink, IconArrowRight } from "@tabler/icons-react";
import { Link } from "../../components";

export const CategoriesTemplate: React.FC = () => {
  const { t } = useTranslation();

  const categories = TEMPORARY_PORTFOLIOS;

  return (
    <Container layoutClassName={styles.container}>
      <div className={styles.header}>
        <Heading level={2} className={styles.title}>
          {t("Categories")}
        </Heading>

        <div className={styles.subHeading}>
          <Paragraph className={styles.description}>
            We verdelen{" "}
            <span>
              <Link to="/applications">
                <Icon className="utrecht-icon--conduction-start">
                  <IconArrowRight />
                </Icon>
                applicaties
              </Link>
            </span>{" "}
            en{" "}
            <span>
              <Link to="/components">
                <Icon className="utrecht-icon--conduction-start">
                  <IconArrowRight />
                </Icon>
                componenten
              </Link>
            </span>{" "}
            in categorieën gebaseerd op de
            <br />
            <span>
              <Link target="_new" href="https://www.gemmaonline.nl/index.php/GEMMA_Bedrijfsfuncties">
                <Icon className="utrecht-icon--conduction-start">
                  <IconExternalLink />
                </Icon>
                Gemma bedrijfsfuncties
              </Link>
            </span>
            .
          </Paragraph>
        </div>
      </div>

      <CategoriesardsAccordionTemplate {...{ categories }} />
    </Container>
  );
};
