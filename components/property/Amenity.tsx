
const Amenity: React.FC<{ amenities: string[] }> = ({ amenities }) => {
    return(
        <div className="mt-4">
            <h2 className="text-2xl font-semibold">What this place offers</h2>
            <p className="text-[16px] font-medium p-2">Each home is fully equipped to meet your needs, with ample space and privacy.</p>
            <ul className="flex flex-wrap space-x-4">
                {amenities.map((amenity, index) => (
                <li key={index} className="bg-gray-200 p-2 rounded-md">
                {amenity}
                </li>
                ))}
            </ul>
        </div>
    );
}
export default Amenity;