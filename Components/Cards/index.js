import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Typography } from "@mui/material";
import { useRouter } from "next/router";

export default function CardItem({ item }) {
  const router = useRouter();
  return (
    <Card
      sx={{
        width: "100%",
        boxShadow: "2px 2px 10px 0 rgb(200,200,200,0.4)",
      }}
      onClick={() => router.push("/teams" + item.slug)}
    >
      <CardActionArea
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
          image={item.img}
          alt={item.name}
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography
            sx={{ fontSize: "1.2rem", fontWeight: "500", whiteSpace: "nowrap" }}
            gutterBottom
            variant="h6"
            component="div"
          >
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.email}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
