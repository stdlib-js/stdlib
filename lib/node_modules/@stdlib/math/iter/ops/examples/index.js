/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var array2iterator = require( '@stdlib/array/to-iterator' );
var ns = require( './../lib' );

// Demonstrate operations with two iterators:
var arr1 = [ 2.0, 3.0 ];
var arr2 = [ 1.0, 4.0 ];
var itAdd = ns.iterAdd( array2iterator( arr1 ), array2iterator( arr2 ) );
var itDiv = ns.iterDivide( array2iterator( arr1 ), array2iterator( arr2 ) );
var itMul = ns.iterMultiply( array2iterator( arr1 ), array2iterator( arr2 ) );
var itSub = ns.iterSubtract( array2iterator( arr1 ), array2iterator( arr2 ) );

// Addition: 2+1=3, 3+4=7
console.log( itAdd.next().value );
// => 3.0
console.log( itAdd.next().value );
// => 7.0

// Division: 2/1=2, 3/4=0.75
console.log( itDiv.next().value );
// => 2.0
console.log( itDiv.next().value );
// => 0.75

// Multiplication: 2*1=2, 3*4=12
console.log( itMul.next().value );
// => 2.0
console.log( itMul.next().value );
// => 12.0

// Subtraction: 2-1=1, 3-4=-1
console.log( itSub.next().value );
// => 1.0
console.log( itSub.next().value );
// => -1.0

// Demonstrate broadcasting:
var itAdd3 = ns.iterAdd( array2iterator( [ 1.0, 2.0 ] ), 3.0 );

console.log( itAdd3.next().value );
// => 4.0
console.log( itAdd3.next().value );
// => 5.0
