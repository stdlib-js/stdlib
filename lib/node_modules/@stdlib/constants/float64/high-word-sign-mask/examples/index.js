/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

'use strict';

var getHighWord = require( '@stdlib/number/float64/base/get-high-word' );
var getLowWord = require( '@stdlib/number/float64/base/get-low-word' );
var fromWords = require( '@stdlib/number/float64/base/from-words' );
var toBinaryString = require( '@stdlib/number/uint32/base/to-binary-string' );
var FLOAT64_HIGH_WORD_SIGN_MASK = require( './../lib' ); // eslint-disable-line id-length

var x = -11.5;
var hi = getHighWord( x );
console.log( 'Word: %s', toBinaryString( hi ) );

var out = (hi & FLOAT64_HIGH_WORD_SIGN_MASK)>>>0;
console.log( 'Isolate sign bits: %s', toBinaryString( out ) );

out = hi & (~FLOAT64_HIGH_WORD_SIGN_MASK);
console.log( 'Turn off sign bits: %s', toBinaryString( out ) );

out = fromWords( out, getLowWord( x ) );
console.log( 'Value: %d', out );
