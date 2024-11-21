/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

/**
* Create a strided array function interface which accepts a callback function and performs multiple dispatch.
*
* @module @stdlib/strided/dispatch-by
*
* @example
* var dispatchBy = require( '@stdlib/strided/dispatch-by' );
* var unaryBy = require( '@stdlib/strided/base/unary-by' );
* var abs = require( '@stdlib/math/base/special/abs' );
* var identity = require( '@stdlib/math/base/special/identity' );
* var Float64Array = require( '@stdlib/array/float64' );
*
* var types = [
*     'float64', 'float64'
* ];
*
* var data = [
*     abs
* ];
*
* var strided = dispatchBy( unaryBy, types, data, 8, 1, 1, identity );
*
* // ...
*
* var x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );
* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* strided( x.length, 'float64', x, 1, 'float64', y, 1, identity );
* // y => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
