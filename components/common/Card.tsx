import { PropertyProps } from "@/interfaces/index";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({image, name, address, rating, offers, price, category}: PropertyProps) => {
    return (
        <div className="w-[378.5572204589844px] h-[422.6997985839844px]">
        <Link href={`/property/${name}`}>
            <Image src={image} alt={name} width={380} height={255} className={"rounded-2xl"}/>
            <div className="p-2 flex gap-2 mt-2 text-[12.16px]">
                {
                category.map((item, index) => (
                    <div key={index} className="flex justify-center  items-center bg-[#F9F9F9] px-3 w-auto h-[27px] rounded-full">
                    <p>{item}</p>
                    </div>
                ))
                }
            </div>
            <div className="flex items-center justify-between">
            <div>
                <h3 className="font-bold text-[22px]">{name}</h3>
                <h4 className="text-gray-400 text-[17px]">{address.state}, {address.city}, {address.country}</h4>
            </div>
            <div className="flex items-center">
                <Image src={'/assets/icons/star.png'} alt={"star"} width={19.818126678466797} height={18.848159790039062}/>
                <p className="font-semibold">{rating}</p>
            </div>
            </div>
            <div className="flex justify-between items-end">
            <div className="w-[167px] h-[37px]">
            <div className="p-2 flex justify-center gap-2 mt-2 text-[12.95px] border border-[#E9E9E9] rounded-full ">
                <Image src={'/assets/icons/bed.svg'} alt={"bed"} width={19.76436996459961} height={19.76436996459961}/>
                <div>
                    {offers.bed}
                </div>
                <Image src={'/assets/icons/bathtub.svg'} alt={"bathtub"} width={19.76436996459961} height={19.76436996459961}/>
                <div>
                    {offers.shower}
                </div>
                <Image src={'/assets/icons/people.svg'} alt={"people"} width={19.76436996459961} height={19.76436996459961}/>
                <div>
                    {offers.occupants}
                </div>
            </div>
            </div>
            <div className="flex items-end">
                <p className="text-[22px] font-semibold">${price}</p>
                <p className="text-[14px] font-semibold text-gray-500">/n</p>
            </div>
            </div>
        </Link>
        </div>
    );
}

export default Card;