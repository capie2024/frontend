<template>
    <div class="container">
        <SidebarGrid />
        <div class="main">
            <div class="social-container">
                <div class="header-container">
                    <div class="search-container">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input v-model="searchQuery" @keyup.enter="handleEnter" class="search" type="text" placeholder="我想找找....?">
                        <svg @click="clearSearch" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="flex-none size-5 stroke-2 cursor-pointer text-zinc-700"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path></svg>
                    </div>
                    <button class="filter">
                        <i class="fa-regular fa-window-restore"></i>
                        篩選系列
                        <i class="fa-solid fa-x"></i>
                    </button>
                    <button class="filter-hidden">
                        <i class="fa-regular fa-window-restore"></i>
                        CODE
                        <i class="fa-solid fa-x"></i>
                    </button>
                    <div class="sign-container">
                        <a :href="'/add'">
                            <button class="add-article">
                                <i class="fa-solid fa-pen-to-square"></i>
                                新增文章
                            </button>
                        </a>
                        <a :href="'/add'">
                            <button class="add-article-hidden">
                                <i class="fa-solid fa-pen-to-square"></i>
                            </button>
                        </a>
                        <div class="bell">
                            <i class="fa-regular fa-bell"></i>
                        </div>
                        <div class="user-sign">
                            <i class="fa-regular fa-user"></i>
                            <span>登入</span>
                            <i class="fa-solid fa-chevron-down"></i>
                        </div>
                    </div>
                </div>
            </div>
            <section class="flex-item-hidden">
                <button  
                    v-for="(item, index) in socialHistory"
                    :key="index" 
                    class="user-button" 
                    @click="handleHistoryClick(item.searchQuery)"
                >
                    <a href="#">
                        <div class="user-link">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <span>{{ item.searchQuery }}</span>
                        </div>
                        <div class="user-link">
                            <i class="fa-regular fa-window-restore"></i>
                            <span>-</span>
                        </div>
                    </a>
                </button>
            </section>
            <h2 class="title">
                搜尋結果
                <br>
                <span class="subtitle">一共有 {{ searchResultCount }} 結果</span>
            </h2>
            <section class="card-area">
                <a v-for="article in filteredArticles" 
                    :key="article.post_code" 
                    :href="'/social/' + article.post_code" 
                    class="card-link"
                >
                    <div class="card-img">
                        <img 
                        :src="article && article.post_picture ? article.post_picture : 'https://bottleneko.app/images/cover.png'" 
                        :alt="article && article.title ? article.title : 'Default Title'"
                        >
                    </div>
                    <div class="card-user">
                        <div class="card-user-flex">
                            <div class="card-user-img">
                                <img :src="article.users.picture" alt="用戶頭像">
                            </div>
                            <div class="card-user-p">
                                <p>{{ article.users.username }}</p>
                                <div class="date-container">
                                    <p class="date">{{ formatDate(article.created_at) }}</p>
                                    <i class="fa-solid fa-globe"></i>
                                    <p class="card-code">{{ article.post_code }}</p>
                                    <div class="chat">
                                        <i class="fa-regular fa-comment"></i>
                                        <p>1</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-name">
                            <h2>{{ article.title }}</h2>
                            <p v-html="article.content"></p>
                        </div>
                    </div>
                </a>     
                    
            </section>
        </div>    
    </div>
</template>
<script>
import axios from 'axios';
import SidebarGrid from '../components/SidebarGrid.vue';

const API_URL = import.meta.env.VITE_API_URL; 

