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

# Define the path to the executable for generating REPL help docs:
REPL_HELP ?= $(SRC_DIR)/@stdlib/repl/help/scripts/build.js

# Define the path to the executable for aggregating REPL examples:
REPL_EXAMPLES ?= $(SRC_DIR)/@stdlib/repl/code-blocks/scripts/build.js


# TARGETS #

# Generate REPL docs.
#
# This target generates REPL documentation.

repl-docs: repl-help repl-examples

.PHONY: repl-docs


# Generate REPL help.
#
# This target generates REPL help documentation.

repl-help: $(NODE_MODULES) $(REPL_HELP)
	$(QUIET) $(NODE) $(REPL_HELP)

.PHONY: repl-help


# Aggregate REPL examples.
#
# This target aggregates REPL examples.

repl-examples: $(NODE_MODULES) $(REPL_EXAMPLES)
	$(QUIET) $(NODE) $(REPL_EXAMPLES)

.PHONY: repl-examples
