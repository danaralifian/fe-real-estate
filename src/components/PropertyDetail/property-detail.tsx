"use client";
import React from 'react'
import Image from 'next/image'
import formatUSD from '@/utils/format-usd'
import useDetailProperty from '@/hooks/use-detail-property';
import { notFound } from 'next/navigation';
import Loading from '../Loading/loading';
import { PortableText } from '@portabletext/react';
import { MapPin } from 'lucide-react';

export default function PropertyDetail({ slug }: { slug: string }) {
    const { property, loading } = useDetailProperty(slug);

    if (loading) return <Loading />

    if (!property && !loading) return notFound();

    return (
        <div className="max-w-3xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-4">{property?.title}</h1>
            <div className='flex items-center gap-1 mb-2'>
                <MapPin className='text-gray-600' size={20} />
                <p className="text-gray-600">{property?.location}</p>
            </div>
            <p className="text-lg font-semibold text-violet-600 mb-4">{formatUSD(property?.price || 0)}</p>
            {property?.imageUrl && (
                <Image
                    src={property.imageUrl}
                    alt={property.title}
                    width={800}
                    height={500}
                    className="rounded-md mb-6"
                />
            )}
            {property?.description && <PortableText value={property.description} />}
        </div>
    )
}
