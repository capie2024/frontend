<script setup>
import SidebarGrid from "@/components/SidebarGrid.vue";
import MainFooter from "@/components/MainFooter.vue";
</script>

<template>
    <body class="overflow-hidden bg-black root-container">
        <header class="z-10 h-16 md:mt-2 md:mr-2 header-bg md:rounded-t-2xl">
            <nav class="header-container">
                <button class="flex-none p-1 text-white rounded-full bg-black/50 default-transition hover:bg-zinc-800/50">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                    </svg>
                </button>
                <button class="flex-none hidden p-1 text-white rounded-full md:block bg-black/50 default-transition hover:bg-zinc-800/50 disabled:opacity-30" disabled>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                    </svg>
                </button>
                <div class="w-full min-w-0 text-lg font-bold text-white md:text-2xl">
                        <h2 class="text-2xl font-bold truncate">我的文章</h2>
                </div>
                <div class="z-10 notice">
                    <input type="checkbox" id="notice-jump">
                    <label for="notice-jump" class="inline-flex items-center p-1 text-center text-white rounded-full default-transition hover:bg-zinc-800/50">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="stroke-2 size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"></path></svg>
                    </label>
                    <div class="z-10 notice-grid">
                        <div class="notice-grid-up">
                            <h2>通知(0)</h2>
                        </div>
                        <div class="notice-grid-down">
                            <img src="https://bottleneko.app/images/status/empty.png" alt="no-data">
                            <h2>沒東西</h2>
                            <p>你只有一無所有的時候，才能全身心地投入機會。 - 拿破崙·波拿巴</p>
                        </div>
                    </div>
                </div>
                <div class="items-center gap-1 text-white rounded-full login-btn bg-black/50 default-transition hover:bg-zinc-800/50">
                    <div class="flex flex-col items-center gap-1 p-1 rounded-full">
                        <div class="flex-none rounded-full size-6 bg-black/70">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="m-1 text-zinc-200">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"></path>
                            </svg>
                        </div>
                    </div>
                    <span class="text-sm flex-none max-w-[8rem] truncate">登入</span>
                    <div class="p-1 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="flex-none w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                        </svg>
                    </div>
                </div>
            </nav>
        </header>
        <SidebarGrid  />

        <div class="background"></div>
        <main class="relative content-container bg-base md:my-2 z-1">
            <div class="h-full  content ">
                <section class="main-container px-4 md:px-6">
                    <h2 class="title">
                        我的文章<br>
                    <span class="subtitle">
                        一共有XXXX結果
                    </span>
                    </h2>
                    <section class="card-area">
                        <a href="#" class="card-link">
                            <div class="card-img">
                                <img src="/src/img/麻衣.png" alt="">
                            </div>
                            <div class="card-user">
                                <div class="card-user-flex">
                                    <div class="card-user-img">
                                        <img src="/src/img/麻衣.png" alt="">
                                    </div>
                                    <div class="card-user-p">
                                        <p>XXX</p>
                                        <div class="date-container">
                                            <p class="date">Date</p>
                                            <i class="fa-solid fa-globe"></i>
                                            <p class="card-code">postcode</p>
                                            <div class="chat">
                                                <i class="fa-regular fa-comment"></i>
                                                <p>1</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-name">
                                    <h2>Title</h2>
                                    <p>Content</p>
                                </div>
                            </div>
                        </a>     
                        <a href="#" class="card-link">
                            <div class="card-img">
                                <img src="/src/img/麻衣.png" alt="">
                            </div>
                            <div class="card-user">
                                <div class="card-user-flex">
                                    <div class="card-user-img">
                                        <img src="/src/img/麻衣.png" alt="">
                                    </div>
                                    <div class="card-user-p">
                                        <p>XXX</p>
                                        <div class="date-container">
                                            <p class="date">Date</p>
                                            <i class="fa-solid fa-globe"></i>
                                            <p class="card-code">postcode</p>
                                            <div class="chat">
                                                <i class="fa-regular fa-comment"></i>
                                                <p>1</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-name">
                                    <h2>Title</h2>
                                    <p>Content</p>
                                </div>
                            </div>
                        </a>
                        <a href="#" class="card-link">
                            <div class="card-img">
                                <img src="/src/img/麻衣.png" alt="">
                            </div>
                            <div class="card-user">
                                <div class="card-user-flex">
                                    <div class="card-user-img">
                                        <img src="/src/img/麻衣.png" alt="">
                                    </div>
                                    <div class="card-user-p">
                                        <p>XXX</p>
                                        <div class="date-container">
                                            <p class="date">Date</p>
                                            <i class="fa-solid fa-globe"></i>
                                            <p class="card-code">postcode</p>
                                            <div class="chat">
                                                <i class="fa-regular fa-comment"></i>
                                                <p>1</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-name">
                                    <h2>Title</h2>
                                    <p>Content</p>
                                </div>
                            </div>
                        </a>
                    </section>
                </section>
                <footer class="footer">
                    <MainFooter />
                </footer>
            </div>
            
        </main>
    </body>
