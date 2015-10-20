angular
  .module('tamagotchi')
  .service('tamagotchiService', function( $interval, $timeout ){

    var tamagotchi = {
      zustand    : 'normal',
      hungrig    : 0,
      muede      : 0,
      langweilig : 0,
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
      },

      hungrig : {
        images : ['007_hungry/PNG/hungry.png']
      },
      muede : {
        images : ['008_tired/PNG/tired.png']
      },
      langweilig : {
        images : ['009_bored/PNG/bored.png']
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


    tamagotchi.start = function(){

      $interval(function(){
        if ( 'schlafend' === tamagotchi.zustand ) {
          tamagotchi.muede = Math.min( 0, tamagotchi.muede -2 );
        } else if ( 'normal' === tamagotchi.zustand ) {
          tamagotchi.muede++;
        }

        if ( tamagotchi.muede > 10 && ('normal' == tamagotchi.zustand) ) {
          tamagotchi.muede = 10;
          tamagotchi.zustand = 'muede';
        }
      }, 1000);

      $interval(function(){
        if ( 'essend' === tamagotchi.zustand ) {
          tamagotchi.hungrig = Math.min( 0, tamagotchi.hungrig -2 );
        } else if ( 'normal' === tamagotchi.zustand ) {
          tamagotchi.hungrig++;
        }

        if ( tamagotchi.hungrig > 10 && ('normal' == tamagotchi.zustand) ) {
          tamagotchi.hungrig = 10;
          tamagotchi.zustand = 'hungrig';
        }
      }, 2000);

      $interval(function(){
        if ( 'spielend' === tamagotchi.zustand ) {
          tamagotchi.langweilig = Math.min( 0, tamagotchi.langweilig -2 );
        } else if ( 'normal' === tamagotchi.zustand ) {
          tamagotchi.langweilig++;
        }

        if ( tamagotchi.langweilig > 10 && ('normal' == tamagotchi.zustand) ) {
          tamagotchi.langweilig = 10;
          tamagotchi.zustand = 'langweilig';
        }
      }, 3000);

    };


    $interval(function(){

      tamagotchi.imageIndex++;

      if ( tamagotchi.imageIndex > zustaende[tamagotchi.zustand].images.length +1 ) tamagotchi.imageIndex = 0;

      tamagotchi.image = zustaende[tamagotchi.zustand].images[tamagotchi.imageIndex];

    }, 300);

    return tamagotchi;
  });
