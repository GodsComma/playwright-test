const { chromium } = require('@playwright/test');

(async () => {
  // Make sure to run headed.
  const browser = await chromium.launch({ headless: false });

  // Setup context however you like.
  const context = await browser.newContext({
    baseURL: 'https://bronze-to28.obscuritylabs.com/daas/',
    extraHTTPHeaders: {
      JWT: '.ewogICAgImFkbWluX29yZ2FuaXphdGlvbiI6ICJET0QiLAogICAgImFmZmlsaWF0aW9ucyI6ICJOT04tQUdFTkNZIE1JTElUQVJZIiwKICAgICJhdG9fc3RhdHVzIjogZmFsc2UsCiAgICAiYnJpZWZpbmdzIjogWyJCUklFRklORzQiXSwKICAgICJjbGVhcmFuY2UiOiBbIlRTIiwgIlMiLCAiQyIsICJVIl0sCiAgICAiY29pcyI6IFsiRE9EX1VTRVIuTlNBLkVFSUMiLCAiSU5URVJQT0wuRkJJLkVFSUMiXSwKICAgICJDTiI6ICJKYXNvbiBUYW4iLAogICAgImRpc3NlbV9jb250cm9scyI6IFsiTEVTIiwgIlJTIl0sCiAgICAiRE4iOiAiQz1cIlVTXCIsU1Q9XCJWaXJnaW5pYVwiLEw9XCJBc2hidXJuXCIsTz1cIk9ic2N1cml0eSBMYWJzXCIsT1U9XCJHaG9zdCBSaWRlclwiLENOPVwiSmFzb24gVGFuXCIsRT1cImoudGFuQG9ic2N1cml0eWxhYnMuY29tXCIiLAogICAgImVudGl0eV9zZWN1cml0eV9tYXJrIjogIlRPUCBTRUNSRVQvL1NJLy9USy8vTk9GT1JOIiwKICAgICJlbWFpbCI6ICJqLnRhbkBvYnNjdXJpdHlsYWJzLmNvbSIsCiAgICAiZmluZV9hY2Nlc3NfY29udHJvbHMiOiBbIlNJIiwgIlRLIl0sCiAgICAiaXNfaWNfbWVtYmVyIjogdHJ1ZSwKICAgICJpY19uZXR3b3JrcyI6IFsiSldJQ1MiXSwKICAgICJsYWNzIjogWyJFTzEyMzMzX0dFT0lOVCIsICJESVNTRU1fRklfU0lHSU5UIl0sCiAgICAibGlmZV9jeWNsZV9zdGF0dXMiOiAiUFJPRCIsCiAgICAicmVnaW9ucyI6IFsiRVVjZSIsICJBRmVhIl0sCiAgICAidG9waWNzIjogWyJIUkVMIiwgIkRJIl0sCiAgICAidHJpYmFsX2ZpcmVfdHJhaW5pbmciOiBbIkxFVkVMMV9UUkFJTklORyJdLAogICAgInZpc2FzIjogWyJVU0EiLCAiRlZFWSJdLAogICAgImNvbXBhcnRtZW50cyI6IFsiU0kiLCAiVEsiXSwKICAgICJncm91cHMiOiBbImdyb3VwMSIsICJncm91cDIiLCAiZ3JvdXAzIl0KfQo=.',
      maxclassification: 'NOFORN',
    },
  });
  await context.route('**/*', route => route.continue());

  // Pause the page, and start recording manually.
  const page = await context.newPage();
  await page.goto('.');
  await page.pause();
})();
