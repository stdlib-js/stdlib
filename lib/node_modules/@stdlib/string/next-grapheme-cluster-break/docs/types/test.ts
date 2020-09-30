/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

import nextGraphemeClusterBreak = require( './index' );


// TESTS //

// The function returns a number...
{
	nextGraphemeClusterBreak( 'last man standing', 4 ); // $ExpectType number
	nextGraphemeClusterBreak( 'presidential election', 8 ); // $ExpectType number
	nextGraphemeClusterBreak( 'अनुच्छेद', 1 ); // $ExpectType number
	nextGraphemeClusterBreak( '🌷', 0 ); // $ExpectType number
}

// The function does not compile if provided invalid arguments...
{
	nextGraphemeClusterBreak( false, 3 ); // $ExpectError
	nextGraphemeClusterBreak( {}, 3 ); // $ExpectError
	nextGraphemeClusterBreak( ( x: number ): number => x, 3 ); // $ExpectError

	nextGraphemeClusterBreak( 'string', true ); // $ExpectError
	nextGraphemeClusterBreak( 'string', false ); // $ExpectError
	nextGraphemeClusterBreak( 'string', {} ); // $ExpectError
	nextGraphemeClusterBreak( 'string', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	nextGraphemeClusterBreak(); // $ExpectError
}
