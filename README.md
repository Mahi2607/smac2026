# SMAC 2026 — Website
## International Conference on Smart Media, AI and Emerging Communications
### Amity School of Communication | Amity University Mumbai

---

## 📁 FOLDER STRUCTURE

```
smac2026/
├── index.html          ← Main webpage (all content from brochure)
├── css/
│   └── style.css       ← Purple/violet theme — edit colors here
├── js/
│   └── script.js       ← Countdown, menu, animations
├── images/             ← DROP YOUR IMAGES HERE
│   └── (see image list below)
└── README.md
```

---

## 🚀 XAMPP SETUP

1. Open **XAMPP Control Panel** → Start **Apache**
2. Copy `smac2026/` folder to `C:\xampp\htdocs\`
3. Open browser → `http://localhost/smac2026/`

### 📱 Open on Mobile (Same WiFi)
1. `Win + R` → `cmd` → `ipconfig` → note **IPv4 Address** (e.g. 192.168.1.5)
2. On phone: open browser → `http://192.168.1.5/smac2026/`

---

## 🖼️ IMAGES TO REPLACE (place in `images/` folder)

| File Name                  | Person / Item                         | Size      |
|----------------------------|---------------------------------------|-----------|
| amity-logo.png             | Amity University Mumbai logo          | 200×80 px |
| iqac-logo.png              | IQAC logo                             | 120×60 px |
| springer-logo.png          | Springer Publishing Partner logo      | 120×60 px |
| iic-logo.png               | Institution's Innovation Council logo | 120×60 px |
| hero-bg.jpg                | Hero banner background image          | 1920×1080 |
| dr-aseem-chauhan.jpg       | Chief Patron – Dr. Aseem Chauhan      | 300×300 px|
| dr-santhosh-kumar.jpg      | Patron – Prof. Dr. A.W. Santhosh Kumar| 300×300 px|
| prof-rajesh-sisodia.jpg    | Convener – Prof. Rajesh Sisodia       | 300×300 px|
| dr-archan-mitra.jpg        | Co-Convener – Dr. Archan Mitra        | 250×250 px|
| supratim-mukherjee.jpg     | Faculty Coordinator                   | 250×250 px|
| dr-vaishali-panda.jpg      | Faculty Coordinator                   | 250×250 px|
| towson-logo.png            | Towson University, Maryland logo      | 200×80 px |
| gvsu-logo.png              | Grand Valley State University logo    | 200×80 px |
| atlantis-logo.png          | Atlantis Academic Press logo          | 200×80 px |
| springer-pub-logo.png      | Springer Nature logo                  | 200×80 px |

> ⚠️ Missing images show a styled purple placeholder automatically.

---

## ✏️ HOW TO EDIT SECTIONS

Open `index.html` in **VS Code** or **Notepad++**

### Update Conference Email
Search for: `Conference Email (to be updated)`
Replace with actual email address.

### Update Registration Link
Search for: `Registration Link (to be updated)`
Replace `href="#contact"` with the actual Google Form URL.

### Add More Committee Members
Search for: `<!-- FACULTY COORDINATORS -->`
Duplicate a `committee-person-card` block and update name/image/role.

### Update Submission Template Link
Search for: `<i class="fas fa-paper-plane"></i> Submit Now`
Update the `href` to point to the actual submission portal.

### Edit Registration Fees
Search for: `<span class="amount">5,000</span>`
All four fee cards are in the `#registration` section.

### Change Theme Colors
Open `css/style.css`, edit the `:root { }` block at the top:
```css
--primary:    #6a0dad;   /* Main purple */
--accent:     #e040fb;   /* Pink/magenta accent */
--gold:       #ffd700;   /* Gold highlight */
```

---

## 📅 CONFERENCE DETAILS (from brochure)

| Item                  | Detail                                         |
|-----------------------|------------------------------------------------|
| Conference Name       | SMAC 2026                                      |
| Full Name             | Intl. Conf. on Smart Media, AI & Emerging Comms|
| Theme                 | Reimagining Media, Communication & Society...  |
| Dates                 | 2nd – 3rd July 2026                            |
| Venue                 | Amity University Mumbai, Maharashtra, India    |
| Organizer             | Amity School of Communication                  |
| Publication Partner   | Atlantis Academic Press (Springer Nature)      |
| Academic Partners     | Towson University, Grand Valley State Univ.    |
| Indexing              | Scopus, Web of Science CPCI                    |
| Chief Patron          | Dr. Aseem Chauhan                              |
| Patron                | Prof. Dr. A.W. Santhosh Kumar                  |
| Convener              | Prof. Rajesh Sisodia                           |
| Co-Convener           | Dr. Archan Mitra                               |

---

*SMAC 2026 | Amity School of Communication | Amity University Mumbai*
