<template>

  <SidebarGrid style="grid-area: sidebar;" />

  <main>
      <div class="header-bg">
          <header>
              <div class="pagebtn-area">
                  <button class="page-btn">
                      <svg data-v-3e737e76="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg>
                  </button>
                  <button class="page-btn next-btn">
                      <svg data-v-3e737e76="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg>
                  </button>
                  <h2>新增文章</h2>
              </div>
              <div class="btn-area">
                  <button class="submit-btn" @click="submitArticle">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="flex-none size-5 stroke-2"><path stroke-linecap="round" stroke-linejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"></path></svg>
                      <span>送出</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="flex-none size-5 stroke-2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path></svg>
                  </button>
                  <button class="bell">
                      <svg data-v-3e737e76="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-6 stroke-2"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"></path></svg>
                      <div class="notice">通知</div>
                  </button>
                  <button class="user-btn">
                      <div class="btn-img">
                          <img src="/src/img/麻衣.png" alt="">
                      </div>                    
                      <span>XXXX</span>
                      <svg data-v-3e737e76="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-4 w-4 flex-none"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path></svg>
                  </button>
              </div>
          </header>
      </div>
      <section class="title-area">
         <div class="title-area-container">

            <button class="upload-btn" @click="handleButtonClick">
              <svg v-if="!imageUrl" data-v-b086c574="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-20 w-20"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"></path></svg>
                
              <img v-if="imageUrl" :src="imageUrl" alt="預覽圖片" class="preview-image" />
              <input
                type="file"
                class="file-input"
                @change="handleFileUpload"
                accept="image/*"
                ref="fileInput"
              />
              <svg v-if="imageUrl" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
              
            </button>
            <div class="add-section">
              <div class="add-article">
                  <svg data-v-b086c574="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-5 md:size-6 flex-none"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"></path></svg>
                  <p>新增文章</p>
              </div>
              <input v-model="title" class="enter-title" type="text" placeholder="請輸入標題">
              <div class="card-select-area">
                <button class="card-select-btn" @click="toggleMenu">
                  <svg data-v-b086c574="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-5 md:size-6 flex-none"><path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"></path></svg>
                  <p>{{ seriesName }}</p>
                </button>
                <ul class="menu-area" v-show="menuExpanded" :style="{ height: menuHeight + 'px' }">
                  <li class="menu-search">
                    <input v-model="searchQuery" @keyup="searchSeries" class="keyword" type="text" placeholder="Keyword">
                    <button @click="clearSearch">✖</button>
                  </li>
                    
                  <li class="menu" v-for="deck in filteredDecks" :key="deck.id" v-if="decks && decks.length" @click="selectDeck(deck)">
                    <svg data-v-b086c574="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-5 md:size-6 flex-none"><path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"></path></svg>
                    <p class="text-xs truncate">{{ deck.deck_name }}</p>
                  </li>
                </ul>

                <div class="cannot-change">
                    <p>非必填，但新增文章後將無法更改牌組內容</p>
                </div>
              </div>
            </div>
         </div>
      </section>
      <section class="text-area">
          <div class="edit-area">
              <div class="message-tag">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="text-white/50 size-8" data-v-b086c574=""><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"></path></svg>
                  <input type="text" placeholder="#Tag1#Tag2">
              </div>

              <editor v-model="content"
                api-key = Tiny_API_KEY
                :init="{
                  height: 415,
                  menubar: false,
                  plugins: 'lists link image',
                  toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent',
                  content_style: 'body { background-color: #222F3E ;color: #FFF; }' ,
                }"
              />

          </div>
          <div class="message-area">
              <div class="user-message">
                  <div class="message-user-img">
                      <img src="/src/img/麻衣.png" alt="">
                  </div>
                  <div class="message">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="flex-none size-7 default-transition text-zinc-300"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"></path></svg>
                      <input class="enter-message" type="text" placeholder="留言...">
                      <button>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon"><path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"></path></svg>
                      </button>
                  </div>
              </div>
              <span class="message-count">0則留言</span>
          </div>
      </section>
      <footer>
          123
      </footer>
    

      <div class="deck-container">
          <div class="deck-img">
              <img src="/src/img/麻衣.png" alt="">
          </div>
          <div class="deck-content">
              <div class="line"></div>
              <div class="total-cards">
                  <h2>刪除 DG/S02-027R</h2>
                  <span>牌組製作，共84張卡</span>
              </div>
              <div class="deckbtn-area">
                  <button class="deck-btn">
                      <i class="fa-regular fa-circle-up"></i>
                  </button>
                  <div class="pay-btn">
                      <svg width="24px" height="24px" data-v-c2dbc95b="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-6 flex-none"><path stroke-linecap="round" stroke-linejoin="round" d="m9 7.5 3 4.5m0 0 3-4.5M12 12v5.25M15 12H9m6 3H9m12-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg>
                      <span>00000 ¥</span>
                  </div>
              </div>
          </div>
      </div>
  </main>
