const BookingSection: React.FC<{ price: number, discount: number }> = ({ price, discount }) => {
    return (
    <div className="bg-white p-6 shadow-md rounded-lg max-w-[535px] min-w-[385px] h-[614px] border border-[#EAEAEA]">
        <h3 className="flex items-end"><strong className="text-[30px]">${price}</strong><p className="text-[22px] font-medium text-gray-500">/night</p></h3>
        <div className="mt-4">
        <label className="text-[17px] font-bold">Check-in</label>
        <input type="date" className="border p-2 w-full mt-2 border-gray-200 rounded-lg text-gray-400" />
        </div>
        <div className="mt-4">
        <label className="text-[17px] font-bold">Check-out</label>
        <input type="date" className="border p-2 w-full mt-2 border-gray-200 rounded-lg text-gray-400" />
        </div>

        <div>
            <span className="text-gray-500 font-semibold flex justify-between items-end p-2 mt-2"><p>${price} x 7 nights</p><strong className="text-black">${price * 7}</strong></span>
            <span className="text-gray-500 font-semibold flex justify-between items-end p-2 mt-2"><p>Weekly discounts</p><strong className="text-black">${(price * discount)/100}</strong></span>
            <span className="text-gray-500 font-semibold flex justify-between items-end p-2 mt-2"><p>Service fee</p><strong className="text-black">$33</strong></span>
        </div>

        <div className="text-gray-200 py-4"><hr/></div>
        
        {/* Total payment */}
        <div className="mt-4">
        <p className="text-gray-500 font-semibold flex justify-between p-2 mt-2">Total payment: <strong className="text-[#34967C]">${price * 7}</strong></p>
        </div>
        
        {/* Reserve button */}
        <div className="flex justify-center py-4">
        <button className="mt-4 bg-[#34967C] text-white py-2 px-4 w-[460px] h-[62px] rounded-xl font-bold text-[18px]">Reserve now</button>
        </div>
    </div>
    );
};

export default BookingSection;
