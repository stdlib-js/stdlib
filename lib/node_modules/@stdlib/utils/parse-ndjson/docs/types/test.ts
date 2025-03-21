/**
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

import parseNDJSON = require( './index' );


// TESTS //

// The function returns an array of parsed values...
{
	const validNDJSON = '{"beep":"boop"}\n{"example":42}\n{"data":[1,2,3]}';
	parseNDJSON( validNDJSON ); // $ExpectType any[] | Error
}

// The function does not compile if the argument is a value other than a string...
{
	parseNDJSON( true ); // $ExpectError
	parseNDJSON( false ); // $ExpectError
	parseNDJSON( 5 ); // $ExpectError
	parseNDJSON( [] ); // $ExpectError
	parseNDJSON( {} ); // $ExpectError
	parseNDJSON( ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if the second argument is a value other than a function...
{
	parseNDJSON( '{"beep":"boop"}\n{"example":42}', true ); // $ExpectError
	parseNDJSON( '{"beep":"boop"}\n{"example":42}', false ); // $ExpectError
	parseNDJSON( '{"beep":"boop"}\n{"example":42}', 5 ); // $ExpectError
	parseNDJSON( '{"beep":"boop"}\n{"example":42}', [] ); // $ExpectError
	parseNDJSON( '{"beep":"boop"}\n{"example":42}', {} ); // $ExpectError
	parseNDJSON( '{"beep":"boop"}\n{"example":42}', 'baz' ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	parseNDJSON( ); // $ExpectError
	parseNDJSON( '{"beep":"boop"}', 'baz', 'foo' ); // $ExpectError
}
