
# VARIABLES #

# Define the download URL:
DEPS_EMSCRIPTEN_URL ?= https://github.com/juj/emsdk.git

# Define the output path when downloading:
DEPS_EMSCRIPTEN_DOWNLOAD_OUT ?= $(DEPS_TMP_DIR)/emsdk

# Define the path to the directory containing tests:
DEPS_EMSCRIPTEN_TEST_DIR ?= $(DEPS_DIR)/test/emsdk

# Define the output directory path for a compiled tests:
DEPS_EMSCRIPTEN_TEST_OUT ?= $(DEPS_EMSCRIPTEN_TEST_DIR)/build

# Define the path to a test file for checking an installation:
DEPS_EMSCRIPTEN_TEST_INSTALL ?= $(DEPS_EMSCRIPTEN_TEST_DIR)/test_install.c

# Define the output path for a test file:
DEPS_EMSCRIPTEN_TEST_INSTALL_OUT ?= $(DEPS_EMSCRIPTEN_TEST_OUT)/test.html


# TARGETS #

# Download.
#
# This target downloads the Emscripten SDK.

$(DEPS_EMSCRIPTEN_DOWNLOAD_OUT): $(DEPS_TMP_DIR)
	$(QUIET) echo 'Downloading Emscripten...' >&2
	$(QUIET) $(GIT) clone $(DEPS_EMSCRIPTEN_URL) $(DEPS_EMSCRIPTEN_DOWNLOAD_OUT)


# Extract.
#
# This target extracts Emscripten to a build directory.

$(DEPS_EMSCRIPTEN_BUILD_OUT): $(DEPS_EMSCRIPTEN_DOWNLOAD_OUT) $(DEPS_BUILD_DIR)
	$(QUIET) echo 'Extracting Emscripten...' >&2
	$(QUIET) $(CP) -a $(DEPS_EMSCRIPTEN_DOWNLOAD_OUT) $(DEPS_EMSCRIPTEN_BUILD_OUT)


# Create directory for tests.
#
# This target creates a directory for storing compiled tests.

$(DEPS_EMSCRIPTEN_TEST_OUT):
	$(QUIET) $(MKDIR_RECURSIVE) $(DEPS_EMSCRIPTEN_TEST_OUT)


# Compile install test.
#
# This target compiles a test file for testing an installation.

$(DEPS_EMSCRIPTEN_TEST_INSTALL_OUT): $(DEPS_EMSCRIPTEN_BUILD_OUT) $(DEPS_EMSCRIPTEN_TEST_OUT)
	$(QUIET) echo 'TODO' >&2


# Download Emscripten.
#
# This target downloads an Emscripten SDK.

deps-download-emscripten: $(DEPS_EMSCRIPTEN_DOWNLOAD_OUT)

.PHONY: deps-download-emscripten


# Verify download.
#
# This targets verifies a download.

deps-verify-emscripten: deps-download-emscripten
	$(QUIET) echo 'Verifying download...' >&2
	$(QUIET) echo 'TODO' >&2

.PHONY: deps-verify-emscripten


# Extract Emscripten.
#
# This target extracts an Emscripten download.

deps-extract-emscripten: $(DEPS_EMSCRIPTEN_BUILD_OUT)

.PHONY: deps-extract-emscripten


# Install Emscripten.
#
# This target performs the Emscripten install sequence.

deps-install-emscripten: $(DEPS_EMSCRIPTEN_BUILD_OUT)
	$(QUIET) $(DEPS_EMSCRIPTEN_BUILD_OUT)/emsdk install sdk-incoming-64bit binaryen-master-64bit
	$(QUIET) $(DEPS_EMSCRIPTEN_BUILD_OUT)/emsdk activate sdk-incoming-64bit binaryen-master-64bit

.PHONY: deps-install-emscripten


# Update Emscripten.
#
# This target updates Emscripten.

deps-update-emscripten: clean-deps-emscripten deps-download-emscripten deps-verify-emscripten
	$(QUIET) cd $(DEPS_EMSCRIPTEN_DOWNLOAD_OUT) && $(GIT) pull
	$(QUIET) $(MAKE) -f $(this_file) deps-extract-emscripten
	$(QUIET) $(MAKE) -f $(this_file) deps-install-emscripten
	$(QUIET) $(MAKE) -f $(this_file) deps-test-emscripten

.PHONY: deps-update-emscripten


# Test install.
#
# This target tests an installation.

deps-test-emscripten: $(DEPS_EMSCRIPTEN_TEST_INSTALL_OUT)
	$(QUIET) echo 'Running tests...' >&2
	$(QUIET) echo 'TODO' >&2
	$(QUIET) echo '' >&2
	$(QUIET) echo 'Success.' >&2

.PHONY: deps-test-emscripten


# Install Emscripten.
#
# This target installs Emscripten.

install-deps-emscripten: deps-download-emscripten deps-verify-emscripten deps-extract-emscripten deps-install-emscripten deps-test-emscripten

.PHONY: install-deps-emscripten


# Clean Emscripten.
#
# This target removes an Emscripten install (but does not remove an Emscripten download if one exists).

clean-deps-emscripten: clean-deps-emscripten-tests
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(DEPS_EMSCRIPTEN_BUILD_OUT)

.PHONY: clean-deps-emscripten


# Clean installation tests.
#
# This target remove installation tests.

clean-deps-emscripten-tests:
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(DEPS_EMSCRIPTEN_TEST_OUT)

.PHONY: clean-deps-emscripten-tests
