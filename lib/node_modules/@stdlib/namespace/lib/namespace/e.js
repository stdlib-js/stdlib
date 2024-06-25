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
	'alias': 'E',
	'path': '@stdlib/constants/float64/e',
	'value': require( '@stdlib/constants/float64/e' ),
	'type': 'number',
	'related': []
});

ns.push({
	'alias': 'EMOJI',
	'path': '@stdlib/datasets/emoji',
	'value': require( '@stdlib/datasets/emoji' ),
	'type': 'Function',
	'related': [
		'@stdlib/datasets/emoji-code-picto',
		'@stdlib/datasets/emoji-picto-code'
	]
});

ns.push({
	'alias': 'EMOJI_CODE_PICTO',
	'path': '@stdlib/datasets/emoji-code-picto',
	'value': require( '@stdlib/datasets/emoji-code-picto' ),
	'type': 'Function',
	'related': [
		'@stdlib/datasets/emoji',
		'@stdlib/datasets/emoji-picto-code'
	]
});

ns.push({
	'alias': 'EMOJI_PICTO_CODE',
	'path': '@stdlib/datasets/emoji-picto-code',
	'value': require( '@stdlib/datasets/emoji-picto-code' ),
	'type': 'Function',
	'related': [
		'@stdlib/datasets/emoji',
		'@stdlib/datasets/emoji-code-picto'
	]
});

ns.push({
	'alias': 'emptyStream',
	'path': '@stdlib/streams/node/empty',
	'value': require( '@stdlib/streams/node/empty' ),
	'type': 'Function',
	'related': [
		'@stdlib/streams/node/from-constant'
	]
});

ns.push({
	'alias': 'endsWith',
	'path': '@stdlib/string/ends-with',
	'value': require( '@stdlib/string/ends-with' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/starts-with'
	]
});

ns.push({
	'alias': 'enumerableProperties',
	'path': '@stdlib/utils/enumerable-properties',
	'value': require( '@stdlib/utils/enumerable-properties' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/enumerable-properties-in',
		'@stdlib/utils/enumerable-property-symbols',
		'@stdlib/utils/inherited-enumerable-properties',
		'@stdlib/utils/keys',
		'@stdlib/utils/nonenumerable-properties',
		'@stdlib/utils/properties'
	]
});

ns.push({
	'alias': 'enumerablePropertiesIn',
	'path': '@stdlib/utils/enumerable-properties-in',
	'value': require( '@stdlib/utils/enumerable-properties-in' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/enumerable-properties',
		'@stdlib/utils/enumerable-property-symbols-in',
		'@stdlib/utils/inherited-enumerable-properties',
		'@stdlib/utils/keys-in',
		'@stdlib/utils/nonenumerable-properties-in',
		'@stdlib/utils/properties-in'
	]
});

ns.push({
	'alias': 'enumerablePropertySymbols',
	'path': '@stdlib/utils/enumerable-property-symbols',
	'value': require( '@stdlib/utils/enumerable-property-symbols' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/enumerable-property-symbols-in',
		'@stdlib/utils/inherited-enumerable-property-symbols',
		'@stdlib/utils/keys',
		'@stdlib/utils/nonenumerable-property-symbols',
		'@stdlib/utils/property-symbols'
	]
});

ns.push({
	'alias': 'enumerablePropertySymbolsIn',
	'path': '@stdlib/utils/enumerable-property-symbols-in',
	'value': require( '@stdlib/utils/enumerable-property-symbols-in' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/enumerable-property-symbols',
		'@stdlib/utils/inherited-enumerable-property-symbols',
		'@stdlib/utils/keys-in',
		'@stdlib/utils/nonenumerable-property-symbols-in',
		'@stdlib/utils/property-symbols-in'
	]
});

ns.push({
	'alias': 'ENV',
	'path': '@stdlib/process/env',
	'value': require( '@stdlib/process/env' ),
	'type': 'Object',
	'related': [
		'@stdlib/process/argv'
	]
});

ns.push({
	'alias': 'EPS',
	'path': '@stdlib/constants/float64/eps',
	'value': require( '@stdlib/constants/float64/eps' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float32/eps'
	]
});

