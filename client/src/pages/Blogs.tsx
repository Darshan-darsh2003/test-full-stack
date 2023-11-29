import React, { useEffect, useState } from "react";
import BlogCard from "../components/Blogs/BlogCard";
import { Grid } from "@mantine/core";

export type Blog = {
  description: string;
  id: number;
  title: string;
  url: string;
  user: number;
};

interface Blogs {
  // id: number;
  // title: string;
  // completed: boolean;
  photos: [Blog];
  success: boolean;
  total_photos: number;
  offset: number;
  message: string;
  limit: number;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[] | null>(null);

  useEffect(() => {
    const fetchBlogs = async (): Promise<void> => {
      try {
        const response = await fetch("http://localhost:5000/api/blogs");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData: Blogs = await response.json();
        setBlogs(jsonData.photos);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <Grid>
      {blogs?.map((blog) => (
        <Grid.Col span={{ xl: 4, lg: 4, md: 6, sm: 12, xs: 12 }}>
          <BlogCard key={blog.id} blog={blog} />
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default Blogs;