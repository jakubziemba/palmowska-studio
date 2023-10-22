import { createClient } from "contentful";
import Homepage from "./homepage";

export const metadata = {
  title: "Home | Palmowska Studio",
  description: "Studio projektowania wnętrz w Warszawie.",
};

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

async function getHomepageProjects() {
  const { items } = await client.getEntries({
    content_type: "projectLink",
  });

  return items;
}

export default async function Page() {
  const projects = await getHomepageProjects();
  projects.sort((a, b) => a.fields.id - b.fields.id);
  const singleProject = projects[0];

  return <Homepage projects={projects} singleProject={singleProject} />;
}
