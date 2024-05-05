const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const apiKey = '9b943e4336msh4d4ea10553c4f6bp169ed7jsn494f2b8aa715';

app.post('/run', async (req, res) => {
    try {
        const code = req.body.code;
        const options = {
            method: 'POST',
            url: 'https://python-3-code-compiler.p.rapidapi.com/',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '9b943e4336msh4d4ea10553c4f6bp169ed7jsn494f2b8aa715',
                'X-RapidAPI-Host': 'python-3-code-compiler.p.rapidapi.com'
            },
            data: {
                code: code,
                version: 'latest',
                input: null
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
            if (response.data.stderr) {
                res.status(500).json({ output: response.data.stderr });
            } else {
                res.json({ output: response.data.output });
            }
        } catch (error) {
            console.error(error);
        }

    }

    catch (error) {
        console.log(error);
        res.status(500).json({ output: 'An error occurred while running the code.' });
    }
    res.status(200);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
