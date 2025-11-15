import { NextApiRequest, NextApiResponse } from 'next';
import { PROPERTYLISTINGSAMPLE } from '@/constants/index'; 
import { PropertyProps } from '@/interfaces'; 

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<PropertyProps[] | { error: string }>
) {
    if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
    res.status(200).json(PROPERTYLISTINGSAMPLE);
    } catch (error) {
    res.status(500).json({ error: 'Failed to serve property data' });
    }
}