#                                          GTVL MANAGEMENT PORTAL


# ***Module Affected:***

## Bug Report: Web App Performance & Responsiveness Issues

### Bug Id : 001 

### 1. Bug Title
 -Web App is Extremely Slow and UI Click Actions Are Unresponsive**

### 2. Description
The web application becomes very slow during normal use. Clickable UI elements such as **edit**, **delete**, **view**, and **sorting icons** often do not respond on the first attempt.  
Users must click multiple times or refresh the page repeatedly to perform basic actions.  
This results in a poor user experience and disrupts the workflow.

### 3. Environment
 - **Platform:** Web Application  
 - **Browser:** Chrome  
 - **Network:** Stable internet connection  

### 4. Steps to Reproduce
1. Open the web application in Chrome.  
2. Navigate to any page that contains multiple clickable elements (edit, delete, view, sorting icons).  
3. Try clicking on any button, icon, or navigation link.  
4. Observe delay or no response.  
5. Reload the page.  
6. Try clicking again repeatedly and note the multiple attempts needed.  

### 5. Expected Result
 - The application should load quickly.  
 - All clickable elements should respond immediately on a **single click**.  
 - No excessive page reloads should be required.   

### 6. Actual Result
 - Page takes a long time to load.  
 - Clickable elements do not respond on the first attempt.  
 - Buttons and links only work after multiple clicks.  
 - Frequent page reloads are required for UI to function.  

### 7. Severity & Priority
 - **Severity:** High (Major impact on functionality and user experience)  
 - **Priority:** High (Requires immediate fix)  

------

##  BUG REPORT – Action Icons Not Responding Consistently (View / Edit / Delete)

### Bug Id -002

### 1. Bug Title
**Action icons (View, Edit, Delete) intermittently not working in multiple modules**

### 2. Modules Affected
 - **GTVL Management Portal → SKU Management → SKU List**
 - **GTVL Management Portal → Stores Management → Stores List → Actions Column**
 - **GTVL Management Portal → Supervisors Management → Supervisors List → Actions Column**
 - **GTVL Management Portal → Promodizers Management → Promodizers List → Actions Column**

### 3. Severity
**High** — Affects major CRUD actions (View, Edit, Delete)

### 4. Priority
**P1** — Needs immediate fix before the next release

### 5. Environment
 - **Localhost:** `http://127.0.0.1:5500/gtvl-management-portal/sku_list.html`
 - **Browser:** Chrome (Windows 10)

### 6. Pre-Conditions
 - User is logged in as Management  
 - SKU/Store/Supervisor/Promodizer lists are loaded from Local Storage  
 - Action icons (View, Edit, Delete) are visible in each row  

### 7. Steps to Reproduce
1. Open the GTVL Management Portal  
2. Navigate to any module: **SKUs**, **Stores**, **Supervisors**, **Promodizers**  
3. Scroll through the list  
4. Click **View**, **Edit**, or **Delete** icons on multiple rows  
5. Repeat the actions across different lists  

### 8. Expected Result
Each action icon should work immediately and consistently on **every click**:

 - **View →** Opens detail modal  
 - **Edit →** Opens edit form  
 - **Delete →** Shows confirmation modal → Deletes item  

All actions should be fully reliable with **100% responsiveness**.

### 9. Actual Result
Icons behave inconsistently across modules:

 - No action on click  
 - No modal opens  
 - No delete confirmation appears  
 - No console errors  
 - Icons respond only after **2–3 clicks**  
 - Page reload needed to make actions work again  

This intermittent behavior creates severe usability problems and blocks smooth workflow.

### 10. Evidence 
<img width="958" height="474" alt="Screenshot 2025-11-28 134159" src="https://github.com/user-attachments/assets/e53f9ce9-b1c2-4d44-9cd9-c8630a8adb9f" />

------

## BUG REPORT – Assistant Widget Overlaps Delete Icon in Last Row

### Bud Id - 003

### 1. Bug Title
**Assistant widget overlaps the last row of the table, blocking access to the Delete icon**

### 2. Modules Affected
 - **GTVL Management Portal → SKU Management → SKU List → Actions Column**  
 - **GTVL Management Portal → Stores Management → Stores List → Actions Column**  
 - **GTVL Management Portal → Supervisors Management → Supervisors List → Actions Column**  
 - **GTVL Management Portal → Promodizers Management → Promodizers List → Actions Column**

### 3. Severity
**High** — Prevents user from deleting the last record (core CRUD issue)

### 4. Priority
**P1** — Requires immediate fix (affects critical user actions)

### 5. Environment
 - **URL:** `http://127.0.0.1:5500/gtvl-management-portal/sku_list.html`  
 - **Browser:** Chrome (Windows 10)

### 6. Pre-Conditions
 - User scrolls to the last row of any table (SKU, Stores, Supervisors, Promodizers)  
 - Assistant/help floating widget is visible in the bottom-right corner  

### 7. Steps to Reproduce
1. Open GTVL Management Portal  
2. Navigate to any module: **SKUs**, **Stores**, **Supervisors**, **Promodizers**  
3. Scroll down to the **last row** of the list  
4. Try clicking the **Delete icon** in the Actions column  
5. Observe the assistant widget overlapping the delete button  

### 8. Expected Result
 - Delete icon should be **fully visible and clickable**  
 - Assistant widget should **not block or overlap** UI elements  
 - User should be able to View / Edit / Delete items in the last row without obstruction  

### 9. Actual Result
 - Delete icon on the last row **cannot be clicked**  
 - Assistant widget overlaps the Actions column  
 - Clicking the delete icon triggers the assistant widget instead  
 - Last row actions (View / Edit / Delete) become **partially inaccessible**

### 10. Evidence 
 <img width="967" height="448" alt="Screenshot 2025-11-28 134635" src="https://github.com/user-attachments/assets/6aade79b-9434-4fed-92f7-22e3203575a1" />
   

------ 

# Bug Report: Name Field Accepts Digits

### Bug Id : 004

### 1. Title: 
 Name input field allows numeric digits  

### 2. Module:
 - **GTVL Management Portal → SKU Management → Add  New SKU’s **
 - **GTVL Management Portal → Stores Management → Add New Store**
 - **GTVL Management Portal → Supervisors Management → Add New Supervisors **
 - **GTVL Management Portal → Promodizers Management → Promodizers **

### 3. Environment:  
 - Platform: Web  
 - Browser: Chrome    

### 4. Description :
 The **Name** input field is allowing **digits (0–9)** to be entered.  
 A name field should only accept alphabetic characters and basic special characters (e.g., space, hyphen).

### 5. Steps to Reproduce :
 1. Navigate to the form where the **Name** field is displayed.  
 2. Click inside the **Name** input field.  
 3. Type any number (e.g., `12345`).  
 4. Observe that the field accepts numeric characters.  

### 6. Expected Result
 - The **Name** field should **not accept digits**.  
 - Only alphabetic characters and allowed symbols should be permitted.  
 - Validation message should appear if the user enters invalid characters.

### 7. Actual Result :
 - The field allows digits such as `1, 2, 3` without any validation error.  

### 8. Severity :
  Medium  
### 9. Priority: 
  Medium  


------
 # ***Management Dashboard***

------

## Bug Report – Supervisor Availability Count Not Updating on Dashboard

### Bug Id -005

### 1. Bug Title
Dashboard not updating accurate Supervisor availability count after status change

### 2. Module
Dashboard → Supervisor Summary Widget

### 3. Description
When a supervisor’s status is changed from **Active → Inactive** on the Supervisors page, the Dashboard still displays the old availability count.

Example shown:
 - **3 Supervisors (3 assigned)**
 - **0 available for assignment**

After marking 1 supervisor as Inactive, the dashboard **should** recalculate and increase the availability count.  
However, the dashboard does **not refresh or update** the data.

### 4. Impact
 - Incorrect resource planning due to wrong availability count  
 - Users may make wrong assignment decisions  
 - Dashboard shows outdated information  
 - Reduces trust in dashboard accuracy  

