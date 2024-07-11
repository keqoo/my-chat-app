const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

// 从环境变量中获取group_id和api_key
const groupId = process.env.GROUP_ID;
const apiKey = process.env.API_KEY;

app.use(express.json());

app.post('/api/chat', async (req, res) => {
    const { text } = req.body;
    const url = `https://api.minimax.chat/v1/text/chatcompletion_pro?GroupId=${groupId}`;
    const headers = {"Authorization":f"Bearer {api_key}", "Content-Type":"application/json"};
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
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
