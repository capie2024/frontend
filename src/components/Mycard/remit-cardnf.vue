

<script setup>
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
        position: relative;
    }
    .input-text:focus-visible {
    border-color: transparent !important;
     outline: none;
}
    
    .input-button-2  {
        /* height: 24px;
        width: 24px;
        background-color: transparent;
        color: #e5e7eb;
        position: relative;
        bottom:35px;
        border-radius: 9999px;
        right: -150px; */
    }
    
    .icon-input {
        color: #e5e7eb;
        /* background-color: transparent;
        cursor:pointer;
        background-image: none;
        border: 0 solid #e5e7eb;
        width: 24px;
        position: absolute;
        stroke: currentcolor;
        bottom: -39px;
        right: 150px; */
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
        padding: 0.5rem 1rem 0 1rem;
    }
    .btn-close {
        flex: none;
        background-color: black;
        color: #e5e7eb;
        border-radius: 35px;
        gap: 0.5rem;
        height: 1.5rem;
        width: 1.5rem;
        
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
        
        gap: .5rem;
        box-sizing: content-box;
        padding: 0rem 1rem 0.5rem 1rem;
        align-items: center;
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
        border: 1px solid #a1a1aa;
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
        padding: 0.5rem;
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
        border-radius: .75rem;
        gap: 0.5rem ;
        align-items: center;
        margin: 8px;
        display: flex;
        border: 1px solid #a1a1aa;
        padding: 10px;
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
        margin-bottom: 8px;
    }
    
    .setting:hover {
        background-color: #27272a;
    }
    
    
    .item{
        align-items: center;
        border-radius: .75rem;
        /* display: flex; */
        gap: .5rem;
        /* padding: .5rem; */
        cursor: pointer;
        /* position: absolute; */
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
    
    