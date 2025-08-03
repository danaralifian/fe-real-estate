export const getProperties = `*[_type == "property" && isPublished == true]{
    _id,
    title,
    description,
    price,
    location,
    "slug": slug.current,
    "imageUrl": image.asset->url}`;
