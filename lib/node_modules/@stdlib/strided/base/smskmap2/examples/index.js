/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var bernoulli = require( '@stdlib/random/base/bernoulli' ).factory;
var Float32Array = require( '@stdlib/array/float32' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var addf = require( '@stdlib/number/float32/base/add' );
var smskmap2 = require( './../lib' );

var x = filledarrayBy( 10, 'float32', discreteUniform( -100, 100 ) );
console.log( x );

var y = filledarrayBy( x.length, 'float32', discreteUniform( -100, 100 ) );
console.log( y );

var m = filledarrayBy( x.length, 'uint8', bernoulli( 0.2 ) );
console.log( m );

var z = new Float32Array( x.length );
console.log( z );

smskmap2.ndarray( x.length, x, 1, 0, y, -1, y.length-1, m, 1, 0, z, 1, 0, addf ); // eslint-disable-line max-len
console.log( z );
