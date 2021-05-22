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
* Round a complex number to the nearest integer.
*
* @module @stdlib/math/base/special/cround
*
* @example
* var cround = require( '@stdlib/math/base/special/cround' );
*
* var v = cround( -4.2, 5.5 );
* // returns [ -5.0, 6.0 ]
*
* v = cround( 9.99999, 0.1 );
* // returns [ 10.0, 0.0 ]
*
* v = cround( 0.0, 0.0 );
* // returns [ 0.0, 0.0 ]
*
* v = cround( NaN, NaN );
* // returns [ NaN, NaN ]
*
* @example
* var cround = require( '@stdlib/math/base/special/cround' );
*
* var out = new Array( 2 );
*
* var v = cround( out, -4.2, 5.5 );
* // returns [ -5.0, 6.0 ]
*
* var bool = ( v === out );
* // returns true
*/

// MODULES //

var cround = require( './main.js' );


// EXPORTS //

module.exports = cround;
