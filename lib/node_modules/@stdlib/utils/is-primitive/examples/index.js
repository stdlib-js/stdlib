'use strict';

var isPrimitive = require( './../lib' );

console.log( isPrimitive( false ) );
// returns true

console.log( isPrimitive( 0 ) );
// returns true

console.log( isPrimitive( '' ) );
// returns true

console.log( isPrimitive( null ) );
// returns true

console.log( isPrimitive( undefined ) );
// returns true

console.log( isPrimitive( [] ) );
// returns false

console.log( isPrimitive( {} ) );
// returns false

console.log( isPrimitive( function(){} ) );
// returns false

console.log( isPrimitive( new Boolean() ) );
// returns false

console.log( isPrimitive( new String() ) );
// returns false

console.log( isPrimitive( new Array() ) );
// returns false

console.log( isPrimitive( new Object() ) );
// returns false
