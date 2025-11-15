import Image from "next/image";
import { FaStar } from 'react-icons/fa';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const OrderSummary: React.FC<{ bookingDetails: any }> = ({ bookingDetails }) => (
    <div className="bg-white p-6 shadow-md rounded-lg">
    <h2 className="text-[29px] font-bold">Review Order Details</h2>
    <div className="flex flex-col mt-4">
        <Image src={"/assets/images/image 2.jpg"} alt={"Property"} width={539} height={342.63568115234375} className="object-cover rounded-2xl"/>
        <div className="ml-4 items-start flex flex-col">
        <h3 className="text-[30px] font-bold">{bookingDetails.propertyName}</h3>
        <div className="flex justify-between items-center space-x-2">
        <FaStar className="text-yellow-500"/>
        <p className="text-[19px] flex items-center space-x-2"><p className="text-black">4.76</p> <p className="text-gray-500">(345 reviews)</p></p>
        </div>
        <div className="mt-4 text-[19px] text-[#585858] flex justify-between items-center space-x-6 font-Medium"><p className="border border-gray-200 px-0.5">{bookingDetails.startDate}</p><p className="border border-gray-200 px-0.5">{bookingDetails.totalNights} Nights</p></div>
        
        </div>
    </div>

    {/* Price Breakdown */}
    <div className="mt-6">
        <div className="flex justify-between text-[21px] font-semibold">
        <p className="text-gray-400">Booking Fee</p>
        <p className="text-black">${bookingDetails.bookingFee}</p>
        </div>
        <div className="flex justify-between mt-2 text-[21px] font-semibold">
        <p className="text-gray-400">Subtotal</p>
        <p className="text-black">${bookingDetails.price}</p>
        </div>
        <div className="flex justify-between mt-2">
        <p className="font-medium text-[21px]">Grand Total</p>
        <p className="font-bold text-[27px]">${bookingDetails.bookingFee + bookingDetails.price}</p>
        </div>
    </div>
    </div>
);

export default OrderSummary;