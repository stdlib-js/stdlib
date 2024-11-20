/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Return a new array containing every element from an input array, except for the element at a specified index.
*
* @module @stdlib/array/base/without
*
* @example
* var without = require( '@stdlib/array/base/without' );
*
* var x = [ 1, 2, 3, 4 ];
*
* var v = without( x, 0 );
* // returns [ 2, 3, 4 ]
*
* v = without( x, -2 );
* // returns [ 1, 2, 4 ]
*
* @example
* var without = require( '@stdlib/array/base/without' );
*
* var x = [ 1, 2, 3, 4 ];
*
* var out = [ 0, 0, 0 ];
* var arr = without.assign( x, 0, out, 1, 0 );
* // returns [ 2, 3, 4 ]
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
