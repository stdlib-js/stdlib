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

# Define the download URL:
DEPS_BOOST_URL ?= https://sourceforge.net/projects/boost/files/boost/$(DEPS_BOOST_VERSION)/boost_$(deps_boost_version_slug).tar.gz

# Determine the basename for the download:
deps_boost_basename := $(notdir $(DEPS_BOOST_URL))

# Define the path to the file containing a checksum to verify a download:
DEPS_BOOST_CHECKSUM ?= $(shell $(CAT) $(DEPS_CHECKSUMS_DIR)/$(subst .,_,$(deps_boost_basename))/sha256)

# Define the output path when downloading:
DEPS_BOOST_DOWNLOAD_OUT ?= $(DEPS_TMP_DIR)/$(deps_boost_basename)

# Define the path to the directory containing tests:
DEPS_BOOST_TEST_DIR ?= $(DEPS_DIR)/test/boost

# Define the output directory path for compiled tests:
DEPS_BOOST_TEST_OUT ?= $(DEPS_BOOST_TEST_DIR)/build

# Define the path to a test file for checking an installation:
DEPS_BOOST_TEST_INSTALL ?= $(DEPS_BOOST_TEST_DIR)/test_install.cpp

# Define the output path for a test file:
DEPS_BOOST_TEST_INSTALL_OUT ?= $(DEPS_BOOST_TEST_OUT)/test_install


# RULES #

#/
# Downloads a Boost distribution.
#
# @private
#/
$(DEPS_BOOST_DOWNLOAD_OUT): | $(DEPS_TMP_DIR)
	$(QUIET) echo 'Downloading Boost...' >&2
	$(QUIET) $(DEPS_DOWNLOAD_BIN) $(DEPS_BOOST_URL) $(DEPS_BOOST_DOWNLOAD_OUT)

#/
# Extracts a Boost gzipped tar archive.
#
# @private
#/
$(DEPS_BOOST_BUILD_OUT): $(DEPS_BOOST_DOWNLOAD_OUT) | $(DEPS_BUILD_DIR)
	$(QUIET) echo 'Extracting Boost...' >&2
	$(QUIET) $(TAR) -zxf $(DEPS_BOOST_DOWNLOAD_OUT) -C $(DEPS_BUILD_DIR)

#/
# Creates a directory for storing compiled tests.
#
# @private
#/
$(DEPS_BOOST_TEST_OUT):
	$(QUIET) $(MKDIR_RECURSIVE) $(DEPS_BOOST_TEST_OUT)

#/
# Compiles a test file for testing a Boost installation.
#
# @private
#/
$(DEPS_BOOST_TEST_INSTALL_OUT): $(DEPS_BOOST_BUILD_OUT) $(DEPS_BOOST_TEST_OUT)
	$(QUIET) $(CXX) -I $(DEPS_BOOST_BUILD_OUT) $(DEPS_BOOST_TEST_INSTALL) -o $(DEPS_BOOST_TEST_INSTALL_OUT)

#/
# Downloads a Boost distribution.
#
# @private
#
# @example
# make deps-download-boost
#/
deps-download-boost: $(DEPS_BOOST_DOWNLOAD_OUT)

.PHONY: deps-download-boost

#/
# Verifies a downloaded Boost distribution.
#
# @private
#
# @example
# make deps-verify-boost
#/
deps-verify-boost: deps-download-boost
	$(QUIET) echo 'Verifying download...' >&2
	$(QUIET) $(DEPS_CHECKSUM_BIN) $(DEPS_BOOST_DOWNLOAD_OUT) $(DEPS_BOOST_CHECKSUM) >&2

.PHONY: deps-verify-boost

#/
# Extracts a downloaded Boost distribution.
#
# @private
#
# @example
# make deps-extract-boost
#/
deps-extract-boost: $(DEPS_BOOST_BUILD_OUT)

.PHONY: deps-extract-boost

#/
# Tests an installed Boost distribution.
#
# @private
#
# @example
# make deps-test-boost
#/
deps-test-boost: $(DEPS_BOOST_TEST_INSTALL_OUT)
	$(QUIET) echo 'Running tests...' >&2
	$(QUIET) echo 1 2 3 | $(DEPS_BOOST_TEST_INSTALL_OUT)
	$(QUIET) echo '' >&2
	$(QUIET) echo 'Success.' >&2

.PHONY: deps-test-boost

#/
# Installs Boost.
#
# @example
# make install-deps-boost
#/
install-deps-boost: deps-download-boost deps-verify-boost deps-extract-boost deps-test-boost

.PHONY: install-deps-boost

#/
# Removes an installed Boost distribution.
#
# ## Notes
#
# -   The rule does **not** remove a Boost download (if one exists).
#
# @example
# make clean-deps-boost
#/
clean-deps-boost: clean-deps-boost-tests
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(DEPS_BOOST_BUILD_OUT)

.PHONY: clean-deps-boost

#/
# Removes compiled Boost installation tests.
#
# @example
# make clean-deps-boost-tests
#/
clean-deps-boost-tests:
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(DEPS_BOOST_TEST_OUT)

.PHONY: clean-deps-boost-tests
