export const getProperties = `*[_type == "property"]{
    _id,
    title,
    description,
    price,
    location,
    "imageUrl": image.asset->url}`;
