import { FaLongArrowAltRight } from 'react-icons/fa';

const Description: React.FC<{ description: string }> = ({ description }) => {
    return (
        <div className="mt-4">
            <p className="px-5 text-[16px] font-medium text-[rgb(22,17,23)]">{description}</p>
            <div className="p-5 flex items-center space-x-2 text-[#34967C]"><p className="text-[18px] font-medium">Read more</p><FaLongArrowAltRight/></div>
        </div>
    );
}
export default Description;