/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Simultaneously compute the sine and cosine of an angle measured in degrees.
*
* @module @stdlib/math/base/special/sincosd
*
* @example
* var sincosd = require( '@stdlib/math/base/special/sincosd' );
*
* var v = sincosd( 0.0 );
* // returns [ ~0.0, ~1.0 ]
*
* v = sincosd( 90.0 );
* // returns [ ~1.0, ~0.0 ]
*
* v = sincosd( -30.0 );
* // returns [ ~-0.5, ~0.866 ]
*
* v = sincosd( NaN );
* // returns [ NaN, NaN ]
*
* @example
* var sincosd = require( '@stdlib/math/base/special/sincosd' );
*
* var out = new Float64Array( 2 );
*
* var v = sincosd.assign( 0.0, out, 1, 0 );
* // return <Float64Array>[ ~0.0, ~1.0 ]
*
* var bool = ( v === out );
* // returns true
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var assign = require( './assign.js' );


// MAIN //

setReadOnly( main, 'assign', assign );


// EXPORTS //

module.exports = main;
