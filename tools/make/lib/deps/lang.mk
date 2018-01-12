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

include $(TOOLS_MAKE_LIB_DIR)/deps/python.mk
include $(TOOLS_MAKE_LIB_DIR)/deps/r.mk


# TARGETS #

# Install language dependencies.
#
# This target installs language dependencies:

install-lang-deps: install-deps-python install-deps-r

.PHONY: install-lang-deps


# Update language dependencies.
#
# This target updates language dependencies:

update-lang-deps: update-deps-python update-deps-r

.PHONY: update-lang-deps


# Clean language dependencies.
#
# This target removes language dependencies.

clean-lang-deps: clean-deps-python clean-deps-r

.PHONY: clean-lang-deps
