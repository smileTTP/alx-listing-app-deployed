import { BookingDetails } from '@/interfaces';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    const bookingDetails: BookingDetails = req.body;

    if (!bookingDetails.email || !bookingDetails.cardNumber || !bookingDetails.firstName) {
        return res.status(400).json({ error: 'Missing required contact or payment information.' });
    }

    try {
        await new Promise(resolve => setTimeout(resolve, 1500));

        const bookingReference = `BOOK-${Date.now()}`;
        
        return res.status(200).json({
            message: 'Booking confirmed successfully!',
            referenceId: bookingReference,
            firstName: bookingDetails.firstName,
        });

    } catch (error) {
        console.error("Server error during booking submission:", error);
        return res.status(500).json({ error: 'An unexpected internal server error occurred.' });
    }
}
