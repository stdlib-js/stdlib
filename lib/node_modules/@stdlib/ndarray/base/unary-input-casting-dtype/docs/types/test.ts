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

import inputCastingDataType = require( './index' );


// TESTS //

// The function returns a data type...
{
	inputCastingDataType( 'float64', 'float64', 'none' ); // $ExpectType DataType
}

// The compiler throws an error if not provided a first argument which is a data type...
{
	inputCastingDataType( '10', 'float64', 'none' ); // $ExpectError
	inputCastingDataType( true, 'float64', 'none' ); // $ExpectError
	inputCastingDataType( false, 'float64', 'none' ); // $ExpectError
	inputCastingDataType( null, 'float64', 'none' ); // $ExpectError
	inputCastingDataType( undefined, 'float64', 'none' ); // $ExpectError
	inputCastingDataType( [], 'float64', 'none' ); // $ExpectError
	inputCastingDataType( {}, 'float64', 'none' ); // $ExpectError
	inputCastingDataType( ( x: number ): number => x, 'float64', 'none' ); // $ExpectError
}

// The compiler throws an error if not provided a second argument which is a data type...
{
	inputCastingDataType( 'float64', '10', 'none' ); // $ExpectError
	inputCastingDataType( 'float64', true, 'none' ); // $ExpectError
	inputCastingDataType( 'float64', false, 'none' ); // $ExpectError
	inputCastingDataType( 'float64', null, 'none' ); // $ExpectError
	inputCastingDataType( 'float64', undefined, 'none' ); // $ExpectError
	inputCastingDataType( 'float64', [], 'none' ); // $ExpectError
	inputCastingDataType( 'float64', {}, 'none' ); // $ExpectError
	inputCastingDataType( 'float64', ( x: number ): number => x, 'none' ); // $ExpectError
}

// The compiler throws an error if not provided a third argument which is either a data type or data type policy...
{
	inputCastingDataType( 'float64', 'float64', '10' ); // $ExpectError
	inputCastingDataType( 'float64', 'float64', true ); // $ExpectError
	inputCastingDataType( 'float64', 'float64', false ); // $ExpectError
	inputCastingDataType( 'float64', 'float64', null ); // $ExpectError
	inputCastingDataType( 'float64', 'float64', undefined ); // $ExpectError
	inputCastingDataType( 'float64', 'float64', [] ); // $ExpectError
	inputCastingDataType( 'float64', 'float64', {} ); // $ExpectError
	inputCastingDataType( 'float64', 'float64', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	inputCastingDataType(); // $ExpectError
	inputCastingDataType( 'float64' ); // $ExpectError
	inputCastingDataType( 'float64', 'float64' ); // $ExpectError
	inputCastingDataType( 'float64', 'float64', 'none', 'foo' ); // $ExpectError
}
