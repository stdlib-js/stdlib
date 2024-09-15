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

import readDataView = require( './index' );


// TESTS //

// The function returns a collection...
{
	const x = new DataView( new ArrayBuffer( 100 ) );
	const y = new Float64Array( 10 );

	readDataView( x.length, x, 1, y, 1, true ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new DataView( new ArrayBuffer( 100 ) );
	const y = new Float64Array( 10 );

	readDataView( '10', x, 1, y, 1, true ); // $ExpectError
	readDataView( true, x, 1, y, 1, true ); // $ExpectError
	readDataView( false, x, 1, y, 1, true ); // $ExpectError
	readDataView( null, x, 1, y, 1, true ); // $ExpectError
	readDataView( undefined, x, 1, y, 1, true ); // $ExpectError
	readDataView( [], x, 1, y, 1, true ); // $ExpectError
	readDataView( {}, x, 1, y, 1, true ); // $ExpectError
	readDataView( ( x: number ): number => x, x, 1, y, 1, true ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a DataView...
{
	const y = new Float64Array( 10 );

	readDataView( y.length, 10, 1, y, 1, true ); // $ExpectError
	readDataView( y.length, '10', 1, y, 1, true ); // $ExpectError
	readDataView( y.length, true, 1, y, 1, true ); // $ExpectError
	readDataView( y.length, false, 1, y, 1, true ); // $ExpectError
	readDataView( y.length, null, 1, y, 1, true ); // $ExpectError
	readDataView( y.length, undefined, 1, y, 1, true ); // $ExpectError
	readDataView( y.length, {}, 1, y, 1, true ); // $ExpectError
	readDataView( y.length, [ '1' ], 1, y, 1, true ); // $ExpectError
	readDataView( y.length, ( x: number ): number => x, 1, y, 1, true ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new DataView( new ArrayBuffer( 100 ) );
	const y = new Float64Array( 10 );

	readDataView( x.length, x, '10', y, 1, true ); // $ExpectError
	readDataView( x.length, x, true, y, 1, true ); // $ExpectError
	readDataView( x.length, x, false, y, 1, true ); // $ExpectError
	readDataView( x.length, x, null, y, 1, true ); // $ExpectError
	readDataView( x.length, x, undefined, y, 1, true ); // $ExpectError
	readDataView( x.length, x, [], y, 1, true ); // $ExpectError
	readDataView( x.length, x, {}, y, 1, true ); // $ExpectError
	readDataView( x.length, x, ( x: number ): number => x, y, 1, true ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a collection...
{
	const x = new DataView( new ArrayBuffer( 100 ) );

	readDataView( x.length, x, 1, 10, 1, true ); // $ExpectError
	readDataView( x.length, x, 1, true, 1, true ); // $ExpectError
	readDataView( x.length, x, 1, false, 1, true ); // $ExpectError
	readDataView( x.length, x, 1, null, 1, true ); // $ExpectError
	readDataView( x.length, x, 1, undefined, 1, true ); // $ExpectError
	readDataView( x.length, x, 1, {}, 1, true ); // $ExpectError
	readDataView( x.length, x, 1, ( x: number ): number => x, 1, true ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new DataView( new ArrayBuffer( 100 ) );
	const y = new Float64Array( 10 );

	readDataView( x.length, x, 1, y, '10', true ); // $ExpectError
	readDataView( x.length, x, 1, y, true, true ); // $ExpectError
	readDataView( x.length, x, 1, y, false, true ); // $ExpectError
	readDataView( x.length, x, 1, y, null, true ); // $ExpectError
	readDataView( x.length, x, 1, y, undefined, true ); // $ExpectError
	readDataView( x.length, x, 1, y, [], true ); // $ExpectError
	readDataView( x.length, x, 1, y, {}, true ); // $ExpectError
	readDataView( x.length, x, 1, y, ( x: number ): number => x, true ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a boolean...
{
	const x = new DataView( new ArrayBuffer( 100 ) );
	const y = new Float64Array( 10 );

	readDataView( x.length, x, 1, y, 1, '10' ); // $ExpectError
	readDataView( x.length, x, 1, y, 1, 0 ); // $ExpectError
	readDataView( x.length, x, 1, y, 1, null ); // $ExpectError
	readDataView( x.length, x, 1, y, 1, undefined ); // $ExpectError
	readDataView( x.length, x, 1, y, 1, [] ); // $ExpectError
	readDataView( x.length, x, 1, y, 1, {} ); // $ExpectError
	readDataView( x.length, x, 1, y, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new DataView( new ArrayBuffer( 100 ) );
	const y = new Float64Array( 10 );

	readDataView(); // $ExpectError
	readDataView( x.length ); // $ExpectError
	readDataView( x.length, x ); // $ExpectError
	readDataView( x.length, x, 1 ); // $ExpectError
	readDataView( x.length, x, 1, y ); // $ExpectError
	readDataView( x.length, x, 1, y, 1 ); // $ExpectError
	readDataView( x.length, x, 1, y, 1, true, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a collection...
{
	const x = new DataView( new ArrayBuffer( 100 ) );
	const y = new Float64Array( 10 );

	readDataView.ndarray( x.length, x, 1, 0, y, 1, 0, true ); // $ExpectType Float64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new DataView( new ArrayBuffer( 100 ) );
	const y = new Float64Array( 10 );

	readDataView.ndarray( '10', x, 1, 0, y, 1, 0, true ); // $ExpectError
	readDataView.ndarray( true, x, 1, 0, y, 1, 0, true ); // $ExpectError
	readDataView.ndarray( false, x, 1, 0, y, 1, 0, true ); // $ExpectError
	readDataView.ndarray( null, x, 1, 0, y, 1, 0, true ); // $ExpectError
	readDataView.ndarray( undefined, x, 1, 0, y, 1, 0, true ); // $ExpectError
	readDataView.ndarray( [], x, 1, 0, y, 1, 0, true ); // $ExpectError
	readDataView.ndarray( {}, x, 1, 0, y, 1, 0, true ); // $ExpectError
	readDataView.ndarray( ( x: number ): number => x, x, 1, 0, y, 1, 0, true ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a DataView...
{
	const y = new Float64Array( 10 );

	readDataView.ndarray( y.length, 10, 1, 0, y, 1, 0, true ); // $ExpectError
	readDataView.ndarray( y.length, '10', 1, 0, y, 1, 0, true ); // $ExpectError
	readDataView.ndarray( y.length, true, 1, 0, y, 1, 0, true ); // $ExpectError
	readDataView.ndarray( y.length, false, 1, 0, y, 1, 0, true ); // $ExpectError
	readDataView.ndarray( y.length, null, 1, 0, y, 1, 0, true ); // $ExpectError
	readDataView.ndarray( y.length, undefined, 1, 0, y, 1, 0, true ); // $ExpectError
	readDataView.ndarray( y.length, {}, 1, 0, y, 1, 0, true ); // $ExpectError
	readDataView.ndarray( y.length, [ '1' ], 1, 0, y, 1, 0, true ); // $ExpectError
	readDataView.ndarray( y.length, ( x: number ): number => x, 1, 0, y, 1, 0, true ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new DataView( new ArrayBuffer( 100 ) );
	const y = new Float64Array( 10 );

	readDataView.ndarray( x.length, x, '10', 0, y, 1, 0, true ); // $ExpectError
	readDataView.ndarray( x.length, x, true, 0, y, 1, 0, true ); // $ExpectError
	readDataView.ndarray( x.length, x, false, 0, y, 1, 0, true ); // $ExpectError
	readDataView.ndarray( x.length, x, null, 0, y, 1, 0, true ); // $ExpectError
	readDataView.ndarray( x.length, x, undefined, 0, y, 1, 0, true ); // $ExpectError
	readDataView.ndarray( x.length, x, [], 0, y, 1, 0, true ); // $ExpectError
	readDataView.ndarray( x.length, x, {}, 0, y, 1, 0, true ); // $ExpectError
	readDataView.ndarray( x.length, x, ( x: number ): number => x, 0, y, 1, 0, true ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new DataView( new ArrayBuffer( 100 ) );
	const y = new Float64Array( 10 );

	readDataView.ndarray( x.length, x, 1, '10', y, 1, 0, true ); // $ExpectError
	readDataView.ndarray( x.length, x, 1, true, y, 1, 0, true ); // $ExpectError
	readDataView.ndarray( x.length, x, 1, false, y, 1, 0, true ); // $ExpectError
	readDataView.ndarray( x.length, x, 1, null, y, 1, 0, true ); // $ExpectError
	readDataView.ndarray( x.length, x, 1, undefined, y, 1, 0, true ); // $ExpectError
	readDataView.ndarray( x.length, x, 1, [], y, 1, 0, true ); // $ExpectError
	readDataView.ndarray( x.length, x, 1, {}, y, 1, 0, true ); // $ExpectError
	readDataView.ndarray( x.length, x, 1, ( x: number ): number => x, y, 1, 0, true ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a collection...
{
	const x = new DataView( new ArrayBuffer( 100 ) );

	readDataView.ndarray( x.length, x, 1, 0, 10, 1, 0, true ); // $ExpectError
	readDataView.ndarray( x.length, x, 1, 0, true, 1, 0, true ); // $ExpectError
	readDataView.ndarray( x.length, x, 1, 0, false, 1, 0, true ); // $ExpectError
	readDataView.ndarray( x.length, x, 1, 0, null, 1, 0, true ); // $ExpectError
	readDataView.ndarray( x.length, x, 1, 0, undefined, 1, 0, true ); // $ExpectError
	readDataView.ndarray( x.length, x, 1, 0, {}, 1, 0, true ); // $ExpectError
	readDataView.ndarray( x.length, x, 1, 0, ( x: number ): number => x, 1, 0, true ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new DataView( new ArrayBuffer( 100 ) );
	const y = new Float64Array( 10 );

	readDataView.ndarray( x.length, x, 1, 0, y, '10', 0, true ); // $ExpectError
	readDataView.ndarray( x.length, x, 1, 0, y, true, 0, true ); // $ExpectError
	readDataView.ndarray( x.length, x, 1, 0, y, false, 0, true ); // $ExpectError
	readDataView.ndarray( x.length, x, 1, 0, y, null, 0, true ); // $ExpectError
	readDataView.ndarray( x.length, x, 1, 0, y, undefined, 0, true ); // $ExpectError
	readDataView.ndarray( x.length, x, 1, 0, y, [], 0, true ); // $ExpectError
	readDataView.ndarray( x.length, x, 1, 0, y, {}, 0, true ); // $ExpectError
	readDataView.ndarray( x.length, x, 1, 0, y, ( x: number ): number => x, 0, true ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new DataView( new ArrayBuffer( 100 ) );
	const y = new Float64Array( 10 );

	readDataView.ndarray( x.length, x, 1, 0, y, 1, '10', true ); // $ExpectError
	readDataView.ndarray( x.length, x, 1, 0, y, 1, true, true ); // $ExpectError
	readDataView.ndarray( x.length, x, 1, 0, y, 1, false, true ); // $ExpectError
	readDataView.ndarray( x.length, x, 1, 0, y, 1, null, true ); // $ExpectError
	readDataView.ndarray( x.length, x, 1, 0, y, 1, undefined, true ); // $ExpectError
	readDataView.ndarray( x.length, x, 1, 0, y, 1, [], true ); // $ExpectError
	readDataView.ndarray( x.length, x, 1, 0, y, 1, {}, true ); // $ExpectError
	readDataView.ndarray( x.length, x, 1, 0, y, 1, ( x: number ): number => x, true ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a boolean...
{
	const x = new DataView( new ArrayBuffer( 100 ) );
	const y = new Float64Array( 10 );

	readDataView.ndarray( x.length, x, 1, 0, y, 1, 0, '10' ); // $ExpectError
	readDataView.ndarray( x.length, x, 1, 0, y, 1, 0, 0 ); // $ExpectError
	readDataView.ndarray( x.length, x, 1, 0, y, 1, 0, null ); // $ExpectError
	readDataView.ndarray( x.length, x, 1, 0, y, 1, 0, undefined ); // $ExpectError
	readDataView.ndarray( x.length, x, 1, 0, y, 1, 0, [] ); // $ExpectError
	readDataView.ndarray( x.length, x, 1, 0, y, 1, 0, {} ); // $ExpectError
	readDataView.ndarray( x.length, x, 1, 0, y, 1, 0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new DataView( new ArrayBuffer( 100 ) );
	const y = new Float64Array( 10 );

	readDataView.ndarray(); // $ExpectError
	readDataView.ndarray( x.length ); // $ExpectError
	readDataView.ndarray( x.length, x ); // $ExpectError
	readDataView.ndarray( x.length, x, 1 ); // $ExpectError
	readDataView.ndarray( x.length, x, 1, 0 ); // $ExpectError
	readDataView.ndarray( x.length, x, 1, 0, y ); // $ExpectError
	readDataView.ndarray( x.length, x, 1, 0, y, 1 ); // $ExpectError
	readDataView.ndarray( x.length, x, 1, 0, y, 1, 0 ); // $ExpectError
	readDataView.ndarray( x.length, x, 1, 0, y, 1, 0, true, 10 ); // $ExpectError
}
