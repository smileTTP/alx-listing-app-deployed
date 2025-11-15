export interface LayoutProps {
    children: React.ReactNode;
}
export interface CategoryProps {
    src: string;
    alt: string; 
    onClick?: () => void;
}
export interface PropertyProps {
    id: number,
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
    id: number;
    name: string;
    avatar: string;
    date: Date;
    rating: number;
    comment: string;
}

export interface BillingAddress {
    streetAddress: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
};

export interface BookingDetails {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    cardNumber: string;
    expirationDate: string;
    cvv: string;
    billingAddress: BillingAddress;
};