import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";

import AccountCircle from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import logoImg from "../../assets/reactLogo.png";

import {
  Container,
  ContainerActions,
  ContainerBody,
  ContainerForm,
  ContainerLogo,
  LogoImg,
} from "./styles";

export default function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleLogin = () => {
    if (login === "admin" && password === "admin1234") {
      localStorage.setItem("auth", "true");
      navigate("/home");
    } else if (login === "" || password === "") {
      toast.error("Os campos de login ou senha devem ser preenchidos.");
    } else {
      toast.error("Login ou senha inválidos.");
    }
  };

  return (
    <Container>
      <ContainerBody>
        <ContainerForm
          param={{
            xs: { width: "90vw" },
            sm: { width: "70vw" },
            md: { width: "50vw" },
          }}
        >
          <ContainerLogo>
            <LogoImg src={logoImg} />
          </ContainerLogo>
          <FormControl sx={{ width: "100%", gap: 2 }}>
            <TextField
              id="login"
              label="Login"
              variant="outlined"
              fullWidth
              value={login}
              onChange={(event) => setLogin(event.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" sx={{ cursor: "default" }}>
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              id="password"
              label="Senha"
              variant="outlined"
              fullWidth
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword
                          ? "hide the password"
                          : "display the password"
                      }
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
          <ContainerActions>
            <Button
              variant="contained"
              size="large"
              endIcon={<LoginIcon />}
              sx={{ height: "60px" }}
              onClick={handleLogin}
            >
              Entrar
            </Button>
          </ContainerActions>
        </ContainerForm>
      </ContainerBody>
    </Container>
  );
}
