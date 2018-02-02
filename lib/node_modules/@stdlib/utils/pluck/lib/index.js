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
* Extract a property value from each element of an object array.
*
* @module @stdlib/utils/pluck
*
* @example
* var pluck = require( '@stdlib/utils/pluck' );
*
* var arr = [
*     { 'a': 1, 'b': 2 },
*     { 'a': 0.5, 'b': 3 }
* ];
*
* var out = pluck( arr, 'a' );
* // returns [ 1, 0.5 ]
*
* arr = [
*     { 'a': 1, 'b': 2 },
*     { 'a': 0.5, 'b': 3 }
* ];
*
* out = pluck( arr, 'a', {'copy':false} );
* // returns [ 1, 0.5 ]
*
* var bool = ( arr[ 0 ] === out[ 0 ] );
* // returns true
*/

// MODULES //

var pluck = require( './pluck.js' );


// EXPORTS //

module.exports = pluck;