### 5. Severity
**High**  
(Impacts business logic and affects assignment workflow)

### 6. Priority
**High**  
(Must be fixed immediately to correct dashboard accuracy)

### 7. Steps to Reproduce
1. Go to **Supervisors** page.
2. Edit a supervisor who is currently **Active**.
3. Change the status from **Active → Inactive**.
4. Click **Save**.
5. Navigate to the **Dashboard**.
6. Check the **Supervisors Summary Widget**.

### 8. Expected Result
 Dashboard should update Supervisor availability correctly.

Example expected output:
 - **Total Supervisors: 3**
 - **Assigned: 2**
 - **Available for assignment: 1**

### 9. Actual Result
Dashboard still shows **old** values:
 - **Total Supervisors: 3**
 - **Assigned: 3**
 - **Available for assignment: 0**

Availability count is incorrect and does not refresh after status update.

### 10. Evidence   
<img width="959" height="442" alt="Screenshot 2025-11-28 135528" src="https://github.com/user-attachments/assets/2bd06ef4-6d20-49ef-9d07-37189728ffa0" />


------

# -	***Manage SKUs for GTVL***

------

# Bug Report: Status Text Formatting Issue

### Bug Id:006

### Reported Date:
 28 Nov 2025  
### Module: 
 SKUs → SKU List Table  
### Environment:  
- **Browser:** Chrome (Windows 10)  
- **Resolution:** 1920×1080  
- **Build:** Latest Production
- 
### Issue Summary
The **Status** column in the SKU listing table displays values (`active`, `inactive`) in **lowercase**, whereas the expected UI format is **Capitalized** (`Active`, `Inactive`).

### Steps to Reproduce
1. Login to **GTVL Management Portal**  
2. Navigate to **SKUs** module  
3. Observe the **Status** column in the table

### Expected Result
Status labels should follow the standard UI formatting:
- `Active`  
- `Inactive`  
(First letter capitalized)

### Actual Result
Status values are shown in lowercase:

- `active`  
- `inactive`

## Evidence
<img width="959" height="441" alt="image" src="https://github.com/user-attachments/assets/2388f112-155d-48e0-a97f-a6a1a1c96c09" />

<img width="958" height="442" alt="image" src="https://github.com/user-attachments/assets/908c27c7-9f3a-4b37-88f1-1719be85e671" />


---

## Severity & Priority
- **Severity:** Low (UI/UX formatting issue)  


------
## BUG REPORT  – Delete Icon Not Working (SKUs Page)

### Bug Id -007

### 1. Bug Title
  Delete icon in SKU list does not delete the selected SKU

### 2. Module
   GTVL Management Portal → SKU Management → SKU List

### 3. Severity
   High — Impacts CRUD functionality (critical for data management)

### 4. Priority
   P1 — Needs to be fixed before release

### 5. Environment
  -Localhost: http://127.0.0.1:5500/gtvl-management-portal/sku_list.html 
	-Browser: Chrome (Windows 10)

### 6. Pre-conditions
-User is logged in as Management.
-SKUs exist in localStorage under key "skus".

### 7. Steps to Reproduce
 1.	Navigate to GTVL Management Portal.
 2.	Open the left sidebar → Click SKUs.
 3.	Go to the SKU list table.
 4.	In the Actions column, click the Delete  icon on any SKU row.

### 8. Expected Result
-A confirmation modal should appear (e.g., “Are you sure you want to delete this SKU?”)
-On confirming:
-The SKU should be removed from localStorage.
-The SKU list table should update immediately.
-A success message should appear.
### 9. Actual Result
-Nothing happens after clicking the delete icon.
-No modal, no action, no console error seen.

### 10. Evidence :
 <img width="959" height="442" alt="Screenshot 2025-11-28 135755" src="https://github.com/user-attachments/assets/8cc3fb26-fec5-486d-a548-4dac0139e300" />

-------

##  BUG REPORT – Feedback Form Submission Fails

### Bug Id -008

### 1. Bug Title
Feedback form submission fails with error:  
**“Failed to submit feedback. Please try again.”**

### 2. Module
**GTVL Management Portal → Feedback System → Share Your Feedback Popup**

### 3. Severity
**High** — Feature completely unusable (submission always fails)

### 4. Priority
**P1** — Needs immediate fix

### 5. Environment
- **URL:** http://127.0.0.1:5500/gtvl-management-portal/sku_list.html
- **Browser:** Chrome (Windows 10)

### 6. Pre-conditions
- Feedback modal must be opened.
- User enters comments, email, and selects a screenshot.
- Local server is running (Live Server or similar).

### 7. Steps to Reproduce
1. Open GTVL Management Portal.
2. Navigate to any module (e.g., SKUs).
3. Click the Feedback floating button.
4. Fill the following fields:
   - Comments
   - Email
   - Upload screenshot (optional)
5. Click Submit.
6. Observe the behavior.

### 8. Expected Result
- Feedback submission should succeed.
- A success message should appear (e.g., “Thank you for your feedback!”).
- Form should close or reset.
- If backend is not available, the system should gracefully save data to:
  - Local Storage, or
  - Mock API

### 9. Actual Result
- An error popup is shown:  
  **“Failed to submit feedback. Please try again.”**

### 10. Evidence :
   <img width="959" height="442" alt="image" src="https://github.com/user-attachments/assets/fd296476-732c-4ac3-a603-625d1d0884ef" />


------

##  BUG REPORT – Table Sorting Not Working in SKU List

### Bug Id -009

### 1. Bug Title
Sorting icons for SKU Code, Barcode, Product Name, Category, and Unit Price are not functioning.

### 2. Module
**GTVL Management Portal → SKU Management → SKU List**

### 3. Severity
**Medium** — Affects usability and data viewing experience.

### 4. Priority
**P2** — Needs fix soon (especially for large SKU lists).

### 5. Environment
- **URL:** http://127.0.0.1:5500/gtvl-management-portal/sku_list.html
- **Browser:** Chrome (Windows 10)

### 6. Pre-conditions
- SKU list must be loaded.
- Sorting icons visible above table columns.

### 7. Steps to Reproduce
1. Open GTVL Management Portal.
2. Navigate to SKU section.
3. Click the sorting icon next to:
   - SKU Code
   - Barcode
   - Product Name
   - Category
   - Unit Price
4. Observe behavior.

### 8. Expected Result
- Clicking any column’s sort icon should:
  - Sort the table in ascending order on first click
  - Sort in descending order on second click
  - Display the sorted data immediately
  - Sorting should be consistent on all rows

### 9. Actual Result
- No sorting happens on click.
- Table remains unchanged.
- No ascending/descending re-ordering.
- No error message shown to user.
- No console errors (likely missing handler).
- Sorting icons appear clickable but no sorting functionality is triggered.

### 10. Evidence :
  <img width="959" height="442" alt="image" src="https://github.com/user-attachments/assets/28cb450e-cb62-47f5-a311-f1eafb94c373" />

------

***stores for GTVL.***

------

##  BUG REPORT – Phone Number Field Accepts Unlimited Characters & No Validation

### Bug Id -010

### 1. Bug Title
Phone Number field accepts unlimited characters and does not enforce any phone number format.

### 2. Module / Page
Stores → Edit Store → Contact Information

### 3. Severity
Medium  
(Invalid data can be saved into the system and affect downstream modules)

### 4. Priority
High  
(Validation required on mandatory input fields)

### 5. Environment
- GTVL Management Portal
- Browser: Chrome
- OS: Windows 10

### 6. Pre-Requisites
- User must be logged into the portal
- A store must exist in the system

### 7. Steps to Reproduce
1. Navigate to Stores module.
2. Click View Details on any store.
3. Click Edit Store.
4. Scroll down to Contact Information.
5. In the Phone field, enter a long string of digits or random characters (e.g., 40+ digits).
6. Try to submit or observe the field behavior.

### 8. Expected Result
- Phone number field should enforce:
  1. Maximum character limit (e.g., 10 digits)
  2. Valid phone format (e.g., +1-123-4567890)
  3. Only numbers and allowed symbols (+ - space)
