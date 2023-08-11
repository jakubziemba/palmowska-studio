import { createClient } from 'contentful';
import About from './o-mnie';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getAboutData() {
  const { items } = await client.getEntries({
    content_type: 'aboutMe',
  });

  return items[0].fields;
}

export default async function Page() {
  const data = await getAboutData();

  return <About data={data} />;
}
