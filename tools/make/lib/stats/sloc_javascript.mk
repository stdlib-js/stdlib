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

# Define the path of the executable for calculating JavaScript SLOC:
JAVASCRIPT_SLOC ?= $(TOOLS_PKGS_DIR)/static-analysis/js/sloc-file-list/bin/cli

# Define the command flags:
JAVASCRIPT_SLOC_FLAGS ?=


# TARGETS #

# Calculate SLOC.
#
# This target calculates JavaScript source lines of code (SLOC).

stats-sloc-javascript: stats-sloc-javascript-src stats-sloc-javascript-tests stats-sloc-javascript-examples stats-sloc-javascript-benchmarks

.PHONY: stats-sloc-javascript


# Calculate source code SLOC.
#
# This target calculates source lines of code (SLOC) for only JavaScript source files.

stats-sloc-javascript-src: $(JAVASCRIPT_SLOC) $(NODE_MODULES)
	$(QUIET) $(FIND_SOURCES_CMD) | NODE_PATH="$(NODE_PATH)" $(NODE) $(JAVASCRIPT_SLOC) $(JAVASCRIPT_SLOC_FLAGS)

.PHONY: stats-sloc-javascript-src


# Calculate test SLOC.
#
# This target calculates source lines of code (SLOC) for only JavaScript test files.

stats-sloc-javascript-tests: $(JAVASCRIPT_SLOC) $(NODE_MODULES)
	$(QUIET) $(FIND_TESTS_CMD) | NODE_PATH="$(NODE_PATH)" $(NODE) $(JAVASCRIPT_SLOC) $(JAVASCRIPT_SLOC_FLAGS)

.PHONY: stats-sloc-javascript-tests


# Calculate example code SLOC.
#
# This target calculates source lines of code (SLOC) for only JavaScript example files.

stats-sloc-javascript-examples: $(JAVASCRIPT_SLOC) $(NODE_MODULES)
	$(QUIET) $(FIND_EXAMPLES_CMD) | NODE_PATH="$(NODE_PATH)" $(NODE) $(JAVASCRIPT_SLOC) $(JAVASCRIPT_SLOC_FLAGS)

.PHONY: stats-sloc-javascript-examples


# Calculate benchmark SLOC.
#
# This target calculates source lines of code (SLOC) for only JavaScript benchmark files.

stats-sloc-javascript-benchmarks: $(JAVASCRIPT_SLOC) $(NODE_MODULES)
	$(QUIET) $(FIND_BENCHMARKS_CMD) | NODE_PATH="$(NODE_PATH)" $(NODE) $(JAVASCRIPT_SLOC) $(JAVASCRIPT_SLOC_FLAGS)

.PHONY: stats-sloc-javascript-benchmarks


# Calculate SLOC.
#
# This target calculates source lines of code (SLOC) for JavaScript files. Note that we expect `$FILES` to be a JavaScript file list.
#
# TODO: address possibility of `$FILES` exceeding maximum allowed shell arguments

stats-sloc-javascript-files: $(JAVASCRIPT_SLOC) $(NODE_MODULES)
	$(QUIET) NODE_PATH="$(NODE_PATH)" $(NODE) $(JAVASCRIPT_SLOC) $(JAVASCRIPT_SLOC_FLAGS) $(FILES)

.PHONY: stats-sloc-javascript-files
