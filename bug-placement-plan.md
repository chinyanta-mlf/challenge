# Coding Challenge Bug Placement Plan

## 1. Add officeName to the group by id endpoint, use proper response dto
- **Where:** `src/modules/group/group.controller.ts`, group DTOs
- **How:** Update `getGroupById` to include `officeName` in response. Use or create a DTO with `officeName`. For a bug, omit `officeName` or use the wrong DTO.

## 2. Add status filter on the get groups endpoint to allow filtering by status / remove status from pageOptionsDto
- **Where:** `src/modules/group/group.controller.ts`, `PageOptionsDto`
- **How:** Add `status` query param to `getGroups`, filter results. Remove `status` from `PageOptionsDto` if not needed. For a bug, forget to filter or leave `status` in DTO but don’t use it.

## 3. Remove or comment out any imports
- **Where:** Any used file (e.g., `src/app.controller.ts`, `src/modules/group/group.service.ts`)
- **How:** Remove or comment a required import to cause a build-time error.

## 4. Role-Based Access Control Bypass (using AuthGuard)
- **Where:** `src/guards/auth.guard.ts`, used in controllers
- **How:** Misconfigure `AuthGuard` to always allow access (e.g., always return `true` in `canActivate`).

---

### Mapping to Challenge Steps
- **Step 1 (Setup):** Place build-time errors (missing import, semi-colon removal).
- **Step 2 (Build time errors):** Use the import removal bug.
- **Step 3 (Docs/Endpoints):** Place bugs related to endpoint response and filtering (`officeName`, status filter, RBAC bypass).

---

## Bugs / Issues

1. **Add officeName to the group by id endpoint, use proper response dto**
   - In the group controller, update the `getGroupById` endpoint to include `officeName` in the response. Use or create a DTO that includes `officeName`. For a bug, either forget to add `officeName` or use the wrong DTO (e.g., return raw entity instead of DTO).

2. **Add status filter on the get groups endpoint to allow filtering by status / remove status from pageOptionsDto**
   - In the `getGroups` endpoint, add a query parameter for `status` and filter results accordingly. Remove `status` from `PageOptionsDto` if it’s not supposed to be there. For a bug, either forget to filter by status, or leave `status` in `PageOptionsDto` but don’t use it, or filter incorrectly.

3. **Remove or comment out any imports**
   - Comment out or remove an import that is required for the file to work (e.g., a service, DTO, or decorator). This will cause a build-time error.

4. **Role-Based Access Control Bypass (using AuthGuard)**
   - Misconfigure the AuthGuard so that all users can access a protected endpoint. For example, always return `true` in `canActivate`.
