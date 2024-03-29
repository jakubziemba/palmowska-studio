import { createClient } from "contentful";
import Projekty from "./projekty";

export const metadata = {
  title: "Projekty | Palmowska Studio",
  description:
    "Realizacje wykonane przez Palmowska Studio. Klimatyczne wnętrza, które łączą w sobie nowoczesność z tradycją.",
};

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

async function getProjects() {
  const { items } = await client.getEntries({
    content_type: "project",
  });

  const projects = items
    .map(({ fields }) => ({
      id: fields.id,
      slug: fields.slug,
      projectName: fields.projectName,
      thumbnail: fields.thumbnail,
    }))
    .sort((a, b) => b.id - a.id);

  return projects;
}

export default async function Page() {
  const projects = await getProjects();

  return <Projekty projects={projects} />;
}
