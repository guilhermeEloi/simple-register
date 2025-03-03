import { useState } from "react";

import {
  Breadcrumbs,
  Button,
  FormControl,
  IconButton,
  Link,
  TextField,
  Typography,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import SendIcon from "@mui/icons-material/Send";
import LogoutIcon from "@mui/icons-material/Logout";
import logoImg from "../../assets/reactLogo.png";

import {
  Container,
  ContainerActions,
  ContainerActionSidebar,
  ContainerBody,
  ContainerContentBtn,
  ContainerContentBtnMobile,
  ContainerContentMenuSidebar,
  ContainerForm,
  ContainerLabelLogo,
  ContainerMenuSidebar,
  ContainerSidebar,
  LogoImg,
} from "./styles";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    toast.success("Logout feito com sucesso!");
    navigate("/");
  };

  const handleSendRegister = () => {
    toast.success("Registro salvo com sucesso!");
  };

  return (
    <Container>
      <ContainerSidebar>
        <ContainerMenuSidebar>
          <ContainerContentMenuSidebar>
            <LogoImg
              src={logoImg}
              param={{
                xs: { width: "40px", height: "40px", marginRight: "0px" },
                sm: { width: "30px", height: "30px" },
                md: { width: "50px", height: "50px" },
              }}
            />
            <ContainerLabelLogo
              param={{
                xs: { display: "none" },
              }}
            >
              <Typography
                sx={{
                  color: "#f0f0f0",
                  fontSize: "1rem",
                }}
              >
                React JS
              </Typography>
            </ContainerLabelLogo>
          </ContainerContentMenuSidebar>
        </ContainerMenuSidebar>
        <ContainerActionSidebar>
          <ContainerContentBtn
            param={{
              xs: { display: "none" },
              sm: { width: "90px", height: "40px" },
            }}
          >
            <Button
              variant="contained"
              endIcon={<LogoutIcon />}
              onClick={handleLogout}
              sx={{ backgroundColor: "#6c757d " }}
            >
              <Typography
                sx={{ color: "#ffffff", fontSize: "0.9rem" }}
                variant="body1"
              >
                Logout
              </Typography>
            </Button>
          </ContainerContentBtn>
          <ContainerContentBtnMobile
            param={{
              xs: { display: "flex" },
            }}
          >
            <IconButton>
              <LogoutIcon sx={{ color: "#ffffff" }} />
            </IconButton>
          </ContainerContentBtnMobile>
        </ContainerActionSidebar>
      </ContainerSidebar>
      <ContainerBody>
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}
        >
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="textPrimary"
            href="/home"
          >
            <HomeIcon sx={{ mr: 0.5 }} color="inherit" fontSize="medium" />
            Home
          </Link>
        </Breadcrumbs>
        <ContainerForm
          param={{
            xs: { width: "70vw", height: "auto" },
            sm: { width: "75vw", height: "auto" },
            md: { width: "80vw", height: "auto" },
            lg: { width: "80vw", height: "auto" },
          }}
        >
          <FormControl sx={{ width: "100%", gap: 2 }}>
            <TextField
              id="title"
              label="Título"
              variant="outlined"
              fullWidth
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <TextField
              id="description"
              label="Descrição"
              variant="outlined"
              fullWidth
              multiline
              rows={10}
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </FormControl>
          <ContainerActions>
            <Button
              variant="contained"
              size="large"
              endIcon={<SendIcon />}
              onClick={handleSendRegister}
            >
              Salvar
            </Button>
          </ContainerActions>
        </ContainerForm>
      </ContainerBody>
    </Container>
  );
}
