# The Daily Quest public-site candidate

Prepared September 23, 2026 on `codex/feature/google-account-public-pages`, based on site commit `5ca6bc675fcbd58d0c677ed327a8c7a5ab84852d`.

**Candidate only. Not published. Effective dates pending final publication.** The live site's status and the available app are unchanged. No 1.0.9 Play availability is claimed. The configured deletion build is staged in this branch for qualification; its authenticated flow has not passed an end-to-end test.

## Version handling and files

| File | Purpose |
| --- | --- |
| `index.html` | Clearly identifies available 1.0.8 closed Alpha and separates the upcoming 1.0.9 account edition. |
| `news/index.html` | Existing 1.0.8 and 1.0.5 articles, dates, testing links and status text preserved; only shared navigation/skip-link markup changes. No 1.0.9 entry is added. |
| `privacy/index.html` | 1.0.9 account-edition draft, with no effective date and a prominent link to the current local-only edition. |
| `privacy/2026-09-10.html` | Exact original privacy HTML, including original date and historical wording, for local-only builds through 1.0.8. |
| `terms/index.html` | Factual versioned service-use draft at the approved `/terms/` route; no acceptance control, tracking or contract gate. |
| `support/index.html` | Separate help for available local-only builds and the upcoming account edition. |
| `delete-account/index.html` and `delete-account/assets/` | Configured Google-only authenticated deletion build from the frozen 1.0.9 candidate. Static assets resolve locally; live sign-in and deletion remain unverified. |
| `style.css` | Retains parchment/forest colors and serif headings; wraps navigation, adds readable version notices and visible keyboard focus. |

The static pages use semantic HTML and relative links compatible with the `/the-daily-quest-site/` GitHub Pages subpath. The deletion page now contains the bundled application scripts and styles. It is configured for the production Supabase project but must be tested at its exact public URL before release. Draft privacy, Terms and deletion pages use `noindex`. The archived page retains its original navigation exactly; its old iOS wording is historical text, not an announcement of iPhone distribution.

Archive SHA-256 (working-tree file bytes): `a17b48d9ef4c12be1f3f9615a6ddb49b0876f88dddf30003ed542358f3d60b56`. The archive stays at the same directory depth as the original so its stylesheet, crest and navigation links resolve. Git may normalize line endings; compare the archive Git blob with the original privacy blob as well. Keep this edition unchanged when the new policy becomes effective.

## What is established and what remains pending

The content follows the application's reviewed 1.0.9 Terms/privacy drafts. The release coordinator reported the production Supabase database in São Paulo on Free, Firebase Spark with billing disabled, Google-only providers, four deployed migrations qualified by 21 checks on a separate disposable database, active deletion functions and scheduled retries/recovery cleanup. These are preparation facts, not evidence of public availability or an end-to-end user deletion.

The candidate states the confirmed region. It does **not** claim a verified two-month analytics retention setting, anonymous metrics, end-to-end journal encryption, immediate permanent deletion, successful signed-device authentication, live web deletion or Apple availability. SDK metadata, retention settings, provider deletion processing and real-device acceptance remain pending. User-facing drafts contain service information and clear draft status; internal review instructions are kept in this README.

## Final substitutions and publication checks — release coordinator

1. Reconcile the exact Google profile fields retained and final app/SDK permissions and traffic with the privacy draft. Confirm optional collection is off before consent and after withdrawal. Preserve the separate legacy-upload choice and optional-metrics control; Terms links do not create consent.
2. Verify Firebase/GA metadata, two-month event/user retention with extension off, advertising identifiers/personalization/Signals, automatic screens, Enhanced Measurement and sharing settings. Add the verified retention and relevant collection details to the privacy edition. The current general provider-retention wording is deliberately not a substituted numeric claim.
3. Document actual authentication, provider deletion, failed-task follow-up, server log and backup retention. Confirm the 30-day recovery window and scheduled expiry. Update the public policy with the concrete retention facts; do not promise a deadline that the deployed service cannot meet.
4. The generated authenticated deletion site and all 17 assets have been copied from the frozen application's `artifacts/deletion-site`; its two index asset references resolve locally. Verify Google-only sign-in at the exact public callback, cancellation, reauthentication, accepted/lost responses, deletion retries and stale-write rejection using disposable accounts, without requiring app reinstallation. Rebuild and replace the entire bundle together if application source changes.
5. After deletion and data disclosures are qualified, finalize `/privacy/` and `/terms/`, assign their real publication/effective dates, remove draft status and `noindex` as appropriate, and keep the local-only archive prominent. The policy can become effective for the account service before Play availability; that does **not** justify changing app availability. Archive each actually published edition thereafter. No fabricated prior Terms edition or mandatory acceptance flow is needed.
6. Remove the deletion-placeholder caveats in privacy, Terms and support only when the authenticated page works. Check all page descriptions, titles and footer/navigation links. Keep homepage/support 1.0.9 availability marked upcoming until its actual track availability is verified.
7. Publish and live-verify finalized Terms/privacy/support/deletion before first account-enabled internal availability. Test mobile/desktop presentation and all app/store/public URLs. Candidate local checks do not establish live GitHub Pages, OAuth or deletion behavior.
8. After verified internal availability, add the newest `Version 1.0.9: What's new` news entry with actual date/build/status and the internal tester link. Preserve all prior articles. After the backed-up Play upgrade and two-device acceptance pass internally, promote the **same bundle/version code** to existing closed Alpha. Preserve both tester configurations and Alpha countries. Verify Alpha availability separately, then update that **same 1.0.9 news entry**, retaining its internal milestone and updating the homepage/support status to match. Never replace the existing 1.0.8 historical facts with inferred availability.

The coordinator owns app/backend/cloud qualification, final substitutions, `main` publication and live checks. This branch contains the static candidate pages and the staged deletion bundle.

## Local validation

Serve the repository root on loopback with a static server (for example, `python -m http.server 8768 --bind 127.0.0.1`). There is no build step. The final handoff records link/fragment checks, preservation checks, browser layouts, keyboard navigation and automated accessibility findings. Native screen-reader, real-user comprehension, production OAuth/deletion and live availability are separate checks.

Validation completed for the original static candidate before the deletion bundle was staged:

- Seven HTML pages; 100 local page/fragment/asset references resolve. Six distinct external references were inventoried, not HTTP-qualified.
- Both historical news articles match the original contents exactly after line-ending normalization; original privacy working-tree bytes match the recorded SHA-256.
- Chrome checked every page at 390 × 844, 320 × 568 and 1440 × 1000: all 21 returned HTTP 200, with zero horizontal overflow, zero page errors and zero axe WCAG 2 A/AA + 2.1 AA violations.
- The six current pages' keyboard skip links were visible on Tab and moved focus to main content in all three viewports. The exact historical archive was left without a new skip link.
- All seven pages also fit at 390px width with root text enlarged to 200%, for 28 layout cases total. Mobile homepage/privacy/Terms/deletion and desktop homepage screenshots were visually reviewed.
- The original static pages had no scripts or forms. The browser's strict no-external-requests assertion did not pass because machine-installed Kaspersky resources were injected; these URLs are absent from the site's source. No security software was disabled. This is not a clean network capture and does not qualify app analytics or authenticated deletion.
- The staged deletion bundle has 17 assets; both asset references in its index resolve. It rendered locally with Google-only controls. Localhost cannot complete its configured production OAuth callback, so authenticated deletion is still unverified.
- `git diff --check` passed. Native screen readers, real-user comprehension, live URLs and real-account behavior remain outside this static candidate check.
