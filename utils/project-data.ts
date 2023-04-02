export type ProjectType = {
  id: number;
  name: string;
  description: string;
  longDescription?: string;
  image: string;
  mobileImage?: string;
  figma?: string;
  old?: string;
  code?: string;
  link?: string;
  slug: string;
  attributes?: string[];
};

export const projectsList: ProjectType[] = [
  {
    id: 1,
    name: "Bresk Bau",
    description:
      "Bresk Bau inspired by the Bauhaus shapes and colors a 777 piece collection on Arbitrum.", 
    image: "/images/bau2.gif",
    link: "https://opensea.io/collection/bresk-bau",
    code: "https://bau.bresk.xyz",
    slug: "bresk-bau",
    attributes: ["Chipher", "Graphene", "Spectre", "Echelon"] 
  },
  {
    id: 2,
    name: "Bresk Cities",
    description:
      "Bresk Cities - 11 genesis cities of the Bresk world on Arbitrum.",
    image: "/images/cities.gif",
    link: "https://opensea.io/collection/bresk-cities",
    slug: "bresk-cities",
    attributes: ["Echelon", "Graphene", "Spectre", "Himinn", "Lua", "Namu", "Swirl", "Volat", "Constallation"],
  },
  {
    id: 3,
    name: "Bresk Jagged",
    description:
      "Bresk Jagged - 777 piece collection inspired by the jagged shapes and colors of the Bresk world on Arbitrum.",
    image: "/images/jagged.gif",
    link: "https://opensea.io/collection/bresk-jagged",
    slug: "bresk-jagged",
    attributes: ["Cipher", "Graphene", "Spectre", "Echelon"]
  },
  {
    id: 4,
    name: "Bresk Inception",
    description:
      "Bresk Inception - the start of it all based on the age old print10 pattern - a 555 piece collection on Arbitrum.",
    image: "/images/inception.gif",
    link: "https://opensea.io/collection/bresk-inception",
    slug: "bresk-inception",
    attributes: ["Cipher", "Graphene", "Spectre", "Echelon", "Caliber"]
  },
  {
    id: 5,
    name: "Bresk Escher",
    description:
      "Bresk Escher - loosly influenced by M.C. Escher a 888 piece collection on ZkSyncEra",   
    image: "/images/escher.gif",
    link: "https://mintsquare.io/collection/zksync/0xf0b9c8e583cb193f4e048875818aa9179510c20a",
    slug: "bresk-escher",
    attributes: ["Cipher", "Spectre", "Echelon", "Graphene", "Depth", "Squares", "Circles", "Triangles", "Solid Squares", "Solid Circles", "Solid Triangles", "Striped"]
  }

];
