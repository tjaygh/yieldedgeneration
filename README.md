================================================================================
                    YIELDED GENERATION CHURCH WEBSITE
                          MAINTENANCE GUIDE
================================================================================

Version: 1.0
Date: April 2026

================================================================================
1.0 PROJECT OVERVIEW
================================================================================

The YIELDED GENERATION Church Website is a responsive website built with HTML5, 
CSS3, and JavaScript. It includes 5 main pages:

Page Name     | File Name      | Purpose
--------------|----------------|----------------------------------------
Home          | index.html     | Landing page with welcome message
About         | about.html     | Church story, beliefs, leadership
Events        | events.html    | Services, events, life groups
Gallery       | gallery.html   | Photo collection with lightbox
Contact       | contact.html   | Contact form, prayer requests, FAQ

================================================================================
2.0 FILE STRUCTURE
================================================================================

YIELDED_GENERATION_WEBSITE/
│
├── index.html
├── about.html
├── events.html
├── gallery.html
├── contact.html
├── Logo.jpg
├── README.txt
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── images/
    ├── left-church.jpg
    └── right-church.jpg

================================================================================
3.0 HOW TO UPDATE CONTENT
================================================================================

3.1 Update Service Times (Home Page)

To update service times:
1. Open index.html in Notepad or any text editor
2. Find the "What to Expect" section
3. Locate this code:
   <p>Sundays at <strong>10:00 AM</strong></p>
4. Change "10:00 AM" to your new time
5. Save the file

3.2 Update Leadership Information (About Page)

To update pastor/leader information:
1. Open about.html
2. Scroll to "Our Leadership" section
3. Each leader card looks like this:

   <div class="leader-card">
       <div class="leader-avatar">
           <div class="avatar-initials">PA</div>
       </div>
       <h3>Pastor Michael Adeyemi</h3>
       <p class="leader-title">Senior Pastor</p>
       <p class="leader-bio">Description text here...</p>
       <div class="leader-contact">
           <a href="mailto:email@example.com">Email</a>
       </div>
   </div>

What to change:
- avatar-initials: Change "PA" to new initials (2 letters)
- h3: Change pastor's full name
- leader-title: Change position title
- leader-bio: Change description text
- Email: Change email address

To add a new leader:
- Copy the entire leader-card div
- Paste inside the leadership-grid div
- Update the content

To remove a leader:
- Delete the entire leader-card div for that person

3.3 Add New Events (Events Page)

To add a new event:
1. Open events.html
2. Scroll to "Upcoming Special Events" section
3. Add this code inside the events-grid div:

   <div class="event-card">
       <div class="event-date">
           <span class="event-month">APR</span>
           <span class="event-day">12</span>
       </div>
       <div class="event-details">
           <h3>Event Title</h3>
           <p class="event-meta">Day, Date • Time | Location</p>
           <p class="event-description">Brief description</p>
           <a href="#" class="event-link">Register Now →</a>
       </div>
   </div>

Replace:
- APR with the month (MAY, JUN, etc.)
- 12 with the day number
- Event Title with your event name
- Date, time, location with actual details
- Description with event information

3.4 Add Photos to Gallery (Gallery Page)

To add a new photo:
1. Place your image in the "images/" folder
2. Open gallery.html
3. Add this code inside the gallery-grid div:

   <div class="gallery-item" data-category="CATEGORY">
       <div class="gallery-image-wrapper">
           <img src="images/YOUR-IMAGE.jpg" alt="Description" class="gallery-img" loading="lazy">
           <div class="gallery-overlay">
               <span class="gallery-category">CATEGORY</span>
               <h3>Photo Title</h3>
               <p>Photo description</p>
               <span class="gallery-icon">🔍</span>
           </div>
       </div>
   </div>

Important Notes:
- Replace YOUR-IMAGE.jpg with your actual image file name
- Categories can be: worship, events, community, youth, outreach
- Keep image file sizes under 500KB for fast loading

To remove a photo:
- Delete the entire gallery-item div for that photo

3.5 Update Contact Information (Contact Page)

To update address, phone, email:
1. Open contact.html
2. Scroll to the contact-info section

Update address:
   <p>Opposite USTED, IPT-Asuyeboa, Kumasi</p>

Update phone:
   <p>+233 (0) 123 456 789</p>

Update email:
   <p><a href="mailto:info@yieldedgeneration.org">info@yieldedgeneration.org</a></p>

3.6 Update Sermon Series (Home Page)

To update the current sermon series:
1. Open index.html
2. Scroll to "Current Series" section
3. Update the title and description:

   <h3>SURRENDER</h3>
   <p>What does it really mean to yield every part of our lives to God?</p>

================================================================================
4.0 HOW TO ADD NEW PAGES
================================================================================

To add a new page to the website:

Step 1: Create a new HTML file (e.g., sermons.html)

Step 2: Copy the header and footer from any existing page

Step 3: Add your custom content between the <main> tags

Step 4: Add the new page to the navigation menu in ALL existing pages:
   - Open each HTML file (index.html, about.html, events.html, gallery.html, contact.html)
   - Find the <nav> section
   - Add a new link: <a href="sermons.html">Sermons</a>

