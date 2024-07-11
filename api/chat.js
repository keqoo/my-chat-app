const axios = require('axios');

module.exports = async (req, res) => {
    const { text } = req.body;
    console.log('Received text:', text);

    // Assuming api_key and groupId are defined somewhere in your environment or constants
    const api_key = 'your_api_key_here';
    const groupId = 'your_groupId_here';

    const url = `https://api.minimax.chat/v1/text/chatcompletion_pro?GroupId=${groupId}`;
    const headers = {"Authorization": `Bearer ${api_key}`, "Content-Type": "application/json"};

    const payload = {
        "model": "text-davinci-002",
        "messages": [
            { "role": "user", "content": text }
        ]
    };

    try {
        const response = await axios.post(url, payload, { headers });
        console.log('API response:', response.data);
        res.json(response.data);
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: error.response ? error.response.data : error.message });
    }
};
