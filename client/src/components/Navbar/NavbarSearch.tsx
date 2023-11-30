import {
  UnstyledButton,
  Badge,
  Text,
  Group,
  rem,
  Burger,
  Divider,
} from "@mantine/core";
import { IconBulb, IconUser, IconCheckbox } from "@tabler/icons-react";

import { UserButton } from "../UserButton/UserButton";
import classes from "./NavbarSearch.module.css";
import React from "react";

const links = [
  { icon: IconBulb, label: "Activity", notifications: 3 },
  { icon: IconCheckbox, label: "Tasks", notifications: 4 },
  { icon: IconUser, label: "Contacts" },
  { icon: IconCheckbox, label: "Saved", notifications: 5 },
];

const blogCategories = [
  { emoji: "🧮", label: "Random" },
  { emoji: "🎨", label: "Design" },
  { emoji: "👨‍💻", label: "Development" },
  { emoji: "📰", label: "News" },
  { emoji: "📝", label: "Stories" },
  { emoji: "🧠", label: "Thoughts" },
  { emoji: "🧑‍🏫", label: "Tutorials" },
  { emoji: "📖", label: "Writing" },
  { emoji: "🎉", label: "Announcements" },
  { emoji: "🔥", label: "Other" },
];

interface NavbarSearchProps {
  mobileOpened: boolean;
  toggleMobile(): void;
}

export function NavbarSearch({
  mobileOpened,
  toggleMobile,
}: NavbarSearchProps) {
  const mainLinks = links.map((link, index) => (
    <React.Fragment key={index}>
      <UnstyledButton mb={5} mt={10} className={classes.mainLink}>
        <div className={classes.mainLinkInner}>
          <link.icon size={25} className={classes.mainLinkIcon} stroke={1.5} />
          <span>{link.label}</span>
        </div>
        {link.notifications && (
          <Badge
            size="xs"
            w={15}
            variant="filled"
            className={classes.mainLinkBadge}
          >
            {link.notifications}
          </Badge>
        )}
      </UnstyledButton>
      <Divider key={link.label} />
    </React.Fragment>
  ));

  const collectionLinks = blogCategories.map((collection, index) => (
    <a
      href="#"
      onClick={(event) => event.preventDefault()}
      key={index}
      className={classes.collectionLink}
    >
      <span style={{ marginRight: rem(9), fontSize: rem(16) }}>
        {collection.emoji}
      </span>{" "}
      {collection.label}
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.section} style={{ display: "flex" }}>
        <Burger
          opened={mobileOpened}
          onClick={toggleMobile}
          hiddenFrom="sm"
          size="sm"
          mt={20}
          ml={5}
        />
        <UserButton />
      </div>
      <div className={classes.section}>
        <div className={classes.mainLinks}>
          <Divider />

          {mainLinks}
        </div>
      </div>

      <div className={classes.section}>
        <Group className={classes.collectionsHeader} justify="space-between">
          <Text ml={10} size="xs" fw={500} c="dimmed">
            Categories
          </Text>
        </Group>
        <div className={classes.collections}>{collectionLinks}</div>
      </div>
    </nav>
  );
}
