/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
* Simultaneously compute the sine and cosine of a number times π.
*
* @module @stdlib/math/base/special/sincospi
*
* @example
* var sincospi = require( '@stdlib/math/base/special/sincospi' );
*
* var v = sincospi( 0.0 );
* // returns [ 0.0, 1.0 ]
*
* v = sincospi( 0.5 );
* // returns [ 1.0, 0.0 ]
*
* v = sincospi( 0.1 );
* // returns [ ~0.309, ~0.951 ]
*
* v = sincospi( NaN );
* // returns [ NaN, NaN ]
*
* @example
* var sincospi = require( '@stdlib/math/base/special/sincospi' );
*
* var out = new Float64Array( 2 );
*
* var v = sincospi( out, 0.0 );
* // returns <Float64Array>[ 0.0, 1.0 ]
*
* var bool = ( v === out );
* // returns true
*/

// MODULES //

var sincospi = require( './main.js' );


// EXPORTS //

module.exports = sincospi;
