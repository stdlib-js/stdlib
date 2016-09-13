
# TARGETS #

# List package licenses.
#
# This target lists the license for each package dependency in the package dependency tree.

list-licenses: $(NODE_MODULES)
	$(QUIET) $(LIST_LICENSES) \
		--dir $(ROOT_DIR) \
	| $(INFER_LICENSES) \
		$(INFER_LICENSES_FLAGS) \
	| $(LICENSES_REPORTER)

.PHONY: list-licenses


# List package licenses by group.
#
# This target groups the licenses of package dependencies by license type.

list-licenses-group: $(NODE_MODULES)
	$(QUIET) $(LIST_LICENSES) \
		--dir $(ROOT_DIR) \
	| $(INFER_LICENSES) \
		$(INFER_LICENSES_FLAGS) \
	| $(LICENSES_REPORTER_GROUP)

.PHONY: list-licenses-group


# List dependency licenses.
#
# This target lists the license for each root package dependency.

list-dep-licenses: $(NODE_MODULES)
	$(QUIET) $(LIST_LICENSES) \
		--dir $(ROOT_DIR) \
		--depth 0 \
	| $(INFER_LICENSES) \
		$(INFER_LICENSES_FLAGS) \
	| $(LICENSES_REPORTER_DEPS)

.PHONY: list-dep-licenses


# List missing licenses.
#
# This target lists packages missing license information.

list-missing-licenses: $(NODE_MODULES)
	$(QUIET) $(LIST_LICENSES) \
		--dir $(ROOT_DIR) \
	| $(INFER_LICENSES) \
		$(INFER_LICENSES_FLAGS) \
	| $(LICENSES_REPORTER_NO_LICENSE)

.PHONY: list-missing-licenses


# List ambiguous licenses.
#
# This target lists packages having ambiguous license information.

list-ambiguous-licenses: $(NODE_MODULES)
	$(QUIET) $(LIST_LICENSES) \
		--dir $(ROOT_DIR) \
	| $(INFER_LICENSES) \
		$(INFER_LICENSES_FLAGS) \
	| $(LICENSES_REPORTER_AMBIGUOUS)

.PHONY: list-ambiguous-licenses


# List excluded licenses.
#
# This target lists packages excluded license information.

list-excluded-licenses: $(NODE_MODULES)
	$(QUIET) $(LIST_LICENSES) \
		--dir $(ROOT_DIR) \
	| $(INFER_LICENSES) \
		$(INFER_LICENSES_FLAGS) \
	| $(LICENSES_REPORTER_EXCLUDED) \
		--exclude $(LICENSES_WHITELIST)

.PHONY: list-excluded-licenses