export default {
    components: {
    SidebarGrid,
  },
  data() {
    return {
      articles: [],
      searchQuery: '',
      filteredArticles:[],
      socialHistory: JSON.parse(localStorage.getItem('socialHistory')) || [],
    };
  },
  async created() {
    try {
      const response = await axios.get(`${API_URL}/api/articles`);
      this.articles = response.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      this.filteredArticles = this.articles;
    } catch (error) {
      console.error('獲取文章列表失敗', error);
    }
  },
  computed: {
    searchResultCount() {
      return this.filteredArticles.length;
    },
  },
  methods:{
    formatDate(date) {
        if (!date) {
        return '';
        }
        return date.split('T')[0];
    },
    handleEnter() {
      this.searchArticles();
      this.addSearchHistory();
      this.searchQuery = '';
    },
    addSearchHistory() {
      if (this.searchQuery.trim()) {
        const newHistory = { searchQuery: this.searchQuery.trim() };       
        const existingIndex = this.socialHistory.findIndex(
        (item) => item.searchQuery === newHistory.searchQuery
        );

        if (existingIndex !== -1) {
        this.socialHistory.splice(existingIndex, 1);
        }
        this.socialHistory = [newHistory, ...this.socialHistory];
        localStorage.setItem('socialHistory', JSON.stringify(this.socialHistory));
        } 
    },
    

    searchArticles() {
      if (!this.searchQuery.trim()) {
        this.filteredArticles = this.articles;
      } else {
      const query = this.searchQuery.toLowerCase();
      this.filteredArticles = this.articles.filter(article =>
        article.title.toLowerCase().includes(query) ||
        article.content.toLowerCase().includes(query) ||
        article.post_code.includes(query)
      );
      }
    },
    handleHistoryClick(searchQuery) {
        this.searchQuery = searchQuery;
        this.searchArticles(); 
        this.addSearchHistory();
    },
    clearSearch() {
        this.searchQuery = ''; 
        this.filteredArticles = this.articles;
    },
  },
};
</script>
<style scoped>
    html,body {
        width: 100%;
    }

    a {
        text-decoration: none;
        color: #FFFFFF;
    }

    .sidebar-container {
        position: fixed;
        top: 0;
        background-color: black;
    }

    .container {
        width: 100%;
        display: block;
        position: relative;
    }

    .main {
        margin-left:270px;
        height:100vh; 
        overflow: hidden;
  
        overflow-y: scroll;
        scrollbar-width: none;    
    }


    .social-container {
        width: 100%;
        position: relative;
        background-color: #121212;
    }

    .header-container {
        background-color: #020202;
        width: 100%;
        min-width: 30%;
        height: 64px;
        position: fixed;
        top: 0;
        display: flex;
        flex-wrap: wrap;
        gap:10px;
        z-index: 1;
    }


    .search-container {
        width: 271px;
        height: 36px;
        background-color: #fff;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        padding: 8px;
        border-radius: 20px;
        position: fixed;
        top: 0;
        margin:14px 0 0 24px;
        position: relative;
    }

    .search-container svg {
        cursor: pointer;
        width:22px;
        height: 22px;
        position: absolute;
        right: 10px;
    }

    .search-container i::before,
    .header-container i::before {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
    }

    .search {
        width: 207px;
        height: 20px;
        border: none;
    }

    .search:focus {
        outline: none;
    }

    .filter {
        background-color: #F0F0F0;  
        border: 1px solid #F0F0F0;
        width: 120px;
        border-radius: 20px;
        height: 36px;   
        transform: translateY(14px);
        font-weight: 700;
        cursor: pointer;
    }

    .filter-hidden {
        border: 1px solid #F0F0F0;
        width: 100px;
        height: 36px; 
        border-radius: 20px;
        background-color: #F0F0F0;  
        position: absolute;
        top: 14px;
        right: 59px;
        font-weight: 700;
        cursor: pointer;
        display: none;
    }

    .sign-container {
        display: flex;
        align-items: center;
        position: absolute;
        top: 14px;
        right: 300px;
    }

    .bell i::before,.user-sign i::before {
        color: #D4D4D8;
        width: 24px;
        height: 24px;
        cursor: pointer;
    }

    .sign-container {
        display: flex;
        gap: 8px;
    }

    .add-article {
        width: 96px;
        height: 36px;
        border-radius: 20px;
        background-color: #D4D4D8;
        font-weight: 700;
        cursor: pointer;
    }

    .add-article-hidden {
        border: 1px solid #F0F0F0;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: -285px;
        display: none;
    }

    .user-sign {
        width: 92px;
        background-color: #1C1C1E;
        border-radius: 20px;
        color: #D4D4D8;
    }

    .user-sign:hover {
        background-color:#2b2b2c;
    }

    .user-sign span{
        font-weight: 700;
        font-size: 14px;
    }

    .flex-item-hidden {
        display: flex;
        padding-left: 20px;
        height: 62px;
        border-radius: 20px;
        /* position: absolute; */
        margin-top: 80px;
        gap: 16px;
    }


    .user-button {
        box-sizing: border-box;
        padding: 9px;
        border: 1px solid #27272A;
        background-color: rgb(24,24,17);
        color: #D4D4D8;
        width: 80px;
        border-radius: 10px;
        display: flex;
        cursor: pointer;
    }

    .user-button:hover {
        background-color: #27272A;
    }

    .user-link {
        display: flex;
        gap:5px;
    }

    .user-link i {
        width: 20px;
        height: 20px;
        line-height: 1.25rem; 
    }

    .user-link span {
        line-height: 1.25rem;   
    }

    .title {
        display: block;
        font-size: 25px;
        font-weight: 900;
        line-height: 1.75rem;
        color: #fff;
        text-align:start;
        margin-bottom: 10px;
    }

    .subtitle {
        color: #D4D4D8;
        font-weight: 100;
        font-size: 15px;
    }

    .card-area {
        padding:0px 20px 20px 20px;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4,  1fr);
        grid-gap: 24px;
        box-sizing: border-box;
    }

    .card-link {
        padding: 16px;
        display: flex;
        flex-direction: column;
        background-color: #18181B;
        border-radius: 10px;
        overflow: hidden;
    }

    .card-link:hover {
        background-color:#2b2b2c;
    }

    .card-img {
        min-width: 169px;
        display: flex;
        overflow: hidden;
        aspect-ratio: 1 / 1;
        border-radius: 10px;
        position: relative;
    }

    .card-img img{
        width: 100%;
        object-fit: cover;
        position: absolute;
    }

    .card-user-flex {
        display: flex;
        gap: 8px;
        margin-top: 16px;
    }

    .card-user-img {
        border-radius: 50%;
        display: flex;
        align-items: center;
    }

    .card-user-img img {
        object-fit: cover;
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    .card-user-p {
        position: relative;
        width: 100%;
        align-content: center;
    }

    .card-user-p p {
        font-size: 18px;
    }

    .date-container {
        display: flex;
        gap: 4px;
        color: rgb(170, 168, 168);
    }

    .date {
        width: 62px;
    }

    .date-container i {
        display: flex;
        font-size: 14px;
        margin: 0 2px;
    }

    .chat {
        min-width: 30px;
        display: flex;
        position: absolute;
        left: 185px;
    }


    .date-container p{
        font-size: 12px;
    }


    .card-name {
        margin-top: 10px;
    }

    .card-name p {
        margin-top: 8px;
        font-size: 16px;
        color: rgb(170, 168, 168);
        height: 16px;
        overflow: hidden;
    }

    .card-name h2 {
        font-weight: 900;
    }

    .deck-container {
        width: 100%;
        padding-right: 8px;
        height: 56px;
        position: fixed;
        bottom: 65.5px;
        display: none;
    }

    .deck-img {
        overflow: hidden;
        border-radius: 10px;
        transform: translateX(8px);
        z-index: 1;
    }

    .deck-img img {
        width: 56px;
        height: 56px;
        object-fit: cover;
    }


    .deck-content {
        width: 92%;
        height: 56px;
        background-color: rgba(86, 68, 10, 0.9);
        display: flex;
        padding-left: 8px;
        border-radius: 0 10px 10px 0;
        align-items: center;
        position: relative;
    }

    .line {
        position: absolute;
        bottom: 52px;
        width: 96%;
        border-top:4px solid;
        border-image: linear-gradient(to right, rgb(234, 179, 8) 0%, rgb(234, 179, 8) 89.0476%, rgb(34, 197, 94) 94.0476%, rgb(34, 197, 94) 95%) 5 / 1 / 0 stretch;
    }

    .total-cards {
        width: 80%;
        padding-top: 8px;
        padding-left: 8px;
    }

    .total-cards h2 {
        font-size: 15px;
        font-weight: 00;
        color: #fff;
        margin-bottom: 2px;
    }

    .total-cards span {
        font-size: 13px;
        color: #dad7d7;
        font-weight: 700;
    }

    .deckbtn-area {
        display: flex;
        align-items: center;
        width: 20%;
        position: relative;
        padding-left: 8px;
    }

    .deck-btn {
        all: unset;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        color: #F0F0F0;
        background-color: rgba(86, 68, 10, 0.9);
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 120px;
        cursor: pointer;
    }

    .deck-btn:hover {
        background-color: #42ebeb;
    }

    .deck-btn i::before {
        font-size: 24px;
    }

    .pay-btn {
        padding-left: 5px;
        position: absolute;
        right: 8px;
        width: 86px;
        min-width: 94px;
        height: 32px;
        background-color: #DAA61E;
        display: flex;
        align-items: center;
        color: #dad7d7;
        border-radius: 20px;
        cursor: pointer;
    }

    .pay-btn:hover {
        background-color: #e27637;
    }

    .pay-btn span {
        font-size: 14px;
        margin-left: 5px;
    }

    @media screen and (min-width: 1470px) {
        .card-area {
            grid-template-columns: repeat(5,  1fr);
        }
    }

    @media screen and (max-width: 1200px) {
        
        .main {
            margin-left:0px;
        }

        .sidebar-container {
            top:auto;
            bottom: 0;
        }


        .search-container {
            width: calc(100% - 191px);
            position: relative;
        }

        .search {
            width: calc(100% - 191px);
        }

        #xx {
            display: flex;
            position: absolute;
            right: 10px;
        }

        .filter {
            display: none;
        }

        .filter-hidden {
            display: block;
        }

        .add-article {
            display: none;
        }

        .add-article-hidden {
            display: block;
        }

        .bell,.user-sign {
            display: none;
        }

        .card-area {
            grid-template-columns: repeat(3, 1fr);
        }

        .deck-container {
            display: flex;
        }

        .chat {
            left: 85%;    
        }
    }

    @media screen and (max-width: 768px) {

        .xx {
            background-color: #fff;
            z-index: 1;
        }

        .search {
            width: 100%;
        }

        .card-link{
            background-color: #121212;
            border-radius: 0;
            border-bottom: 1px solid gray;
        }

        .card-area {
            left: 5px;
            grid-template-columns: repeat(1, minmax(198px, 1fr));
        }

        .chat {
            left: 85%;
        }
    }
</style>