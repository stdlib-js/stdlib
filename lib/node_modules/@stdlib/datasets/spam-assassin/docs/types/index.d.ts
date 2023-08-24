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
* Email object.
*/
interface Email {
	/**
	* Message id (relative to message group).
	*/
	id: string;

	/**
	* Message group.
	*/
	group: string;

	/**
	* Object containing checksum info.
	*/
	checksum: {
		/**
		* Checksum type (e.g., MD5).
		*/
		type: string;

		/**
		* Checksum value.
		*/
		value: string;
	};

	/**
	* Message text (including headers).
	*/
	text: string;
}


/**
* Returns the Spam Assassin public email corpus.
*
* ## Notes
*
* -   This function synchronously reads data from disk for each invocation. Such behavior is intentional and so is the avoidance of `require`. We assume that invocations are infrequent, and we want to avoid the `require` cache. This means that we allow data to be garbage collected and a user is responsible for explicitly caching data.
*
*
* @throws unable to read data
* @returns data
*
* @example
* var data = corpus();
* // returns [ {...}, {...}, ... ]
*/
declare function corpus(): Array<Email>;


// EXPORTS //

export = corpus;
