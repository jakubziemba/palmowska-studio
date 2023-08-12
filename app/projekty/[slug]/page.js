import { createClient } from 'contentful';
import Project from './slug';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

async function generateStaticParams() {
  const res = await client.getEntries({ content_type: 'project' });

  const paths = res.items.map(item => {
    return { params: { slug: item.fields.slug } };
  });

  // console.log(paths);

  return paths;
}

async function getProject() {
  const params = await generateStaticParams();

  const { items } = await client.getEntries({
    content_type: 'project',
    'fields.slug': params.slug,
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
      projectCover: fields?.projectCover?.fields?.file || fields?.thumbnail?.fields?.file,
      images: fields?.images,
    };
  });
  return projectData[0];
}

export default async function Page() {
  const project = await getProject();

  return <Project project={project} />;
}
