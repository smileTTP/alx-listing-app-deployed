export interface LayoutProps {
    children: React.ReactNode;
}
export interface CategoryProps {
    src: string;
    alt: string; 
    onClick?: () => void;
}
export interface PropertyProps {
    name: string;
    address: {
        state: string;
        city: string;
        country: string;
    };
    rating: number;
    category: string[];
    price: number;
    offers: {
        bed: string;
        shower: string;
        occupants: string;
    };
    image: string;
    images: string[];
    discount: number;
    description: string;
    reviews: Reviews[];
}

export interface Reviews {
        name: string;
        avatar: string;
        date: Date;
        rating: number;
        comment: string;
}