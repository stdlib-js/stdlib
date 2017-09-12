
# DEPENDENCIES #

ifeq ($(DEPS_CEPHES_DIST), netlib)
	include $(TOOLS_MAKE_LIB_DIR)/deps/cephes_netlib.mk
else
ifeq ($(DEPS_CEPHES_DIST), cephes-2.8)
	include $(TOOLS_MAKE_LIB_DIR)/deps/cephes_2_8.mk
else
ifeq ($(DEPS_CEPHES_DIST), moshier)
	include $(TOOLS_MAKE_LIB_DIR)/deps/cephes_moshier.mk
endif
endif
endif


# TARGETS #

# Install Cephes.
#
# This target installs Cephes.

install-deps-cephes: deps-download-cephes deps-verify-cephes deps-extract-cephes deps-test-cephes

.PHONY: install-deps-cephes


# Clean Cephes.
#
# This target removes a Cephes distribution (but does not remove downloaded Cephes libraries if they exist).

clean-deps-cephes: clean-deps-cephes-tests
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(DEPS_CEPHES_BUILD_OUT)

.PHONY: clean-deps-cephes


# Clean tests.
#
# This targets remove installation tests.

clean-deps-cephes-tests:
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(DEPS_CEPHES_TEST_OUT)

.PHONY: clean-deps-cephes-tests