- Invalid inputs should show an error message.

### 9. Actual Result
- Field accepts unlimited characters.
- No validation is triggered.
- No error message is shown.
  
### 10. Evidence :
 <img width="959" height="440" alt="image" src="https://github.com/user-attachments/assets/bd6ddc15-e8da-4bee-9570-a5b938c98f54" />

------

# Bug Report: Missing Navigation / Back Button on Dashboard Detail Page

### Bug Id : 011

### Module:
 Dashboard → Supervisor Assignment / Assigned Promodizers  
### Environment:  
- **Browser:** Chrome (Windows 10)  
- **Resolution:** 1920×1080  
- **Build:** Production
  
### Issue Summary
The page displaying **Supervisor Assignment** and **Assigned Promodizers** does **not provide any button, link, or icon** to navigate **back to the previous page** (e.g., Supervisors list or Dashboard home).
This creates a **navigation dead-end** for the user.

### Steps to Reproduce
1. Login to **GTVL Management Portal**  
2. Go to **Dashboard**  
3. Open the **Supervisor Assignment** section  
4. Try to return to the previous page  
5. Notice that **no back button or navigation icon exists**

### Expected Result
- A **Back** or **Return** button/icon should be available to navigate to:
  - Previous page  
  - Supervisors list  
  - Dashboard overview  

Examples:
- `< Back`
- Back arrow icon  
- Breadcrumb navigation  

### Actual Result
- The page contains **no back button**, no breadcrumb, and no clickable icon for navigation.
- User is forced to use browser back button, which is not ideal UX.

### Evidence
<img width="959" height="440" alt="image" src="https://github.com/user-attachments/assets/8669e685-7fbc-409f-9ece-1737a754f6d5" />

<img width="959" height="442" alt="image" src="https://github.com/user-attachments/assets/6bad8487-1fa9-4cf7-b9c4-b613741d2660" />

---

## Severity & Priority
- **Severity:** Medium (Affects user flow/navigation)  
- **Priority:** High (Important for usability and consistency)

---

## Additional Notes
- Other modules in the portal include breadcrumb or back navigation.  
- This page should follow the same design conventions.



------
## Bug Report: Close (X) Icon Not Working on "Assigned Promodizers" Pop-Up

### Bug Id: 012

### 1. Module:
- Stores → Assigned Promodizers Pop-Up  

---

### 2. Summary
When the user clicks the **Promodizer (human icon)** in the Stores table, the **Assigned Promodizers** pop-up opens.  
However, clicking the **X (close) icon** on the pop-up does **not** close the window.

The user is unable to dismiss the pop-up using the provided close button.

---

### 3. Steps to Reproduce
1. Log in to the **GTVL Management Portal**.
2. Navigate to **Stores** from the left-side menu.
3. In the **Promodizers** column, click the **human icon** (👥).
4. The **Assigned Promodizers** pop-up appears.
5. Click on the **X (close) icon** in the pop-up's top-right corner.
6. Observe that the pop-up does not close.

---

### 4. Actual Result
- The **X** close icon is **not responding**.
- Pop-up remains open.
- User must refresh the page or click elsewhere to exit.

---

### 5. Expected Result
- Clicking the **X** icon should close the pop-up immediately.
- No extra clicks or page refresh should be required.

---

### 6. Impact
- Medium impact: affects usability and user flow.
- Users cannot close the pop-up using the intended UI control.
- Causes confusion and breaks consistency with other pop-ups.

### 7. Evidence :
 <img width="959" height="443" alt="image" src="https://github.com/user-attachments/assets/e0c82935-454b-49ed-8059-278631894231" />


---


# ***supervisors for GTVL***

------

##  BUG REPORT – Phone Number Validation Error

### Bug Id -013

### 1. Module
Supervisors → Update Supervisor

### 2. Environment
- GTVL Management Portal (Local)
- URL: http://127.0.0.1:5500/gtvl-management-portal/supervisor_list.html
- Browser: Chrome
- OS: Windows 10

### 3. Bug Title
Phone number validation fails even when entering a correct phone number format.

### 4. Pre-Requisites
- User must be logged into the GTVL Management Portal.
- Navigate to Supervisor Information → Edit page.

### 5. Severity
Medium

### 6. Priority
High  
(Users are unable to update supervisor details)

### 7. Description
When the user updates the supervisor information and enters a valid phone number, the system displays a validation error:
**"Please enter a valid phone number format (+1-555-0123)"**
even when the input is valid.
This prevents the user from saving or updating the supervisor details.

### 8. Steps to Reproduce
1. Log in to the GTVL Management Portal.
2. Go to Supervisors → Select any supervisor → Click Edit.
3. Enter a phone number like:
   - (981) 123-3339
   - Or any other valid format
4. Click the Update Supervisor button.

### 9. Actual Result
- Validation error displayed:
  **“Please enter a valid phone number format (+1-555-0123)”**
- Form update fails.

### 10. Expected Result
- System should accept standard phone number formats.
- Should provide correct example(s) of accepted formats.
- Supervisor information should update successfully.


### 11. Evidence :
<img width="959" height="443" alt="image" src="https://github.com/user-attachments/assets/e010e6c4-8b7b-462c-b7ca-0245561db226" />


------

##  BUG REPORT – Email Field Throws “Email address already exists” Even When Not Modified

### Bug Id -014

### 1. Bug Title
Email validation incorrectly triggers “Email address already exists” even when email is unchanged.

### 2. Module / Page
Supervisors → Edit Supervisor

### 3. Severity
High  
(User cannot update supervisor details unless email is changed, blocking updates)

### 4. Priority
High  
(Directly affects CRUD operations for supervisor management)

### 5. Environment
- GTVL Management Portal
- Browser: Chrome
- OS: Windows 10

### 6. Pre-Requisites
- Supervisor record already exists in the database.
- Email already saved for that supervisor.
---
### 7. Steps to Reproduce
1. Navigate to Supervisors module.
2. Select any supervisor and click View Details.
3. Click Edit Supervisor.
4. Do **not** change the email field.
5. Modify only First Name, Last Name, or any other field.
6. Click Update Supervisor.

### 8. Expected Result
- System should allow updating supervisor details without requiring an email change.
- No duplicate email error should be shown if the email belongs to the same supervisor.

### 9. Actual Result
- Error shown: **“Email address already exists”**
- Form does not submit.
- User is blocked from updating simple fields like name or status.

### 10. Evidence :
   <img width="1919" height="884" alt="Screenshot 2025-11-26 143812" src="https://github.com/user-attachments/assets/317e7bc4-867e-4b87-a69e-8c1a25f94813" />

------

## Bug Report : Phone Number Error Appears Even When Phone Number Is Not Changed

### Bug Id -015

### 1. Bug Title
Phone number validation error appears even when the user does not modify the phone number field

### 2. Module / Page
Supervisors → Edit Supervisor

### 3. Severity
Medium to High  
(User cannot update supervisor details due to incorrect validation trigger)

### 4.Priority
High  
(Affects update flow and blocks modifications)

### 5. Environment
- GTVL Management Portal  
- Browser: Chrome  
- OS: Windows 10  

### 6. Pre-Requisites
- An existing supervisor record with a valid phone number format  
- Phone number already stored in the system  

### 7. Steps to Reproduce
1. Go to *Supervisors* module.  
2. Select any supervisor and open **View Details**.  
3. Click **Edit Supervisor**.  
4. Do **NOT** make any change to the **Phone Number** field.  
5. Modify only one field (e.g., First Name or Status).  
6. Click **Update Supervisor**.  

### 8. Expected Result
- System should accept the update because the phone number is already valid.  
- No validation error should appear if the phone number was not edited.  

### 9.Actual Result
- Error appears:  
  **“Please enter a valid phone number format (+1-555-0123)”**  
- The phone number field turns red even though it was never changed.  
- Form submission is blocked.  

### 10. Evidence :
<img width="1918" height="881" alt="Screenshot 2025-11-26 095327" src="https://github.com/user-attachments/assets/9707cbb3-52be-46ab-9e79-d7a05f89c693" />


