const fetchData = db.ref('Submissions/');
fetchData.on('child_added', function (snapshot){
    const data = snapshot.val();
    const print = `<div class="card" style="width: 18rem; margin: 1rem;">
    <div class="card-body">
      <h5 class="card-title">${data.Name}</h5>
      <p class="card-text">${data.Email}</p>
      <a href="mailto:${data.Email}" class="btn btn-primary">Send Mail</a>
    </div>
  </div>`
  document.getElementById('datas').innerHTML += print
})