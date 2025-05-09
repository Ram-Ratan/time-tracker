import { createHTTPResponse } from '@talent-monk/utils';
import { createPublicEndpointWithZod } from '@talent-monk/utils';
import { z } from 'zod';
import { StatusCodes } from 'http-status-codes';
import axios from 'axios';

export const getCommonHolidaysEndpoint = createPublicEndpointWithZod(
    'GET COMMON HOLIDAYS',
    z.object({
        query: z.object({
            year: z.string().transform((v) => Number(v)),
            countryCode: z.string().default('IN')
        })
    }),
    z.array(z.object({ name: z.string(), date: z.string() })),
    async (input) => {
        try {
            const countryCode = input.data.query.countryCode.trim().toUpperCase();
            const year = input.data.query.year;

            if (countryCode === 'IN') {
                // Hardcoded list for Indian holidays
                return [
                    { name: 'New Year\'s Day', date: `${year}-01-01` },
                    { name: 'Republic Day', date: `${year}-01-26` },
                    { name: 'Good Friday', date: `${year}-04-18` },
                    { name: 'Labour Day', date: `${year}-05-01` },
                    { name: 'Independence Day', date: `${year}-08-15` },
                    { name: 'Gandhi Jayanti', date: `${year}-10-02` },
                    { name: 'Dussehra', date: `${year}-10-23` },
                    { name: 'Diwali', date: `${year}-11-04` },
                    { name: 'Christmas', date: `${year}-12-25` },
                    { name: 'Makar Sankranti', date: `${year}-01-14` },
                    { name: 'Holi', date: `${year}-03-06` },
                    { name: 'Navratri (Day 1)', date: `${year}-09-26` },
                    { name: 'Baisakhi', date: `${year}-04-13` },
                    { name: 'Raksha Bandhan', date: `${year}-08-22` },
                    { name: 'Eid al-Fitr', date: `${year}-05-25` },
                    { name: 'Eid al-Adha', date: `${year}-06-28` },
                    { name: 'Maha Shivaratri', date: `${year}-03-04` },
                    { name: 'Onam', date: `${year}-09-04` },
                    { name: 'Karva Chauth', date: `${year}-10-17` },
                    { name: 'Christmas Eve', date: `${year}-12-24` },
                ];
            }

            // Fetch from Nager API for non-Indian countries
            const res = await axios.get(
                `https://date.nager.at/api/v3/PublicHolidays/${year}/${countryCode}`
            );

            const formattedHolidays = res.data.map((h: any) => ({
                name: h.name,
                date: h.date
            }));

            return formattedHolidays;
        } catch (error) {
            console.error('Error fetching holidays:', error);
            throw error;
        }
    },
    async (res, output) => {
        try {
            createHTTPResponse(res, StatusCodes.OK, 'Successful!', output);
        } catch (error) {
            throw error;
        }
    }
);
