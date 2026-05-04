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
* Return a constructor for creating arrays having a fixed-width composite data type.
*
* @module @stdlib/array/struct-factory
*
* @example
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var structFactory = require( '@stdlib/dstructs/struct' );
* var factory = require( '@stdlib/array/struct-factory' );
*
* var schema1 = [
*     {
*         'name': 're',
*         'type': 'float64'
*     },
*     {
*         'name': 'im',
*         'type': 'float64'
*     }
* ];
*
* // Create a struct constructor for storing real and imaginary components:
* var Components = structFactory( schema1 );
*
* var schema2 = [
*     {
*         'type': 'union',
*         'fields': [
*             {
*                 'name': 'value',
*                 'type': 'complex128'
*             },
*             {
*                 'name': 'components',
*                 'type': Components
*             }
*         ]
*     }
* ];
*
* // Create a struct constructor for storing a double-precision complex number:
* var Complex128Struct = structFactory( schema2 );
*
* // Create an array constructor for storing complex numbers:
* var Complex128Array = factory( Complex128Struct );
*
* // Create a new array:
* var x = new Complex128Array( 10 );
* // returns <StructArray>
*
* // Retrieve the first element:
* var v1 = x.get( 0 );
*
* // Resolve the complex number stored within the first element:
* var z1 = v1.value;
* // returns <Complex128>[ 0.0, 0.0 ]
*
* // Resolve the individual real and imaginary components:
* var z2 = v1.components;
*
* var re = z2.re;
* // returns 0.0
*
* var im = z2.im;
* // returns 0.0
*
* // Create a new complex number struct:
* var z3 = new Complex128Struct({
*     'value': new Complex128( 3.0, 5.0 )
* });
*
* // Update the first element of the array:
* x.set( z3, 0 );
*
* // As `v1` is a view on same memory as the first element, resolve the complex number stored within the element:
* var z4 = v1.value;
* // returns <Complex128>[ 3.0, 5.0 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
