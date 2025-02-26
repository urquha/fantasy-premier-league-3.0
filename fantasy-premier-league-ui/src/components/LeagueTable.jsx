import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const LeagueTable = () => {
    const fetchLeagueData = async () => {
        try {
            const { data } = await axios.get('https://draft.premierleague.com/api/league/35846/details');
            return data;
        } catch (error) {
            // If the API call fails (possibly due to CORS), we'll fall back to mock data
            console.error("Error fetching from FPL API:", error);
            throw new Error("Could not fetch league data. This might be due to CORS restrictions.");
        }
    };

    const { data, isLoading, error } = useQuery({
        queryKey: ['standings'],
        queryFn: fetchLeagueData
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    // Display the raw data for now so we can see its structure
    return (
        <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default LeagueTable;
