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

var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var filledarrayBy = require( '@stdlib/array/filled-by' );
var gswap = require( './../lib' );

var rand1 = discreteUniform( 0, 100 );
var x = filledarrayBy( 10, 'generic', rand1 );
console.log( x );

var rand2 = discreteUniform( 0, 10 );
var y = filledarrayBy( 10, 'generic', rand2 );
console.log( y );

gswap( x, y );
console.log( x );
console.log( y );