</template>

<style scoped>
@import '@/assets/base.css';

.root-container {
    display: grid;
    grid-template-areas:
        "sidebar navbar "
        "sidebar main-view ";
    grid-template-columns: 270px 1fr;
    grid-template-rows: 4rem 1fr;
    height: 100vh;
}

.default-transition {
    transition-duration: .3s;
    transition-property: all;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
}

.sidebar-container {
    width: 270px;
    height: 100%;
    display: flex;
    flex-direction: column;
    grid-area: sidebar;
    min-height: 0;
    padding: 1rem;
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

.sidebar-head {
    display: inline-flex;
    align-items: center;
    gap: .5rem;
}

.sidebar-menu > li{
    display: flex;
    align-items: center;
    width: 238px;
    height: 40px;
    margin-bottom: 5px;
    cursor: pointer; 
}

.sidebar-menu > .md-menu {
    display: none;
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

.sidebar-menu li:hover a h2{
    color: white; 
}

.sidebar-menu li:hover a svg {
    stroke: white; 
}

.translate-btn{
    display: flex;
    align-items: center;
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

header {
    width: calc(100% - 270px);
    position: fixed;
    top: 0;
    right: 0;
}

.header-container {
    grid-area: navbar;
    height: 100%;
    padding: 1rem 1.5rem;
    display: flex;
    gap: .5rem;
    align-items: center;
    position: relative;
    z-index: 1;
}

.notice{
    position: relative;
}

.notice-icon{
    width: 24px;
    height: 24px;
    margin-right: 20px;
    cursor: pointer;
    border-radius: 50%; 
    padding: 6px;
    background-color: transparent; 
    transition: background-color 0.3s ease, opacity 0.3s ease;
}

.notice-icon:hover {
    background-color: #2a2727; 
    opacity: 0.8;
}

/* .notice:hover .notice-txt {
    opacity: 1;
} */

.notice-grid-up h2{
    color: white;
    font-weight: bolder;
    font-size: 24px;
}

.notice-grid{
    display: grid;
    grid-template-columns: 352px;
    grid-template-rows: 64px 416px;
    position: absolute;
    top: 120%;
    left: 50%;
    transform: translateX(-70%);
    opacity: 0;
    height: 0;
    transition: opacity 0.3s ease, height 0.3s ease, transform 0.3s ease;
    z-index: 999;
}

#notice-jump:checked ~ .notice-grid{
    opacity: 1;
    height: 480px;
}

#notice-jump{
    display: none;
}

.notice-grid-up{
    grid-area: 1/1/2/2;
    background-color: #27272a;
    padding: 24px 16px 8px 16px;
    border-radius: 10px 10px 0px 0px;
}

.notice-grid-down {
    grid-area: 2/1/3/2;
    background-color: #1f1f22;    
    border-radius: 0px 0px 10px 10px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.notice-grid-down img{
    width: 240px;
    height: 240px;
    margin-bottom: 30px;
}

.notice-grid-down h2{
    font-size: 3rem;
    font-weight: 700;
    line-height: 1;
    color: #f4f4f5
}

.notice-grid-down p {
    color: rgb(161 161 170);
    font-size: 16px;
    text-align: center;
    margin-top: 10px;
    line-height: 20px;
}

.login-btn{
    display: flex;
    align-items: center;
}

.login-btn > p{
    color: white;
    font-size: 16px;
}

.login-btn:hover{
    background-color: #2a2727;
}

.background {
    height: calc(100vh - 1rem);
    width: calc(100% - .5rem);
    border-radius: 1rem;
    background-color: rgb(18, 18, 18);
    margin: 0.5rem 0.5rem 0.5rem 0;
}

.content-container {
    display: flex;
    flex-direction: column;
    grid-area: main-view;
    padding-top: 10px;
    border-radius: 1rem;
    overflow: hidden;
}

.content {
    overflow-y: scroll;
    scrollbar-width: none;
    /* overflow: hidden; */
}

.main-container {
    padding-top: 10px;
    box-sizing: border-box;
    min-height: 340px;
    position: relative;
    z-index: 1;
}

.title {
    display:inline;
    padding:1.5rem 0 .5rem;
    font-size: 25px;
    font-weight: 900;
    line-height: 1.75rem;
    color: #fff;
}

.subtitle {
    color: #D4D4D8;
    font-weight: 100;
    font-size: 15px;
}


.card-area {
        padding: 20px 0;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, minmax(198px, 1fr));
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
    }

    .card-user-p p {
        font-size: 18px;
        color:white
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
        font-size: 10px;
        color: rgb(170, 168, 168);
    }

    .card-name h2 {
        font-weight: 900;
        color:white
    }

    .card-name p {
        margin-top: 8px;
        font-size: 16px;
    }
    .footer{
        margin-right:8px;
        overflow: hidden;
    }

@media screen and (min-width: 1440px) {
    .card-area {
        grid-template-columns: repeat(5, minmax(198px, 1fr));
    }
}

@media screen and (width < 1200px) {
    body {
        background-color: #121212;
    }
    .root-container {
        display: grid;
        grid-template-areas:
            "navbar"
            "main-view";
        grid-template-columns: 1fr;
        grid-template-rows: 4rem 1fr;
        height: 100vh;
    }

    header {
        width: 100%;
        position: fixed;
        top: 0;
        right: 0;
    }

    .notice {
        display: none;
    }

    .login-btn {
        display: none;
    }

    .sidebar-container {
      width: 100%;
      max-height: 65.5px;
      position: fixed;
      bottom: 0;
      z-index: 999;
      display: unset;
      padding: 0;
    }
    
    .sidebar-container::before {
        content: "";
        position: absolute;
        z-index: -1;
        top: -32px;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(to top, #000, rgba(0, 0, 0, 0.9), transparent);
    }
    .sidebar-head {
      display: none;
    }

    .sidebar-menu {
      display: flex;
      width: 100%;
      margin: 0px;
      top: 2.5rem;
    }
  
    .sidebar-menu > li {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
    }

    .sidebar-menu > .md-menu {
        display: block;
    }

    .sidebar-menu li h2 {
      font-size: 9px;
    }
  
    .sidebar-menu a {
      width: 100%;
      height: 100%;
      flex-direction: column;
      gap: .25rem;
      justify-content: space-between;
      padding: 8px 12px 12px;
      box-sizing: border-box;
    }
  
    .translate-btn {
      display: none;
    }

    .translate-btn + p {
        display: none;
    }

    .background {
        display: none;
    }

    .content-container {
        border-radius: 0;
        scrollbar-width: none;
    }
    .card-area {
        grid-template-columns: repeat(3, minmax(198px, 1fr));
    }
    .footer{
        margin-right:0px;
    }

}
@media screen and (max-width: 768px) {
    .card-area {
            grid-template-columns: repeat(1, minmax(198px, 1fr));
        }
}


</style>