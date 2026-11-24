/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

/// <reference types="@stdlib/types"/>

import { DataType, OutputPolicy, InputCastingPolicy, typedndarray } from '@stdlib/types/ndarray';
import factory = require( './index' );

/**
* Returns an output ndarray.
*
* @param x - input ndarray
* @param y - output ndarray
* @returns output ndarray
*/
function unary( x: typedndarray<unknown>, y: typedndarray<unknown> ): typedndarray<unknown> {
	if ( !x ) {
		throw new Error( 'unexpected error' );
	}
	return y;
}


// TESTS //

// The function returns a function...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'same' as OutputPolicy,
		'casting': 'none' as InputCastingPolicy
	};

	factory( unary, [ dtypes ], dtypes, policies ); // $ExpectType Unary
}

// The compiler throws an error if the function is not provided a first argument which is function...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'same' as OutputPolicy,
		'casting': 'none' as InputCastingPolicy
	};

	factory( '5', [ dtypes ], dtypes, policies ); // $ExpectError
	factory( 5, [ dtypes ], dtypes, policies ); // $ExpectError
	factory( true, [ dtypes ], dtypes, policies ); // $ExpectError
	factory( false, [ dtypes ], dtypes, policies ); // $ExpectError
	factory( null, [ dtypes ], dtypes, policies ); // $ExpectError
	factory( void 0, [ dtypes ], dtypes, policies ); // $ExpectError
	factory( [], [ dtypes ], dtypes, policies ); // $ExpectError
	factory( {}, [ dtypes ], dtypes, policies ); // $ExpectError
	factory( ( x: number ): number => x, [ dtypes ], dtypes, policies ); // $ExpectError
}

// The compiler throws an error if the function is not provided a second argument which is list of data type lists...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'same' as OutputPolicy,
		'casting': 'none' as InputCastingPolicy
	};

	factory( unary, '5', dtypes, policies ); // $ExpectError
	factory( unary, 5, dtypes, policies ); // $ExpectError
	factory( unary, true, dtypes, policies ); // $ExpectError
	factory( unary, false, dtypes, policies ); // $ExpectError
	factory( unary, null, dtypes, policies ); // $ExpectError
	factory( unary, void 0, dtypes, policies ); // $ExpectError
	factory( unary, {}, dtypes, policies ); // $ExpectError
	factory( unary, ( x: number ): number => x, dtypes, policies ); // $ExpectError
}

// The compiler throws an error if the function is not provided a third argument which is list of data types...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'same' as OutputPolicy,
		'casting': 'none' as InputCastingPolicy
	};

	factory( unary, [ dtypes ], '5', policies ); // $ExpectError
	factory( unary, [ dtypes ], 5, policies ); // $ExpectError
	factory( unary, [ dtypes ], true, policies ); // $ExpectError
	factory( unary, [ dtypes ], false, policies ); // $ExpectError
	factory( unary, [ dtypes ], null, policies ); // $ExpectError
	factory( unary, [ dtypes ], void 0, policies ); // $ExpectError
	factory( unary, [ dtypes ], {}, policies ); // $ExpectError
	factory( unary, [ dtypes ], ( x: number ): number => x, policies ); // $ExpectError
}

// The compiler throws an error if the function is not provided a fourth argument which is a valid policy object...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	factory( unary, [ dtypes ], dtypes, '5' ); // $ExpectError
	factory( unary, [ dtypes ], dtypes, 5 ); // $ExpectError
	factory( unary, [ dtypes ], dtypes, true ); // $ExpectError
	factory( unary, [ dtypes ], dtypes, false ); // $ExpectError
	factory( unary, [ dtypes ], dtypes, null ); // $ExpectError
	factory( unary, [ dtypes ], dtypes, void 0 ); // $ExpectError
	factory( unary, [ dtypes ], dtypes, [] ); // $ExpectError
	factory( unary, [ dtypes ], dtypes, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'same' as OutputPolicy,
		'casting': 'none' as InputCastingPolicy
	};

	factory(); // $ExpectError
	factory( unary ); // $ExpectError
	factory( unary, [ dtypes ] ); // $ExpectError
	factory( unary, [ dtypes ], dtypes ); // $ExpectError
	factory( unary, [ dtypes ], dtypes, policies, {} ); // $ExpectError
}
