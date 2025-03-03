import styled, { css } from "styled-components";
import { breakpoints } from "../../styles/responsive";
import ImgBg from "../../assets/bgHome.jpg";

interface ResponsiveValues {
  width?: string;
  height?: string;
  display?: string;
  marginRight?: string;
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
  overflow: auto;
  display: flex;
  background-image: url(${ImgBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
`;

export const ContainerSidebar = styled.div<ParamResponsiveProps>`
  width: 15vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #007fff;

  ${({ param }) =>
    responsiveProp(
      param,
      (value) => css`
        width: ${value.width};
        height: ${value.height};
      `
    )}
`;

export const ContainerMenuSidebar = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  padding: 1rem;
`;

export const ContainerContentMenuSidebar = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoImg = styled.img<ParamResponsiveProps>`
  width: 60px;
  height: 60px;
  margin-right: 10px;

  ${({ param }) =>
    responsiveProp(
      param,
      (value) => css`
        width: ${value.width};
        height: ${value.height};
        margin-right: ${value.marginRight};
      `
    )}
`;

export const ContainerLabelLogo = styled.div<ParamResponsiveProps>`
  display: flex;

  ${({ param }) =>
    responsiveProp(
      param,
      (value) => css`
        display: ${value.display};
      `
    )}
`;

export const ContainerActionSidebar = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  padding: 1rem;
  justify-content: center;
`;

export const ContainerContentBtn = styled.div<ParamResponsiveProps>`
  display: flex;

  ${({ param }) =>
    responsiveProp(
      param,
      (value) => css`
        width: ${value.width};
        height: ${value.height};
        display: ${value.display};
      `
    )}
`;

export const ContainerContentBtnMobile = styled.div<ParamResponsiveProps>`
  display: none;

  ${({ param }) =>
    responsiveProp(
      param,
      (value) => css`
        display: ${value.display};
      `
    )}
`;

export const ContainerBody = styled.div`
  width: 85vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

export const ContainerForm = styled.div<ParamResponsiveProps>`
  width: 80vw;
  height: 50vh;
  display: flex;
  background-color: #dcdcdc;
  border-radius: 12px;
  padding: 2rem;
  flex-direction: column;

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

export const ContainerActions = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;
