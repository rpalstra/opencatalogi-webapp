import * as React from "react";
import "../styling/index.css";
import * as styles from "./Layout.module.css";
import "./../translations/i18n";
import APIContext, { APIProvider } from "../apiService/apiContext";
import APIService from "../apiService/apiService";
import { GatsbyProvider, IGatsbyContext } from "../context/gatsby";
import { StylesProvider } from "@gemeente-denhaag/components-react";
import { HeaderTemplate } from "../templates/templateParts/header/HeaderTemplate";
import { FooterTemplate } from "../templates/templateParts/footer/FooterTemplate";
import { FiltersProvider, IFilters } from "../context/filters";

const { setEnv } = require("./../../static/env.js");

interface LayoutProps {
  children: React.ReactNode;
  pageContext: any; // Gatsby pageContext
  location: any; // Gatsby location
}

const Layout: React.FC<LayoutProps> = ({ children, pageContext, location }) => {
  const [filters, setFilters] = React.useState<IFilters>({});
  const [API, setAPI] = React.useState<APIService | null>(React.useContext(APIContext));
  const [gatsbyContext, setGatsbyContext] = React.useState<IGatsbyContext>({ ...{ pageContext, location } });

  React.useEffect(() => {
    setEnv();
    setAPI(new APIService());
  }, []);

  React.useEffect(() => {
    setGatsbyContext({ ...{ pageContext, location } });

    const JWT = sessionStorage.getItem("JWT");

    API && !API.authenticated && JWT && API.setAuthentication(JWT);
  }, [pageContext, location]);

  if (!API) return <></>;

  return (
    <div>
      <GatsbyProvider value={gatsbyContext}>
        <APIProvider value={API}>
          <FiltersProvider value={[filters, setFilters]}>
            <StylesProvider>
              <HeaderTemplate />
              <div className={styles.pageContent}>{children}</div>
              <FooterTemplate />
            </StylesProvider>
          </FiltersProvider>
        </APIProvider>
      </GatsbyProvider>
    </div>
  );
};

export default Layout;
