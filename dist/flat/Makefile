#/
# @license Apache-2.0
#
# Copyright (c) 2020 The Stdlib Authors.
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

ifndef VERBOSE
	QUIET := @
else
	QUIET :=
endif

# Define the command for `node`:
ifdef NODE
	node := $(NODE)
else
	node := node
endif

# Define the `NODE_PATH` environment variable:
ifdef NODE_PATH
	node_path := $(NODE_PATH)
else
	node_path :=
endif

# List of bundle targets:
bundle_targets := ./build/bundle.min.js


# RULES #

#/
# Generates bundles.
#
# @example
# make
#
# @example
# make all
#/
all: $(bundle_targets) test examples

.PHONY: all

#/
# Generates bundles.
#
# @private
#/
$(bundle_targets):
	$(QUIET) NODE_PATH="$(node_path)" $(node) ./scripts/build.js

#/
# Runs examples.
#
# @example
# make examples
#/
examples: $(bundle_targets)
	$(QUIET) echo 'Running examples...'
	$(QUIET) for file in ./examples/*.js; do \
		echo "Running file: $$file"; \
		NODE_PATH="$(node_path)" $(node) $$file || exit 1; \
	done

.PHONY: examples

#/
# Tests generated bundles.
#
# @example
# make test
#/
test: $(bundle_targets)
	$(QUIET) echo 'Running tests...'
	$(QUIET) for file in ./test/test*.js; do \
		echo "Running file: $$file"; \
		NODE_PATH="$(node_path)" $(node) $$file || exit 1; \
	done

.PHONY: test

#/
# Removes generated files.
#
# @example
# make clean
#/
clean:
	$(QUIET) -rm -rf ./build

.PHONY: clean
