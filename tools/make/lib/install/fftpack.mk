#/
# @license Apache-2.0
#
# Copyright (c) 2026 The Stdlib Authors.
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
DEPS_FFTPACK_URL ?= https://github.com/marton78/pffft/archive/refs/tags/v$(DEPS_FFTPACK_VERSION).tar.gz

# Determine the basename for the download:
deps_fftpack_basename := pffft-$(DEPS_FFTPACK_VERSION).tar.gz

# Define the path to the file containing a checksum to verify a download:
DEPS_FFTPACK_CHECKSUM ?= $(shell $(CAT) $(DEPS_CHECKSUMS_DIR)/$(subst .,_,$(subst -,_,$(deps_fftpack_basename)))/sha256)

# Define the output path when downloading:
DEPS_FFTPACK_DOWNLOAD_OUT ?= $(DEPS_TMP_DIR)/$(deps_fftpack_basename)

# Define a list of source files:
deps_fftpack_src := \
	src/fftpack.c

# Resolve a list of source files to absolute filepaths:
DEPS_FFTPACK_SRC ?= $(addprefix $(DEPS_FFTPACK_BUILD_OUT)/,$(deps_fftpack_src))

# Define the path to the directory containing tests:
DEPS_FFTPACK_TEST_DIR ?= $(DEPS_DIR)/test/fftpack

# Define the output directory path for compiled tests:
DEPS_FFTPACK_TEST_OUT ?= $(DEPS_FFTPACK_TEST_DIR)/build

# Define the path to a test file for checking an installation:
DEPS_FFTPACK_TEST_INSTALL ?= $(DEPS_FFTPACK_TEST_DIR)/test_install.c

# Define the output path for a test file:
DEPS_FFTPACK_TEST_INSTALL_OUT ?= $(DEPS_FFTPACK_TEST_OUT)/test_install


# RULES #

#/
# Downloads an FFTPACK distribution.
#
# @private
#/
$(DEPS_FFTPACK_DOWNLOAD_OUT): | $(DEPS_TMP_DIR)
	$(QUIET) echo 'Downloading FFTPACK...' >&2
	$(QUIET) $(DEPS_DOWNLOAD_BIN) $(DEPS_FFTPACK_URL) $(DEPS_FFTPACK_DOWNLOAD_OUT)

#/
# Extracts an FFTPACK gzipped tar archive.
#
# @private
#/
$(DEPS_FFTPACK_BUILD_OUT): $(DEPS_FFTPACK_DOWNLOAD_OUT) | $(DEPS_BUILD_DIR)
	$(QUIET) echo 'Extracting FFTPACK...' >&2
	$(QUIET) $(TAR) -zxf $(DEPS_FFTPACK_DOWNLOAD_OUT) -C $(DEPS_BUILD_DIR)

#/
# Creates a directory for storing compiled tests.
#
# @private
#/
$(DEPS_FFTPACK_TEST_OUT):
	$(QUIET) $(MKDIR_RECURSIVE) $(DEPS_FFTPACK_TEST_OUT)

#/
# Compiles a test file for testing an FFTPACK installation.
#
# @private
#/
$(DEPS_FFTPACK_TEST_INSTALL_OUT): $(DEPS_FFTPACK_BUILD_OUT) $(DEPS_FFTPACK_TEST_OUT)
	$(QUIET) $(CC) -I $(DEPS_FFTPACK_BUILD_OUT) $(DEPS_FFTPACK_TEST_INSTALL) $(DEPS_FFTPACK_SRC) -o $(DEPS_FFTPACK_TEST_INSTALL_OUT)

#/
# Downloads an FFTPACK distribution.
#
# @private
#
# @example
# make deps-download-fftpack
#/
deps-download-fftpack: $(DEPS_FFTPACK_DOWNLOAD_OUT)

.PHONY: deps-download-fftpack

#/
# Verifies a downloaded FFTPACK distribution.
#
# @private
#
# @example
# make deps-verify-fftpack
#/
deps-verify-fftpack: deps-download-fftpack
	$(QUIET) echo 'Verifying download...' >&2
	$(QUIET) $(DEPS_CHECKSUM_BIN) $(DEPS_FFTPACK_DOWNLOAD_OUT) $(DEPS_FFTPACK_CHECKSUM) >&2

.PHONY: deps-verify-fftpack

#/
# Extracts a downloaded FFTPACK distribution.
#
# @private
#
# @example
# make deps-extract-fftpack
#/
deps-extract-fftpack: $(DEPS_FFTPACK_BUILD_OUT)

.PHONY: deps-extract-fftpack

#/
# Tests an installed FFTPACK distribution.
#
# @private
#
# @example
# make deps-test-fftpack
#/
deps-test-fftpack: $(DEPS_FFTPACK_TEST_INSTALL_OUT)
	$(QUIET) echo 'Running tests...' >&2
	$(QUIET) $(DEPS_FFTPACK_TEST_INSTALL_OUT)
	$(QUIET) echo '' >&2
	$(QUIET) echo 'Success.' >&2

.PHONY: deps-test-fftpack

#/
# Installs FFTPACK.
#
# @example
# make install-deps-fftpack
#/
install-deps-fftpack: deps-download-fftpack deps-verify-fftpack deps-extract-fftpack deps-test-fftpack

.PHONY: install-deps-fftpack

#/
# Removes an installed FFTPACK distribution.
#
# ## Notes
#
# -   The rule does **not** remove an FFTPACK download (if one exists).
#
# @example
# make clean-deps-fftpack
#/
clean-deps-fftpack: clean-deps-fftpack-tests
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(DEPS_FFTPACK_BUILD_OUT)

.PHONY: clean-deps-fftpack

#/
# Removes compiled FFTPACK installation tests.
#
# @example
# make clean-deps-fftpack-tests
#/
clean-deps-fftpack-tests:
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(DEPS_FFTPACK_TEST_OUT)

.PHONY: clean-deps-fftpack-tests
