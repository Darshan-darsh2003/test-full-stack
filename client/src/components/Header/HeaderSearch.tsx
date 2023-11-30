import { Group, Burger, UnstyledButton } from "@mantine/core";
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

        <Group ml={50} gap={10} className={classes.links} visibleFrom="sm">
          {items}
        </Group>
      </div>
    </header>
  );
}
