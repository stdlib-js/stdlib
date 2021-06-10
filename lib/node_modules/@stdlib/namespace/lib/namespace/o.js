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
	'alias': 'objectEntries',
	'path': '@stdlib/utils/entries',
	'value': require( '@stdlib/utils/entries' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/entries-in',
		'@stdlib/utils/from-entries',
		'@stdlib/utils/keys',
		'@stdlib/utils/values'
	]
});

ns.push({
	'alias': 'objectEntriesIn',
	'path': '@stdlib/utils/entries-in',
	'value': require( '@stdlib/utils/entries-in' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/entries',
		'@stdlib/utils/from-entries',
		'@stdlib/utils/keys-in',
		'@stdlib/utils/values-in'
	]
});

ns.push({
	'alias': 'objectFromEntries',
	'path': '@stdlib/utils/from-entries',
	'value': require( '@stdlib/utils/from-entries' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/entries'
	]
});

ns.push({
	'alias': 'objectInverse',
	'path': '@stdlib/utils/object-inverse',
	'value': require( '@stdlib/utils/object-inverse' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/object-inverse-by'
	]
});

ns.push({
	'alias': 'objectInverseBy',
	'path': '@stdlib/utils/object-inverse-by',
	'value': require( '@stdlib/utils/object-inverse-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/object-inverse'
	]
});

ns.push({
	'alias': 'objectKeys',
	'path': '@stdlib/utils/keys',
	'value': require( '@stdlib/utils/keys' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/entries',
		'@stdlib/utils/keys-in',
		'@stdlib/utils/nonindex-keys',
		'@stdlib/utils/values'
	]
});

ns.push({
	'alias': 'objectValues',
	'path': '@stdlib/utils/values',
	'value': require( '@stdlib/utils/values' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/entries',
		'@stdlib/utils/keys'
	]
});

ns.push({
	'alias': 'objectValuesIn',
	'path': '@stdlib/utils/values-in',
	'value': require( '@stdlib/utils/values-in' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/entries-in',
		'@stdlib/utils/keys-in',
		'@stdlib/utils/values'
	]
});

ns.push({
	'alias': 'omit',
	'path': '@stdlib/utils/omit',
	'value': require( '@stdlib/utils/omit' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/omit-by'
	]
});

ns.push({
	'alias': 'omitBy',
	'path': '@stdlib/utils/omit-by',
	'value': require( '@stdlib/utils/omit-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/omit'
	]
});

ns.push({
	'alias': 'open',
	'path': '@stdlib/fs/open',
	'value': require( '@stdlib/fs/open' ),
	'type': 'Function',
	'related': [
		'@stdlib/fs/close',
		'@stdlib/fs/exists',
		'@stdlib/fs/read-file'
	]
});

ns.push({
	'alias': 'openURL',
	'path': '@stdlib/utils/open-url',
	'value': require( '@stdlib/utils/open-url' ),
	'type': 'Function',
	'related': []
});


// EXPORTS //

module.exports = ns;
