#/
# @license Apache-2.0
#
# Copyright (c) 2017 The Stdlib Authors.
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

include $(TOOLS_MAKE_LIB_DIR)/lint/javascript/jshint.mk
include $(TOOLS_MAKE_LIB_DIR)/lint/javascript/eslint.mk


# RULES #

# Check code quality.
#
# This target lints all JavaScript source code.

lint-javascript: lint-javascript-src lint-javascript-tests lint-javascript-examples lint-javascript-benchmarks

.PHONY: lint-javascript


# Check source code quality.
#
# This target lints only JavaScript source files.

lint-javascript-src:
ifeq ($(JAVASCRIPT_LINTER), jshint)
	$(QUIET) NODE_ENV="$(NODE_ENV)" NODE_PATH="$(NODE_PATH)" $(MAKE) -f $(this_file) jshint-src
else
ifeq ($(JAVASCRIPT_LINTER), eslint)
	$(QUIET) NODE_ENV="$(NODE_ENV)" NODE_PATH="$(NODE_PATH)" $(MAKE) -f $(this_file) eslint-src
endif
endif

.PHONY: lint-javascript-src


# Check test code quality.
#
# This target lints only JavaScript test files.

lint-javascript-tests:
ifeq ($(JAVASCRIPT_LINTER), jshint)
	$(QUIET) NODE_ENV="$(NODE_ENV)" NODE_PATH="$(NODE_PATH)" $(MAKE) -f $(this_file) jshint-tests
else
ifeq ($(JAVASCRIPT_LINTER), eslint)
	$(QUIET) NODE_ENV="$(NODE_ENV)" NODE_PATH="$(NODE_PATH)" $(MAKE) -f $(this_file) eslint-tests
endif
endif

.PHONY: lint-javascript-tests


# Check example code quality.
#
# This target lints only JavaScript example files.

lint-javascript-examples:
ifeq ($(JAVASCRIPT_LINTER), jshint)
	$(QUIET) NODE_ENV="$(NODE_ENV)" NODE_PATH="$(NODE_PATH)" $(MAKE) -f $(this_file) jshint-examples
else
ifeq ($(JAVASCRIPT_LINTER), eslint)
	$(QUIET) NODE_ENV="$(NODE_ENV)" NODE_PATH="$(NODE_PATH)" $(MAKE) -f $(this_file) eslint-examples
endif
endif

.PHONY: lint-javascript-examples


# Check benchmark code quality.
#
# This target lints only JavaScript benchmark files.

lint-javascript-benchmarks:
ifeq ($(JAVASCRIPT_LINTER), jshint)
	$(QUIET) NODE_ENV="$(NODE_ENV)" NODE_PATH="$(NODE_PATH)" $(MAKE) -f $(this_file) jshint-benchmarks
else
ifeq ($(JAVASCRIPT_LINTER), eslint)
	$(QUIET) NODE_ENV="$(NODE_ENV)" NODE_PATH="$(NODE_PATH)" $(MAKE) -f $(this_file) eslint-benchmarks
endif
endif

.PHONY: lint-javascript-benchmarks


# Check JavaScript code quality.
#
# This target lints JavaScript files. Note that we expect `$FILES` to be a JavaScript file list.

lint-javascript-files:
ifeq ($(JAVASCRIPT_LINTER), jshint)
	$(QUIET) NODE_ENV="$(NODE_ENV)" NODE_PATH="$(NODE_PATH)" FILES="$(FILES)" $(MAKE) -f $(this_file) jshint-files
else
ifeq ($(JAVASCRIPT_LINTER), eslint)
	$(QUIET) NODE_ENV="$(NODE_ENV)" NODE_PATH="$(NODE_PATH)" FILES="$(FILES)" $(MAKE) -f $(this_file) eslint-files
endif
endif

.PHONY: lint-javascript-files

