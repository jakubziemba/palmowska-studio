import contentfulClient from './contentfulClient';

export async function getAllProjects() {
  const client = contentfulClient();

  const { items } = await client.getEntries({
    content_type: 'project',
  });
}
