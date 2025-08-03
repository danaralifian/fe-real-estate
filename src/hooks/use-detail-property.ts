import { getProperties, getPropertyBySlug } from "@/lib/queries/property";
import { sanityClient } from "@/lib/sanity-client";
import { Property } from "@/type/property.interface";
import React, { useEffect } from "react";

export default function useDetailProperty(slug: string) {
  const [property, setProperty] = React.useState<Property>();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    setLoading(true);
    sanityClient
      .fetch(getPropertyBySlug(slug))
      .then((data) => {
        setProperty(data);
      })
      .catch((err) => {
        console.error("Failed to fetch properties:", err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    property,
    loading,
    error,
  };
}
