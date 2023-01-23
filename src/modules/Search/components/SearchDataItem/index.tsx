import { FC } from "react";
import Text from "components/Text/Text";

import styles from "./index.module.scss";

type ISearchDataItemProps = {
  title: string;
  temperature: string | number;
};

export const SearchDataItem: FC<ISearchDataItemProps> = ({
  temperature,
  title,
}) => (
  <div className={styles.item}>
    <Text tag="h3">{title}</Text>
    <Text tag="h3">{temperature}</Text>
  </div>
);
