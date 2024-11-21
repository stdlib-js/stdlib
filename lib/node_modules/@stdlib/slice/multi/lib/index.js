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
* Multi-slice constructor.
*
* @module @stdlib/slice/multi
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var MultiSlice = require( '@stdlib/slice/multi' );
*
* var s1 = new Slice( 0, 10, 1 );
* var s2 = new Slice( 2, 12, 2 );
*
* var ms = new MultiSlice( null, s1, s2, 2 );
* // returns <MultiSlice>
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
