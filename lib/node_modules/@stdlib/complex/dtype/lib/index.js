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
* Return the data type of a complex number.
*
* @module @stdlib/complex/dtype
*
* @example
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var dtype = require( '@stdlib/complex/dtype' );
*
* var v = new Complex128( 1.0, 2.0 );
*
* var dt = dtype( v );
* // returns 'complex128'
*
* dt = dtype( {} );
* // returns null
*
* dt = dtype( 'beep' );
* // returns null
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
