#/
# @license Apache-2.0
#
# Copyright (c) 2019 The Stdlib Authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#/

# DEPENDENCIES #

# Note: keep in alphabetical order...
include $(TOOLS_MAKE_LIB_DIR)/lint/typescript/dtslint.mk


# RULES #

#/
# Lints TypeScript files.
#
# ## Notes
#
# -   This rule supports the environment variables supported by each context-specific (`lint-typescript-<context>`) prerequisite.
# -   This rule is useful when wanting to glob for files, irrespective of context, for a particular package in order to lint all contained TypeScript files.
#
# @param {string} [TYPESCRIPT_SOURCES_FILTER] - file path pattern (e.g., `.*/blas/base/dasum/.*`)
# @param {string} [TYPESCRIPT_TESTS_FILTER] - file path pattern (e.g., `.*/blas/base/dasum/.*`)
# @param {string} [TYPESCRIPT_DECLARATIONS_FILTER] - file path pattern (e.g., `.*/blas/base/dasum/.*`)
# @param {string} [TYPESCRIPT_EXAMPLES_FILTER] - file path pattern (e.g., `.*/blas/base/dasum/.*`)
# @param {*} [FAST_FAIL] - flag indicating whether to stop linting upon encountering a lint error
#
# @example
# make lint-typescript
#
# @example
# make lint-typescript TYPESCRIPT_SOURCES_FILTER=".*/blas/base/dasum/.*" TYPESCRIPT_TESTS_FILTER=".*/blas/base/dasum/.*" TYPESCRIPT_DECLARATIONS_FILTER=".*/blas/base/dasum/.*" TYPESCRIPT_EXAMPLES_FILTER=".*/blas/base/dasum/.*"
#/
lint-typescript: lint-typescript-src lint-typescript-tests lint-typescript-examples lint-typescript-declarations

.PHONY: lint-typescript

#/
# Lints TypeScript source files.
#
# ## Notes
#
# -   This rule is useful when wanting to glob for TypeScript source files (e.g., lint all TypeScript source files for a particular package).
#
# @param {string} [TYPESCRIPT_SOURCES_FILTER] - file path pattern (e.g., `.*/math/base/special/abs/.*`)
# @param {*} [FAST_FAIL] - flag indicating whether to stop linting upon encountering a lint error
#
# @example
# make lint-typescript-src
#
# @example
# make lint-typescript-src TYPESCRIPT_SOURCES_FILTER=".*/math/base/special/abs/.*"
#/
lint-typescript-src:
ifeq ($(TYPESCRIPT_LINTER), tslint)
	$(QUIET) NODE_ENV="$(NODE_ENV)" NODE_PATH="$(NODE_PATH)" $(MAKE) -f $(this_file) tslint-src
endif

.PHONY: lint-typescript-src

#/
# Lints TypeScript test files.
#
# ## Notes
#
# -   This rule is useful when wanting to glob for TypeScript test files (e.g., lint all TypeScript test files for a particular package).
#
# @param {string} [TYPESCRIPT_TESTS_FILTER] - file path pattern (e.g., `.*/math/base/special/abs/.*`)
# @param {*} [FAST_FAIL] - flag indicating whether to stop linting upon encountering a lint error
#
# @example
# make lint-typescript-tests
#
# @example
# make lint-typescript-tests TYPESCRIPT_TESTS_FILTER=".*/math/base/special/abs/.*"
#/
lint-typescript-tests:
ifeq ($(TYPESCRIPT_LINTER), tslint)
	$(QUIET) NODE_ENV="$(NODE_ENV)" NODE_PATH="$(NODE_PATH)" $(MAKE) -f $(this_file) tslint-tests
endif

.PHONY: lint-typescript-tests

#/
# Lints TypeScript examples files.
#
# ## Notes
#
# -   This rule is useful when wanting to glob for TypeScript examples files (e.g., lint all TypeScript examples files for a particular package).
#
# @param {string} [TYPESCRIPT_EXAMPLES_FILTER] - file path pattern (e.g., `.*/math/base/special/abs/.*`)
# @param {*} [FAST_FAIL] - flag indicating whether to stop linting upon encountering a lint error
#
# @example
# make lint-typescript-examples
#
# @example
# make lint-typescript-examples TYPESCRIPT_EXAMPLES_FILTER=".*/math/base/special/abs/.*"
#/
lint-typescript-examples:
ifeq ($(TYPESCRIPT_LINTER), tslint)
	$(QUIET) NODE_ENV="$(NODE_ENV)" NODE_PATH="$(NODE_PATH)" $(MAKE) -f $(this_file) tslint-examples
endif

.PHONY: lint-typescript-examples

#/
# Lints TypeScript declaration files.
#
# ## Notes
#
# -   This rule is useful when wanting to glob for TypeScript declaration files (e.g., lint all TypeScript declaration files for a particular package).
#
# @param {string} [TYPESCRIPT_DECLARATIONS_FILTER] - file path pattern (e.g., `.*/math/base/special/abs/.*`)
# @param {*} [FAST_FAIL] - flag indicating whether to stop linting upon encountering a lint error
#
# @example
# make lint-typescript-declarations
#
# @example
# make lint-typescript-declarations TYPESCRIPT_DECLARATIONS_FILTER=".*/math/base/special/abs/.*"
#/
lint-typescript-declarations:
ifeq ($(TYPESCRIPT_DECLARATIONS_LINTER), dtslint)
	$(QUIET) NODE_ENV="$(NODE_ENV)" NODE_PATH="$(NODE_PATH)" $(MAKE) -f $(this_file) dtslint-declarations
endif

.PHONY: lint-typescript-declarations

#/
# Lints a specified list of TypeScript files.
#
# ## Notes
#
# -   This rule is useful when wanting to lint a list of TypeScript files generated by some other command (e.g., a list of changed TypeScript files obtained via `git diff`).
#
# @param {string} FILES - list of TypeScript file paths
# @param {*} [FAST_FAIL] - flag indicating whether to stop linting upon encountering a lint error
#
# @example
# make lint-typescript-files FILES='/foo/index.js /bar/index.js'
#/
lint-typescript-files:
ifeq ($(TYPESCRIPT_LINTER), tslint)
	$(QUIET) NODE_ENV="$(NODE_ENV)" NODE_PATH="$(NODE_PATH)" FILES="$(FILES)" $(MAKE) -f $(this_file) tslint-files
endif

.PHONY: lint-typescript-files

#/
# Lints a specified list of TypeScript declaration files.
#
# ## Notes
#
# -   This rule is useful when wanting to lint a list of TypeScript declaration files generated by some other command (e.g., a list of changed TypeScript declaration files obtained via `git diff`).
#
# @param {string} FILES - list of TypeScript declaration file paths
# @param {*} [FAST_FAIL] - flag indicating whether to stop linting upon encountering a lint error
#
# @example
# make lint-typescript-declarations-files FILES='/foo/index.js /bar/index.js'
#/
lint-typescript-declarations-files:
ifeq ($(TYPESCRIPT_DECLARATIONS_LINTER), dtslint)
	$(QUIET) NODE_ENV="$(NODE_ENV)" NODE_PATH="$(NODE_PATH)" FILES="$(FILES)" $(MAKE) -f $(this_file) dtslint-files
endif

.PHONY: lint-typescript-declarations-files
