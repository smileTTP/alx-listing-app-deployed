import { NextApiRequest, NextApiResponse } from 'next';
import { PROPERTYLISTINGSAMPLE } from '@/constants/index'; // Import the main data
import { Reviews } from '@/interfaces'; 

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Reviews[] | { error: string }>
) {
    const { id } = req.query;

    if (req.method !== 'GET' || !id || Array.isArray(id)) {
        return res.status(400).json({ error: 'Invalid Request' });
    }

    const property = PROPERTYLISTINGSAMPLE.find(prop => prop.id === parseInt(id));

    if (property) {
        res.status(200).json(property.reviews);
    } else {
        res.status(404).json({ error: `Property with ID ${id} not found.` });
    }
}