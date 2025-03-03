import styled, { css } from "styled-components";
import { breakpoints } from "../../styles/responsive";
import ImgBg from "../../assets/bgLogin.jpg";

interface ResponsiveValues {
  width?: string;
  height?: string;
}

type ResponsiveProps = {
  [key: string]: ResponsiveValues;
};

interface ParamResponsiveProps {
  param?: ResponsiveProps;
}

function responsiveProp(
  prop: ResponsiveProps | undefined,
  callback: (value: ResponsiveValues) => ReturnType<typeof css>
): ReturnType<typeof css>[] {
  return breakpoints
    .map((breakpoint) => {
      if (prop?.[breakpoint.name]) {
        return css`
          @media (max-width: ${breakpoint.media}px) {
            ${callback(prop[breakpoint.name])}
          }
        `;
      }
      return null;
    })
    .filter(Boolean) as ReturnType<typeof css>[];
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${ImgBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  overflow: auto;
`;

export const ContainerBody = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerForm = styled.div<ParamResponsiveProps>`
  width: 50vw;
  height: 50vh;
  display: flex;
  background-color: #ebf7fd;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  padding: 2rem;
  flex-direction: column;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);

  ${({ param }) =>
    responsiveProp(
      param,
      (value) => css`
        width: ${value.width};
        height: ${value.height};
        padding: 1rem;
      `
    )}
`;

export const ContainerLogo = styled.div`
  width: 20%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 28px;
`;

export const LogoImg = styled.img`
  width: 130px;
  height: 130px;
`;

export const ContainerActions = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
