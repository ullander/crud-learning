let update = document.getElementById('update')
let del = document.getElementById('delete')

update.addEventListener('click', () => {
  fetch('quotes', {
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'name': 'Admin',
      'quote': 'I find your post a bit disturbing.'
    })
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(data => {
    console.log(data)
  })
})

del.addEventListener('click', () => {
  fetch('quotes', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'name': 'Admin'
    })
  }).then(function (response) {
    window.location.reload()
  })
})