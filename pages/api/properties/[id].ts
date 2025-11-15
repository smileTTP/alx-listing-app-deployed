import { NextApiRequest, NextApiResponse } from 'next';
import { PROPERTYLISTINGSAMPLE } from '@/constants/index'; 
import { PropertyProps } from '@/interfaces'; 

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<PropertyProps | { error: string }>
) {
    const { id } = req.query;
    console.log('API Handler running. Received ID:', id);
    if (req.method !== 'GET' || !id || Array.isArray(id)) {
        return res.status(400).json({ error: 'Invalid or missing property ID' });
    }

    const property = PROPERTYLISTINGSAMPLE.find(prop => prop.id === parseInt(id));

    if (property) {
        res.status(200).json(property);
    } else {
        res.status(404).json({ error: `Property with ID ${id} not found` });
    }
}