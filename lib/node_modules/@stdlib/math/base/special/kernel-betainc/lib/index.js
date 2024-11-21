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
* Evaluate the incomplete beta function and its first derivative.
*
* @module @stdlib/math/base/special/kernel-betainc
*
* @example
* var kernelBetainc = require( '@stdlib/math/base/special/kernel-betainc' );
*
* var out = kernelBetainc( 0.5, 2.0, 2.0, false, false );
* // returns [ ~0.083, ~1.5 ]
*
* out = kernelBetainc( 0.2, 1.0, 2.0, true, false );
* // returns [ 0.36, 1.6 ]
*
* @example
* var kernelBetainc = require( '@stdlib/math/base/special/kernel-betainc' );
*
* var arr = [ 0.0, 0.0 ];
* var out = kernelBetainc.assign( 0.2, 1.0, 2.0, true, true, arr, 1, 0 );
* // returns [ 0.64, 1.6 ]
*
* var bool = ( arr === out );
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
