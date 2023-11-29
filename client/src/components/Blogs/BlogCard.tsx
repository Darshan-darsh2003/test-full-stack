import React from "react";
import { Card, Image, Text } from "@mantine/core";
import { Blog } from "../../pages/Blogs";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <Card
      shadow="sm"
      padding="xl"
      component="a"
      href={blog.url}
      target="_blank"
    >
      <Card.Section>
        <Image fit="contain" src={blog.url} alt="No way!" />
      </Card.Section>

      <Text fw={500} size="lg" mt="md">
        {blog.title}
      </Text>

      <Text mt="xs" c="dimmed" size="sm">
        {blog.description}
      </Text>
    </Card>
  );
};

export default BlogCard;
