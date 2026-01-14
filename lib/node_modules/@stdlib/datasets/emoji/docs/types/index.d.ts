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

// TypeScript Version: 4.1

/**
* Emoji.
*/
interface Emoji {
	/**
	* Emoji group (illustrative); e.g., `'Smileys & Emotion'`.
	*/
	group: string;

	/**
	* Emoji subgroup (illustrative); e.g., `'face-smiling'`.
	*/
	subgroup: string;

	/**
	* List of one or more hex code points, separated by spaces; e.g., `'1F600'`.
	*/
	codepoints: string;

	/**
	* Hash value used to match related emoji.
	*/
	hash: string;

	/**
	* Indicates whether an emoji element is missing one or more emoji presentation selectors. Possible values: `'fully-qualified'`, `'minimally-qualified'`, `'unqualified'`.
	*/
	status: string;

	/**
	* Rendered emoji; e.g., `'😀'`.
	*/
	emoji: string;

	/**
	* CLDR short name; e.g., `'grinning face'`.
	*/
	short_name: string;

	/**
	* Short description (often matching the CLDR short name, but omitting skin tones, hair styles, et cetera).
	*/
	description: string;

	/**
	* An `array` of emoji aliases (i.e., common names used to refer to an emoji).
	*/
	aliases: Array<string>;

	/**
	* An `array` of keywords related to an emoji.
	*/
	keywords: Array<string>;

	/**
	* An `array` of emoji codes (i.e., convenient character sequences used within text to refer to an emoji); e.g., `':grinning:'` and `':call_me_hand::skin-tone-5:'`.
	*/
	codes: Array<string>;
}

/**
* Returns an emoji database.
*
* ## Notes
*
* -   This function synchronously reads data from disk for each invocation. Such behavior is intentional and so is the avoidance of `require`. We assume that invocations are infrequent, and we want to avoid the `require` cache. This means that we allow data to be garbage collected and a user is responsible for explicitly caching data.
*
*
* @throws unable to read data
* @returns emoji database
*
* @example
* var data = emoji();
* // returns [ {...}, ... ]
*/
declare function emoji(): Array<Emoji>;


// EXPORTS //

export = emoji;
