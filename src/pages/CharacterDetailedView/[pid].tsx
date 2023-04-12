import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

function CharacterDetailedView() {
  const router = useRouter();
  const [episodes, setEpisodes] = useState([]);

  const { pid } = router.query;
  const { data, isLoading } = useQuery(
    ["episodes"],
    async () =>
      await fetch("https://rickandmortyapi.com/api/character/1").then(
        async (result) => result.json()
      )
  );

  useEffect(() => {
    if (data?.episode?.length) {
      const episodeUrls = data.episode;
      Promise.all(
        episodeUrls.map(async (url) => {
          const episodeResult = await fetch(url);
          const episodeData = await episodeResult.json();
          return episodeData;
        })
      )
        .then((episodes) => setEpisodes(episodes))
        .catch((error) => console.error("Error fetching episodes:", error));
    }
  }, [data]);

  return (
    <div>
      <Card sx={{ display: "flex", flexDirection: "column" }}>
        <>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                {data?.name}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {data?.species}
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                component="div"
              >
                Origin: {data?.origin.name}
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                component="div"
              >
                Current Location: {data?.location.name}
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                component="div"
              ></Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={data?.image}
            alt="Live from space album cover"
          />
        </>
        <h1>Episodes Appeared in </h1>
        {episodes.map((episode) => (
          <div key={episode?.id}>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              component="div"
            >
              {episode?.name}
            </Typography>{" "}
          </div>
        ))}
      </Card>
    </div>
  );
}

export default CharacterDetailedView;
