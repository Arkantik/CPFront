import Layout from "@/components/Layout";
import { useCountryByCodeQuery } from "@/graphql/generated/schema";
import { useRouter } from "next/router";

export default function CountryDetails() {
    const { query } = useRouter();
    const countryCode = query.id as never;

    const { loading, data: countryData, error } = useCountryByCodeQuery({ variables: { code: countryCode } });
    const country = countryData?.country;

    if (loading) {
        return (
            <Layout>
                <span>Loading country...</span>
            </Layout>
        );
    }

    if (error) {
        return (
            <Layout>
                <span>Something went wrong</span>
            </Layout>
        );
    }

    return (
        <Layout>
            <span className="text-4xl">{country?.emoji}</span>
            <h2>Name : {country?.name} ({country?.code})</h2>
            <p>Continent: {country?.continent?.name}</p>
        </Layout>
    );
};
