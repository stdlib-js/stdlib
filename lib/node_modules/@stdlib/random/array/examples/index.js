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

'use strict';

var ns = require( './../lib' );

// Generate arrays with ten random numbers drawn from the respective distributions:
var out = ns.arcsine( 10, 2.0, 5.0 );
console.log( out );
// => <Float64Array>

out = ns.weibull( 10, 2.0, 5.0 );
console.log( out );
// => <Float64Array>

out = ns.laplace( 10, 2.0, 5.0 );
console.log( out );
// => <Float64Array>

// Factory methods:

// 1. Basic factory usage (no parameters):
var random = ns.arcsine.factory();
out = random( 10, 2.0, 5.0 );
console.log( out );
// => <Float64Array>

// 2. Factory with options (e.g., seed):
random = ns.arcsine.factory({
	'seed': 1234
});
out = random( 10, 2.0, 5.0 );
console.log( out );
// => <Float64Array>

// 3. Factory with distribution parameters:
random = ns.arcsine.factory( 2.0, 5.0 );
out = random( 10 );
console.log( out );
// => <Float64Array>

// 4. Factory with both distribution parameters and options:
random = ns.arcsine.factory( 2.0, 5.0, {
	'dtype': 'float32'
});
out = random( 10 );
console.log( out );
// => <Float32Array>
