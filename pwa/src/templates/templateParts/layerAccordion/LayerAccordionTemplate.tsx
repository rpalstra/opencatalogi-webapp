import * as React from "react";
import * as styles from "./LayerAccordionTemplate.module.css";
import { QuoteWrapper } from "@conduction/components";
import { Button } from "@gemeente-denhaag/components-react";
import { navigate } from "gatsby";
import _ from "lodash";
import Collapsible from "react-collapsible";
import { FiltersContext } from "../../../context/filters";
import { LayerAccordionHeaderTemplate } from "./header/LayerAccordionHeaderTemplate";

interface LayerAccordionTemplateProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  color: string;
  title: string;
  categories: any[];
}

const LayerAccordionTemplate: React.FC<LayerAccordionTemplateProps> = ({ open, setOpen, color, title, categories }) => {
  const [filters, setFilters] = React.useContext(FiltersContext);

  return (
    <div className={!open && styles.container}>
      <QuoteWrapper borderColor={color}>
        <Collapsible
          trigger={<LayerAccordionHeaderTemplate {...{ open, title }} />}
          {...{ open }}
          transitionTime={200}
          onOpening={() => setOpen(true)}
          onClosing={() => setOpen(false)}
        >
          <div className={styles.items}>
            {categories.map((category) => (
              <Button
                className={styles[_.camelCase(`${title} category`)]}
                variant="secondary-action"
                icon={category.icon}
                onClick={() => {
                  setFilters({ ...filters, category: _.lowerCase(category?.value) });
                  navigate("/components");
                }}
              >
                {category.title}
              </Button>
            ))}
          </div>
        </Collapsible>
      </QuoteWrapper>
    </div>
  );
};

const LayerAccordionController = () => {
  const [open, setOpen] = React.useState<boolean>(true);

  return { open, setOpen };
};

const LayerAccordion = { accordion: LayerAccordionTemplate, controller: LayerAccordionController };
export { LayerAccordion };
