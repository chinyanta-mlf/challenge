# User Stories for Coding Challenge Bugs

## 1. Group by ID endpoint omits officeName (Incorrect DTO)
**As a** user of the API,
**I want** to retrieve a group by its ID and see all relevant group details, including the office name,
**So that** I can display or process complete group information in my application.

**Bug:** The endpoint does not return `officeName` or uses the wrong DTO, so users do not get the expected office information.

---

## 2. Get Groups endpoint ignores status filter
**As a** user of the API,
**I want** to filter groups by their status (e.g., active, inactive) when retrieving a list of groups,
**So that** I can easily find and manage groups based on their current status.

**Bug:** The status filter parameter is present but not used, so users cannot filter groups by status as expected.

---

## 3. Build-time error due to missing import
**As a** developer setting up or building the project,
**I want** the project to build successfully after installing dependencies,
**So that** I can start development or run the application without errors.

**Bug:** A required import is commented out or missing, causing a build-time error and preventing the project from compiling.

---

## 4. AuthGuard always allows access (RBAC bypass)
**As a** user of the API,
**I want** endpoints to be protected so that only authorized users can access sensitive operations,
**So that** the application enforces proper security and access control.

**Bug:** The AuthGuard always allow access, so all users can access protected endpoints regardless of their authentication or role.
