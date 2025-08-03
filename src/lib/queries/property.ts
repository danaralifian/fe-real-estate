export const getProperties = `*[_type == "property" && isPublished == true]{
    _id,
    title,
    description,
    price,
    location,
    "imageUrl": image.asset->url}`;