ns.push({
	'alias': 'error2json',
	'path': '@stdlib/error/to-json',
	'value': require( '@stdlib/error/to-json' ),
	'type': 'Function',
	'related': [
		'@stdlib/error/reviver'
	]
});

ns.push({
	'alias': 'EULERGAMMA',
	'path': '@stdlib/constants/float64/eulergamma',
	'value': require( '@stdlib/constants/float64/eulergamma' ),
	'type': 'number',
	'related': []
});

ns.push({
	'alias': 'every',
	'path': '@stdlib/utils/every',
	'value': require( '@stdlib/utils/every' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/any',
		'@stdlib/utils/every-by',
		'@stdlib/utils/for-each',
		'@stdlib/utils/none',
		'@stdlib/utils/some'
	]
});

ns.push({
	'alias': 'everyBy',
	'path': '@stdlib/utils/every-by',
	'value': require( '@stdlib/utils/every-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/any-by',
		'@stdlib/utils/every-by-right',
		'@stdlib/utils/for-each',
		'@stdlib/utils/none-by',
		'@stdlib/utils/some-by'
	]
});

ns.push({
	'alias': 'everyByAsync',
	'path': '@stdlib/utils/async/every-by',
	'value': require( '@stdlib/utils/async/every-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/async/any-by',
		'@stdlib/utils/every-by',
		'@stdlib/utils/async/every-by-right',
		'@stdlib/utils/async/for-each',
		'@stdlib/utils/async/none-by',
		'@stdlib/utils/async/some-by'
	]
});

ns.push({
	'alias': 'everyByRight',
	'path': '@stdlib/utils/every-by-right',
	'value': require( '@stdlib/utils/every-by-right' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/any-by',
		'@stdlib/utils/every',
		'@stdlib/utils/every-by',
		'@stdlib/utils/for-each-right',
		'@stdlib/utils/none-by-right',
		'@stdlib/utils/some-by-right'
	]
});

ns.push({
	'alias': 'everyByRightAsync',
	'path': '@stdlib/utils/async/every-by-right',
	'value': require( '@stdlib/utils/async/every-by-right' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/async/any-by-right',
		'@stdlib/utils/async/every-by',
		'@stdlib/utils/every-by-right',
		'@stdlib/utils/async/for-each-right',
		'@stdlib/utils/async/none-by-right',
		'@stdlib/utils/async/some-by-right'
	]
});

ns.push({
	'alias': 'everyInBy',
	'path': '@stdlib/utils/every-in-by',
	'value': require( '@stdlib/utils/every-in-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/any-in-by',
		'@stdlib/utils/none-in-by',
		'@stdlib/utils/some-in-by',
		'@stdlib/utils/every-by',
		'@stdlib/utils/every-own-by'
	]
});

ns.push({
	'alias': 'everyOwnBy',
	'path': '@stdlib/utils/every-own-by',
	'value': require( '@stdlib/utils/every-own-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/any-own-by',
		'@stdlib/utils/every-in-by',
		'@stdlib/utils/none-own-by',
		'@stdlib/utils/some-own-by',
		'@stdlib/utils/every-by'
	]
});

ns.push({
	'alias': 'evil',
	'path': '@stdlib/utils/eval',
	'value': require( '@stdlib/utils/eval' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'EXEC_PATH',
	'path': '@stdlib/process/exec-path',
	'value': require( '@stdlib/process/exec-path' ),
	'type': 'string',
	'related': []
});

ns.push({
	'alias': 'exists',
	'path': '@stdlib/fs/exists',
	'value': require( '@stdlib/fs/exists' ),
	'type': 'Function',
	'related': [
		'@stdlib/fs/read-file',
		'@stdlib/fs/read-dir'
	]
});

ns.push({
	'alias': 'expandAcronyms',
	'path': '@stdlib/nlp/expand-acronyms',
	'value': require( '@stdlib/nlp/expand-acronyms' ),
	'type': 'Function',
	'related': [
		'@stdlib/nlp/expand-contractions'
	]
});

ns.push({
	'alias': 'expandContractions',
	'path': '@stdlib/nlp/expand-contractions',
	'value': require( '@stdlib/nlp/expand-contractions' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'extname',
	'path': '@stdlib/utils/extname',
	'value': require( '@stdlib/utils/extname' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/dirname'
	]
});


// EXPORTS //

module.exports = ns;
