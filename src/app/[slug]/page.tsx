import PropertyDetail from "@/components/PropertyDetail/property-detail";

interface PageProps {
    params: {
        slug: string;
    };
}

export default function DetailPage({ params }: PageProps) {

    return (
        <div>
            <PropertyDetail slug={params.slug} />
        </div>
    );
}
