export default {
    API_URL:
        process.env.NODE_ENV === 'production'
            ? `https://learnersbayapi-production.up.railway.app`
            : `http://localhost:1337`,
};