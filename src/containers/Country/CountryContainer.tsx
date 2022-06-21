import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getCountry } from "../../api";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import PageLoader from "../../components/Loader/PageLoader";

const CountryContainer = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery([id], () => getCountry(id || ""));

if (isLoading) {
  return <PageLoader />;
}

  return (
    <Container
      maxWidth="md"
      sx={{
        marginTop: '30px',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h2" sx={{ marginBottom: "10px" }}>
        {data?.country}
      </Typography>
      <img src={data?.countryInfo.flag} alt={data?.country} />
      <List dense>
        <ListItem>
          <ListItemText primary={`Population: ${data?.population} `} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary={`Today Cases: ${data?.todayCases} `} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary={`Active cases: ${data?.active} `} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText
            primary={`Active cases per 1M: ${data?.activePerOneMillion} `}
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary={`Today deaths: ${data?.todayDeaths} `} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary={`Total deaths: ${data?.deaths} `} />
        </ListItem>
        <Divider />
      </List>
    </Container>
  );
};
export default CountryContainer;
