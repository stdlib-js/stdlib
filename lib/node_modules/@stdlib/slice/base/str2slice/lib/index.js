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
* Parse a string-serialized Slice object.
*
* @module @stdlib/slice/base/str2slice
*
* @example
* var str2slice = require( '@stdlib/slice/base/str2slice' );
*
* var s = str2slice( 'Slice(null,null,null)' );
* // returns <Slice>
*
* var v = s.start;
* // returns null
*
* v = s.stop;
* // returns null
*
* v = s.step;
* // returns null
*
* @example
* var str2slice = require( '@stdlib/slice/base/str2slice' );
*
* var s = str2slice( 'Slice(0,10,1)' );
* // returns <Slice>
*
* var v = s.start;
* // returns 0
*
* v = s.stop;
* // returns 10
*
* v = s.step;
* // returns 1
*
* @example
* var str2slice = require( '@stdlib/slice/base/str2slice' );
*
* var s = str2slice( 'Slice(foo,bar)' );
* // returns null
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
