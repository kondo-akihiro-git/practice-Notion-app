<template>
    <div>
        <h1>Notion テーブルのデータ</h1>
        <ul v-if="data.length">
            <li v-for="(item, index) in data" :key="index">
                <span v-if="item.properties['テスト名前'].title && item.properties['テスト名前'].title.length">
                    {{ item.properties['テスト名前'].title[0].text.content }}
                </span>
            </li>
        </ul>
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
</style>