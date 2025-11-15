import Image from "next/image";

const Footer: React.FC = () => {
    return (
    <footer className="bg-[#222222] text-white">
        <div className="container mx-auto px-14 py-6">
            <div className="grid md:grid-cols-12 grid-cols-1 gap-4">
                <div className="lg:col-span-4 col-span-12">
                    <Image src={"/assets/whiteALXlogo.svg"} alt="case" width={58} height={30} className="h-5"/>
                    <p className="mt-6"> 
                        ALX is a platform where travelers can discover and book unique, comfortable, and 
                        affordable lodging options worldwide. From cozy city apartments and tranquil 
                        countryside retreats to exotic beachside villas, ALX connects you with the perfect 
                        place to stay for any trip.
                    </p>
                </div>
                <div className="lg:col-span-3 md:col-span-4 col-span-12">
                    <h5 className="font-semibold tracking-wide">Explore</h5>
                    <ul className="list-none mt-6 space-y-2">
                        <li><a href="#">Apartments in Dubai</a></li>
                        <li><a href="#">Hotels in New York</a></li>
                        <li><a href="#">Villa in Spain</a></li>
                        <li><a href="#">Mansion in Indonesia</a></li>
                    </ul>
                </div>
                <div className="lg:col-span-2 md:col-span-4 col-span-12">
                    <h5 className="font-semibold tracking-wide">Company</h5>
                    <ul className="list-none mt-6 space-y-2">
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Career</a></li>
                        <li><a href="#">Customers</a></li>
                        <li><a href="#">Brand</a></li>
                    </ul>
                </div>
                <div className="lg:col-span-2 md:col-span-4 col-span-12">
                    <h5 className="font-semibold tracking-wide">Help</h5>
                    <ul className="list-none mt-6 space-y-2">
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Cancel booking</a></li>
                        <li><a href="#">Refunds Process</a></li>
                    </ul>
                </div>
            </div>
            <br/>
            <hr/>
            <div className="text-[16px] flex justify-between py-4">
                <div>Some hotel requires you to cancel more than 24 hours before check-in. Details <a href="#" className="text-[#34967C]">here</a></div>
                <div className="flex gap-5">
                    <div><a href="#">Terms of Service</a></div>
                    <div><a href="#">Policy service</a></div>
                    <div><a href="#">Cookies Policy</a></div>
                    <div><a href="#">Partners</a></div>
                </div>
            </div>
        </div>
    </footer>
    ); 
};

export default Footer;

