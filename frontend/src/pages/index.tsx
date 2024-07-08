import AddCountryForm from "@/components/AddCountryForm";
import CountryGrid from "@/components/CountryGrid";
import Layout from "@/components/Layout";
import { useAllCountriesQuery } from "@/graphql/generated/schema";

export default function Home() {
  const { loading, data, error, refetch } = useAllCountriesQuery();
  const countries = data?.countries || [];

  return (
    <Layout>
      <AddCountryForm refetch={refetch} />
      {loading ?
        <span>Loading countries...</span> :
        <CountryGrid countries={countries} />
      }
      {error && <span>Something went wrong</span>
      }
    </Layout>
  );
}
