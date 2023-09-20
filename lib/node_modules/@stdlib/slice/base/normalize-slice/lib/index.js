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
* Normalize a Slice object.
*
* @module @stdlib/slice/base/normalize-slice
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var normalizeSlice = require( '@stdlib/slice/base/normalize-slice' );
*
* var s = normalizeSlice( new Slice( -5, -1, 1 ), 10, false );
* // returns <Slice>
*
* var v = s.start;
* // returns 5
*
* v = s.stop;
* // returns 9
*
* v = s.step;
* // returns 1
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
