import { PropertyProps } from "@/interfaces/index";
import Image from "next/image";
import { FaStar } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";
import Description from "./Description";
import Amenity from "./Amenity";
import AboutHost from "./AboutHost";
import Tabs from "./Tabs";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
    return (
    <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold">{property.name}</h1>
        <div className="flex items-center space-x-4 mt-2">
        <span className="text-yellow-500 flex items-center space-x-2"><FaStar/> <p>{property.rating}</p> </span>
        <span className="flex items-center space-x-2"> <FaMapMarkerAlt/> <p className="text-gray-500 text-medium"> {property.address.city}, {property.address.country}</p></span>
        <span className="flex items-center space-x-2"><FaUserCircle/> <p className="text-gray-500 text-medium">Mainstream</p></span>
        </div>

        {/* Image Grid */}
        <div className="overflow-x-hidden">
        <div className="grid grid-rows-2 lg:grid-cols-4 sm:grid-cols-1 gap-2 mt-4 overflow-x-auto">
            <Image src={property.image} alt={property.name} width={862} height={630} className="row-span-2 col-span-2 object-cover lg:rounded-l-lg md:rounded-l-lg"/>
            <Image src={property.images[0]} alt={property.name} width={732} height={309} className="col-span-2 rounded-tr-lg"/>
            <Image src={property.images[1]} alt={property.name} width={360} height={308}/>
            <Image src={property.images[2]} alt={property.name} width={360} height={308} className="rounded-br-lg"/>
        </div>
        </div>
        <div className="flex justify-start space-x-2">
            <div className="p-2 flex justify-center gap-2 mt-2 text-[12.95px] border border-[#E9E9E9] rounded-full ">
            <Image src={'/assets/icons/bed.svg'} alt={"bed"} width={19.76436996459961} height={19.76436996459961}/>
            <div>{property.offers.bed} Bedroom</div>
            </div>
            <div className="p-2 flex justify-center gap-2 mt-2 text-[12.95px] border border-[#E9E9E9] rounded-full ">
            <Image src={'/assets/icons/bathtub.svg'} alt={"bathtub"} width={19.76436996459961} height={19.76436996459961}/>
            <div>{property.offers.shower} Bathroom</div>
            </div>
            <div className="p-2 flex justify-center gap-2 mt-2 text-[12.95px] border border-[#E9E9E9] rounded-full ">
            <Image src={'/assets/icons/people.svg'} alt={"people"} width={19.76436996459961} height={19.76436996459961}/>
            <div>{property.offers.occupants} guests</div>
            </div>
        </div>

        <div className="grid lg:grid-cols-3 sm:grid-cols-1">
            
            <div className="lg:col-span-2 sm:col-span-1">
                <Tabs config = {[
                    {header: "Description", component: <Description description={property.description}/>},
                    {header: "What we offer", component: <Amenity amenities={property.category}/>},
                    {header: "Reviews", component: <ReviewSection reviews={property.reviews}/>},
                    {header: "About host", component: <AboutHost/>} 
                    ]}/>
            </div>

            <div>
                <BookingSection price={property.price} discount={property.discount}/>
            </div>

        </div>
        <br/>
        {/* <h3 className="text-[31px] font-bold flex items-center space-x-2"><FaStar className="text-yellow-500"/> <p>{property.rating}</p></h3> */}
    </div>
    );
};

export default PropertyDetail;