import {
  Autocomplete,
  Group,
  Burger,
  rem,
  UnstyledButton,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import classes from "./HeaderSearch.module.css";
import { useNavigate } from "react-router-dom";
const links = [
  { link: "/blogs", label: "Blogs" },
  { link: "/users", label: "Users" },
];

interface HeaderSearchProps {
  mobileOpened: boolean;
  toggleMobile(): void;
}

export function HeaderSearch({
  mobileOpened,
  toggleMobile,
}: HeaderSearchProps) {
  const navigate = useNavigate();

  const items = links.map((link) => (
    <UnstyledButton
      key={link.label}
      className={classes.link}
      onClick={(event) => {
        event.preventDefault();
        navigate(link.link);
      }}
    >
      {link.label}
    </UnstyledButton>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger
            opened={mobileOpened}
            onClick={toggleMobile}
            size="sm"
            hiddenFrom="sm"
          />
          <img
            width={80}
            src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png"
          />
        </Group>

        <Group>
          <Group ml={50} gap={10} className={classes.links} visibleFrom="sm">
            {items}
          </Group>
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            leftSection={
              <IconSearch
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
            data={[
              "React",
              "Angular",
              "Vue",
              "Next.js",
              "Riot.js",
              "Svelte",
              "Blitz.js",
            ]}
            visibleFrom="xs"
          />
        </Group>
      </div>
    </header>
  );
}