------

#  ***promodizers for GTVL***

------

# Bug Report - Promodizer Update Validation Format Mismatch

### Bug Id -016

### Module
Promodizers → Update Promodizer

### Environment
 - GTVL Management Portal (Local)
 - Browser: Chrome
 - OS: Windows 10
 - URL: Promodizer Information Page (Edit Mode)

### 1. Title
Phone Number and Employee ID validation errors appear during update even though the existing Promodizer was added using a different (previously accepted) format.

### 2. Description
When updating an existing Promodizer, the system enforces new strict validation formats for **Employee ID** and **Phone Number**, even though the Promodizer was originally added with an older, valid format.

As a result, the update is blocked with validation errors, preventing the user from saving changes.

### 3. Pre-Requisites
A Promodizer already exists in the system with:
 - Employee ID format: `PRO-23`
 - Phone Number format: `(231) 123-3330`

User navigates to edit/update this Promodizer.

### 4. Steps to Reproduce
1. Open **Promodizers** from the left menu.
2. Select an existing Promodizer (added earlier using different validation formats).
3. Click **Edit**.
4. Without changing anything OR after modifying other non-related fields, click **Update**.
5. Observe validation errors:
   - Employee ID  
     `"Employee ID must follow format: PRO-YYYY-XXX (e.g., PRO-2024-001)"`
   - Phone Number  
     `"Please enter a valid phone number (e.g., +1-555-0123)"`

### 5. Actual Result
 - System rejects Employee ID because older format (`PRO-23`) is no longer accepted.
 - System rejects Phone Number because old format (`(231) 123-3330`) does not match new validation rules.
 - User cannot update any Promodizer information.

### 6. Expected Result
- System should allow updating the Promodizer without forcing new validation on unchanged fields.
 - Validation rules should apply **only when the user changes the field**.
 - If values were valid during creation, they should not block updates.

### 7. Evidence : 
  <img width="1918" height="884" alt="Screenshot 2025-11-26 095438" src="https://github.com/user-attachments/assets/d4bfd3bb-f599-48af-802f-a8df42c42150" />

------

# Bug Report 4: Validation Errors Display Before User Input in Add Promodizer Form

### Bug Id : 017

### 1. Bug Title 
  Promodizer Module: Required Field Errors Shown Before Entering Any Input

### 2. Description  
 In the Promodizer module, when the user clicks Add Promodizer, the form appears with validation errors already displayed, even though the user has not entered any data.
 Fields such as First Name, Last Name, Employee ID, Email Address, and Phone Number show required-field error messages immediately, leading to poor user experience and incorrect validation flow. 

### 3. Steps to Reproduce
a. Login to the Promodizer Portal.
b. Navigate to Promodizer Management / Promodizer List.
c. Click Add Promodizer.
d. Observe the form as soon as it loads — validation errors are already visible.

### 4. Expected Result  
-  Validation messages should appear only after user interaction, such as:
      After clicking submit, OR
      After touching/blurring the input field.
-  The form should load cleanly without showing any errors initially.
  
### 5. Actual Result

- All mandatory fields display errors immediately upon form load:
      First Name required
      Last Name required
      Employee ID required
      Email Address required
      Phone Number required
- User sees error messages even before entering any input.
  
### 6. Severity & Priority  
- Severity: **Low**  
- Priority: **Medium**

### 7. Evidence
- Validation errors appear immediately after clicking Add Promodizer.
- No user interaction occurs, yet all required fields are marked invalid.
<img width="1908" height="874" alt="managename" src="https://github.com/user-attachments/assets/ed35cc3c-9c20-473e-985c-9bf276107a16" />


------

# Bug Report: Close (X) Icon Not Working on Quick Store Allocation Modal

### Bug Id : 018

### Module: 
 Promodizers → Quick Store Allocation  
### Environment: 
- **Browser:** Chrome (Windows 10)  
- **Resolution:** 1920×1080  
- **Build:** Production 

### Issue Summary
 When clicking the **Close (X)** icon on the **Quick Store Allocation** modal, the popup does **not close**. The modal stays on the screen and no action is triggered.

 This results in the user being unable to exit the modal without refreshing the page or clicking outside of it (if allowed).

### Steps to Reproduce
1. Login to **GTVL Management Portal**  
2. Navigate to **Promodizers**  
3. Click on **Store Allocation / Assign Store** to open the modal  
4. Click the **X (close)** icon on the top-right of the modal  
5. Observe that nothing happens 

### Expected Result
- The modal should immediately close when the user clicks the **X** icon.
- The user should be returned to the Promodizers screen.

### Actual Result
- Clicking the **X** icon does **nothing**.  
- Modal remains open and unresponsive to the close button.

## Evidence
  <img width="959" height="446" alt="image" src="https://github.com/user-attachments/assets/ec80f2dc-3967-4037-9455-b61e06a59d4e" />

------

## Bug Report: Close (X) Icon Not Working on Assigned Stores Pop-Up

 ### Bug Id : 019

### 1. Module: 
 Promodizers → Assigned Stores Pop-Up  

### 2. Summary
When the user opens the **Assigned Stores** pop-up and tries to close it using the **X (cross) icon**, the icon does **not work**.  
The pop-up does not close, and the user must click outside or refresh the page to exit.

### 3. Steps to Reproduce
1. Log in to the **GTVL Management Portal**.
2. Navigate to **Promodizers** from the left menu.
3. In the table, click on any **Assigned Stores** link to open the pop-up.
4. The pop-up opens successfully.
5. Click on the **X (close) icon** in the top-right corner of the pop-up.
6. Observe the behavior.

### 4. Actual Result
 - The **X (close)** icon does **not** respond.
 - Pop-up remains open.
 - No click event is triggered.
 - User cannot close the window using the icon.

### 5. Expected Result
 - Clicking the **X** icon should immediately close the pop-up.
 - Pop-up should fade out or disappear smoothly.
 - User should not need to refresh the page.

### 6. Impact
 - Medium severity, high usability impact.  
 - User cannot close the pop-up using the intended control.  
 - Slows down workflow and creates confusion.

### 7. Possible Root Cause
 - Close button (`X`) not bound to a click event.  
 - Overlay or invisible div blocking the icon.  
 - Icon placed inside a disabled or non-interactive container.  
 - Click handler attached to wrong element or missing in JavaScript.  
 - `z-index` issue causing the icon to be unclickable.
### Evidence :
 <img width="959" height="442" alt="image" src="https://github.com/user-attachments/assets/47f47134-03c4-4f1a-8844-1538436a56be" />


------



#                             GTVL Promodizer Portal 

------

# ***Module Affected:***

-----

# Bug Report: Sidebar Active Highlight Stuck on Dashboard

### Bug Id: 020

### Title:
  Sidebar active/hover state does not update when navigating to other modules  
### Module:
  Left Sidebar Navigation (Dashboard, Sales History, Attendance, Attendance History)  
### Environment:   
 - Browser: Chrome  

### Description
 When the user clicks on **Sales History**, **Attendance**, or **Attendance History** from the left sidebar,  
 the **active highlight stays on Dashboard** instead of updating to the selected menu option.

 This causes confusion because the UI does not reflect the actual page the user is viewing.

### Steps to Reproduce
 1. Log in to the GTvL Promodizer Portal.  
 2. On the left sidebar, click **Sales History**.  
 3. Observe that the page content updates to Sales History, **but the highlight remains on Dashboard**.  
 4. Repeat with **Attendance** or **Attendance History**. 

### Expected Result
 - The selected menu option (Sales History, Attendance, Attendance History) should have:  
  - Active highlight  
  - Updated background color  
  - Correct visual indication that the user is on that page  

### Actual Result
 - Dashboard remains highlighted even when navigating to other pages.  
 - Sidebar active state does **not** update.  
 - UI gives the impression that the user is still on Dashboard.


-----

## ***Record sales***

-----

#  Bug Report: Back Arrow Not Responding on First Click

### Bug Id : 021