</template>
<script>
import axios from 'axios';
import Swal from 'sweetalert2'
import SidebarGrid from '../components/SidebarGrid.vue'
import Editor from '@tinymce/tinymce-vue';

export default {
  components: {
    SidebarGrid, 
    Editor,
  },
  data() {
    return {
      token: null, 
      title: '',  
      content: '', 
      imageUrl: null,
      uploadedImage: null,
      deckId: null,
      decks :[],
      filteredDecks: [],
      menuExpanded: false, 
      menuHeight: 0, 
      searchQuery : '',
      seriesName: '選擇牌組',
    };
  },
  mounted() {
    this.token = localStorage.getItem('token');
    this.getUserDecks();
  },
  methods: {
    async submitArticle() {
      try {
        
        const formData = new FormData();
        formData.append('title', this.title); 
        formData.append('content', this.content); 
        formData.append('deck_id', parseInt(this.deckId, 10));
        
        if (this.uploadedImage) {
          formData.append('picture', this.uploadedImage); 
        } else if (this.imageUrl) {
          formData.append('post_picture', this.imageUrl); 
        }

        const response = await axios.post(
          'http://localhost:3000/api/articles', 
          formData, 
          {
          headers: {
              'Authorization': `Bearer ${this.token}`, 
          },
          }
        );

        
        Swal.fire({
            icon: 'success',
            title: '成功',
            showConfirmButton: false,
            timer: 1000,
        });

        this.title = '';
        this.content = '';
        this.imageUrl = null;
        this.uploadedImage = null;
        this.seriesName = '選擇牌組';
      } catch (error) {
        console.error('新增文章失敗:', error);
        Swal.fire({
            icon: 'error',
            title: '新增文章失敗',
        });
      }
    },

    handleButtonClick() {
      if (this.imageUrl) {
        this.imageUrl = null; 
        this.uploadedImage = null;
        this.$refs.fileInput.value = ""; // 重置 input 的值
        event.preventDefault(); 
      }
    },

    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.uploadedImage = file;
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageUrl = e.target.result; // 設置圖片 URL
        };
        reader.readAsDataURL(file);
      }
    },
    
    async getUserDecks() {
      const token = localStorage.getItem('token');
      if (!token) {
        return;
      }

      try {
        const res = await axios.get('http://localhost:3000/decks', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        this.decks = res.data.decks;
        this.filteredDecks = res.data.decks;
        console.log('用戶牌組：', this.decks);
      } catch (error) {
        console.error('獲取用戶牌組失敗：', error);
        Swal.fire({
          icon: 'error',
          title: '獲取用戶牌組失敗',
          text: error.response?.data?.message || '請稍後重試',
        });
      }
    },

    selectDeck(deck) {
      this.title = deck.deck_name;
      this.seriesName = deck.deck_name;
      this.imageUrl = deck.deck_cover;
      this.deckId = deck.id;
      this.menuExpanded = false; 
    },

    toggleMenu() {
      this.menuExpanded = !this.menuExpanded;
      if (this.menuExpanded) {
        this.calculateMenuHeight();
      }
    },

    calculateMenuHeight() {
      this.menuHeight = 45 + this.filteredDecks.length * 35; 
    },

    searchSeries() {
      if (!this.searchQuery.trim()) {
        this.filteredDecks = this.decks;
      } else {
        const query = this.searchQuery.toLowerCase();
        this.filteredDecks = this.decks.filter(deck => 
          deck.deck_name?.toLowerCase().includes(query)
        );
      }
      this.calculateMenuHeight();
    },

    clearSearch() {
      this.searchQuery = ''; 
      this.filteredDecks = this.decks;
      this.calculateMenuHeight();
    },
  }
};

</script>
<style scoped>
div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

  a {
  text-decoration: none;
  color: #FFFFFF;
}

.black-container{
  background-color: #121212;
  font-family: Roboto, Noto Sans TC, sans-serif;
  overscroll-behavior-x: none;
  width: 100%;
}

.black-container::-webkit-scrollbar {
  display: none;
}


.sidebar-container {
  background-color: #000000;
  width: 270px;
  position: fixed;
  top: 0;
}



