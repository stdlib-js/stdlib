/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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


import cunone = require( './index' );


// TESTS //

// The function returns an array...
{
	cunone( [ false, false, true, false, false ] ); // $ExpectType boolean[]
	cunone( [ false, false, true, false, false ] ); // $ExpectType boolean[]
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object...
{
	cunone( 1 ); // $ExpectError
	cunone( true ); // $ExpectError
	cunone( false ); // $ExpectError
	cunone( null ); // $ExpectError
	cunone( void  0 ); // $ExpectError
	cunone( {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	cunone(); // $ExpectError
	cunone( [], [] ); // $ExpectError
}

// Attached to the main export is an `assign` method which returns a collection...
{
	const x = [ false, false, true, false, false ];
	const y = [ false, null, false, null, false, null, false, null, false, null ];

	cunone.assign( x, y, 2, 0 ); // $ExpectType (boolean | null)[]
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an array-like object...
{
	const x = [ false, false, true, false, false ];

	cunone.assign( 1, x, 2, 0 ); // $ExpectError
	cunone.assign( true, x, 2, 0 ); // $ExpectError
	cunone.assign( false, x, 2, 0 ); // $ExpectError
	cunone.assign( null, x, 2, 0 ); // $ExpectError
	cunone.assign( void 0, x, 2, 0 ); // $ExpectError
	cunone.assign( {}, x, 2, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an array-like object...
{
	const x = [ false, false, true, false, false ];

	cunone.assign( x, 1, 2, 0 ); // $ExpectError
	cunone.assign( x, true, 2, 0 ); // $ExpectError
	cunone.assign( x, false, 2, 0 ); // $ExpectError
	cunone.assign( x, null, 2, 0 ); // $ExpectError
	cunone.assign( x, void 0, 2, 0 ); // $ExpectError
	cunone.assign( x, {}, 2, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not a number...
{
	const x = [ false, false, true, false, false ];
	const y = [ false, null, false, null, false, null, false, null, false, null ];

	cunone.assign( x, y , '1', 0 ); // $ExpectError
	cunone.assign( x, y , true, 0 ); // $ExpectError
	cunone.assign( x, y , false, 0 ); // $ExpectError
	cunone.assign( x, y , null, 0 ); // $ExpectError
	cunone.assign( x, y , void 0, 0 ); // $ExpectError
	cunone.assign( x, y , {}, 0 ); // $ExpectError
	cunone.assign( x, y , [], 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fourth argument which is not a number...
{
	const x = [ false, false, true, false, false ];
	const y = [ false, null, false, null, false, null, false, null, false, null ];

	cunone.assign( x, y, 1, '1' ); // $ExpectError
	cunone.assign( x, y, 1, true ); // $ExpectError
	cunone.assign( x, y, 1, false ); // $ExpectError
	cunone.assign( x, y, 1, null ); // $ExpectError
	cunone.assign( x, y, 1, void 0 ); // $ExpectError
	cunone.assign( x, y, 1, {} ); // $ExpectError
	cunone.assign( x, y, 1, [] ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	cunone.assign(); // $ExpectError
	cunone.assign( [] ); // $ExpectError
	cunone.assign( [], [] ); // $ExpectError
	cunone.assign( [], [], 2 ); // $ExpectError
	cunone.assign( [], [], 1, 1, {} ); // $ExpectError
}
