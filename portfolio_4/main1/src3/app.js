$(function() {
    let size = 20
    let rows = $('<div></div>')
    
    for (let i = 0; i < size; i++) {
      let row = $('<div class="row"></div>')
      
      for (let i = 0; i < size; i++) {
        let box = $('<div class="box"></div>')
  
        box.css('width', `${100 / size}%`)
        box.css('opacity', '0.05')
  
        box.on('mouseenter', function() {
          let $box = $(this)  
  
          let color = colors[Math.floor(Math.random() * colors.length)]
  
          $box.css('transition', 'none')
          $box.css('opacity', '1')
          $box.css('background', color)
        })
  
        box.on('mouseleave', function() {
          let $box = $(this)
          
          $box.css('transition', 'all 3s')
          $box.css('opacity', '0.05')
          $box.css('background', '#fff')
        })
  
        row.append(box)
      }
  
      rows.append(row)
    }
  
    $('.game').append(rows)
  })