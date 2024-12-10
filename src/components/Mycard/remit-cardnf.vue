

<script setup>
// import { ref } from "vue";

// const isSecondButtonVisible = ref(true);
// const toggleButtons = () => {
//   isSecondButtonVisible.value = !isSecondButtonVisible.value;
// };



</script>


<template>
    <section  class="modal fade" id="remit" tabindex="-1" aria-labelledby="remitLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    
                    <div class="modal-header">
                        <h2 class="modal-title topic" id="remitLabel">匯出牌組</h2>
                            <button type="button"  class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <svg data-v-502f6c5f="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-6 w-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                    </div>
                    
                    <div class="modal-body">
                        <h3 data-v-41768621="" class="topic my-4"> 選擇牌組
                            <span data-v-41768621="" class="subtitle">選擇你的牌組來源</span>
                        </h3>
                    </div>
                    <div class="input-button  ">
                        <button   class="button-remit item z-20 "><svg data-v-41768621=""
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" aria-hidden="true" data-slot="icon" class="icon size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z">
                                </path>
                            </svg>
                            <span data-v-41768621="" class="text-sm font-mono">匯出牌組</span>
                        </button>
                        <!-- <div data-v-41768621="" class="relative  z-20  max-h-[50vh] md:max-h-[20rem] overflow-y-auto flex flex-col rounded-md bg-zinc-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none max-w-[80vw] md:max-w-[20rem] w-max" style="margin-top: 48px; left: 0px; top: 0px;">
                            <a class="text-sm cursor-pointer flex items-center gap-2 py-2 px-4 text-zinc-300 hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-5 flex-none">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"></path>
                                </svg><span>{{ isSecondButtonVisible}}匯出牌組</span>
                            </a>
                            <a class=" text-sm cursor-pointer flex items-center gap-2 py-2 px-4 text-zinc-300 hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-5 flex-none">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25">

                                        </path>
                                    </svg><span>{{ isSecondButtonVisible}}匯出文章</span>
                                </a>
                            </div> -->

                        <div data-v-41768621="" class="input-item-2 ">
                            <input data-v-41768621="" class="input-text" type="text" placeholder="代碼">
                            <button  class="input-button-2 item default-transition">
                                <svg data-v-41768621="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="icon-input size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5">
                                    </path>
                                </svg>
                            </button>
                        </div>
                <div data-v-41768621="" class="show-text-red">
                            <div data-v-41768621="" class="">
                                <svg data-v-41768621="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
                                </svg>
                            </div>
                            <span data-v-41768621="" class="">無效代碼</span>
                </div>
            </div>
        </div> 
    </div>      
                    
    </section>
    </template>
    
    <style scoped>
    @import '@/assets/base.css';
    
    *, :after, :before {
        border: 0 solid #e5e7eb;
        box-sizing: border-box;
    }
    
    .modal  {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        overflow-y: 0;
        overflow-x:hidden ;
        place-content:center;
        display: grid;
    }
    
    .modal-content {
        background-color: rgb(18,18,18);
    }
    
    .modal-title {
        color: white;
        font-size: 16px;
        width: 100%;
        
    }
    
    .input-text {
        align-items: center;
        border-radius: .75rem;
        display: flex;
        gap: .5rem;
        padding-left: 5px;
        height: 40px;
        background-color:transparent;
        color: #e5e7eb;
        border-style: none;
    }
    
    .input-button-2  {
        height: 24px;
        width: 24px;
        background-color: transparent;
        color: #e5e7eb;
        position: relative;
        bottom:35px;
        border-radius: 9999px;
        right: -150px;
    }
    
    .icon-input {
        color: #e5e7eb;
        background-color: transparent;
        cursor:pointer;
        background-image: none;
        border: 0 solid #e5e7eb;
        width: 24px;
        position: absolute;
        stroke: currentcolor;
        top: 1px;
        right: 2px;
    }

    .default-transition {
        transition-duration: .3s;
        transition-property: all;
        transition-timing-function: cubic-bezier(.4,0,.2,1);
    }
    
    .text-sm {
        font-size: .875rem; 
        line-height: 1.25rem;
    }
    
    .div[aria-hidden="true"] {
    display: none !important;
    }
    
    .modal-header {
        display: flex;
        padding: 1rem;
    }
    
    .modal-body {
        padding: 1rem;
    }
    .btn-close {
        flex: none;
        background-color: black;
        color: #e5e7eb;
        border-radius: 35px;
        gap: 0.5rem;
        height: 1.5rem;
        width: 1.5rem;
        padding: 0.25rem;
        border: 0 solid #e5e7eb;
        box-sizing: border-box;
        
    }
    
    .icon {
        color:#e5e7eb;
        width: 24px;
    }
    
    .btn-close:hover {
        background-color: #e5e7eb;
        color: black; 
    }
    
    .my-4 {
        display:grid;
        word-break: break-all;
        margin-top: 0;
    }
    
    
    .topic {
        --tw-text-opacity: 1;
        color: rgb(228 228 231 / var(--tw-text-opacity));
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 1.75rem;
        
    }
    
    .subtitle {
        color: #a1a1aa;
        font-size: 14px;
    }
    
    .input-button {
        display: flex;
        align-items: flex-start;
        gap: .5rem;
        box-sizing: content-box;
        padding: 1rem;
    }
    
    .input-item button svg {
        width: 20px;
        height: 20px;
        color: #111111; 
    }
    
    .button-remit:not(:focus) {
        align-items: center;
        border-radius:20px;
        display: flex;
        gap: .5rem;
        padding: .5rem;
        white-space:nowrap;
        width: 142px;
        height: 64px;
        color: rgb(255, 255, 255);
        background-color: #18181b80;
        align-items: center;
    }
    
    .button-remit:focus {
        background:linear-gradient(to right,#3b82f6 ,#06b6d4);
        --tw-gradient-from: #3b82f6 var(--tw-gradient-from-position);
        color: rgb(255 255 255 / var(--tw-text-opacity));
        --tw-shadow-color: rgba(14, 165, 233, .5);
        /* --tw-shadow: var(--tw-shadow-colored); */
        color: white;
        width: 142px;
        height: 64px;
        display: flex;
        align-items: center;
        border-radius: 20px;
        white-space:nowrap;
        gap: .5rem;
    }


    .button-remit-div {
        align-items: center;
        border-radius:20px;
        display: flex;
        gap: .5rem;
        padding: .5rem;
        white-space:nowrap;
        height: 64px;
        color: rgb(255, 255, 255);
        background-color: #18181b80;
        align-items: center;
    }

    .button-remit-div:focus {
        background:linear-gradient(to right,#3b82f6 ,#06b6d4);
        --tw-gradient-from: #3b82f6 var(--tw-gradient-from-position);
        color: rgb(255 255 255 / var(--tw-text-opacity));
        --tw-shadow-color: rgba(14, 165, 233, .5);
        /* --tw-shadow: var(--tw-shadow-colored); */
        color: white;
        height: 64px;
        display: flex;
        align-items: center;
        border-radius: 20px;
        white-space:nowrap;
        gap: .5rem;
    }
    
    .input-item-2 {
        align-items: center;
        border-radius: .75rem;
        gap: 0.5rem ;
        align-items: center;
        margin: 8px;
        
    }
    
    .show-text-green {
        display: flex;
        color:#20b055;
        align-items: center;
    }
    
    .show-text-green svg {
        width: 28px;
        background-color: #402f2f;
        border-radius: 99px;
        padding: 4px;
        margin: 5px;
    }
    
    .show-text-red {
        display: flex;
        color:#ef4444;
        align-items: center;
    }
    
    .show-text-red svg {
        width: 28px;
        background-color: #402f2f;
        border-radius: 99px;
        padding: 4px;
        margin: 5px;
    }
    
    .seeting {
        display: flex;
        justify-content: center;  
        
    }
    
    .setting-text {
        display: flex;
        justify-content: center;
        border-radius: 12px;
        width: 320px;
        margin-bottom: 8px;
    }
    
    .setting:hover {
        background-color: #27272a;
    }
    
    
    .item{
        align-items: center;
        border-radius: .75rem;
        display: flex;
        gap: .5rem;
        padding: .5rem;
        border: 1px solid #27272a;
        background-color: #151516;
        cursor: pointer;
        
    }
    
    
    
    @media  (max-width:767px ) {
        .input-button { 
        display: grid;
        align-items: flex-start;
        gap: .5rem;
        box-sizing: content-box;
        padding: 1rem;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        .modal-dialog {
            height: 100%;
            width: 100%;
        }

        .button-remit-div {
            width: 100%;
        }
    }
    
    </style>
    
    <script>
    
    </script>
    
    