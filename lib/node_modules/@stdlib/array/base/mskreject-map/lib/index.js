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
* Apply a mask to a provided input array and map the unmasked values according to a callback function.
*
* @module @stdlib/array/base/mskreject-map
*
* @example
* var mskrejectMap = require( '@stdlib/array/base/mskreject-map' );
*
* var x = [ 1, 2, 3, 4 ];
* var mask = [ 0, 1, 0, 1 ];
*
* var y = mskrejectMap( x, mask, function( val ) {
*     return val * 2;
* } );
* // returns [ 2, 6 ]
*
* @example
* var mskrejectMap = require( '@stdlib/array/base/mskreject-map' );
*
* var x = [ 1, 2, 3, 4 ];
* var mask = [ 0, 1, 0, 1 ];
*
* var out = [ 0, 0 ];
* var arr = mskrejectMap.assign( x, mask, out, 1, 0, function( val ) {
*     return val + this;
* }, 5 );
* // returns [ 6, 8 ]
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
