import React from "react";
import Link from 'next/link'

const blog = () => {
  const blogs = [
    {
      id: "1",
      title: "blog 1",
      description: "blog 1 description",
    },
    {
      id: "2",
      title: "blog 2",
      description: "blog 2 description",
    },
  ];
  return (
    <>
      <div>blog page</div>
      <ul>
        {blogs.map((blog) => (
          <React.Fragment key={blog.title}>
            <Link href={`/blog/${blog.id}`}><li>{blog.title}</li></Link>
          </React.Fragment>
        ))}
      </ul>
    </>
  );
};

export default blog;