### 1. Bug Title
Back Arrow Near “Record Sales” Requires Multiple Click Attempts to Navigate Back

### 2. Module
GTVL Promodizer Portal → Record Sales Page

### 3. Environment
- Web Application  
- Browser: Chrome  
- Page: Record Sales Screen

### 4. Severity
  Medium

### 5. Priority
  High

### 6. Precondition
User must be logged in and on the **Record Sales** page.

### 7. Steps to Reproduce
1. Log in to the GTVL Promodizer Portal.  
2. Navigate to **Record Sales** from the sidebar.  
3. Click on the **Back Arrow** near the "Record Sales" title.  
4. Observe the click behavior.

### 8. Expected Result
A **single click** on the Back Arrow should navigate the user to the previous page immediately.

### 9. Actual Result
The **Back Arrow does not respond on the first click**.  
User must click **2–3 times** for it to work.

-----

# BUG REPORT -- Quantity Update & Delete Icons Not Responding

### Bug Id : 022

### 1. Bug Title
Quantity control icons (-- , +) and delete (×) button not responding in
Current Batch section.

### 2. Module
GTVL Promodizer Portal → Dashboard → Record Sales →Current Batch

### 3. Environment

 -   Web Portal\
 -   Desktop Browser (Chrome)\
 -   User: Promodizer Dashboard

### 4. Severity
 High -- User cannot update or remove items in the batch.

### 5. Priority
 P1 -- Must Fix Immediately

### 6. Description
 In the "Current Batch" section of the Dashboard, the quantity control
 icons minus (--), plus (+), and the delete (×) icon do not respond when
 clicked.\
 Due to this issue, the user is unable to: - Increase quantity\
 - Decrease quantity\
 - Remove an item

### 7. Steps to Reproduce

 1.  Login to GTVL Promodizer Portal.\
 2.  Go to **Dashboard**.\
 3.  Scan or enter any barcode to add an item.\
 4.  Go to **Current Batch** section.\
 5.  Try clicking the **minus (--)**, **plus (+)**, or **delete (×)**
    icons.

### 8. Expected Result

 -   Minus (--) decreases quantity by 1.\
 -   Plus (+) increases quantity by 1.\
 -   Delete (×) removes the item.

### 9. Actual Result

 -   No action is triggered when clicking any of the icons.


----


# Bug Report: Home Button Not Responding on First Click

### Bug Id : 023

### 1. Bug Title
Home Button (Top-Right Corner) Requires Multiple Click Attempts to Navigate Home

### 2. Module
GTVL Promodizer Portal → Record Sales Page / Dashboard Header

### 3. Environment
- Web Application  
- Browser: Chrome (Desktop)  
- Location: Top-Right Home Icon on the Header  
- Page Observed: Record Sales Screen (see screenshot)

### 4. Severity
**Medium**

### 5. Priority
**High**

### 6. Precondition
User must be logged in and inside any module (e.g., Record Sales page).

### 7. Steps to Reproduce
1. Log in to the GTVL Promodizer Portal.  
2. Navigate to **Record Sales** or any other inner page.  
3. Click the **Home Button (top-right corner)**.  
4. Notice that it does not navigate on the first click.

### 8. Expected Result
A **single click** on the Home button should instantly redirect the user to the **Dashboard**.

### 9. Actual Result
The Home Button **does not respond on the first click**.  
User needs to click **2–3 times** for navigation to work.

### 10. Possible Cause
- Home button icon overlapped by Feedback widget / popup container.  
- Click event not properly bound.  
- Delayed event listener or disabled state on first click.

----

# Bug Report -- Sales Detail Not Loading 

### Bug Id: 024

### 1. Title :
Sales Detail page shows "Sales record not found" even though the record
exists in Sales History.

### 2. Module :
 Dashboard → Sales History → Sales Detail

## 3. Description (VS) :
 When the user opens any sales entry from Sales History, the system
 redirects to Sales Detail but shows the error **"Sales record not found
 -- The requested sales submission could not be found or may have been
 deleted."**\
 However, the same batch is still visible in the Sales History list.

### 4. Steps to Reproduce :
 1.  Add a record in **Record Sales**.
 2.  Submit the sales entry.
 3.  Go to **Sales History**.
 4.  Click on any batch entry.
 5.  Sales Detail page shows an error message.

## 5. Expected Result :
 Sales Detail page should display full information about the selected
 sales submission.

## 6. Actual Result :
 Sales Detail page incorrectly displays "Sales record not found".

## 7. Severity
 Critical

## 8. Priority
 P1 -- Fix immediately


----

##               ***Attendance History***

----

# Bug Report: Back Arrow & Home Icon Not Responding on First Click  

### Bug Id : 025

### Module: 
  Attendance → Attendance History  

### 1. Bug Title 
 Back Arrow and Home Icon Require Multiple Clicks to Navigate on Attendance History Page

### 2. Module
 GTVL Promodizer Portal → Attendance → Attendance History

### 3. Environment
 - Web Application  
 - Browser: Chrome (Desktop)  
 - Page: Attendance History  

### 4. Severity
 Medium

### 5. Priority
 High

### 6. Precondition
 User is logged in and has navigated to:  
 **Dashboard → Attendance → View Attendance History**

### 7. Steps to Reproduce
 1. Log in to GTVL Promodizer Portal.  
 2. Go to **Attendance** from the left sidebar.  
 3. Click **View Attendance History**.  
 4. Try clicking the **Back Arrow** on the left side of the header.  
 5. Try clicking the **Home Icon** on the right side of the header.  
 6. Observe that both buttons do not respond immediately.

### 8. Expected Result
 - **Single click** on Back Arrow should navigate to the Attendance page.  
 - **Single click** on Home Icon should navigate back to the Dashboard.

### 9. Actual Result
 - Both **Back Arrow** and **Home Icon** do not respond on the first click.  
 - User must click **2–3 times** for the buttons to work.

-----


# Bug Report: Calendar View Showing Wrong Date Attendance Data

### Bug Id : 026

### 1. Bug Title
 Calendar View does not show attendance history for the selected date (e.g., 27th), and displays incorrect data when clicking adjacent dates.

### 2. Module
 GTVL Promodizer Portal → Attendance → Attendance History → Calendar View

### 3. Environment
 - Web Application  
 - Browser: Chrome (Desktop)  
 - Screen Observed: Calendar View (Attendance History)

### 4. Severity
 **High** – Incorrect attendance data may cause reporting issues.

### 5. Priority
 **High**

### 6. Precondition
 User must have attendance records logged for specific dates (e.g., 27th).

### 7. Steps to Reproduce
 1. Log in to GTVL Promodizer Portal.  
 2. Go to **Attendance → Attendance History**.  
 3. Switch to **Calendar View**.  
 4. Click on **27th** of the month.  
 5. Observe that **no attendance history is displayed**.  
 6. Now click on **28th**.  
 7. The attendance record for the **27th is incorrectly shown under the 28th**.

### 8. Expected Result
 - When user clicks on **27th**, the attendance data for **27th** must be displayed.  
 - When user clicks **28th**, only **28th** data should appear.  
 - Each date must show its correct mapped attendance entry.

### 9. Actual Result
 - Clicking on **27th** shows **no history**.  
 - Clicking on **28th** displays the **27th’s attendance entry**.  
 - Date–record mapping is misaligned.

----


# Bug Report: Popup Close (X) Icon Not Responding Quickly

### Bug Id : 027 

### 1. Bug Title
 Close (X) icon on Attendance Details popup is slow to respond / not closing immediately.

### 2. Module
 GTVL Promodizer Portal → Attendance History → Calendar View → Attendance Details Popup

### 3. Environment
 - Platform: Web Application  
 - Browser: Chrome (Windows Desktop)  

### 4. Severity
 **Medium** – UI behavior issue affecting user experience.

### 5. Priority
 **High** – Affects usability of popup navigation.

### 6. Precondition
 User must open a date entry (e.g., 27 Nov) in Calendar View to view attendance details.

