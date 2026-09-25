# Playwright EventHub – BaseURL, Page Fixture, Context isolation & Multi-Browser Test

## Overview

This project tests the [EventHub](https://eventhub.rahulshettyacademy.com) login page using Playwright. It covers browser context isolation and cross-browser testing.

## What's covered

- **Config:** `baseURL`, tests folder, retries, and two browser projects (Chromium, Firefox)
- **Login smoke test:** opens `/login` via `baseURL` and checks the title, the email field, and the Sign In button
- **Context isolation:** fills the email field on the built-in `page`, then opens a fresh browser context and confirms the email field starts empty

## To run the tests

```bash
npx playwright test
```

## Page fixture vs. browser context

- **page fixture:** one ready-to-use page that Playwright creates and closes for you.
- **Browser context:** a separate session container, like a new incognito window, with its own cookies and storage.
- Creating a fresh browser context provides isolated state. Changes made in one context do not automatically carry over to another context.
- In this assignment, I used the built-in page fixture to enter an email address and created a fresh browser context to verify that the new page starts with an empty email field.
