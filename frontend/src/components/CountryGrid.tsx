import { useRouter } from "next/router";

export default function CountryGrid({ countries }: any) {
    const router = useRouter();

    return (
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 w-full">
            {countries.map((country: any) => (
                <button key={country.id} className="bg-white p-4 shadow rounded" onClick={() => router.push(`/${country.code}`)}>
                    <h2 className="text-lg font-semibold">{country.name}</h2>
                    <span>{country.emoji}</span>
                </button>
            ))}
        </div>
    );
};