### 7. Steps to Reproduce
 1. Log in to the GTVL Promodizer Portal.  
 2. Navigate to **Attendance History**.  
 3. Switch to **Calendar View**.  
 4. Click on any date (e.g., **27 Nov**) to open the attendance details popup.  
 5. Click the **Close (X)** icon on the popup window.  
 6. Observe the response time.

### 8. Expected Result
 The popup window should close **instantly** when the user clicks the **X** icon, without any delay or  unresponsiveness.

### 9. Actual Result
 - The **X** icon does not close the popup immediately.  
 - Sometimes requires multiple clicks OR takes noticeable time to respond.  
 - UI feels delayed and non-responsive.

-----

# Bug Report: Calendar Navigation Icons Not Responding on First Click

### Bug Id : 028

### 1. Title:
 ** Calendar Back & Forward icons require multiple clicks  

### 2. Module:
  Attendance History → Calendar View  
### 3.Environment:  
 - Platform: Web (Promodizer Portal)  
 - Browser: Chrome  
 - Date Observed: 27-Nov-2025  

### 4. Description :
 When clicking the **Back (←)** or **Forward (→)** icons in the Calendar View, the calendar does **not change  on the first click**.  
 The user must **click multiple times** for the month to update.

### 5. Steps to Reproduce
 1. Log in to the GTvL Promodizer Portal.  
 2. Navigate to **Attendance History**.  
 3. Switch to **Calendar View**.  
 4. Click the **Back (←)** or **Forward (→)** icon once.  
 5. Observe that the calendar does not change.  
 6. Click the icon again.  

### 6. Expected Result
 The calendar should navigate to the **previous or next month immediately on the first click**.

### 7. Actual Result
 - The calendar **does not respond on the first click**.  
 - Navigation happens only after **multiple clicks**.

----

#           *** My Store***

----


#  Bug Report: Hover Effect Missing on Back & Home Icons

### Bug Id: 029

### 1. Project:
  GTVL Promodizer Portal  
### 2. Module:
  Dashboard → My Stores  

### 3. Summary :
 The **Back** and **Home** icons do not show any **hover effect** when the mouse cursor is placed over them. This causes usability issues and inconsistent UI behavior.

### 4. Steps to Reproduce :
 1. Open the **GTVL Promodizer Portal**.
 2. Navigate to **Dashboard → My Stores**.
 3. Hover the mouse cursor over the **Back icon** (top-left).
 4. Hover the mouse cursor over the **Home icon** (top-right).
 5. Observe the behavior.

###  5. Actual Result
- No hover effect is displayed.
- Cursor does not change to `pointer`.
- No visual feedback (color change, opacity, scale).
- Icons appear non-clickable.

### 6. Expected Result
- Hover effect should be visible:
  - Cursor should change to `pointer`.
  - Icon color/opacity should slightly change.
  - Optional smooth scale animation.
  - Tooltip such as “Go Back” or “Home” should appear.

----

# Bug Report: Back & Home Icons Not Responding on First Click

### Bug Id : 030

### 1.Project:
 GTVL Promodizer Portal  
### Module:
 Dashboard → My Stores  

###  Summary :
 Both the **Back icon** and **Home icon** require **multiple clicks** to respond.  
 They **do not work on the first click**, which causes navigation failure and poor user experience.

### Steps to Reproduce
 1. Open the **GTVL Promodizer Portal**.
 2. Navigate to **Dashboard → My Stores**.
 3. Click on the **Back icon** once.
 4. Click on the **Home icon** once.
 5. Observe that nothing happens.
 6. Click the same icons again multiple times.
 7. Navigation triggers only after repeated clicks.

###  Actual Result:
 - Clicking the **Back** or **Home** icon does **not** trigger navigation on the first click.  
 - User must click 2–3 times (sometimes more) in order to get a response.  
 - No visual feedback is provided after the first click.

### Expected Result:
 - **Single click** should immediately trigger the navigation.  
 - Icons should be responsive instantly.  
 - Optional hover feedback should indicate they are clickable.

-----


#                                   SALES ANALYTICS DASHBOARD

------

##         SKU Performance Analysis

------

# Bug Report: Category Filter Chip "X" Icon Not Responding on First Click

### Bug Id : 030

### 1. Title: 
  Category filter chip remove (X) button requires multiple clicks  
### 2. Module:
  SKU Performance → Filters → Category Chips  
### 3. Environment:  
- Platform: Sales Analytics Dashboard  
- Browser: Chrome  

### 4. Description :
When applying filters under the **SKU Performance** section, selected categories appear as chips (e.g., Snacks, Accessories, Beverages).  
The **X (remove)** icon on these category chips **does not work on the first click**.  
The user must click **multiple times** to remove a selected category.

This impacts usability and slows down filtering.

### 5. Steps to Reproduce
1. Navigate to **SKU Performance** in the left sidebar.  
2. Select one or more Categories from the **Filters → Category** section.  
3. Observe selected categories appearing as chips above the table.  
4. Try clicking the **X** icon on any chip.  
5. Note that the chip does **not** get removed on the first click; requires multiple attempts.

### 6. Expected Result :
- Clicking the **X** icon on a category chip should immediately remove the selected filter.  
- Filter should instantly update in the table results.

### 7.Actual Result :
- Chip remains visible after clicking the **X** icon.  
- Multiple clicks are required before the filter is removed.  
- Sometimes removal does not occur at all until the page is refreshed.

-----

# Bug Report: Status Filter Not Displayed as Chip After Applying Filter

### Bud Id : 031

### 1. Title:
   Status filter (Active / Inactive) does not generate a chip in the selected filter view  
### 2. Module: 
  SKU Performance → Filters → Status

### 3.Environment:  
- Platform: Sales Analytics Dashboard  
- Browser: Chrome  
- Date Observed: 27-Nov-2025  

### 4. Description :
When the user selects **Status: Active** or **Status: Inactive** in the Filters section under SKU Performance,  
the filter is applied to the table, but **no filter chip appears** in the selected filter area.

Other filters (e.g., Category) generate chips correctly, but **Status does not**, causing inconsistency in the UI and confusion for the user.

### 5. Steps to Reproduce
1. Go to **SKU Performance** in the left sidebar.  
2. In the Filters panel, scroll to **Status**.  
3. Select **Active** or **Inactive**.  
4. Observe that the table updates based on the selected status.  
5. Look at the selected filter chips area above the data table.  

### 6. Expected Result
- When Status is selected (Active or Inactive), a **chip** such as:  
  - `Status: Active ×`  
  - `Status: Inactive ×`  
  should appear in the selected filter chip section.  
- Chip should also allow removal via the **X** icon.

### 7. Actual Result
- No chip is displayed when selecting Active or Inactive.  
- Only Category chips appear; Status filter is not shown visually.  
- User cannot see or remove the Status filter from the chip area.

---


# Bug Report: “Avg/Transaction” Option Not Clickable (UI Overflow Issue)

### Bug Id : 032

### 1.Module:
  Category Filters / Insights Panel  
### 2.Environment:  
- **Browser:** Chrome (Windows 10)  
- **Build Version:** Latest Production  
- **Screen Resolution:** 1920×1080  

### 3.Bug Title
“Avg/Transaction” option is pushed to the right side and becomes unclickable due to UI overflow.

### 4. Description
In the filter section, the option **“Avg/Transaction”** is displayed outside the visible clickable area.  
It shifts too far to the right due to layout misalignment or overflow, preventing the user from clicking or interacting with it.

### 5. Steps to Reproduce
1. Open the **dashboard page** where filter options are shown.  
2. Navigate to the filter section that contains:  
   - Transaction  
   - Avg/Transaction  
   - Revenue  
   - Other metrics  
3. Observe the position of the **“Avg/Transaction”** option.  
4. Attempt to click the option.  

### 6. Expected Result
- “Avg/Transaction” should be **properly aligned**, fully visible, and clickable.  
- No overflow or UI shifting should occur.  
- The user should easily select it without needing scroll or extra attempts.

### 7. Actual Result
- “Avg/Transaction” appears **misaligned** and pushed too far to the **right side**.  
- The option becomes **unclickable** due to overflow and incorrect layout positioning.

