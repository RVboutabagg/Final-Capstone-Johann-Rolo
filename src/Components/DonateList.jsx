function DonateList({ places }) {
    return (
      <div className="bg-white p-4 max-w-lg w-full">
        <h3 className="font-bold mb-2">Place Holder</h3>
        <ul>
          {places.map((place, index) => (
            <li key={index} className="flex justify-between py-2 border-b">
              <div>
                <p>{place.name}</p>
                <p className="text-sm text-gray-500">{place.description}</p>
              </div>
              <a href={place.url} target="_blank" rel="noopener noreferrer">
                Link
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  export default DonateList;