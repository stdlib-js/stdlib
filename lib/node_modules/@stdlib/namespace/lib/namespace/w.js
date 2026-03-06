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
	'alias': 'waterfall',
	'path': '@stdlib/utils/async/series-waterfall',
	'value': require( '@stdlib/utils/async/series-waterfall' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'WebAssemblyMemory',
	'path': '@stdlib/wasm/memory',
	'value': require( '@stdlib/wasm/memory' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'whileAsync',
	'path': '@stdlib/utils/async/while',
	'value': require( '@stdlib/utils/async/while' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/async/do-until',
		'@stdlib/utils/async/do-while',
		'@stdlib/utils/async/until',
		'@stdlib/utils/while',
		'@stdlib/utils/async/while-each'
	]
});

ns.push({
	'alias': 'whileEach',
	'path': '@stdlib/utils/while-each',
	'value': require( '@stdlib/utils/while-each' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/until-each',
		'@stdlib/utils/async/while-each',
		'@stdlib/utils/while-each-right'
	]
});

ns.push({
	'alias': 'whileEachRight',
	'path': '@stdlib/utils/while-each-right',
	'value': require( '@stdlib/utils/while-each-right' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/while-each',
		'@stdlib/utils/until-each-right'
	]
});

ns.push({
	'alias': 'whilst',
	'path': '@stdlib/utils/while',
	'value': require( '@stdlib/utils/while' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/do-until',
		'@stdlib/utils/do-while',
		'@stdlib/utils/until',
		'@stdlib/utils/async/while',
		'@stdlib/utils/while-each'
	]
});

ns.push({
	'alias': 'wilcoxon',
	'path': '@stdlib/stats/wilcoxon',
	'value': require( '@stdlib/stats/wilcoxon' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/ttest',
		'@stdlib/stats/ztest'
	]
});

ns.push({
	'alias': 'writableProperties',
	'path': '@stdlib/utils/writable-properties',
	'value': require( '@stdlib/utils/writable-properties' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/readable-properties',
		'@stdlib/utils/inherited-writable-properties',
		'@stdlib/utils/writable-properties-in',
		'@stdlib/utils/properties'
	]
});

ns.push({
	'alias': 'writablePropertiesIn',
	'path': '@stdlib/utils/writable-properties-in',
	'value': require( '@stdlib/utils/writable-properties-in' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/readable-properties-in',
		'@stdlib/utils/inherited-writable-properties',
		'@stdlib/utils/writable-properties',
		'@stdlib/utils/properties-in'
	]
});

ns.push({
	'alias': 'writablePropertyNames',
	'path': '@stdlib/utils/writable-property-names',
	'value': require( '@stdlib/utils/writable-property-names' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/inherited-writable-property-names',
		'@stdlib/utils/readable-property-names',
		'@stdlib/utils/writable-properties',
		'@stdlib/utils/writable-property-names-in',
		'@stdlib/utils/writable-property-symbols',
		'@stdlib/utils/property-names'
	]
});

ns.push({
	'alias': 'writablePropertyNamesIn',
	'path': '@stdlib/utils/writable-property-names-in',
	'value': require( '@stdlib/utils/writable-property-names-in' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/inherited-writable-property-names',
		'@stdlib/utils/readable-property-names-in',
		'@stdlib/utils/writable-properties-in',
		'@stdlib/utils/writable-property-names',
		'@stdlib/utils/writable-property-symbols-in',
		'@stdlib/utils/property-names-in'
	]
});

ns.push({
	'alias': 'writablePropertySymbols',
	'path': '@stdlib/utils/writable-property-symbols',
	'value': require( '@stdlib/utils/writable-property-symbols' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/inherited-writable-property-symbols',
		'@stdlib/utils/readable-property-symbols',
		'@stdlib/utils/writable-properties',
		'@stdlib/utils/writable-property-names',
		'@stdlib/utils/writable-property-symbols-in',
		'@stdlib/utils/property-symbols'
	]
});

ns.push({
	'alias': 'writablePropertySymbolsIn',
	'path': '@stdlib/utils/writable-property-symbols-in',
	'value': require( '@stdlib/utils/writable-property-symbols-in' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/inherited-writable-property-symbols',
		'@stdlib/utils/readable-property-symbols-in',
		'@stdlib/utils/writable-properties-in',
		'@stdlib/utils/writable-property-names-in',
		'@stdlib/utils/writable-property-symbols',
		'@stdlib/utils/property-symbols-in'
	]
});

ns.push({
	'alias': 'writeFile',
	'path': '@stdlib/fs/write-file',
	'value': require( '@stdlib/fs/write-file' ),
	'type': 'Function',
	'related': [
		'@stdlib/fs/exists',
		'@stdlib/fs/read-file'
	]
});


// EXPORTS //

module.exports = ns;
