<template>
    <section class="container ">
        <button type="button" class="close">
            X
        </button>
        <div class="round" style="display: flex;">
            <div class="round-text">!</div>
        </div>
        <h2 class="title">刪除牌組</h2>
        <div class="text">
            確定要刪除牌組嗎？ 
        </div>
        <div class="btn-item">
        <button class="ok-btn">OK</button>
        <button class="out-btn">Cancel</button>
        </div>
    </section>
</template>


<style>

.container {
    display: grid;
    border-radius: .5rem;
    background-color:#27272a;
    width: 512px;
}
.close {
    background: transparent;
    border: none;
    border-radius: 5px;
    color: #ccc;
    cursor: pointer;
    font-family: monospace;
    font-size: 2.5em;
    height: 1.2em;
    justify-self: end;
    margin-bottom: -1.2em;
    margin-right: 0;
    margin-top: 0;
    overflow: hidden;
    padding: 0;
    transition: color .1s, box-shadow .1s;
    width: 1.2em;
    z-index: 2;
}

.round {
    border: .25rem solid #facea8;
    border-radius: 50%;
    box-sizing: border-box;
    cursor: default;
    font-family: inherit;
    height: 5em;
    width: 5em;
    justify-content: center;
    line-height: 5rem;
    margin: 2.5em auto .6em;
    position: relative;
}

.round-text {
    border-color: #facea8;
    color: #f8bb86;
    font-size: 60px;
    display: flex;
}

.title {
    color: #e1e1e1;;
    font-size: 1.875rem;
    font-weight: 600;
    margin: 0;
    max-width: 100%;
    padding: .8em 1em 0;
    position: relative;
    text-align: center;
    text-transform: none;
    word-wrap: break-word;
}

.text {
    color: #e1e1e1;
    font-weight: 400;
    justify-content: center;
    margin: 1em 1.6em .3em;
    overflow: auto;
    padding: 0;
    text-align: center;
    word-break: break-word;
}

.btn-item {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 1.25em auto 0;
    padding: 0;
    width: auto;
    z-index: 1;
    padding-bottom: 1.25em;
}

.ok-btn {
    background-color: #7066e0;
    color: #e1e1e1;
    border-radius: .25em;
    border: 0;
    cursor: pointer;
    font-size: 1em;
    padding: 10px;
    margin: 5px;
}

.out-btn {
    color: #e1e1e1;
    background-color: #6e7881;
    border-radius: .25em;
    border: 0;
    cursor: pointer;
    font-size: 1em;
    padding: 10px;
    margin: 5px;
}

@media screen and (max-width:768px) {
    .container {
    display: grid;
    width: 100vw;
    position:absolute;
    top: 50%;  
    left: 50%;
    transform: translate(-50%, -50%);
    }
}
</style>