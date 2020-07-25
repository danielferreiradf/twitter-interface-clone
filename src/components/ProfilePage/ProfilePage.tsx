import React from "react";

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from "./ProfilePage.styles";

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Daniel Ferreira</h1>
        <h2>@daniel_ferreira</h2>

        <p>Front End Developer</p>

        <ul>
          <li>
            <LocationIcon />
            World
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 9999
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>10</strong>
          </span>
          <span>
            <strong>50 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
};

export default ProfilePage;
