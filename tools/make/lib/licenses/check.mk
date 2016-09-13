
# VARIABLES #

# Define the command for checking licenses:
CHECK_LICENSES ?= \
	$(LIST_LICENSES) \
		--dir $(ROOT_DIR) \
		--depth 0 \
	| $(LICENSES_REPORTER_DEPS) \
	| $(INFER_LICENSES) \
		$(INFER_LICENSES_FLAGS) \
	| $(LICENSES_REPORTER_EXCLUDED) \
		--exclude $(LICENSES_WHITELIST)

# Define the command for checking licenses for 'production' dependencies:
CHECK_LICENSES_PRODUCTION ?= \
	$(LIST_LICENSES) \
		--dir $(ROOT_DIR) \
		--depth 0 \
		--no-dev \
	| $(LICENSES_REPORTER_DEPS) \
		--no-dev \
	| $(INFER_LICENSES) \
		$(INFER_LICENSES_FLAGS) \
	| $(LICENSES_REPORTER_EXCLUDED) \
		--exclude $(LICENSES_WHITELIST)


# TARGETS #

# Check package licenses.
#
# This target checks the license for each package dependency against a list of permitted licenses.

check-licenses: $(NODE_MODULES)
	$(QUIET) $(CHECK_LICENSES)

.PHONY: check-licenses


# Check production package licenses.
#
# This target checks the license for each package dependency against a list of permitted licenses.

check-licenses-production: $(NODE_MODULES)
	$(QUIET) $(CHECK_LICENSES_PRODUCTION)

.PHONY: check-licenses-production
