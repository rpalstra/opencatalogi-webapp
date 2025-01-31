import * as React from "react";
import * as styles from "./AboutTemplate.module.css";
import { Container, QuoteWrapper } from "@conduction/components";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHeaderCell,
  Heading,
  Icon,
  Button,
  Paragraph,
} from "@utrecht/component-library-react/dist/css-module";
import layersVisual from "./../../assets/images/5-lagen-visualisatie.png";
import { TEMPORARY_STANDARDS } from "../../data/standards";
import { useTranslation } from "react-i18next";
import { Link } from "../../components";
import { IconExternalLink } from "@tabler/icons-react";
import { SubmitUrlTemplate } from "../templateParts/submitUrl/SubmitUrlTemplate";

export const AboutTemplate: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container layoutClassName={styles.container}>
      <section className={styles.section}>
        <Heading level={1}>Over OpenCatalogi</Heading>

        <Paragraph>
          OpenCatalogi is een weergave van Componenten verdeeld over de 5 lagen zoals gedefinieerd door VNG in het
          Gegevenslandschap.
        </Paragraph>

        <div className={styles.buttonsContainer}>
          <Button onClick={() => open("https://www.gemmaonline.nl/index.php/Gegevenslandschap")}>
            <Icon className="utrecht-icon--conduction-start">
              <IconExternalLink />
            </Icon>
            Gegevenslandschap
          </Button>

          <Button onClick={() => open("https://componentencatalogus.commonground.nl/5-lagen-model")}>
            <Icon className="utrecht-icon--conduction-start">
              <IconExternalLink />
            </Icon>
            5 lagen model
          </Button>
        </div>
      </section>

      <section className={styles.section}>
        <div>
          <SubmitUrlTemplate
            title={t("Register your component or organization")}
            placeholder={t("Repository url of your component or organization")}
            buttonLabel={t("Submit component or organization")}
          />
        </div>
      </section>

      <section className={styles.section}>
        <Heading level={2}>Component</Heading>

        <Paragraph className={styles.description}>
          Voor OpenCatalogi hanteren we de archimate definitie met de aanscherpingen die vanuit de VNG worden meegegeven
          in hoofdstuk 2.1 van{" "}
          <span>
            <Link
              target="_new"
              href="https://www.gemmaonline.nl/images/gemmaonline/0/09/GEMMA_Gegevenslandschap_-_Informatiearchitectuurprincipes_v1_0.pdf"
            >
              <Icon className="utrecht-icon--conduction-start">
                <IconExternalLink />
              </Icon>{" "}
              GEMMA gegevenslandschap informatiearchitectuurprincipes
            </Link>
          </span>
          .
        </Paragraph>

        <Paragraph className={styles.description}>
          De archimate definitie zoals vertaald door VNG: Een modulair, zelfstandig inzetbaar, herbruikbaar en
          vervangbaar deel van een systeem, dat zijn functionaliteit aanbiedt via goed gedefinieerde interfaces.
          Applicatiecomponenten stellen functionaliteit beschikbaar, die gebruikt wordt om de applicatiediensten mee te
          leveren.
        </Paragraph>

        <div className={styles.quoteWrapperContainer}>
          <QuoteWrapper>
            <Paragraph className={styles.description}>
              We werken met componenten die afgebakende functionaliteit kennen, zoveel mogelijk ontkoppeld zijn en met
              elkaar communiceren via gestandaardiseerde interfaces.
              <span className={styles.author}>
                — <i>Aanscherping vanuit de VNG</i>
              </span>
            </Paragraph>
          </QuoteWrapper>
        </div>
      </section>

      <section className={styles.section} id="score-calculation">
        <Heading level={2}>Ingevuld met (voor zover van toepassing) voor OpenCatalogi</Heading>

        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Autonomie</TableCell>
              <TableCell>Componenten zijn zelfstandig inzetbaar, schaalbaar en vervangbaar</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Losse koppeling</TableCell>
              <TableCell>
                Componenten zijn onderling onafhankelijk en zelfstandig door te ontwikkelen en gebruiken
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Herbruikbaar</TableCell>
              <TableCell>
                Componenten zijn vaker in te zetten door ze in verschillende omgevingen te gebruiken of door een
                component vaker te instantiëren binnen één omgeving
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Samenstelbaar</TableCell>
              <TableCell>Componenten kunnen worden gecombineerd tot nieuwe componenten</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Abstractie</TableCell>
              <TableCell>
                Afnemers hoeven alleen de functionaliteit van een component te kennen en niet de interne werking ervan.
                Service-contract - Een component kent duidelijke voorwaarden en leveringsafspraken over de kwaliteit en
                het volume van mogelijk gebruik door afnemers
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Vindbaar</TableCell>
              <TableCell>Services zijn voorzien van metadata en zijn goed vindbaar</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Toestandsloos</TableCell>
              <TableCell>
                Componenten die diensten leveren bewaren geen statusinformatie (maar laten dit over aan afnemers of
                gespecialiseerde componenten)
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>

      <section className={styles.section}>
        <Heading level={3}>Componenten conformeren zich aan het vijf-lagenmodel</Heading>

        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Componenten beperken zich tot functionaliteit binnen de laag waartoe ze behoren</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                Componenten voor interactie- en procesfunctionaliteit vragen gegevens op bij de bron via
                gestandaardiseerde interfaces
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Componenten bewerken geen brongegevens anders dan bij de bron</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>

      <section className={styles.section}>
        <Paragraph className={styles.description}>
          De verschijningsvorm van een component is afhankelijk van de laag. In navolgende figuur is dit weergegeven:
        </Paragraph>

        <img src={layersVisual} className={styles.layersVisual} />
      </section>

      <section className={styles.section}>
        <Heading level={3}>Applicatie</Heading>

        <Paragraph className={styles.description}>
          Samenstelling (toepassing) van componenten met minimaal één component op laag 5 ten behoeve van eindgebruik in
          een gemeentelijk bedrijfsproces/dienstverleningsproces.
        </Paragraph>

        <Paragraph className={styles.description}>
          In Opencatalogi kan vanuit een applicatie naar de samenstellende componenten worden doorgeklikt, waarbij ook
          een component kan zijn samengesteld uit meerdere (sub)componenten.
        </Paragraph>
      </section>

      <section className={styles.section}>
        <Heading level={2}>Gebruikte standaarden</Heading>
        <Paragraph className={styles.description}>
          Dit zijn de standaarden die gebruikt worden door OpenCatalogi. Deze standaarden zijn in lijn met de{" "}
          <span>
            <Link target="_new" href="https://forumstandaardisatie.nl/open-standaarden/verplicht">
              <Icon className="utrecht-icon--conduction-start">
                <IconExternalLink />
              </Icon>{" "}
              verplichte standaarden
            </Link>
          </span>{" "}
          die aangewezen zijn door de Nederlandse overheid.
        </Paragraph>

        <div className={styles.paragraphButtons}>
          <div onClick={() => open("https://forumstandaardisatie.nl/")}>
            <Button>
              <Icon className="utrecht-icon--conduction-start">
                <IconExternalLink />
              </Icon>
              Forum Standaardisatie
            </Button>
          </div>
          <div onClick={() => open("https://forumstandaardisatie.nl/open-standaarden/verplicht")}>
            <Button appearance="secondary-action-button">
              <Icon className="utrecht-icon--conduction-start">
                <IconExternalLink />
              </Icon>
              Verplichte Standaarden
            </Button>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.content}>
          <Table>
            <TableHeader>
              <TableRow className={styles.tableRow}>
                <TableHeaderCell>{t("Standard")}</TableHeaderCell>
                <TableHeaderCell>{t("Type")}</TableHeaderCell>
                <TableHeaderCell>{t("Version")}</TableHeaderCell>
                <TableHeaderCell>{t("Management organization")}</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {TEMPORARY_STANDARDS.map((standard, idx) => (
                <TableRow className={styles.tableRow} key={idx}>
                  <TableCell>{standard.name}</TableCell>
                  <TableCell>{standard.type}</TableCell>
                  <TableCell>{standard.versions.join(", ")}</TableCell>
                  <TableCell>{standard.organization}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
    </Container>
  );
};