Step 5: Save all files and test the link

================================================================================
5.0 HOW TO CHANGE COLORS
================================================================================

All colors are in css/style.css. Here are common changes:

To change the primary blue color:
1. Open css/style.css
2. Find: #0b3d91
3. Replace with your new hex color code

To change button hover color:
1. Find: .btn-primary:hover
2. Change the background-color value

To change the font:
1. Find: font-family: Arial, sans-serif
2. Replace Arial with your desired font

To change spacing:
1. Find: section { padding: 60px 40px; }
2. Adjust the values as needed

Color Reference:

Element              | Current Color | What to Change
---------------------|---------------|------------------
Header/Footer        | #0b3d91       | Primary blue
Buttons              | #0b3d91       | Primary blue
Hover effects        | #1a5bbf       | Light blue
Body text            | #333333       | Dark gray
Section backgrounds  | #f9f9f9       | Light gray

================================================================================
6.0 HOW TO UPDATE SEARCH DATABASE
================================================================================

The search functionality is in js/script.js.

To add new searchable content:
1. Open js/script.js
2. Find the searchDatabase object
3. Add new content to the appropriate category:

Example - Add a new sermon:

   sermons: [
       // existing sermons...
       {
           title: "New Sermon Title",
           url: "#",
           description: "Brief description of the sermon",
           keywords: ["keyword1", "keyword2", "keyword3"]
       }
   ]

Example - Add a new page:

   pages: [
       // existing pages...
       {
           title: "New Page Name",
           url: "newpage.html",
           description: "Description of the new page",
           keywords: ["keyword1", "keyword2"]
       }
   ]

Example - Add a new event:

   events: [
       // existing events...
       {
           title: "New Event Name",
           url: "events.html",
           description: "Event description",
           keywords: ["keyword1", "keyword2"]
       }
   ]

================================================================================
7.0 TECHNICAL REQUIREMENTS
================================================================================

To run this website, you need:

Requirement        | Minimum Specification
-------------------|----------------------------------------
Web Browser        | Chrome 90+, Firefox 88+, Edge 90+
Internet           | Not required (works offline)
Text Editor        | Notepad, Notepad++, VS Code (for editing)
Image Editor       | Any (for resizing images)

To host online (optional):
- GitHub Pages (free)
- Netlify (free)
- Any web hosting service

================================================================================
8.0 BROWSER COMPATIBILITY
================================================================================

The website has been tested and works on:

Desktop Browsers:
- Google Chrome 90+ ................... Fully compatible
- Mozilla Firefox 88+ ................. Fully compatible
- Microsoft Edge 90+ .................. Fully compatible
- Safari 14+ .......................... Fully compatible
- Opera 75+ ........................... Fully compatible

Mobile Browsers:
- iPhone Safari ........................ Fully compatible
- Android Chrome ....................... Fully compatible
- Tablet (all browsers) ................ Fully compatible

================================================================================
9.0 TROUBLESHOOTING
================================================================================

Common Issues and Solutions:

Problem: Images not displaying
Solution: 
- Check that images are in the "images/" folder
- Verify file names match exactly (case-sensitive)
- Check file extensions (.jpg, .png, .gif)

Problem: Search bar not working
Solution:
- Open browser console (F12) to check for errors
- Verify js/script.js is properly linked in HTML
- Check that searchDatabase has content

Problem: Mobile menu not showing
Solution:
- Ensure screen width is less than 768px
- Verify mobile-menu-btn exists in HTML
- Check that JavaScript is loading

Problem: Styles not applying
Solution:
- Clear browser cache (Ctrl+Shift+Delete)
- Verify css/style.css is properly linked
- Check for typos in CSS selectors

Problem: Contact form not submitting
Solution:
- This is a front-end only demo
- Form validation works but does not send real emails
- To add email functionality, you need a backend (PHP, Node.js, or Formspree)

================================================================================
10.0 MAINTENANCE CHECKLIST
================================================================================

Weekly Tasks:
[ ] Check all links are working
[ ] Verify upcoming events are current
[ ] Test contact form validation

Monthly Tasks:
[ ] Review and update sermon series content
[ ] Add new photos to gallery
[ ] Check for broken images

Quarterly Tasks:
[ ] Review leadership information
[ ] Update service times if changed
[ ] Backup all files

Yearly Tasks:
[ ] Update copyright year in footer
[ ] Review and refresh all content
[ ] Test on new browser versions

================================================================================
11.0 BACKUP INSTRUCTIONS
================================================================================

To backup your website:
1. Copy the entire project folder
2. Paste it to a different location (external drive, cloud storage)
3. Rename the backup with the current date

Example: Website_Backup_2026_04_03

Recommended backup locations:
- Google Drive
- OneDrive
- External hard drive
- USB flash drive

================================================================================
12.0 CONTACT FOR SUPPORT
================================================================================

For technical support or questions:

Issue Type              | Contact
------------------------|----------------------------------------
Content Updates         | Church Administrator
Technical Issues        | Web Development Team
Emergency Fixes         | Replace with original backup files

================================================================================
                        END OF MAINTENANCE GUIDE
================================================================================

Last Updated: April 2026
Version: 1.0

================================================================================
