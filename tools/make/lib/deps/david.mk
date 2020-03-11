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

# Define the path of the [david][1] executable:
#
# To install david:
#
# ```bash
# $ npm install david
# ```
#
# [1]: https://www.npmjs.com/package/david
DAVID ?= $(BIN_DIR)/david

# Define the path to a `package.json` for manually managed node module dependencies:
DAVID_PACKAGE_JSON ?= $(CONFIG_DIR)/david/.pkg.json

# Define the command-line options to use when invoking the `david` executable:
DAVID_FLAGS ?= \
	--ignore update-notifier \
	--ignore chai \
	--ignore debug \
	--ignore ajv \
	--ignore d3-scale \
	--ignore readable-stream \
	--ignore mkdirp \
	--ignore semver


# TARGETS #

# Check JavaScript dependencies.
#
# This target checks JavaScript dependencies for updates and security vulnerabilities.

check-javascript-deps: check-javascript-deps-main check-javascript-deps-manual

.PHONY: check-javascript-deps


# Check JavaScript dependencies.
#
# This target checks JavaScript node module dependencies which are managed via `npm` for updates and security vulnerabilities.

check-javascript-deps-main: $(NODE_MODULES)
	$(QUIET) $(DAVID) $(DAVID_FLAGS) --package $(ROOT_PACKAGE_JSON)

.PHONY: check-javascript-deps-main


# Check JavaScript dependencies.
#
# This target checks JavaScript node module dependencies which are manually managed for updates and security vulnerabilities.

check-javascript-deps-manual: $(NODE_MODULES)
	$(QUIET) $(DAVID) $(DAVID_FLAGS) --package $(DAVID_PACKAGE_JSON)

.PHONY: check-javascript-deps-manual
