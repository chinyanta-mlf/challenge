# Bug Complexity Explanations

## 1. Group by ID endpoint omits officeName (Incorrect DTO)
**Complexity:** Medium
- Requires understanding of DTOs, entity-to-DTO mapping, and controller-service interaction.
- The bug is subtle: the endpoint works but returns incomplete data, which may not be obvious unless the response is closely inspected or compared to requirements.
- Fixing it involves tracing the data flow and ensuring the correct DTO is used and populated.

---

## 2. Get Groups endpoint ignores status filter
**Complexity:** Low to Medium
- The filter parameter exists, but the logic is not applied, so the endpoint always returns all groups.
- The bug is easy to spot if filtering is tested, but may be missed if only default queries are run.
- Fixing it requires adding or correcting a single query condition in the service layer.

---

## 3. Build-time error due to missing import
**Complexity:** Low
- This is a straightforward, classic build-time error.
- The application will not compile, and the error message will directly point to the missing import.
- Fixing it is simple: uncomment or restore the required import.

---

## 4. AuthGuard always allows access (RBAC bypass)
**Complexity:** High
- This is a critical security bug that can be easily overlooked if only happy-path tests are run.
- The application appears to work, but all endpoints are unprotected, which is a major security risk.
- Fixing it requires understanding of NestJS guards, authentication flow, and the impact of always returning true in a guard.
- The consequences are severe, making this a high-priority and high-complexity bug from a security perspective.
