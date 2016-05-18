angular.module('starter.services', [])


.factory("ws",function($http,$q){
  var paises = [
    {id:1,nombre:'México'},
    {id:2,nombre:'USA'},
    {id:3,nombre:'España'},
    {id:4,nombre:'Colombia'}];



  var estados =  [
    [{id:1,nombre:'Morelos',id_Pais:1},
    {id:2,nombre:'CDMX',id_Pais:1}],

    [{id:3,nombre:'New York',id_Pais:2},
    {id:4,nombre:'Portland',id_Pais:2}],

    [{id:5,nombre:'valencia',id_Pais:3},
    {id:6,nombre:'Madrid',id_Pais:3}],

    [{id:7,nombre:'Bogota',id_Pais:4},
    {id:8,nombre:'Cali',id_Pais:4}]];

  getPaises = function(){
    var diferido = $q.defer();
    setTimeout(function () {
      return diferido.resolve(paises);//respondio bien el servidor
    }, 2000);
    return diferido.promise;
  }
  getEstados = function(id){
    var diferido = $q.defer();
      if (id>=0 && id<=3 || id==null) {
        diferido.reject('Error!  No existe');
        return diferido.promise;
      }

      setTimeout(function () {
        return diferido.resolve(estados[id-1]);//respondio bien el servidor
      }, 1000);
      return diferido.promise;
  }

  return {
    getPaises:getPaises,getEstados:getEstados
  }
});
