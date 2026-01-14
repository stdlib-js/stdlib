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
* Take elements from either one of two arrays depending on a condition.
*
* @module @stdlib/array/base/where
*
* @example
* var where = require( '@stdlib/array/base/where' );
*
* var x = [ 1, 2, 3, 4 ];
* var y = [ 5, 6, 7, 8 ];
*
* var condition = [ true, false, true, false ];
*
* var z = where( condition, x, y );
* // returns [ 1, 6, 3, 8 ]
*
* @example
* var where = require( '@stdlib/array/base/where' );
*
* var x = [ 1, 2, 3, 4 ];
* var y = [ 5, 6, 7, 8 ];
*
* var out = [ 0, 0, 0, 0 ];
* var condition = [ true, false, true, false ];
*
* var arr = where.assign( condition, x, y, out, 1, 0 );
* // returns [ 1, 6, 3, 8 ]
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
