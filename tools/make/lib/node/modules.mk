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

# Define a path to a utility for printing the list of node module dependencies to install:
print_npm_install_deps := $(TOOLS_PKGS_DIR)/scripts/print_npm_install_deps

# Define the file path for storing the list of node module dependencies to install:
npm_install_deps_file := $(CONFIG_DIR)/npm/deps.txt


# RULES #

#/
# Generates a file containing a list of node module dependencies to install.
#
# @private
#/
$(npm_install_deps_file): $(ROOT_PACKAGE_JSON) $(print_npm_install_deps)
	$(QUIET) $(NODE) $(print_npm_install_deps) > $(npm_install_deps_file)

#/
# Installs node module dependencies.
#
# ## Notes
#
# -   Packages are installed in a local `node_modules` directory relative to the project's `package.json` file.
#
# @example
# make install-node-modules
#/
install-node-modules: $(npm_install_deps_file)
	$(QUIET) $(MV) "$(ROOT_PACKAGE_JSON)" "$(ROOT_PACKAGE_JSON).copy"
	$(QUIET) { cat $(npm_install_deps_file) | xargs $(NPM) install --no-save && $(MV) "$(ROOT_PACKAGE_JSON).copy" "$(ROOT_PACKAGE_JSON)"; } || { $(MV) "$(ROOT_PACKAGE_JSON).copy" "$(ROOT_PACKAGE_JSON)" && exit 1; }

.PHONY: install-node-modules

#/
# De-duplicates node module dependencies.
#
# ## Notes
#
# -   This recipe searches the local package tree and attempts to simplify the overall structure by moving dependencies further up the tree, where they can be more effectively shared by multiple dependent packages.
#
# @example
# make dedupe-node-modules
#/
dedupe-node-modules: $(NODE_MODULES)
	$(QUIET) $(NPM) dedupe

.PHONY: dedupe-node-modules

#/
# Removes node module dependencies.
#
# ## Notes
#
# -   The `node_modules` directory is removed entirely.
#
# @example
# make clean-node-modules
#/
clean-node-modules:
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(NODE_MODULES)

.PHONY: clean-node-modules
