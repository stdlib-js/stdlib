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

# Please keep in alphabetical order...
include $(TOOLS_MAKE_LIB_DIR)/install/addons.mk
include $(TOOLS_MAKE_LIB_DIR)/install/modules.mk


# RULES #

#/
# Runs the Node.js install sequence.
#
# ## Notes
#
# -   This recipe installs node module dependencies and compiles native add-ons.
#
# @example
# make install-node
#/
install-node: install-node-modules

.PHONY: install-node

#/
# Runs cleanup tasks specific to Node.js.
#
# ## Notes
#
# -   This recipe removes node module dependencies and native add-ons.
#
# @example
# make clean-node
#/
clean-node: clean-node-modules

.PHONY: clean-node
