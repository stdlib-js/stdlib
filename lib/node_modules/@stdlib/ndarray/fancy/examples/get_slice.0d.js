/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

/* eslint-disable new-cap */

'use strict';

var E = require( '@stdlib/slice/multi' );
var FancyArray = require( './../lib' );

var buffer = [ 6 ];
var shape = [];
var strides = [ 0 ];
var offset = 0;

var x = new FancyArray( 'generic', buffer, shape, strides, offset, 'row-major' );
// returns <FancyArray>

// Access an ndarray property:
var ndims = x.ndims;
console.log( 'ndims: %d', ndims );
// => 'ndims: 0'

// Retrieve an ndarray element:
var v = x.get();
console.log( 'x[] = %d', v );
// => 'x[] = 6'

// Set an ndarray element:
x.set( 10 );
console.log( 'x[] = %d', x.get() );
// => 'x[] = 10'

// Use an empty multi-slice to create a separate array view:
var y1 = x[ E() ];
console.log( y1.get() );
// => 10

// Use alternative syntax:
var y2 = x[ [] ];
console.log( y2.get() );
// => 10

// Use alternative syntax:
var y3 = x[ '' ];
console.log( y3.get() );
// => 10

// Use alternative syntax:
var y4 = x[ '...' ];
console.log( y4.get() );
// => 10
