import React from 'react'
import { PropertyCardProps } from './property-card.type'
import formatUSD from '@/utils/format-usd'
import { MapPin } from 'lucide-react'
import Link from 'next/link'

export default function PropertyCard(property: PropertyCardProps) {
    return (
        <Link href={`/${property.slug}`}>
            <div className="border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition cursor-pointer">
                <img
                    src={property.imageUrl}
                    alt={property.title}
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h3 className="text-lg font-semibold">{property.title}</h3>
                    <div className='flex items-center gap-1'>
                        <MapPin className='text-gray-600' size={16} />
                        <p className="text-sm text-gray-600">{property.location}</p>
                    </div>
                    <p className="text-violet-600 font-semibold mt-2">{formatUSD(property.price)}</p>
                </div>
            </div>
        </Link>
    )
}
