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
* Create a MultiSlice object from a comma-separated list of string-serialized MultiSlice constructor arguments.
*
* @module @stdlib/slice/base/sargs2multislice
*
* @example
* var sargs2multislice = require( '@stdlib/slice/base/sargs2multislice' );
*
* var s = sargs2multislice( ',Slice(0,10,1)' );
* // returns <MultiSlice>
*
* var data = s.data;
* // returns [ null, <Slice> ]
*
* @example
* var sargs2multislice = require( '@stdlib/slice/base/sargs2multislice' );
*
* var s = sargs2multislice( 'Slice(0,10,1),' );
* // returns <MultiSlice>
*
* var data = s.data;
* // returns [ <Slice>, null ]
*
* @example
* var sargs2multislice = require( '@stdlib/slice/base/sargs2multislice' );
*
* var s = sargs2multislice( 'Slice(0,10,1),,,Slice(0,10,1)' );
* // returns <MultiSlice>
*
* var data = s.data;
* // returns [ <Slice>, null, null, <Slice> ]
*
* @example
* var sargs2multislice = require( '@stdlib/slice/base/sargs2multislice' );
*
* var s = sargs2multislice( ',Slice(0,10,1),null,,Slice(2,9,2),null,' );
* // returns <MultiSlice>
*
* var data = s.data;
* // returns [ null, <Slice>, null, null, <Slice>, null, null ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
