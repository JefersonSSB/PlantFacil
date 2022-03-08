const BASE_API = 'https://localhost:3000/api';

export default {

    GetList: async () => {
        const req = await fetch(`${BASE_API}/plantShortList`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        });
        const json = await req.json();
        return json;
    },

    Get: async (id) => {
        const req = await fetch(`${BASE_API}/plant/${id}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        });
        const json = await req.json();
        return json;
    }
}