### 10. Severity:
  Medium  
### 9. Priority: 
  High  

---

# Bug Report: Total Quantity Sold (Second Input Box) Misaligned & Not Usable

### Bug Id :033
  
### 1. Module:
  SKU Performance → Filter Panel  
### Environment:  
- **Browser:** Chrome (Windows 10)  

### 2. Bug Title
Second input box in **“Total Quantity Sold”** range is overflowing outside the filter panel and becomes unusable.

### 3. Description
The **second range input box** under **Total Quantity Sold** is misaligned and extends outside the filter container.  
Because of this layout issue, the input field becomes partially hidden and the user is **not able to click or enter values properly**.

### 4. Steps to Reproduce
1. Navigate to **Analytics → SKU Performance** page.  
2. Scroll down to the **Filters** section.  
3. Locate the **Total Quantity Sold** range inputs (two numeric fields).  
4. Observe the alignment of the **second input box**.  
5. Try to click or edit the second input box.

---

### 5. Expected Result
- Both **range input boxes** should be **fully visible**, properly aligned, and usable.  
- The second box should stay **inside the filter container** without overflowing.

### 6. Actual Result
- The second input box **overflows outside the filter section**.  
- Misalignment causes the field to become **partially hidden** and **not clickable or editable**.  
- Makes the range filter **non-functional** for users.

### 7. Severity: 
  High  
### 8. Priority: 
  High  

-----

##     Store Performance Analysis

-----

## Bug Report – City & State Sorting Not Working in Store Performance Data

### Bug Id : 034

### 1. Bug Title  
City and State column sorting not working in Store Performance Data table

### 2. Module  
Sales Analytics Dashboard → Store Performance → Store Performance Data

### 3. Environment  
- Application: Sales Analytics Dashboard  
- Browser: Chrome (Windows)  
- Page: Store Performance Analysis  
- Screenshot: Provided by user  

### 4. Priority & Severity  
- Severity: Medium  
- Priority: High  

### 5. Description  
When attempting to sort the **City** or **State** columns in the Store Performance Data table, the sorting functionality does not work. Clicking on the column headers does not reorder the data.

### 6. Steps to Reproduce  
1. Open **Sales Analytics Dashboard**.  
2. Navigate to **Store Performance**.  
3. Scroll down to **Store Performance Data** table.  
4. Click the **City** column header to sort.  
5. Click the **State** column header to sort.  

### 7. Expected Result  
- Rows should sort in ascending or descending order based on the selected column.  
- Sorting icon should update to reflect sort order.

### 8. Actual Result  
- No sorting occurs when clicking **City** or **State**.  
- The table remains unchanged.  
- Sorting icons appear but have **no functional action**.

----

# Bug Report – Sales Volume Filter Accepts Negative Values

### Bug Id : 035 

### 1. Bug Title
Sales Volume filter incorrectly accepts negative values and applies them to Store Performance Data

### 2. Module
Sales Analytics Dashboard → Store Performance → Filters → Sales Volume (Min–Max)

### 3. Environment
- Application: Sales Analytics Dashboard  
- Browser: Chrome (Windows)  
- Page: Store Performance Analysis  

### 4. Priority & Severity
- Severity: High  
- Priority: High

### 5. Description
The **Sales Volume Min and Max input fields** allow users to enter **negative values**.  
After applying the filters, the system accepts these negative inputs and displays Store Performance Data, even though **Sales Volume should never be negative by business logic**.

### 6. Steps to Reproduce
1. Open **Sales Analytics Dashboard**.  
2. Navigate to **Store Performance** module.  
3. In the Filters section, go to **Sales Volume (Min–Max)**.  
4. Enter **negative values** (example: Min = -2, Max = -7).  
5. Click **Apply Filters**.  
6. Observe that the filter gets applied and store results are displayed.

### 7. Expected Result
- System should **not allow negative inputs** for Sales Volume.  
- Input fields should validate and restrict values to **0 or positive integers only**.  
- User should see a validation message like:  
  *"Sales Volume cannot be negative."*

### 8. Actual Result
- Negative values are accepted in Min and Max fields.  
- Filter is applied successfully with invalid data.  
- Store Performance Data is displayed even with negative Sales Volume input.

-----

# Bug Report – Store Performance Data Columns Overflowing Outside Screen

### Bug Id : 036

### 1. Bug Title
SKUs Sold, Active Staff, and Last Sale Date columns overflow outside the visible screen area

### 2. Module
Sales Analytics Dashboard → Store Performance → Store Performance Data Table

### 3. Environment
- Application: Sales Analytics Dashboard  
- Browser: Chrome (Windows) 

### 4. Priority & Severity
- Severity: Medium  
- Priority: High  

### 5. Description
In the Store Performance Data table, the columns **SKUs Sold**, **Active Staff**, and **Last Sale Date** extend beyond the visible screen on the right side.  
These columns are partially or completely hidden, requiring horizontal scrolling, which breaks the UI layout and affects usability.

### 6. Steps to Reproduce
1. Open **Sales Analytics Dashboard**.  
2. Navigate to **Store Performance**.  
3. Scroll down to the **Store Performance Data** table.  
4. Observe the right-most columns (SKUs Sold, Active Staff, Last Sale Date).  

### 7. Expected Result
- All columns should be fully visible within the page layout.  
- Table should auto-adjust width or enable responsive column wrapping.  
- No data should appear outside the viewable screen area.

### 8. Actual Result
- Columns on the right side overflow outside the screen.  
- User must scroll horizontally to view data.  
- Layout appears broken and inconsistent with other pages.  

-----

# Bug Report – Chart View Button Not Working

### Bug Id : 037

## 1. Bug Title
Chart View button on Store Performance Data page is not responding

### 2. Module
Sales Analytics Dashboard → Store Performance → Store Performance Data → Chart View

### 3. Environment
- Application: Sales Analytics Dashboard  
- Browser: Chrome / Firefox (Windows) 

### 4. Priority & Severity
- **Severity:** High  
- **Priority:** High  

### 5. Description
The **Chart View** button located on the right side of the Store Performance Data header is not functioning.  
When the user clicks the button, nothing happens.  
The system does not switch from **Table View** to **Chart View**, and no charts are displayed.

### 6. Steps to Reproduce
1. Open **Sales Analytics Dashboard**.  
2. Navigate to **Store Performance** module.  
3. Scroll to the **Store Performance Data** section.  
4. Click on the **Chart View** button located at the right corner.  
5. Observe the system response.

### 7. Expected Result
- When the Chart View button is clicked:  
  - The page should switch from **Table View** to **Chart View**.  
  - A visual chart (bar, line, or pie chart) should appear representing store performance data.  
  - The Chart View button should show active state styling.

### 8. Actual Result
- Clicking the Chart View button produces **no action**.  
- No chart is displayed.  
- The view does not change and remains stuck on Table View.  
- No error message is shown to the user.

-----

# Bug Report – Filter Chip Remove (X) Button Not Working

### Bug Id: 038

### 1. Bug Title
Filter chip "X" (remove) icon not responding after applying filters

### 2. Module
Sales Analytics Dashboard → Store Performance → Filters → Active Filter Chips

### 3. Environment
- Application: Sales Analytics Dashboard  
- Browser: Chrome / Firefox (Windows)  

### 4. Priority & Severity
- **Severity:** Medium  
- **Priority:** High  

### 5. Description
After applying filters on the **Store Performance Analysis** page, filter chips appear under "Active Filters".  
Each filter chip contains a **cross (X) icon** that should remove the applied filter.  

However, clicking the **cross (X) icon** does **not remove** the filter, and the filtered data does not update.  
No action occurs when the user attempts to clear individual filters.

### 6. Steps to Reproduce
1. Open **Sales Analytics Dashboard**.  
2. Go to **Store Performance**.  
3. Apply any filter (e.g., Status: Active Only, State, City, Sales Volume, Date Range).  
4. Observe the filter chip appearing under "Active Filters".  
5. Click on the **X (cross icon)** on any filter chip.  
6. Check if the filter is removed.

