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

# RULES #

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
install-node-modules: $(ROOT_PACKAGE_JSON)
	$(QUIET) $(NPM) install --no-save

.PHONY: install-node-modules

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
