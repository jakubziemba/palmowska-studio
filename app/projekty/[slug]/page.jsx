import { createClient } from "contentful";
import Project from "./slug";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function generateStaticParams() {
  const res = await client.getEntries({ content_type: "project" });
  const paths = res.items.map((item) => ({
    params: { slug: item.fields.slug },
  }));

  return paths;
}

async function getProject(params) {
  const { slug } = params;
  const { items } = await client.getEntries({
    content_type: "project",
    "fields.slug": slug,
  });

  const projectData = items.map(({ fields }) => {
    return {
      id: fields?.id,
      projectName: fields?.projectName,
      apartment: fields?.apartment || null,
      location: fields?.location,
      livingArea: fields?.livingArea,
      projectBy: fields?.projectBy,
      date: fields?.date,
      photos: fields?.photos,
      thumbnail: fields?.thumbnail?.fields?.file,
      projectCover:
        fields?.projectCover?.fields?.file || fields?.thumbnail?.fields?.file,
      images: fields?.images,
    };
  });

  return projectData[0];
}

export async function generateMetadata({ params }, parent) {
  const project = await getProject(params);

  return {
    title: `${project.projectName} | Palmowska Studio`,
    description: `${project.apartment && project.apartment}`,
  };
}

export default async function Page({ params }) {
  console.log(params);
  const project = await getProject(params);

  return <Project project={project} />;
}
