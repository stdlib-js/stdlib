#/
# @license Apache-2.0
#
# Copyright 2017 The Stdlib Authors
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

# TARGETS #

# Install node module dependencies.
#
# This target installs package dependencies by executing [`npm install`][1]. Packages will be installed in a local `node_modules` directory relative to the project's `package.json` file.
#
# [1]: https://docs.npmjs.com/cli/install

install-node-modules: $(ROOT_PACKAGE_JSON)
	$(QUIET) $(NPM) install

.PHONY: install-node-modules


# De-duplicate node module dependencies.
#
# This target searches the local package tree and attempts to simplify the overall structure by moving dependencies further up the tree, where they can be more effectively shared by multiple dependent packages.

dedupe-node-modules: $(NODE_MODULES)
	$(QUIET) $(NPM) dedupe

.PHONY: dedupe-node-modules


# Remove node module dependencies.
#
# This target cleans the `node_modules` directory by removing it entirely.

clean-node-modules:
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(NODE_MODULES)

.PHONY: clean-node-modules