### 7. Expected Result
- Clicking the **X icon** should immediately remove that specific filter chip.  
- The page should auto-refresh and update results according to the remaining filters.  
- The chip should disappear from the "Active Filters" section.

### 8. Actual Result
- Clicking the **X icon** does **nothing**.  
- The filter chip remains visible.  
- The applied filter stays active.  
- No data refresh or UI update occurs.

-----

# Bug Report – Status Filter Chips Not Displaying When Both Status Options Are Selected

### Bug Id : 039

### 1. Bug Title
Status filter chips not appearing when both "Active" and "Inactive" are selected

### 2. Module
Sales Analytics Dashboard → Store Performance → Filters → Status Dropdown

### 3. Environment
- Application: Sales Analytics Dashboard  
- Browser: Chrome/Edge (Windows)  

### 4. Priority & Severity
- **Severity:** Medium  
- **Priority:** Medium  

### 5. Description
When the user selects **both "Active" and "Inactive"** in the **Status filter**, the system does not display the corresponding **Active Filter Chips** under the "Active Filters" section.

Filter chips should appear for all applied filters.  
However, in this case, **no chips appear**, and the UI does not reflect the selected filter condition.

### 6. Steps to Reproduce
1. Open **Sales Analytics Dashboard**.  
2. Navigate to **Store Performance**.  
3. Open the **Status filter dropdown**.  
4. Select both options:  
   -  Active  
   -  Inactive  
5. Click **Apply Filters**.  
6. Observe the "Active Filters" section.

### 7. Expected Result
- The system should display filter chips for the selected values:  
  - **Status: Active**  
  - **Status: Inactive**  
- Chips should be visible under the **Active Filters** section.  
- User should be able to remove each chip individually using the “X” icon.

### 8. Actual Result
- No filter chips appear in the **Active Filters** area.  
- Filter selection is not visually represented.  
- Users cannot confirm the applied Status filters.  
- UI feedback becomes inconsistent and confusing.

---

# Bug Report – Store Table Still Displaying When No Stores Found

### Bug Id : 040

### 1. Bug Title
Store table remains visible even when filters return "No Stores Found"

### 2. Module
Sales Analytics Dashboard → Store Performance → Filters → Store Performance Data Table

### 3. Environment
- Application: Sales Analytics Dashboard  
- Browser: Chrome/Edge (Windows 10) 

### 4. Priority & Severity
- **Severity:** Medium  
- **Priority:** High  
  (Because it creates confusion and affects user understanding of results)

### 5. Description
When the user applies filters that result in **no matching store records**, the UI correctly displays a **"No Stores Found"** message.  
However, the **empty table structure is still visible below the message**, showing table headers with no data.

This causes UI inconsistency and misleads the user into thinking the table should contain rows.

### 6. Steps to Reproduce
1. Open **Sales Analytics Dashboard**.  
2. Navigate to **Store Performance**.  
3. Apply a filter combination that produces **no matching stores**  
   (e.g., Sales Volume Min: -2, Max: -2, Status: Active + Inactive).  
4. Click **Apply Filters**.  
5. Scroll down to the table section.

### 7. Expected Result
- When no store data is found:
  - The **table should be completely hidden**.  
  - Only the **"No Stores Found"** message and **Clear All Filters** button should be shown.  
  - No table headers or table layout should appear.

### 8. Actual Result
- The **table area remains visible**, displaying:
  - Table headers  
  - Empty rows/blank space  
- This creates a misleading impression that data should exist but is missing.


# Bug Report – Incorrect Store Details Displayed on Store Selection

### Bug Id : 041

### 1. Bug Title
Incorrect store information displayed when clicking a store from Store Performance table

### 2. Module
Sales Analytics Dashboard → Store Performance → Store Performance Data → Store Details Page

### 3. Environment
- Application: Sales Analytics Dashboard  
- Browser: Chrome (Windows)  

### 4. Severity & Priority
- **Severity:** High  
- **Priority:** High  

### 5. Description
When the user clicks on any store from the *Store Performance Data* table, the system navigates to the Store Details page.  
However, the details displayed on the Store Details page **do not match the selected store**.  
Store Name, Address, Contact Information, and Analytics data appear mismatched or incorrect.

### 6. Steps to Reproduce
1. Open **Sales Analytics Dashboard**.  
2. Navigate to **Store Performance**.  
3. Scroll to **Store Performance Data** table.  
4. Click any store row (e.g., MIA-SB-001 “South Beach Market”).  
5. Observe the details displayed on the Store Details page.

### 7. Expected Result
- The Store Details page should show the **correct information** for the selected store (Store Code, Name, Address, City, State, Contact, Metrics, etc.).

### 8. Actual Result
- The Store Details page shows **incorrect and mismatched data**.  
- Store information does not correspond to the selected store row.  
- Some fields show wrong store name, address, SKU data, staff count, etc.

----

#               Staff Performance Analysis

-----


# Bug Report: Role Filter Chips Not Displayed After Applying Filters

### Bug Id : 42
 
### 1. Module:
 Sales Analytics → Staff Performance Analysis  
### Environment: 
- **Browser:** Chrome (Windows 10)  
- **Resolution:** 1920×1080  
- **Build:** Production  

### 2.Issue Summary
When selecting **Role filters** (Promodizer / Supervisor) on the **Staff Performance Analysis** page, the selected roles are **not displayed as filter chips** in the filters summary area.

Only the **Date Range** chip is shown, while the Role filters remain hidden.

### 3. Steps to Reproduce
1. Login to **Sales Analytics Dashboard**  
2. Navigate to **Staff Performance → Staff Performance Analysis**  
3. Under **Filters**, in the **Role** section, select:  
   - Promodizer  
   - Supervisor  
4. Observe the filter chips displayed above the Staff Performance table  
5. Notice that **Role filter chips do not appear**

### 4. Expected Result
- After applying Role filters, the selected filter values should appear as chips, for example:  
  - `Promodizer`  
  - `Supervisor`  

These chips should be visible near the search bar or filter summary area.

### 5. Actual Result
- Role filter chips **do not appear**, even though the filters are applied.  
- Only the **Date Range** chip is shown.

## Evidence
Screenshot shows Role filters selected (checked) but **no chips** displayed for them in the filter summary panel.
<img width="959" height="443" alt="image" src="https://github.com/user-attachments/assets/06d0c07d-756f-444d-8f22-3e4475348847" />

----

# Bug Report: "Staff Not Found" Error When Clicking Staff Name

### Bug Id : 43
  
### 1. Module:
  Analytics → Staff Performance  
### 2. Environment:  
- **Browser:** Chrome (Windows 10)  
- **Resolution:** 1920×1080  
- **Build:** Latest Production
- 
### 3. Issue Summary
When the user clicks on a **staff name** from the Staff Performance list, the page opens but displays a **“Staff Not Found”** screen instead of showing the staff performance details.

### 4. Steps to Reproduce
1. Login to the **GTVL Management Portal**.  
2. Navigate to **Analytics → Staff Performance**.  
3. Click on any **staff name** from the list/table.  
4. Observe the redirected page.

### 4. Expected Result
- The system should load the **selected staff’s performance details**, including:
  - Employee ID  
  - Role  
  - Status  
  - Email / Contact  
  - Stats (Quantity Recorded, Transactions, Stores Active, Days Active)  
  - Activity Trend  

### 5. Actual Result
- Page loads with a message **“Staff Not Found”**.  
- Employee ID, Role, and Status fields appear as **“-”**.  
- All KPIs (Quantity, Transactions, Stores Active, Days Active) show **0**.  
- Activity Trend section loads but with no data.

### 6. Impact
- User cannot view performance analytics for any staff member.  
- Affects reporting, performance insights, and operational decisions.

## Evidence
Screenshot attached showing **“Staff Not Found”** message on Staff Performance details page.
<img width="1919" height="882" alt="Screenshot 2025-11-28 162547" src="https://github.com/user-attachments/assets/ebb575e4-1818-49f3-bab9-a45ae3c84f48" />

------