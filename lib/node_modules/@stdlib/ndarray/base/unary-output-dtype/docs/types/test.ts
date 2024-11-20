/*
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

import outputDataType = require( './index' );


// TESTS //

// The function returns a data type...
{
	outputDataType( 'float64', 'real' ); // $ExpectType DataType
}

// The compiler throws an error if not provided a first argument which is a data type...
{
	outputDataType( '10', 'real' ); // $ExpectError
	outputDataType( true, 'real' ); // $ExpectError
	outputDataType( false, 'real' ); // $ExpectError
	outputDataType( null, 'real' ); // $ExpectError
	outputDataType( undefined, 'real' ); // $ExpectError
	outputDataType( [], 'real' ); // $ExpectError
	outputDataType( {}, 'real' ); // $ExpectError
	outputDataType( ( x: number ): number => x, 'real' ); // $ExpectError
}

// The compiler throws an error if not provided a second argument which is either a data type or data type policy...
{
	outputDataType( 'float64', '10' ); // $ExpectError
	outputDataType( 'float64', true ); // $ExpectError
	outputDataType( 'float64', false ); // $ExpectError
	outputDataType( 'float64', null ); // $ExpectError
	outputDataType( 'float64', undefined ); // $ExpectError
	outputDataType( 'float64', [] ); // $ExpectError
	outputDataType( 'float64', {} ); // $ExpectError
	outputDataType( 'float64', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	outputDataType(); // $ExpectError
	outputDataType( 'float64', 'real', 'foo' ); // $ExpectError
}
