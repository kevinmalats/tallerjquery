var json= '[ { "Name" : "Alfreds Futterkiste", "City" : "Berlin", "Country" : "Germany" }, { "Name" : "Berglunds snabbköp", "City" : "Luleå", "Country" : "Sweden" }, { "Name" : "Centro comercial Moctezuma", "City" : "México D.F.", "Country" : "Mexico" }, { "Name" : "Ernst Handel", "City" : "Graz", "Country" : "Austria" }, { "Name" : "FISSA Fabrica Inter. Salchichas S.A.", "City" : "Madrid", "Country" : "Spain" }, { "Name" : "Galería del gastrónomo", "City" : "Barcelona", "Country" : "Spain" }, { "Name" : "Island Trading", "City" : "Cowes", "Country" : "UK" }, { "Name" : "Königlich Essen", "City" : "Brandenburg", "Country" : "Germany" }, { "Name" : "Laughing Bacchus Wine Cellars", "City" : "Vancouver", "Country" : "Canada" }, { "Name" : "Magazzini Alimentari Riuniti", "City" : "Bergamo", "Country" : "Italy" }, { "Name" : "North/South", "City" : "London", "Country" : "UK" }, { "Name" : "Paris spécialités", "City" : "Paris", "Country" : "France" }, { "Name" : "Rattlesnake Canyon Grocery", "City" : "Albuquerque", "Country" : "USA" }, { "Name" : "Simons bistro", "City" : "København", "Country" : "Denmark" }, { "Name" : "The Big Cheese", "City" : "Portland", "Country" : "USA" }, { "Name" : "Vaffeljernet", "City" : "Århus", "Country" : "Denmark" }, { "Name" : "Wolski Zajazd", "City" : "Warszawa", "Country" : "Poland" } ]';

var listado = JSON.parse(json,"UTF8");
var cont= $('#case');
//$("#case").hide(1500);
cont.append( "<td id='nombre'>Nombre </td>" );
cont.append( "<td id='ciudad'>Ciudad </td>" );
cont.append( "<td id='pais'>Pais </td>" );
for (var ele in listado){
  cont.append( "<tr>" );
//var cont= document.getElementById("case");
cont.append( "<td>"+listado[ele].Name+"</td>" );
cont.append( "<td>"+listado[ele].City+"</td>" );
cont.append( "<td>"+listado[ele].Country+"</td>" );


}
function mostrarNombres(){
var nombres=[];
  for (var ele in listado){
  //var cont= document.getElementById("case");
  nombres.push(listado[ele].Name);



  }
  return nombres;

}
function mostrarCiudad(){
var nombres=[];
  for (var ele in listado){
  //var cont= document.getElementById("case");
  nombres.push(listado[ele].City);



  }
  return nombres;

}
function mostrarPais(){
var nombres=[];
  for (var ele in listado){
  //var cont= document.getElementById("case");
  nombres.push(listado[ele].Country);



  }
  return nombres;

}
$('#nombre').on('click', function(evt){
    alert(mostrarNombres());
});
$('#ciudad').on('click', function(evt){
alert(mostrarCiudad());
});
$('#pais').on('click', function(evt){
     alert(mostrarPais());
});
