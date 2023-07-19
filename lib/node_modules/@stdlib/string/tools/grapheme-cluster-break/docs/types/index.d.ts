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

// TypeScript Version: 2.0

/**
* An object mapping break type names to integer values.
*/
interface Constants {
	[key: string]: number;
}

/**
* Interface describing grapheme cluster break tooling.
*/
interface Grapheme {
	/**
	* Returns the grapheme break property from the [Unicode Standard][1].
	*
	* [1]: https://www.unicode.org/Public/13.0.0/ucd/auxiliary/GraphemeBreakProperty.txt
	*
	* @param code - Unicode code point
	* @returns grapheme break property
	*
	* @example
	* var out = grapheme.breakProperty( 0x008f );
	* // returns 2
	*
	* @example
	* var out = grapheme.breakProperty( 0x111C2 );
	* // returns 12
	*
	* @example
	* var out = grapheme.breakProperty( 0x1F3FC );
	* // returns 3
	*/
	breakProperty( code: number ): number;

	/**
	* Returns the break type between grapheme breaking classes according to _UAX #29 3.1.1 Grapheme Cluster Boundary Rules_ on extended grapheme clusters.
	*
	* @param breaks - list of grapheme break properties
	* @param emoji - list of emoji properties
	* @returns break type
	*
	* @example
	* var out = grapheme.breakType( [ 11, 3, 11 ], [ 11, 11, 11 ] );
	* // returns 1
	*/
	breakType( breaks: Array<number>, emoji: Array<number> ): number;

	/**
	* Returns the emoji property from the [Unicode Standard][1].
	*
	* [1]: https://www.unicode.org/Public/13.0.0/ucd/emoji/emoji-data.txt
	*
	* @param code - Unicode code point
	* @returns emoji property
	*
	* @example
	* var out = emojiProperty( 0x23EC );
	* // returns 101
	*
	* @example
	* var out = emojiProperty( 0x1FFFE );
	* // returns 11
	*/
	emojiProperty( code: number ): number;

	/**
	* An object mapping break type names to integer values.
	*/
	constants: Constants;
}

/**
* Grapheme cluster break tooling.
*/
declare var grapheme: Grapheme;


// EXPORTS //

export = grapheme;
