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
* Take elements from an array.
*
* @module @stdlib/array/base/take
*
* @example
* var take = require( '@stdlib/array/base/take' );
*
* var x = [ 1, 2, 3, 4 ];
*
* var indices = [ 0, 0, 1, 1, 3, 3 ];
* var y = take( x, indices, 'throw' );
* // returns [ 1, 1, 2, 2, 4, 4 ]
*
* @example
* var take = require( '@stdlib/array/base/take' );
*
* var x = [ 1, 2, 3, 4 ];
*
* var out = [ 0, 0, 0, 0, 0, 0 ];
* var indices = [ 0, 0, 1, 1, 3, 3 ];
*
* var arr = take.assign( x, indices, 'throw', out, 1, 0 );
* // returns [ 1, 1, 2, 2, 4, 4 ]
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
