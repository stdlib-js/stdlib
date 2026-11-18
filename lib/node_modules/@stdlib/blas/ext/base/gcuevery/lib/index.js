/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
* Cumulatively test whether every element in a strided array is truthy.
*
* @module @stdlib/blas/ext/base/gcuevery
*
* @example
* var gcuevery = require( '@stdlib/blas/ext/base/gcuevery' );
*
* var x = [ 1, 1, 0, 0 ];
* var out = [ false, false, false, false ];
*
* gcuevery( x.length, x, 1, out, 1 );
* // out => [ true, true, false, false ]
*
* @example
* var gcuevery = require( '@stdlib/blas/ext/base/gcuevery' );
*
* var x = [ 1, 1, 0, 0 ];
* var out = [ false, false, false, false ];
*
* gcuevery.ndarray( x.length, x, 1, 0, out, 1, 0 );
* // out => [ true, true, false, false ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;
