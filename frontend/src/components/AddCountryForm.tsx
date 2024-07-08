import { Continent, useAddCountryMutation, useContinentsQuery } from "@/graphql/generated/schema";
import { useState } from "react";
import Select from "react-select";

export default function AddCountryForm({ refetch }: { refetch: () => void }) {
    const [createCountry, error] = useAddCountryMutation();
    const [selectedContinent, setSelectedContinent] = useState<Continent | null>(null);
    const { data: continentData } = useContinentsQuery();
    const continents = continentData?.continents || [];

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const formJSON: any = Object.fromEntries(formData);

        if (selectedContinent) {
            formJSON.continent = { id: selectedContinent.id };
        } else {
            delete formJSON.continent;
        }
        createCountry({ variables: { data: formJSON } }).then(refetch).catch(console.error);
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-4 p-4 border rounded items-end w-full">
            <label htmlFor="name" className="flex flex-col w-full">
                Name*:
                <input type="text" name="name" minLength={2} maxLength={50} className="rounded border p-2" required />
                {/* {errors.name && <span className="text-red-500">{errors.name}</span>} */}
            </label>
            <label htmlFor="emoji" className="flex flex-col w-full">
                Emoji*:
                <input type="text" name="emoji" maxLength={4} className="rounded border p-2" required />
                {/* {errors.emoji && <span className="text-red-500">{errors.emoji}</span>} */}
            </label>
            <label htmlFor="code" className="flex flex-col w-full">
                Code*:
                <input type="text" name="code" minLength={2} maxLength={3} className="rounded border p-2" required />
                {/* {errors.code && <span className="text-red-500">{errors.code}</span>} */}
            </label>
            <label htmlFor="continent" className="flex flex-col w-full h-full justify-between">
                Continent:
                <Select
                    options={continents}
                    getOptionValue={(o: any) => o.id}
                    getOptionLabel={(o: any) => o.name}
                    name="continent"
                    id="continent"
                    value={selectedContinent}
                    closeMenuOnSelect={true}
                    onChange={(continent) => {
                        setSelectedContinent(continent as any);
                    }}
                />
            </label>
            <button type="submit" className="bg-pink-600 rounded p-2 text-white font-bold w-full mt-4 lg:mt-0">Add</button>
        </form>
    );
};
