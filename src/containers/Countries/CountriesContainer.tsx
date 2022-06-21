import React, { useEffect, useState } from "react";
import { Container, TextField } from "@mui/material";
import PageLoader from "../../components/Loader/PageLoader";
import { useQuery } from "react-query";
import { getCountries, Country } from "../../api";
import CountryCard from "../../components/CountryCard/CountryCard";

const CountriesContainer = () => {
  const { data, isLoading } = useQuery("countries", getCountries);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState<Country[]>([]);

  useEffect(() => {
    if (data?.length) {
      setSearchResult(data);
    }
  }, [data]);

  if (isLoading) {
    return <PageLoader />;
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);

    if (data?.length) {
      const query = e.target.value.toLowerCase();
      const searchResult = data.filter((country) => {
        return country.country.toLowerCase().includes(query);
      });
      setSearchResult(searchResult);
      setSearchQuery(query);
    }
    console.log(e.target.value);
  };

  return (
    <Container maxWidth="md">
      <TextField
        label="Search"
        sx={{ margin: "20px 0" }}
        fullWidth
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <Container
        disableGutters
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "20px",
        }}
      >
        {searchResult?.map((country) => (
          <CountryCard key={country.country} {...country} />
        )) || <div>Loading...</div>}
      </Container>
    </Container>
  );
};

export default CountriesContainer;
