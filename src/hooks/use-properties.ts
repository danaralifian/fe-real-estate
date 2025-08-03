import { getProperties } from "@/lib/queries/property";
import { sanityClient } from "@/lib/sanity-client";
import { Property } from "@/type/property.interface";
import React, { useEffect } from "react";

export default function useProperties() {
  const [properties, setProperties] = React.useState<Property[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    setLoading(true);
    sanityClient
      .fetch(getProperties)
      .then((data) => {
        setProperties(data);
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
    properties,
    loading,
    error,
  };
}
