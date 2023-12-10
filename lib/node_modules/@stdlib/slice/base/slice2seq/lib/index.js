/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
* Convert a Slice object to a subsequence string.
*
* @module @stdlib/slice/base/slice2seq
*
* @example
* var slice2seq = require( '@stdlib/slice/base/slice2seq' );
*
* var str = slice2seq( new Slice( 2, 10, 2 ) );
* // returns '2:10:2'
*
* str = slice2seq( new Slice( -1, null, -1 ) );
* // returns '-1::-1'
*
* str = slice2seq( new Slice( -1, -5, -1 ) );
* // returns '-1:-5:-1'
*/

// MODULES //

var slice2seq = require( './main.js' );


// EXPORTS //

module.exports = slice2seq;
