let run = async () => {
  let count = 0, btn = document.body.querySelectorAll(".dropdown-trigger"),
    timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms))
  
  for (let i = 0; i < btn.length; i++) {
    await timeout(50)
    btn.item(i).click()
    
    let list = document.body.getElementsByClassName('style-scope ytd-menu-service-item-renderer')
    
    for (let i = 0; i < list.length; i++) {
      if (list.item(i).textContent === 'Remove from Liked videos') {
        list.item(i).click()
        
        count++
        break
      }
    }
    
    await timeout(50)
  }
  
  console.log('Deleted:', count, 'items')
}

run()