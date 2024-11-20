/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

/**
* Custom prompt configuration.
*
* @name config
* @type {Object
*/
var config = {
	'questions': {}
};

/**
* Question for selecting the commit type.
*
* @name type
* @memberof config.questions
* @type {Object}
*/
config.questions[ 'type' ] = {
	'description': 'Select the type of change that you\'re committing',
	'enum': {
		'feat': {
			'description': 'New feature',
			'title': 'Features',
			'emoji': '✨'
		},
		'fix': {
			'description': 'Bug fix, including changes to the behavior of existing features and including changes that remove or mitigate security vulnerabilities',
			'title': 'Bug Fixes',
			'emoji': '🐛'
		},
		'remove': {
			'description': 'Remove feature',
			'title': 'Removed Features',
			'emoji': '🗑'
		},
		'deprecate': {
			'description': 'Deprecate feature',
			'title': 'Deprecations',
			'emoji': '⚠️'
		},
		'perf': {
			'description': 'Improve performance',
			'title': 'Performance Improvements',
			'emoji': '🚀'
		},
		'docs': {
			'description': 'Documentation-only change, including READMEs, JSDoc/Doxygen-style comments, source comments, annotations, and examples (including examples files) and excluding TypeScript declarations',
			'title': 'Documentation',
			'emoji': '📚'
		},
		'test': {
			'description': 'Test-only change, including adding missing tests or correcting existing tests',
			'title': 'Tests',
			'emoji': '🚨'
		},
		'bench': {
			'description': 'Benchmark-only change (e.g., adding missing benchmarks or correcting existing benchmarks)',
			'title': 'Benchmarks',
			'emoji': '⏱'
		},
		'build': {
			'description': 'Update how the project is built and released, including changes to automation and CI configuration files and scripts',
			'title': 'Build Changes',
			'emoji': '🛠'
		},
		'refactor': {
			'description': 'Neither a fix nor a feature (i.e., a change which does not affect behavior as experienced by downstream consumers',
			'title': 'Code Refactoring',
			'emoji': '🚧'
		},
		'style': {
			'description': 'Improve code style, including changes to whitespace, formatting, semicolons, etc, which do not affect the meaning of code',
			'title': 'Style Updates',
			'emoji': '💎'
		},
		'chore': {
			'description': 'Neither a fix, a feature, nor a refactor (i.e., a repetitive mechanical task, such as updating package meta data or updating external dependencies)',
			'title': 'Chores',
			'emoji': '🧺'
		},
		'temp': {
			'description': 'Temporary, experimental, or exploratory change that is not intended to be permanent (e.g., as may be desired when debugging CI or when ad-hoc debugging on live systems)',
			'title': 'Temporary Changes',
			'emoji': '💡'
		},
		'revert': {
			'description': 'Revert previous commit',
			'title': 'Reverted Changes',
			'emoji': '♻️'
		}
	}
};

/**
* Question for providing a short description.
*
* @name subject
* @memberof config.questions
* @type {Object}
*/
config.questions[ 'subject' ] = {
	'description': 'Write a short description of the change using the imperative mood'
};

/**
* Question for providing a long description.
*
* @name body
* @memberof config.questions
* @type {Object}
*/
config.questions[ 'body' ] = {
	'description': 'Provide a longer description of the change'
};

/**
* Question for indicating whether a change is breaking.
*
* @name isBreaking
* @memberof config.questions
* @type {Object}
*/
config.questions[ 'isBreaking' ] = {
	'description': 'Are there any breaking changes?'
};

/**
* Question for providing a short summary of a breaking change.
*
* @name breaking
* @memberof config.questions
* @type {Object}
*/
config.questions[ 'breaking' ] = {
	'description': 'Write a short description of the breaking change'
};

/**
* Question for providing a longer description of a breaking change.
*
* @name breakingCode
* @memberof config.questions
* @type {Object}
*/
config.questions[ 'breakingCode' ] = {
	'description': 'A BREAKING CHANGE commit should typically include a detailed description and migration instructions. If applicable, please enter a longer description'
};

/**
* Question for providing a short summary of a breaking change.
*
* @name breaking
* @memberof config.questions
* @type {Object}
*/
config.questions[ 'breaking' ] = {
	'description': 'Write a short description of the breaking change'
};

/**
* Question for indicating whether a change affects any issues.
*
* @name isIssueAffected
* @memberof config.questions
* @type {Object}
*/
config.questions[ 'isIssueAffected' ] = {
	'description': 'Does this change affect any issues?'
};

/**
* Question for listing issue references.
*
* @name issues
* @memberof config.questions
* @type {Object}
*/
config.questions[ 'issues' ] = {
	'description': 'Please list affected issues (e.g., "fix #123", "close #456", etc)'
};


// EXPORTS //

module.exports = config;
