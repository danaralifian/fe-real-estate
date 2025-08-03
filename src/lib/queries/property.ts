export const getProperties = `*[_type == "property" && isPublished == true]{
    _id,
    title,
    description,
    price,
    location,
    "slug": slug.current,
    "imageUrl": image.asset->url}`;

export const getPropertyBySlug = (slug: string) => `
  *[_type == "property" && slug.current == "${slug}" && isPublished == true][0]{
    _id,
    title,
    description,
    price,
    location,
    "slug": slug.current,
    "imageUrl": image.asset->url
  }
`;
