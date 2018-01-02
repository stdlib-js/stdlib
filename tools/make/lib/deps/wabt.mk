
# VARIABLES #

# Define the path to an executable for checking CMake:
DEPS_CHECK_CMAKE ?= $(TOOLS_DIR)/scripts/check_cmake

# Define the path to an executable for checking git:
DEPS_CHECK_GIT ?= $(TOOLS_DIR)/scripts/check_git

# Define the download URL:
DEPS_WABT_URL ?= https://github.com/WebAssembly/wabt

# Determine the basename for the download:
deps_wabt_basename := wabt

# Define the path to the file containing a checksum to verify a download:
DEPS_WABT_CHECKSUM ?= $(shell cat $(DEPS_CHECKSUMS_DIR)/$(subst .,_,$(deps_wabt_basename))/sha256)

# Define the output path when downloading:
DEPS_WABT_DOWNLOAD_OUT ?= $(DEPS_TMP_DIR)/$(deps_wabt_basename)

# Define the output path after extracting:
deps_wabt_extract_out := $(DEPS_BUILD_DIR)/wabt_extracted

# Define the path to the directory containing tests:
DEPS_WABT_TEST_DIR ?= $(DEPS_DIR)/test/wabt

# Define the output directory path for compiled tests:
DEPS_WABT_TEST_OUT ?= $(DEPS_WABT_TEST_DIR)/build

# Define the path to a test file for checking an installation:
DEPS_WABT_TEST_INSTALL ?= $(DEPS_WABT_TEST_DIR)/test_install.wasm

# Define output path for a compiled test file:
DEPS_WABT_TEST_INSTALL_WAT_OUT ?= $(DEPS_WABT_TEST_OUT)/test.wat
DEPS_WABT_TEST_INSTALL_WASM_OUT ?= $(DEPS_WABT_TEST_OUT)/test.wasm


# TARGETS #

# Download.
#
# This target downloads the WebAssembly Binary Toolkit (WABT).

$(DEPS_WABT_DOWNLOAD_OUT): | $(DEPS_TMP_DIR)
	$(QUIET) echo 'Downloading WebAssembly Binary Toolkit...' >&2
	$(QUIET) $(GIT) clone --recursive $(DEPS_WABT_URL) $(DEPS_WABT_DOWNLOAD_OUT)


# Extract.
#
# This target extracts a download.

$(DEPS_WABT_BUILD_OUT): | $(DEPS_BUILD_DIR) $(DEPS_WABT_DOWNLOAD_OUT)
	$(QUIET) echo 'Extracting WebAssembly Binary Toolkit...' >&2
	$(QUIET) $(CP) -a $(DEPS_WABT_DOWNLOAD_OUT) $(deps_wabt_extract_out)
	$(QUIET) mv $(deps_wabt_extract_out) $(DEPS_WABT_BUILD_OUT)


# Create directory for tests.
#
# This target creates a directory for storing compiled tests.

$(DEPS_WABT_TEST_OUT):
	$(QUIET) $(MKDIR_RECURSIVE) $(DEPS_WABT_TEST_OUT)


# Compile install WAT test.
#
# This target compiles a WAT test file for testing an installation.

$(DEPS_WABT_TEST_INSTALL_WAT_OUT): $(DEPS_WABT_BUILD_OUT) $(DEPS_WABT_TEST_OUT)
	$(QUIET) $(DEPS_WABT_WASM2WAT) $(DEPS_WABT_TEST_INSTALL) \
		-o $(DEPS_WABT_TEST_INSTALL_WAT_OUT)


# Compile install WASM test.
#
# This target compiles a WASM test file for testing an installation.

$(DEPS_WABT_TEST_INSTALL_WASM_OUT): $(DEPS_WABT_TEST_INSTALL_WAT_OUT)
	$(QUIET) $(DEPS_WABT_WAT2WASM) $(DEPS_WABT_TEST_INSTALL_WAT_OUT) \
		-o $(DEPS_WABT_TEST_INSTALL_WASM_OUT)


# Download WABT.
#
# This target downloads the WebAssembly Binary Toolkit (WABT).

deps-download-wabt: $(DEPS_WABT_DOWNLOAD_OUT)

.PHONY: deps-download-wabt


# Verify download.
#
# This targets verifies a download.

deps-verify-wabt: deps-download-wabt
	$(QUIET) echo 'Verifying download...' >&2
	$(QUIET) echo 'Nothing to verify.' >&2

.PHONY: deps-verify-wabt


# Extract WABT.
#
# This target extracts a WebAssembly Binary Toolkit (WABT) download.

deps-extract-wabt: $(DEPS_WABT_BUILD_OUT)

.PHONY: deps-extract-wabt


# Check for prerequisites.
#
# This target checks a host system for installation prerequisites.

deps-prerequisites-wabt:
	$(QUIET) $(DEPS_CHECK_CMAKE)
	$(QUIET) $(DEPS_CHECK_GIT)

.PHONY: deps-prerequisites-wabt


# Install WABT.
#
# This target performs a WebAssembly Binary Toolkit (WABT) install sequence.

deps-install-wabt: $(DEPS_WABT_BUILD_OUT) deps-prerequisites-wabt
	$(QUIET) cd $(DEPS_WABT_BUILD_OUT) && $(CMAKE) . && $(MAKE)

.PHONY: deps-install-wabt


# Update WABT.
#
# This target updates the WebAssemby Binary Toolkit (WABT).

deps-update-wabt: $(DEPS_WABT_BUILD_OUT)
	$(QUIET) cd $(DEPS_WABT_BUILD_OUT) && \
		$(GIT) pull && \
		$(GIT) submodule update --init --recursive && \
		$(DELETE) $(DELETE_FLAGS) $(DEPS_WABT_BUILD_OUT)/out &&
		$(CMAKE) . && \
		$(MAKE)

.PHONY: deps-update-wabt


# Test install.
#
# This target tests an installation.

deps-test-wabt: $(DEPS_WABT_TEST_INSTALL_WAT_OUT) $(DEPS_WABT_TEST_INSTALL_WASM_OUT)
	$(QUIET) echo '' >&2
	$(QUIET) echo 'Success.' >&2

.PHONY: deps-test-wabt


# Install WABT.
#
# This target installs the WebAsembly Binary Toolkit (WABT).

install-deps-wabt: deps-download-wabt deps-verify-wabt deps-extract-wabt deps-install-wabt deps-test-wabt

.PHONY: install-deps-wabt


# Clean WABT.
#
# This target removes a WebAssembly Binary Toolkit (WABT) install (but does not remove a download if one exists).

clean-deps-wabt: clean-deps-wabt-tests
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(DEPS_WABT_BUILD_OUT)

.PHONY: clean-deps-wabt


# Clean installation tests.
#
# This target remove installation tests.

clean-deps-wabt-tests:
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(DEPS_WABT_TEST_OUT)

.PHONY: clean-deps-wabt-tests
