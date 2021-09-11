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

/*
* When adding names to the namespace, ensure that they are added in alphabetical order according to alias (namespace key).
*/

var ns = [];

ns.push({
	'alias': 'kde2d',
	'path': '@stdlib/stats/kde2d',
	'value': require( '@stdlib/stats/kde2d' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'kebabcase',
	'path': '@stdlib/string/kebabcase',
	'value': require( '@stdlib/string/kebabcase' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/camelcase',
		'@stdlib/string/constantcase',
		'@stdlib/string/pascalcase',
		'@stdlib/string/snakecase'
	]
});

ns.push({
	'alias': 'keyBy',
	'path': '@stdlib/utils/key-by',
	'value': require( '@stdlib/utils/key-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/for-each'
	]
});

ns.push({
	'alias': 'keyByRight',
	'path': '@stdlib/utils/key-by-right',
	'value': require( '@stdlib/utils/key-by-right' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/for-each-right',
		'@stdlib/utils/key-by'
	]
});

ns.push({
	'alias': 'keysIn',
	'path': '@stdlib/utils/keys-in',
	'value': require( '@stdlib/utils/keys-in' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/entries-in',
		'@stdlib/utils/keys',
		'@stdlib/utils/values-in'
	]
});

ns.push({
	'alias': 'kruskalTest',
	'path': '@stdlib/stats/kruskal-test',
	'value': require( '@stdlib/stats/kruskal-test' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'kstest',
	'path': '@stdlib/stats/kstest',
	'value': require( '@stdlib/stats/kstest' ),
	'type': 'Function',
	'related': []
});


// EXPORTS //

module.exports = ns;
