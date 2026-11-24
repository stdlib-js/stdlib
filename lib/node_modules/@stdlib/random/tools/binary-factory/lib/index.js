/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Create a function for generating pseudorandom values drawn from a binary PRNG.
*
* @module @stdlib/random/tools/binary-factory
*
* @example
* var dtypes = require( '@stdlib/ndarray/dtypes' );
* var uniform = require( '@stdlib/random/base/uniform' );
* var binaryFactory = require( '@stdlib/random/tools/binary-factory' );
*
* var idt = dtypes( 'real_and_generic' );
* var odt = dtypes( 'real_floating_point_and_generic' );
*
* var policies = {
*     'output': 'real_floating_point_and_generic'
* };
* var options = {
*     'order': 'row-major'
* };
*
* var factory = binaryFactory( uniform, [ idt, idt ], odt, policies, options );
*
* var rand = factory();
* // returns <Function>
*
* var v = rand( [ 2, 2 ], 0.0, 1.0 );
* // returns <ndarray>
*
* @example
* var dtypes = require( '@stdlib/ndarray/dtypes' );
* var ndzeros = require( '@stdlib/ndarray/zeros' );
* var uniform = require( '@stdlib/random/base/uniform' );
* var binaryFactory = require( '@stdlib/random/tools/binary-factory' );
*
* var idt = dtypes( 'real_and_generic' );
* var odt = dtypes( 'real_floating_point_and_generic' );
*
* var policies = {
*     'output': 'real_floating_point_and_generic'
* };
* var options = {
*     'order': 'row-major'
* };
*
* var factory = binaryFactory( uniform, [ idt, idt ], odt, policies, options );
*
* var rand = factory();
* // returns <Function>
*
* var out = ndzeros( [ 2, 2 ] );
* var v = rand.assign( 0.0, 1.0, out );
* // returns <ndarray>
*
* var bool = ( v === out );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
