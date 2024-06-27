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
* Wrap a function and casts a function's return value to a complex number.
*
* @module @stdlib/complex/base/cast-return
*
* @example
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var addf = require( '@stdlib/math/base/ops/addf' );
* var realf = require( '@stdlib/complex/realf' );
* var imagf = require( '@stdlib/complex/imagf' );
* var castReturn = require( '@stdlib/complex/base/cast-return' );
*
* var f = castReturn( addf, 2, Complex64 );
*
* // ...
*
* var z = f( 3.0, 4.0 );
* // returns <Complex64>
*
* var re = realf( z );
* // returns 7.0
*
* var im = imagf( z );
* // returns 0.0
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
