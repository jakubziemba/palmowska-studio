import { createClient } from "contentful";
import About from "./o-mnie";

export const metadata = {
  title: "O mnie | Palmowska Studio",
  description:
    "Poznajmy się! Mam na imię Kamila i jestem projektantką wnętrz z Warszawy. Ukończyłam Historię Sztuki oraz łódzką Akademię Sztuk Pięknych na kierunku Architektura Wnętrz i Wystawiennictwo.",
};

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

async function getAboutData() {
  const { items } = await client.getEntries({
    content_type: "aboutMe",
  });

  return items[0].fields;
}

export default async function Page() {
  const data = await getAboutData();

  return <About data={data} />;
}
