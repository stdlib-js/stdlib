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

# VARIABLES #

# Define the path of the executable for calculating JavaScript LLOC:
JAVASCRIPT_LLOC ?= $(TOOLS_PKGS_DIR)/static-analysis/js/lloc-file-list/bin/cli

# Define the command flags:
JAVASCRIPT_LLOC_FLAGS ?=


# TARGETS #

# Calculate LLOC.
#
# This target calculates JavaScript logical lines of code (LLOC).

stats-lloc-javascript: stats-lloc-javascript-src stats-lloc-javascript-tests stats-lloc-javascript-examples stats-lloc-javascript-benchmarks

.PHONY: stats-lloc-javascript


# Calculate source code LLOC.
#
# This target calculates logical lines of code (LLOC) for only JavaScript source files.

stats-lloc-javascript-src: $(JAVASCRIPT_LLOC) $(NODE_MODULES)
	$(QUIET) $(FIND_SOURCES_CMD) | NODE_PATH="$(NODE_PATH)" $(NODE) $(JAVASCRIPT_LLOC) $(JAVASCRIPT_LLOC_FLAGS)

.PHONY: stats-lloc-javascript-src


# Calculate test LLOC.
#
# This target calculates logical lines of code (LLOC) for only JavaScript test files.

stats-lloc-javascript-tests: $(JAVASCRIPT_LLOC) $(NODE_MODULES)
	$(QUIET) $(FIND_TESTS_CMD) | NODE_PATH="$(NODE_PATH)" $(NODE) $(JAVASCRIPT_LLOC) $(JAVASCRIPT_LLOC_FLAGS)

.PHONY: stats-lloc-javascript-tests


# Calculate example code LLOC.
#
# This target calculates logical lines of code (LLOC) for only JavaScript example files.

stats-lloc-javascript-examples: $(JAVASCRIPT_LLOC) $(NODE_MODULES)
	$(QUIET) $(FIND_EXAMPLES_CMD) | NODE_PATH="$(NODE_PATH)" $(NODE) $(JAVASCRIPT_LLOC) $(JAVASCRIPT_LLOC_FLAGS)

.PHONY: stats-lloc-javascript-examples


# Calculate benchmark LLOC.
#
# This target calculates logical lines of code (LLOC) for only JavaScript benchmark files.

stats-lloc-javascript-benchmarks: $(JAVASCRIPT_LLOC) $(NODE_MODULES)
	$(QUIET) $(FIND_BENCHMARKS_CMD) | NODE_PATH="$(NODE_PATH)" $(NODE) $(JAVASCRIPT_LLOC) $(JAVASCRIPT_LLOC_FLAGS)

.PHONY: stats-lloc-javascript-benchmarks


# Calculate LLOC.
#
# This target calculates logical lines of code (LLOC) for JavaScript files. Note that we expect `$FILES` to be a JavaScript file list.
#
# TODO: address possibility of `$FILES` exceeding maximum allowed shell arguments

stats-lloc-javascript-files: $(JAVASCRIPT_LLOC) $(NODE_MODULES)
	$(QUIET) NODE_PATH="$(NODE_PATH)" $(NODE) $(JAVASCRIPT_LLOC) $(JAVASCRIPT_LLOC_FLAGS) $(FILES)

.PHONY: stats-lloc-javascript-files
