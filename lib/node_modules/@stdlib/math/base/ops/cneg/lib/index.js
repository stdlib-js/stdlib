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
* Negate a complex number.
*
* @module @stdlib/math/base/ops/cneg
*
* @example
* var cneg = require( '@stdlib/math/base/ops/cneg' );
*
* var v = cneg( -4.2, 5.5 );
* // returns [ 4.2, -5.5 ]
*
* v = cneg( 0.0, 0.0 );
* // returns [ -0.0, -0.0 ]
*
* v = cneg( NaN, NaN );
* // returns [ NaN, NaN ]
*
* @example
* var cneg = require( '@stdlib/math/base/ops/cneg' );
*
* var out = new Array( 2 );
*
* var v = cneg( out, -4.2, 5.5 );
* // returns [ 4.2, -5.5 ]
*
* var bool = ( v === out );
* // returns true
*/

// MODULES //

var cneg = require( './main.js' );


// EXPORTS //

module.exports = cneg;
