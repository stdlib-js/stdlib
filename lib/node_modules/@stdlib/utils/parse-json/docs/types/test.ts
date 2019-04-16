/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

import parseJSON = require( './index' );


// TESTS //

// The function returns a parsed value...
{
	parseJSON( '{"beep":"boop"}' ); // $ExpectType any
	parseJSON( '"beep"' ); // $ExpectType any
	parseJSON( '22' ); // $ExpectType any
}

// The function does not compile if the first argument is a value other than a string...
{
	parseJSON( true ); // $ExpectError
	parseJSON( false ); // $ExpectError
	parseJSON( 5 ); // $ExpectError
	parseJSON( [] ); // $ExpectError
	parseJSON( {} ); // $ExpectError
	parseJSON( ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if the second argument is a value other than a function...
{
	parseJSON( '{"beep":"boop"}', true ); // $ExpectError
	parseJSON( '{"beep":"boop"}', false ); // $ExpectError
	parseJSON( '{"beep":"boop"}', 5 ); // $ExpectError
	parseJSON( '{"beep":"boop"}', [] ); // $ExpectError
	parseJSON( '{"beep":"boop"}', {} ); // $ExpectError
	parseJSON( '{"beep":"boop"}', 'baz' ); // $ExpectError
}

// The function does not compile if provided an unsupported number of arguments...
{
	parseJSON(); // $ExpectError
	parseJSON( '{"beep":"boop"}', 'baz', 'boz' ); // $ExpectError
}
