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
* Compute the absolute value and the phase of a complex number.
*
* @module @stdlib/math/base/special/cpolar
*
* @example
* var cpolar = require( '@stdlib/math/base/special/cpolar' );
*
* var o = cpolar( 5.0, 3.0 );
* // returns [ ~5.83, ~0.5404 ]
*
* @example
* var cpolar = require( '@stdlib/math/base/special/cpolar' );
*
* var out = new Array( 2 );
*
* var o = cpolar( out, 5.0, 3.0 );
* // returns [ ~5.83, ~0.5404 ]
*
* var bool = ( o === out );
* // returns true
*/

// MODULES //

var cpolar = require( './main.js' );


// EXPORTS //

module.exports = cpolar;
