import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function CharacterProfile(props: any) {
  const { result } = props;
  return (
    <div>
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {result.name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {result.species}
            </Typography>
            {/* <Typography
              variant="subtitle2"
              color="text.secondary"
              component="div"
            >
              Origin: {result.origin.name}
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              component="div"
            >
              Current Location: {result.location.name}
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              component="div"
            ></Typography> */}
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={result.image}
          alt="Live from space album cover"
        />
      </Card>
    </div>
  );
}

export default CharacterProfile;
