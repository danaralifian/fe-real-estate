"use client";
import useProperties from '@/hooks/use-properties';
import React from 'react'
import PropertyCard from '../PropertyCard/property-card';

export default function PropertyList() {
    const { properties, loading, error } = useProperties();

    console.log(properties);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {properties.map((property) => (
                <PropertyCard
                    key={property._id}
                    _id={property._id}
                    title={property.title}
                    description={property.description}
                    price={property.price}
                    location={property.location}
                    imageUrl={property.imageUrl} />
            ))}
        </div>
    )
}
