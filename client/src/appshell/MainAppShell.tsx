import { AppShell, em, rem, useMantineColorScheme } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import React from "react";
import Users from "../pages/Users";
import { HeaderSearch } from "../components/Header/HeaderSearch";
import { NavbarSearch } from "../components/Navbar/NavbarSearch";
import Blogs from "../pages/Blogs";

const MainAppShell = () => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened] = useDisclosure(true);

  return (
    <AppShell
      padding="md"
      navbar={{
        width: desktopOpened ? 230 : mobileOpened ? 60 : 0,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
    >
      <AppShell.Header>
        <HeaderSearch mobileOpened={mobileOpened} toggleMobile={toggleMobile} />
      </AppShell.Header>
      <AppShell.Navbar>
        <NavbarSearch mobileOpened={mobileOpened} toggleMobile={toggleMobile} />
      </AppShell.Navbar>
      <AppShell.Main pt={`calc(${rem(60)} + var(--mantine-spacing-md))`}>
        <Blogs />
      </AppShell.Main>
      <AppShell.Footer></AppShell.Footer>
    </AppShell>
  );
};

export default MainAppShell;
