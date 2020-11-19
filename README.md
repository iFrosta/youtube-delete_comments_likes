# Youtube Automation
Mady by @ifrosta [GitHub](https://github.com/iFrosta) [Website](https://ifrosta.com)

## Instruction:
1. Open www.youtube.com/feed/history/comment_history - for comments, www.youtube.com/playlist?list=LL - for likes
2. Scroll down to load more comments
2. Open browser console
3. Paste the code below
4. Wait for the code to execute
5. All done 😉

## Delete comments
```javascript
let run=async()=>{let a=0,b=document.body.querySelectorAll(".dropdown-trigger"),c=a=>new Promise(b=>setTimeout(b,a));for(let d=0;d<b.length;d++){await c(50),b.item(d).click();let e=document.body.getElementsByClassName("style-scope ytd-menu-navigation-item-renderer");for(let b=0;b<e.length;b++)if("Delete"===e.item(b).textContent){e.item(b).click(),await c(200);let d=document.body.getElementsByClassName("yt-button-renderer");for(let b=0;b<d.length;b++)if("Delete"===d.item(b).textContent){d.item(b).click(),a++;break}break}await c(50)}console.log("Deleted:",a,"items")};run();
```

## Delete likes
```javascript
let run=async()=>{let a=0,b=document.body.querySelectorAll(".dropdown-trigger"),c=a=>new Promise(b=>setTimeout(b,a));for(let d=0;d<b.length;d++){await c(50),b.item(d).click();let e=document.body.getElementsByClassName("style-scope ytd-menu-service-item-renderer");for(let b=0;b<e.length;b++)if("Remove from Liked videos"===e.item(b).textContent){e.item(b).click(),a++;break}await c(50)}console.log("Deleted:",a,"items")};run();
```

2020