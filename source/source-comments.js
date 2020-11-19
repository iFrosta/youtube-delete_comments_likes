let run = async () => {
  let count = 0, btn = document.body.querySelectorAll(".dropdown-trigger"),
    timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms))
  
  for (let i = 0; i < btn.length; i++) {
    await timeout(50)
    btn.item(i).click()
    
    let list = document.body.getElementsByClassName('style-scope ytd-menu-navigation-item-renderer')
    for (let i = 0; i < list.length; i++) {
      if (list.item(i).textContent === 'Delete') {
        
        list.item(i).click()
        await timeout(200)
        
        let popUp = document.body.getElementsByClassName('yt-button-renderer')
        
        for (let i = 0; i < popUp.length; i++) {
          if (popUp.item(i).textContent === 'Delete') {
            popUp.item(i).click()
            
            count++
            break
          }
        }
        break
      }
    }
    
    await timeout(50)
  }
  
  console.log('Deleted:', count, 'items')
}

run()