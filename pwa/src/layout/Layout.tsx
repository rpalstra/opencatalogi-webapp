import * as React from "react";
import "../styling/index.css";
import * as styles from "./Layout.module.css";
import "./../translations/i18n";
import APIContext, { APIProvider } from "../apiService/apiContext";
import APIService from "../apiService/apiService";
import { GatsbyProvider, IGatsbyContext } from "../context/gatsby";
import { HeaderTemplate } from "../templates/templateParts/header/HeaderTemplate";
import { FooterTemplate } from "../templates/templateParts/footer/FooterTemplate";
import { FiltersProvider, IFilters, filters as _filters } from "../context/filters";
import { ThemeProvider } from "../styling/themeProvider/ThemeProvider";
import { useTranslation } from "react-i18next";
import _ from "lodash";
import { Head } from "./Head";
import { getScreenSize } from "../services/getScreenSize";

interface LayoutProps {
  children: React.ReactNode;
  pageContext: any; // Gatsby pageContext
  location: any; // Gatsby location
}

const Layout: React.FC<LayoutProps> = ({ children, pageContext, location }) => {
  const [filters, setFilters] = React.useState<IFilters>(_filters);
  const [API, setAPI] = React.useState<APIService | null>(React.useContext(APIContext));
  const [gatsbyContext, setGatsbyContext] = React.useState<IGatsbyContext>({
    ...{ pageContext, location, screenSize: "mobile" },
  });
  const [breadcrumbs, setBreadcrumbs] = React.useState<any>(null);
  const { t } = useTranslation();

  React.useEffect(() => {
    setAPI(new APIService());
  }, []);

  React.useEffect(() => {
    setGatsbyContext({ ...{ pageContext, location, screenSize: getScreenSize(window.innerWidth) } });

    const JWT = sessionStorage.getItem("JWT");

    API && !API.authenticated && JWT && API.setAuthentication(JWT);
  }, [pageContext, location]);

  React.useEffect(() => {
    const handleWindowResize = () => {
      setGatsbyContext({ ...gatsbyContext, screenSize: getScreenSize(window.innerWidth) });
    };

    window.addEventListener("resize", handleWindowResize);

    () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  React.useEffect(() => {
    if (!gatsbyContext) return;

    const {
      pageContext: {
        breadcrumb: { crumbs },
      },
    } = gatsbyContext;

    setBreadcrumbs(
      crumbs.map((crumb: any) => ({
        ...crumb,
        crumbLabel: t(_.upperFirst(crumb.crumbLabel)),
      })),
    );
  }, [gatsbyContext]);

  if (!API) return <></>;

  return (
    <>
      <Head />

      <GatsbyProvider value={gatsbyContext}>
        <APIProvider value={API}>
          <FiltersProvider value={[filters, setFilters]}>
            <ThemeProvider>
              <HeaderTemplate layoutClassName={styles.header} />

              <div className={styles.pageContent}>{children}</div>

              <FooterTemplate layoutClassName={styles.footer} />
            </ThemeProvider>
          </FiltersProvider>
        </APIProvider>
      </GatsbyProvider>
    </>
  );
};

export default Layout;
