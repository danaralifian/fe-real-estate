import React from 'react'
import { PropertyCardProps } from './property-card.type'
import formatUSD from '@/utils/format-usd'
import { MapPin } from 'lucide-react'

export default function PropertyCard(propertyCard: PropertyCardProps) {
    return (
        <div className="border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition cursor-pointer">
            <img
                src={propertyCard.imageUrl}
                alt={propertyCard.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold">{propertyCard.title}</h3>
                <div className='flex items-center gap-1'>
                    <MapPin className='text-gray-600' size={16} />
                    <p className="text-sm text-gray-600">{propertyCard.location}</p>
                </div>
                <p className="text-violet-600 font-semibold mt-2">{formatUSD(propertyCard.price)}</p>
            </div>
        </div>
    )
}
