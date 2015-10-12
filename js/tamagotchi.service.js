angular
  .module('tamagotchi')
  .service('tamagotchiService', function( $interval ){

    var tamagotchi = {
      zustand    : 'normal',
      imageIndex : 0
    };

    var zustaende = {
      normal : {
        images : ['001_start/PNG/tama.png']
      },
      essend : {
        images : ['004_eat/PNG/eat_1.png', '004_eat/PNG/eat_2.png', '004_eat/PNG/eat_3.png']
      },
      schlafend : {
        images : ['005_sleep/PNG/sleep_1.png', '005_sleep/PNG/sleep_2.png']
      },
      spielend : {
        images : ['006_play/PNG/play_1.png', '006_play/PNG/play_2.png']
      }
    };

    tamagotchi.zustandAendern = function( zustand ){
      if ( zustand === tamagotchi.zustand ) {
        if ( zustaende[zustand].dann ) {
          tamagotchi.zustand = zustaende[zustand].dann;
        } else {
          tamagotchi.zustand = 'normal';
        }
      } else {
        tamagotchi.zustand = zustand;
      }
    };


    $interval(function(){

      tamagotchi.imageIndex++;

      if ( tamagotchi.imageIndex > zustaende[tamagotchi.zustand].images.length +1 ) tamagotchi.imageIndex = 0;

      tamagotchi.image = zustaende[tamagotchi.zustand].images[tamagotchi.imageIndex];

    }, 300);

    return tamagotchi;
  });