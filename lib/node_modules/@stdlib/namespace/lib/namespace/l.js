/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

// MAIN //

/*
* When adding names to the namespace, ensure that they are added in alphabetical order according to alias (namespace key).
*/

var ns = [];

ns.push({
	'alias': 'last',
	'path': '@stdlib/string/last',
	'value': require( '@stdlib/string/last' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/first'
	]
});

ns.push({
	'alias': 'lda',
	'path': '@stdlib/nlp/lda',
	'value': require( '@stdlib/nlp/lda' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'leveneTest',
	'path': '@stdlib/stats/levene-test',
	'value': require( '@stdlib/stats/levene-test' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/vartest',
		'@stdlib/stats/bartlett-test'
	]
});

ns.push({
	'alias': 'LinkedList',
	'path': '@stdlib/utils/linked-list',
	'value': require( '@stdlib/utils/linked-list' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/doubly-linked-list',
		'@stdlib/utils/stack'
	]
});

ns.push({
	'alias': 'linspace',
	'path': '@stdlib/array/linspace',
	'value': require( '@stdlib/array/linspace' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/incrspace',
		'@stdlib/array/logspace'
	]
});

ns.push({
	'alias': 'LIU_NEGATIVE_OPINION_WORDS_EN',
	'path': '@stdlib/datasets/liu-negative-opinion-words-en',
	'value': require( '@stdlib/datasets/liu-negative-opinion-words-en' ),
	'type': 'Function',
	'related': [
		'@stdlib/datasets/liu-positive-opinion-words-en'
	]
});

ns.push({
	'alias': 'LIU_POSITIVE_OPINION_WORDS_EN',
	'path': '@stdlib/datasets/liu-positive-opinion-words-en',
	'value': require( '@stdlib/datasets/liu-positive-opinion-words-en' ),
	'type': 'Function',
	'related': [
		'@stdlib/datasets/liu-negative-opinion-words-en'
	]
});

ns.push({
	'alias': 'LN_HALF',
	'path': '@stdlib/constants/float64/ln-half',
	'value': require( '@stdlib/constants/float64/ln-half' ),
	'type': 'number',
	'related': []
});

ns.push({
	'alias': 'LN_PI',
	'path': '@stdlib/constants/float64/ln-pi',
	'value': require( '@stdlib/constants/float64/ln-pi' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/pi'
	]
});

ns.push({
	'alias': 'LN_SQRT_TWO_PI',
	'path': '@stdlib/constants/float64/ln-sqrt-two-pi',
	'value': require( '@stdlib/constants/float64/ln-sqrt-two-pi' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/pi'
	]
});

ns.push({
	'alias': 'LN_TWO_PI',
	'path': '@stdlib/constants/float64/ln-two-pi',
	'value': require( '@stdlib/constants/float64/ln-two-pi' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/two-pi'
	]
});

ns.push({
	'alias': 'LN2',
	'path': '@stdlib/constants/float64/ln-two',
	'value': require( '@stdlib/constants/float64/ln-two' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/ln-ten'
	]
});

ns.push({
	'alias': 'LN10',
	'path': '@stdlib/constants/float64/ln-ten',
	'value': require( '@stdlib/constants/float64/ln-ten' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/ln-two'
	]
});

ns.push({
	'alias': 'LOG2E',
	'path': '@stdlib/constants/float64/log2-e',
	'value': require( '@stdlib/constants/float64/log2-e' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/e',
		'@stdlib/constants/float64/log10-e'
	]
});

ns.push({
	'alias': 'LOG10E',
	'path': '@stdlib/constants/float64/log10-e',
	'value': require( '@stdlib/constants/float64/log10-e' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/e',
		'@stdlib/constants/float64/log2-e'
	]
});

ns.push({
	'alias': 'logspace',
	'path': '@stdlib/array/logspace',
	'value': require( '@stdlib/array/logspace' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/incrspace',
		'@stdlib/array/linspace'
	]
});

ns.push({
	'alias': 'lowercase',
	'path': '@stdlib/string/lowercase',
	'value': require( '@stdlib/string/lowercase' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/uncapitalize',
		'@stdlib/string/uppercase'
	]
});

ns.push({
	'alias': 'lowercaseKeys',
	'path': '@stdlib/utils/lowercase-keys',
	'value': require( '@stdlib/utils/lowercase-keys' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/uncapitalize-keys',
		'@stdlib/utils/uppercase-keys'
	]
});

ns.push({
	'alias': 'lowess',
	'path': '@stdlib/stats/lowess',
	'value': require( '@stdlib/stats/lowess' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'lpad',
	'path': '@stdlib/string/left-pad',
	'value': require( '@stdlib/string/left-pad' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/pad',
		'@stdlib/string/right-pad'
	]
});

ns.push({
	'alias': 'ltrim',
	'path': '@stdlib/string/left-trim',
	'value': require( '@stdlib/string/left-trim' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/trim',
		'@stdlib/string/right-trim'
	]
});

ns.push({
	'alias': 'ltrimN',
	'path': '@stdlib/string/left-trim-n',
	'value': require( '@stdlib/string/left-trim-n' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/right-trim-n',
		'@stdlib/string/trim'
	]
});


// EXPORTS //

module.exports = ns;
