import PropertyDetail from "@/components/PropertyDetail/property-detail";

export default function DetailPage({ params }: { params: { slug: string } }) {

    return (
        <div>
            <PropertyDetail slug={params.slug} />
        </div>
    );
}
