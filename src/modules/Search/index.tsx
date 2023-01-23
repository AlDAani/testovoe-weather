import { useGetWeatherListQuery } from "core/api/main";
import { useState } from "react";
import { useDebounce } from "hooks/useDebounce";

import styles from "modules/Search/index.module.scss";
import {
  ERROR_TEXT,
  LOADING_TEXT,
  PLACEHOLDER,
  TEMPERATURE_FEELS_LIKE,
  TEMPERATURE_FOR_TODAY,
} from "modules/Search/constants";
import Text from "components/Text/Text";
import { SearchDataItem } from "modules/Search/components/SearchDataItem";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const { data, error, isFetching } = useGetWeatherListQuery(
    { query: debouncedSearchTerm },
    {
      skip: debouncedSearchTerm.length < 1,
    }
  );

  const isError = error && !isFetching;
  const isShowData = data && !error && !isFetching;

  return (
    <div className={styles.search}>
      <input
        type="search"
        placeholder={PLACEHOLDER}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className={styles.data}>
        {isFetching && <Text>{LOADING_TEXT}</Text>}
        {isError && <div className={styles.error}>{ERROR_TEXT}</div>}
        {isShowData && (
          <>
            <div>
              <SearchDataItem
                temperature={Math.round(data.main.temp)}
                title={TEMPERATURE_FOR_TODAY}
              />
              <SearchDataItem
                temperature={Math.round(data.main.feels_like)}
                title={TEMPERATURE_FEELS_LIKE}
              />
            </div>
            <div>
              <img
                src={`https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png`}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
