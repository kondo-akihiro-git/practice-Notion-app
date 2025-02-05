require('dotenv').config();
const express = require('express');
const { Client } = require('@notionhq/client');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;


app.get('/notion-table', async (req, res) => {
    try {
        const response = await notion.databases.query({ database_id: databaseId });
        
        res.json(response.results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch Notion table' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
