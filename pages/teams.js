import { Grid, Stack, ThemeProvider, Typography } from "@mui/material";
import CardItem from "../Components/Cards";
import Layout from "../Components/Layout";
import { theme } from "../Theme/ThemeMode";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getDashboardData } from "../Api";

export default function Teams({ teamsData }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography variant="h4">Teams</Typography>
          <Typography variant="h6">
            {teamsData.length} people are members
          </Typography>
        </Stack>
        <Grid container spacing={2} mt={1} px={2}>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            height={"230px"}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            mb={"10px"}
          >
            <Card
              sx={{
                width: "100%",
                boxShadow: "2px 2px 10px 0 rgb(200,200,200,0.4)",
              }}
            >
              <CardActionArea
                onClick={handleShow}
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
                  sx={{ width: "100px", height: "100px", borderRadius: "50%" }}
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwq-QgDNZh6feEWndoETeXuE1_TebPF77uhBIRtymuh5ke5E0iq3RiUqkc-R335fN3aVU&usqp=CAU"
                  alt="Image"
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography
                    sx={{
                      fontSize: "1.2rem",
                      fontWeight: "500",
                      whiteSpace: "nowrap",
                    }}
                    gutterBottom
                    variant="h6"
                    component="div"
                  >
                    Add New Person
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    xxxxxx@gmail.com
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Modal
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={show}
            onHide={handleClose}
          >
            <Modal.Header closeButton>
              <Modal.Title>Add New Person</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Add Profile Image</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Enter your Full Name"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Enter your country"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Enter your email"
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save
              </Button>
            </Modal.Footer>
          </Modal>
          {teamsData?.map((item, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              height={"230px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <CardItem item={item} />
            </Grid>
          ))}
        </Grid>
      </Layout>
    </ThemeProvider>
  );
}

export async function getStaticProps() {
  const res = await getDashboardData("teams");
  return {
    props: { teamsData: res },
  };
}
