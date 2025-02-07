<template>
    <div>
        <h1>Notion データベースの情報</h1>

        <!-- テーブル名とビュー名 -->
        <h2>データベース: テストテーブル</h2>
        <h3>ビュー: 全データ</h3>

        <!-- データがある場合にテーブルを表示 -->
        <table v-if="data.length">
            <thead>
                <tr>
                    <th v-for="(value, key) in data[0].properties" :key="key">
                        {{ key }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in data" :key="index">
                    <td v-for="(value, key) in item.properties" :key="key">
                        <!-- Rich textプロパティやタイトルなどの内容を取り出す処理 -->
                        <span v-if="value.type === 'rich_text'">
                            <span v-for="(richText, idx) in value.rich_text" :key="idx">
                                {{ richText.plain_text }}
                            </span>
                        </span>

                        <span v-if="value.type === 'title'">
                            {{ value.title[0]?.plain_text || 'タイトルなし' }}
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>

        <p v-else>データを読み込んでいます...</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            data: [],
        };
    },
    mounted() {
        this.fetchNotionData();
    },
    methods: {
        async fetchNotionData() {
            try {
                const response = await axios.get('http://localhost:3000/notion-table');
                this.data = response.data;
            } catch (error) {
                console.error("データの取得に失敗しました", error);
            }
        },
    },
};
</script>

<style scoped>
h1 {
    color: #42b983;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

th,
td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
}

th {
    background-color: #f4f4f4;
}
</style>