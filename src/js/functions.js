function getAllTaches() {
  app.request.json('http://127.0.0.1/ToDoListAPI/API/getAllTache.php',function(data){
    var i = 0;
    var lh = data.length;
    var dataTache = "";
    for (i = 0;i<lh;i++){
      dataTache += "<tr>"
      +"<td>"+(i+1)+"</td>"
      +"<td>"+data[i].libelle+"</td>"
      +"<td>"+data[i].etat+"</td>"
      +"<td>"+data[i].idTypeTache+"</td>"
      +"</tr>";
    }

    $$('#listeTache').append($(dataTache));

    console.log(dataTache);
  })
}
