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

// TypeScript Version: 2.0

/**
* Removes punctuation characters from a string.
*
* @param str - input string
* @returns output string
*
* @example
* var str = 'Sun Tzu said: "A leader leads by example not by force."';
* var out = removePunctuation( str );
* // returns 'Sun Tzu said A leader leads by example not by force'
*
* @example
* var str = 'Double, double, toil and trouble; Fire burn, and cauldron bubble!';
* var out = removePunctuation( str );
* // returns 'Double double toil and trouble Fire burn and cauldron bubble'
*
* @example
* var str = 'This module removes these characters: `{}[]:,!/<>().;~|?\'"';
* var out = removePunctuation( str );
* // returns 'This module removes these characters '
*/
declare function removePunctuation( str: string ): string;


// EXPORTS //

export = removePunctuation;