.sidebar{
  width: 238px;
  height: 100vh;
  background-color: black;
  padding: 16px;
}

.sidebar-head{
  text-decoration: none;
  color: black;
  cursor: pointer;
}

.icon{
  width: 40px;
  height: 40px;
}

.icon-text{
  width: 85px;
  height: 35px;
}

.sidebar-menu{
  margin-top: 20px;
}

.sidebar-menu > li{
  display: flex;
  align-items: center;
  width: 238px;
  height: 40px;
  margin-bottom: 5px;
}

.w-7{
  width: 1.75rem;
}

.h-7{
  height: 1.75rem;
}

.sidebar-menu li h2{
  color: #a1a1aa; 
  font-weight: 700;
  font-size: 16px;
}

.sidebar-menu a {
  display: flex;
  align-items: center; 
  text-decoration: none;
  color: #a1a1aa;
  gap: 10px;
}

.sidebar-menu a:hover h2{
  color: white; 
}

.sidebar-menu a:hover svg {
  stroke: white; 
}

.translate-btn{
  display: flex;
  align-items: center;
  width: 238px;
  height: 40px;
  gap: 8px;
  border-radius: 10px;
  border: none;
  background: linear-gradient(45deg, #a855f7, #ec4899); 
  color: white;
  margin-top: 20px;
  cursor: pointer;
  position: relative;
}

.translate-btn::after{
  content: "";
  position: absolute;
  border-top: 1px solid #3f3f46;
  top: 50px;
  left: 0;
  right: 0;
  width: 100%;
}

.sidebar p {
  color: #a1a1aa;
  font-size: 16px;
  margin-top: 30px;
}


.pagebtn-area {
  position: relative;
  width: 20%;
  height: 64px;
  background-color: #32C9FF;
  min-width: 195px;
  display: flex;
  align-items: center;
  margin-left: 24px;
  gap: 8px;
}



.page-btn {
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: rgb(70, 67, 67);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.page-btn svg {
  width: 24px;
  height: 24px;
  stroke: white;
}


.pagebtn-area h2 {
  font-size: 24px;
  font-weight: 900;
  color: white;
}

.next-btn {
  opacity: 0.3;
}

.btn-area {
  position: absolute;
  right: 30px;
  display: flex;
  gap:8px;
}

.notice {
  width: 30px;
  height: 25px;
  background-color: #2D7894;
  color: white;
  border-radius: 15px;
  font-size: 15px;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 8px 0 8px;
  position:absolute;
  right:105px;
  top:35px;
  opacity: 0;
  visibility: hidden;
  transition:ease 0.3s;
}

.submit-btn {
  width: 92px;
  height: 36px;
  background-color: white;
  border-radius: 20px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  cursor: pointer;
}

.submit-btn:hover{
  background-color: #F59E0B;
  color: white;
  stroke: white;
}

.submit-btn:hover span {
  color: white;
}

.submit-btn:hover svg {
  stroke: white;
}

.submit-btn svg {
  width: 20px;
  height: 20px;
  stroke: #292828;
}

.submit-btn span {
  color: #292828;
  font-size: 15px;
  font-weight: 900;
}

.bell {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background-color: rgba(0,0,0,0);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.bell:hover {
  background-color: #2D7894;
}

.bell:hover .notice{
  opacity: 1;
  visibility: visible;
}

.bell svg {
  width: 24px;
  height: 24px;
  stroke: white;
}

.user-btn {
  border: none;
  background-color:#19647F;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  gap:8px;
  cursor: pointer;
}

.user-btn:hover {
  background-color: #2D7894;
}


.btn-img img{
  width: 24px;
  height: 24px;
  border-radius: 50%;
}

.user-btn span {
  color: white;
}

.user-btn svg {
  width: 16px;
  height: 16px;
  stroke: white;
}

main {
  margin-left: 270px;
  width: calc(100% - 278px);
  height: 100hv;
  background-color: #32C9FF;
  scroll-behavior: smooth;
}

.header-bg {
  background-color: #000000;
  width: calc(100% - 278px);
  height: 72px;
  position: fixed;
  top:0;
  z-index: 4;
}

header {
  background-color: #32C9FF;
  border-radius: 20px 20px 0 0;
  width: 100%;
  position: absolute;
  top: 8px;
  height: 64px;
  display: flex;
  align-items: center;
}

.title-area {
  width: 100%;
  height: 378px;
  margin-top: 72px;
  display: flex;
}

.title-area-container {
  width: 100%;
  margin-top: 88px;
  margin-left: 24px;
  display: flex;
}

.upload-btn {
  margin-top: 0;
  width: 240px;
  min-width: 240px;
  height: 240px;
  background-color: #333333;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  position: relative;
  overflow: hidden;
}
.preview-image {
  width: 240px;        
  position: absolute;  
  top: 0;
  left: 0;
}


.upload-btn svg {
  width: 85px;
  height: 85px;
  stroke: white;
  visibility: hidden;
  opacity: 0;
  transition: ease 0.2s;
}

.upload-btn:hover svg {
  visibility: visible;
  opacity: 1;
}

.file-input {
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 opacity: 0;
 cursor: pointer;
}

.add-section {
  width: 100%;
  margin-left: 32px;
  margin-top: 53px;
}

.add-article {
  display: flex;
  margin-bottom: 8px;
}

.add-article svg{
  width: 24px;
  height: 24px;
  color: white;
}

.add-article p {
  margin-left: 4px;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: white;
}


.enter-title  {
  box-sizing: border-box;
  color: white;
  padding: 6px;
  border: none;
  display: flex;
  width: 90%;
  font-size: 80px;
  height: 105px;
  background-color: #32C9FF;
  border-bottom: 1px solid #99E4FF;
}

.enter-title:focus {
  outline:none;
}

.enter-title::placeholder {
  font-size: 80px;
  font-weight: 900;
}

.menu {
  display: flex;
  align-items: center;
  padding: 5px 10px ;
  color: white;
  cursor: pointer;
  gap: 5px;
}

.menu-area {
  display:grid;
  position: absolute;
  background-color: #20567a;
  border-radius: 7px;
  width:270px;
  margin-top: 45px;
  margin-left: 5px;
  overflow: hidden;
  transition: height 1s ease;
  z-index: 3;
}

.menu-search {
  display: flex;
  align-items: center;
  padding: 10px ;
  color: white;
  position: relative;
  width:250px;
}

.keyword  {
  box-sizing: border-box;
  color: white;
  padding: 4px 8px;
  border: 1px solid gray;
  border-radius:10px;
  display: flex;
  background-color: transparent;
  outline: none;
  width:250px;
}

.menu-search button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 12px;
    color: white;
    position: absolute;
    right: 12px;
}

.card-select-area {
  width: 100%;
  display: flex;
  gap: 24px;
}

.card-select-btn {
  margin-top: 8px;
  width: 108px;
  height: 32px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #2FB7E7;
  cursor: pointer;
}

.card-select-btn p {
  font-size: 16px;
  font-weight: 900;
  color: white;
}

.card-select-btn:hover {
  background-color: #2D7894;
}


.card-select-btn svg, .menu svg {
  width: 24px;
  height: 24px;
  stroke: white;
}

.cannot-change {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.cannot-change p {
  font-size: 16px;
  color: white;
  font-weight: 900;
}

.text-area {
  box-sizing: border-box;
  height: 520px;
  display: flex;
  background:linear-gradient(to bottom, #20637A, #131617);
}

.edit-area {
  width: 55%;
  height: 456px;
  padding: 8px;
  box-sizing: border-box;
  background-color: #1C3D4B;
  margin: 32px 0 0 24px;
  border-radius: 10px;
}

.enter-text {
  margin-top: 8px;
  border-radius: 10px;
  height: 392px;
  width: calc(100% - 8px);
  background-color: #222F3E;
  border: 2px solid black;
}

.message-tag {
  width: 50%;
  background-color: #1C3D4B;
  display: flex;
  gap:8px;
}

.message-tag svg {
  width: 32px;
  height: 32px;
  stroke: rgb(116, 112, 112);
}

.message-tag input {
  box-sizing: border-box;
  width: 100%;
  background-color: transparent;
  border: none;
  color: rgb(116, 112, 112);
  font-size: 16px;
  border-bottom: 2px solid rgb(116, 112, 112);;
}

.message-tag input:focus {
  outline: none;
}


.message-area {
  width: 45%;
  height: 40px;
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  margin-top: 36px;
  margin-left: 16px;
}

.user-message {
  width: 100%;
  display: flex;
  gap: 8px;
  margin: auto;
}

.message {
  box-sizing: border-box;
  width: 85%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: #1C3D4B;
  border-radius: 10px;
  padding: 8px;
}

.message:hover {
  background-color: black;
}

.message-user-img img{
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.message svg {
  width: 28px;
  height: 28px;
  stroke: white;
}

.message-count {
  color: white;
  position: absolute;
  top:56px;
  right: 40px;
  font-weight: bold;
}


.enter-message {
  width: 100%;
  box-sizing: border-box;
  background-color: transparent;
  border: none;
  font-size: 16px;
  transform: translate(-5px,1px);
  color: white;
}

.enter-message:focus {
  outline: none;
}

.enter-messgae::placeholder {
  color: #4f4f50;
}

.message button {
  width: 32px;
  height: 32px;
  background-color: #3F3F46;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.message button svg {
  width: 24px;
  height: 24px;
}

footer {
  background-color: #222F3E;
  width: 100%;
  height: 401px;
  color: white;
}

.footer-nav {
  width: 100%;
  height: 66px;
  display: flex;
  background-color: #0D0B0C;
  position: fixed;
  bottom: 0;
  display: none;    
}

.nav-link {
  width: 16.66%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.nav-link img {
  width: 28px;
  height: 28px;
  border-radius: 50%;
}

.link-svg {
  width: 28px;
  height: 28px;
  stroke: #b1afaf;
}

.link-word{
  font-size: 9px;
  margin-top: 8px;
  color: #b1afaf;
}


.nav-link:hover svg{
  stroke: white;
}

.nav-link:hover span {
  color: white;
}

.social-icon svg{
  stroke: white;
}

.social-icon span {
  color: white;
}


.deck-container {
  width: 99%;
  padding-right: 8px;
  height: 56px;
  position: fixed;
  bottom: 66px;
  display: flex;
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

@media screen and (max-width: 1200px) {
  body {
      min-width: 100%;
  }

  .sidebar-container {
      display: none;
  }

  main {
      margin-left: 0;
      width: 100%;
      
  }
  
  .header-bg {
      background-color: #000000;
      width: 100%;
      height: 64px;
  }

  header {
      border-radius: 0;
      width: 100%;
      position: static;
  }

  .next-btn {
      display: none;
  }

  .bell,.user-btn{
      display: none;
  }

  .title-area {
      width: 100%;
      margin-top: 0;
      margin-left: 0;
      height: 560px;
  }

  .title-area-container {
      height: 560px;
      display: flex;
      flex-direction: column;
      margin-left: 0;
      margin-top: 80px;
  }

  .upload-btn {
      width: 288px;
      height: 288px;
      margin: 0 auto;
  }
  .preview-image {
    width: 288px;
  }

  .add-section {
      width: 100%;
      margin-left: 16px;
      margin-top: 25px;
  }

  .enter-title  {
      padding: 0;
      width: 90%;
      font-size: 35px;
      height: 40px;
  }

  .enter-title::placeholder {
      font-size: 35px;
      font-weight: 900;
  }

  .card-select-area {
      gap: 5px;
      flex-direction: column;
  }

  .card-select-btn {
      justify-content: start;
      width: 90%;
  }

 .menu-area {
  width: 89%;
 }
 .menu-search {
  width: 100%;
 }
 .menu-search button {
  right:40px;
 }
 .keyword {
  width: 97%;
 }


  .cannot-change p {
      font-size: 20px;
  }

  .text-area {
      box-sizing: border-box;
      width: 100%;
      height: 650px;
      flex-direction: column;
  }

  .edit-area {
      width: 95%;
      box-sizing: border-box;
      background-color: #1C3D4B;
      margin:16px auto;
  }

  .message-user-img img{
      width: 50px;
      height: 50px;
  }

  .enter-message {
      width: 100%;
  }

  .message-area {
      width: 95%;
      height: 40px;
      margin-top: 36px;
      margin-left: 16px;
  }
  

  .message {
      width: 90%;
      height: 50px;
      gap: 8px;
      background-color: #2a2a2b;
  }

  .message-count {
      position: absolute;
      top:70px;
      right: 20px;
  }

  
  .footer-nav {
      display: flex;    
  }


  .edit-area {
      width: 95%;
      box-sizing: border-box;
      background-color: #1C3D4B;
      margin:16px auto;
  }

  .message-user-img img{
      width: 50px;
      height: 50px;
  }

  .enter-message {
      width: 100%;
  }

  .message-area {
      width: 95%;
      height: 40px;
      margin-top: 36px;
      margin-left: 16px;
  }
  

  .message {
      width: 90%;
      height: 50px;
      gap: 8px;
      background-color: #2a2a2b;
  }

  .message-count {
      position: absolute;
      top:70px;
      right: 20px;
  }
  
  .footer-nav {
      display: flex;    
  }

  .deck-container {
      display: flex;
  }
}
</style>
  