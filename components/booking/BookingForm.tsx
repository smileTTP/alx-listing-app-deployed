import { BookingDetails } from "@/interfaces";
import axios from "axios";
import { useState } from "react";
import Modal from "../common/Modal";

export default function BookingForm () {
    const [formData, setFormData] = useState<BookingDetails>({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        cardNumber: "",
        expirationDate: "",
        cvv: "",
        billingAddress: {
            streetAddress: "",
            city: "",
            state: "",
            zipCode: "",
            country: ""
        },
    });
    const [successMessage, setSuccessMessage] = useState<BookingDetails | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
    };
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
        const response = await axios.post("/api/bookings", formData);
        const data = response.data;
        alert("Booking confirmed!");
        setSuccessMessage(data);
        setIsModalOpen(true);
    } catch (error) {
        setError("Failed to submit booking.");
        console.error("Error:", error);
    } finally {
        setLoading(false);
    }
    };

    const closeModal = () => {
    setIsModalOpen(false);
    };

    return (
    <div className="bg-white p-6 shadow-md rounded-lg">
    <h2 className="text-[29px] font-bold">Contact Detail</h2>
    <form className="mt-4" onSubmit={handleSubmit}>
      {/* Contact Information */}
        <div className="grid grid-cols-2 gap-4 text-[17px] font-bold">
        <div>
            <label>First Name</label>
            <input type="text" className="border rounded-lg p-2 w-full mt-2 border-gray-200" value={formData.firstName} onChange={handleChange} />
        </div>
        <div>
            <label>Last Name</label>
            <input type="text" className="border rounded-lg p-2 w-full mt-2 border-gray-200" value={formData.lastName} onChange={handleChange} />
        </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4 text-[17px] font-bold">
        <div>
            <label>Email</label>
            <input type="email" className="border rounded-lg p-2 w-full mt-2 border-gray-200" value={formData.email} onChange={handleChange} />
        </div>
        <div>
            <label>Phone Number</label>
            <input type="text" className="border rounded-lg p-2 w-full mt-2 border-gray-200" value={formData.phoneNumber} onChange={handleChange} />
        </div>
        </div>
        <div className="flex items-center mb-4">
        <input type="checkbox" value="" className="w-[22px] h-[22px] accent-[#34967C] bg-gray-100 border-gray-300 rounded-lg"/>
        <label className="ms-2 text-[20px] font-Medium text-black">Receive text message update about your booking. Messages rates may apply.</label>
        </div>

      {/* Payment Information */}
        <h2 className="text-xl font-semibold mt-6">Pay with</h2>
        <div className="mt-4 text-[17px] font-bold">
        <label>Card Number</label>
        <input type="text" className="border rounded-lg p-2 w-full mt-2 border-gray-200" value={formData.cardNumber} onChange={handleChange} />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4 text-[17px] font-bold">
        <div>
            <label>Expiration Date</label>
            <input type="text" className="border rounded-lg p-2 w-full mt-2 border-gray-200" value={formData.expirationDate} onChange={handleChange} />
        </div>
        <div>
            <label>CVV</label>
            <input type="text" className="border rounded-lg p-2 w-full mt-2 border-gray-200" value={formData.cvv} onChange={handleChange} />
        </div>
        </div>

        <hr className="text-gray-200 mt-8"/>

      {/* Billing Address */}
        <h2 className="text-[17px] font-bold mt-6">Billing Address</h2>
        <div className="mt-4 text-[#747474] font-medium">
        <label>Street Address</label>
        <input type="text" className="border rounded-lg p-2 w-full mt-2 border-gray-200" value={formData.billingAddress.streetAddress} onChange={handleChange} />
        </div>
        <div className="mt-4">
        <div className="text-[#747474] font-medium">
            <label>City</label>
            <input type="text" className="border rounded-lg p-2 w-full mt-2 border-gray-200" value={formData.billingAddress.city} onChange={handleChange} />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-2">
        <div className="text-[#747474] font-medium">
            <label>State</label>
            <input type="text" className="border rounded-lg p-2 w-full mt-2 border-gray-200" value={formData.billingAddress.state} onChange={handleChange} />
        </div>
        <div className="text-[#747474] font-medium">
            <label>Zip Code</label>
            <input type="text" className="border rounded-lg p-2 w-full mt-2 border-gray-200" value={formData.billingAddress.zipCode} onChange={handleChange} />
        </div>
        </div>
        </div>
        <div>
            <label className="text-[#747474] font-medium">Country</label>
            <input type="text" className="border rounded-lg p-2 w-full mt-2 border-gray-200" value={formData.billingAddress.country} onChange={handleChange} />
        </div>

        <div className="mt-8">
            <h2 className="text-[29px] font-bold">Cancellation policy</h2>
            <p className="text-[24px] font-medium mt-4"><strong>Free cancellation before Aug 23.</strong> Cancel before check-in on Aug 24 for a partial refund. </p>
        </div>
        <hr className="text-gray-200 mt-4"/>
        <div className="mt-4">
            <h2 className="text-[29px] font-bold">Ground rule</h2>
            <div className="text-[24px] font-medium mt-4">We ask every guest to remember a few simple things about what makes a great guest.
                <ul>
                <li>Follow the house rules</li>
                <li>Treat your Host’s home like your own</li>
                </ul>
            </div>
        </div>

      {/* Submit Button */}
        <button type="submit" disabled={loading} className="mt-10 bg-[#34967C] text-white py-2 px-4 rounded-md w-[346px] h-[62px]">
        {loading ? "Processing..." : "Confirm & Pay"}
        </button>
        {error && <p className="text-red-500">{error}</p>}

        {/* {isModalOpen && (
        <Modal onClose={closeModal} isOpen={isModalOpen}>
            {successMessage && (
            <div>
            <ul className="font-bold text-[12px] text-gray-700">
                <li>FirstName: {successMessage.firstName}</li>
                <li>LastName: {successMessage.lastName}</li>
                <li>Email: {successMessage.email}</li>
                <li>phone Number: {successMessage.phoneNumber}</li>
                <li>card Number: {successMessage.cardNumber}</li>
                <li>expiration Date: {successMessage.expirationDate}</li>
                <li>cvv: {successMessage.cvv}</li>
                <li>billing Address: {successMessage.billingAddress.country} - {successMessage.billingAddress.city} - {successMessage.billingAddress.state} - {successMessage.billingAddress.streetAddress} - {successMessage.billingAddress.zipCode} </li>
            </ul>
            </div>
        )}
            <button onClick={closeModal} className="bg-[#34967C] w-2 h-2 text-white font-bold">Close</button>
        </Modal>
        )} */}

    </form>
    </div>
    )
}