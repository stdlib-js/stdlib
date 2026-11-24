/*
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

import structFactory = require( './index' );


// TESTS //

// The function returns a function...
{
	structFactory( 'float64' ); // $ExpectType StructConstructor<Float64Array>
	structFactory( 'float32' ); // $ExpectType StructConstructor<Float32Array>
}

// The compiler throws an error if not provided a supported data type...
{
	structFactory( 10 ); // $ExpectError
	structFactory( true ); // $ExpectError
	structFactory( false ); // $ExpectError
	structFactory( null ); // $ExpectError
	structFactory( undefined ); // $ExpectError
	structFactory( [] ); // $ExpectError
	structFactory( {} ); // $ExpectError
	structFactory( ( x: number ): number => x ); // $ExpectError
}

// The function returns a function which returns a struct object...
{
	const Struct = structFactory( 'float64' );

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const s1 = new Struct( new ArrayBuffer( 80 ) ); // $ExpectType Struct<Float64Array>

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const s2 = new Struct( new ArrayBuffer( 80 ), 8 ); // $ExpectType Struct<Float64Array>

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const s3 = new Struct( new ArrayBuffer( 80 ), 8, 16 ); // $ExpectType Struct<Float64Array>
}

// TODO: add individual parameter tests
