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
                        <button   class="button-remit item z-20 ">
                        <svg data-v-41768621=""
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" aria-hidden="true" data-slot="icon" class="icon size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z">
                                </path>
                            </svg>
                            <span data-v-41768621="" class="text-sm font-mono">匯出牌組</span>
                        </button>
                       

                        <div data-v-41768621="" class="input-item-2 ">
                            <input data-v-41768621="" class="input-text" type="text" placeholder="代碼" v-model="deckId">
                            <button  class="input-button-2 item default-transition" @click="exportToPDF">
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

<script>
import jsPDF from "jspdf";


export default {
  data() {
    return {
      deckId: '', // 用來儲存用戶輸入的 Deck ID
    };
  },
    methods:{
  async exportToPDF() {
    
    if (!this.deckId) {
        alert("請輸入 Deck ID");
        return;
      }

    const fontResponse = await fetch("http://localhost:3000/api/font");
    if (!fontResponse.ok) {
      throw new Error("無法獲取字型資料");
    }

    const base64msyh = await fontResponse.text(); // 確保後端返回的是 text 格式

    if (!base64msyh) {
    throw new Error("字型 Base64 資料為空");
    }

    try {
      const response = await fetch(`http://localhost:3000/api/cardPDF?deckId=${this.deckId}`);
      
      if (!response.ok) {
        console.error("API 回應非 OK:", response.status, response.statusText);
        const errorData = await response.json();
        console.error("API 回應錯誤內容:", errorData);
        throw new Error(errorData.error || "未知的錯誤");
      }

      const { covers, deck_name } = await response.json();

      

      // 確認有取得 deck_name 和 covers
    if (!deck_name) {
      throw new Error("沒有找到 Deck 名稱");
    }

    if (!covers || covers.length === 0) {
      throw new Error("沒有找到任何 Deck Cover");
    }

      const pdf = new jsPDF();
      // 載入字型
      pdf.addFileToVFS("GenSenRounded2PJP-R.ttf", base64msyh );  //  Base64 字串
      pdf.addFont("GenSenRounded2PJP-R.ttf", "GenSenRounded2PJP-R", "normal");  // 設定字型
      pdf.setFont("GenSenRounded2PJP-R", "normal");  // 設定使用的字型


      pdf.text(deck_name, 10, 10);
        const pageWidth = 210; // A4 頁面寬度 (mm)
        const pageHeight = 297; // A4 頁面高度 (mm)
        const columns = 3; // 每行顯示 3 張圖片
        const rows = 3; // 每頁顯示 3 行圖片
        const marginX = 15; // 左右邊距
        const marginY = 25; // 上下邊距
        const maxImageWidth = (pageWidth - (columns + 1) * marginX) / columns; // 每張圖片的最大寬度
        const maxImageHeight = (pageHeight - (rows + 1) * marginY) / rows; // 每張圖片的最大高度

        let xPosition = marginX; // 初始 X 位置
        let yPosition = marginY + 5; // 初始 Y 位置，略下移以避免與標題重疊
        let imageCount = 0;

      // 使用 Promise.all 確保所有圖片都載入完成
      const imagePromises = covers.map((coverUrl, index) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = coverUrl;

          img.onload = () => {
          // 計算圖片的自適應大小
          const aspectRatio = img.width / img.height;
          let imageWidth = maxImageWidth;
          let imageHeight = maxImageHeight;

          // 根據寬高比縮放圖片
          if (img.width > img.height) {
            imageHeight = imageWidth / aspectRatio;
          } else {
            imageWidth = imageHeight * aspectRatio;
          }

          // 插入圖片到 PDF
          pdf.addImage(img, "JPEG", xPosition, yPosition, imageWidth, imageHeight);

          // 計算下一張圖片的位置
          imageCount++;
          xPosition += imageWidth + marginX;

          // 換行
          if (imageCount % columns === 0) {
            xPosition = marginX; // 重置 X 位置
            yPosition += imageHeight + marginY; // 換行
          }

          // 如果一頁滿了，則換頁
          if (imageCount % (columns * rows) === 0 && imageCount < covers.length) {
            pdf.addPage();
            xPosition = marginX;
            yPosition = marginY + 10;
          }

          resolve(); // 圖片載入完成
        };

          img.onerror = () => {
            reject(new Error(`圖片載入失敗: ${coverUrl}`));
          };
        });
      });

      // 等待所有圖片載入完畢
      await Promise.all(imagePromises);

     // 所有圖片載入完畢後才保存 PDF
      pdf.save(`${deck_name}_deck.pdf`);
    } catch (error) {
      console.error("匯出 PDF 時發生錯誤:", error.message);
      alert("匯出 PDF 時發生錯誤：" + error.message);
    }
  }
}
};
</script>




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
    .icon-input {
        color: #e5e7eb;
       
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
        gap: .5rem;
        cursor: pointer;
    }
    
    
    
    @media  (max-width:767px ) {
        .input-button { 
        gap: .5rem;
        box-sizing: content-box;
        
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
    
    