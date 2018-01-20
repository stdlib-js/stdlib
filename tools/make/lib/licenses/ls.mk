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

list-deps-licenses: $(NODE_MODULES)
	$(QUIET) $(LIST_LICENSES) \
		--dir $(ROOT_DIR) \
		--depth 0 \
	| $(INFER_LICENSES) \
		$(INFER_LICENSES_FLAGS) \
	| $(LICENSES_REPORTER_DEPS)

.PHONY: list-deps-licenses


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


# Generate a license summary.
#
# This target summaries package dependency license information.

list-licenses-summary: $(NODE_MODULES)
	$(QUIET) $(LIST_LICENSES) \
		--dir $(ROOT_DIR) \
	| $(INFER_LICENSES) \
		$(INFER_LICENSES_FLAGS) \
	| $(LICENSES_REPORTER_SUMMARY)

.PHONY: list-licenses-summary
