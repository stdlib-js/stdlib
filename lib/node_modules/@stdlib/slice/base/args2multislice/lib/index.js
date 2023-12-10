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
* Create a MultiSlice object from a list of MultiSlice constructor arguments.
*
* @module @stdlib/slice/base/args2multislice
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var args2multislice = require( '@stdlib/slice/base/args2multislice' );
*
* var s = args2multislice( [ void 0, new Slice( 0, 10, 1 ) ] );
* // returns <MultiSlice>
*
* var data = s.data;
* // returns [ null, <Slice> ]
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var args2multislice = require( '@stdlib/slice/base/args2multislice' );
*
* var s = args2multislice( [ new Slice( 0, 10, 1 ), void 0 ] );
* // returns <MultiSlice>
*
* var data = s.data;
* // returns [ <Slice>, null ]
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var args2multislice = require( '@stdlib/slice/base/args2multislice' );
*
* var s = args2multislice( [ new Slice( 0, 10, 1 ), void 0, void 0, new Slice( 0, 10, 1 ) ] );
* // returns <MultiSlice>
*
* var data = s.data;
* // returns [ <Slice>, null, null, <Slice> ]
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var args2multislice = require( '@stdlib/slice/base/args2multislice' );
*
* var s = args2multislice( [ void 0, new Slice( 0, 10, 1 ), null,  void 0, new Slice( 2, 9, 2 ), null, void 0 ] );
* // returns <MultiSlice>
*
* var data = s.data;
* // returns [ null, <Slice>, null, null, <Slice>, null, null ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
