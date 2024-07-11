const axios = require('axios');

module.exports = async (req, res) => {
    const { text } = req.body;
    const url = `https://api.minimax.chat/v1/text/chatcompletion_pro?GroupId=${process.env.GROUP_ID}`;
    const headers = {
        "Authorization": `Bearer ${process.env.API_KEY}`,
        "Content-Type": "application/json"
    };
    const payload = {
        "model": "text-davinci-002",
        "messages": [
            { "role": "user", "content": text }
        ]
    };

    try {
        const response = await axios.post(url, payload, { headers });
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
