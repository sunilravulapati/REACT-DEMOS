function CountryCard({ country }) {

    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <img
                src={country.flags.png}
                alt={country.name.common}
                className="w-full h-32 rounded"
            />
            <h2 className="text-lg font-semibold mt-3">
                {country.name.common}
            </h2>
            <p className="text-sm text-gray-600 mt-1">
                Capital: {country.capital ? country.capital[0] : "N/A"}
            </p>
            <p className="text-sm text-gray-600">
                Population: {country.population.toLocaleString()}
            </p>
            <p className="text-sm text-gray-600">
                Region: {country.region}
            </p>
        </div>
    );
}

export default CountryCard;