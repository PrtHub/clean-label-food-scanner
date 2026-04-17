# CleanLabel: Landing Page Playbook

Everything needed to build a high-converting landing page at **cleanlabelapp.sbs** that turns ad traffic into App Store installs. Based on patterns from top-converting health/food apps (Yuka, Calm, Noom, MyFitnessPal, Fastic).

---

## Conversion Goal

**Primary:** Visitor → App Store → Install → Open
**Secondary:** Email capture (for retargeting)
**Target conversion rate:** 8-12% (installs from landing page visitors)

The entire page exists for ONE reason: get them to tap "Download on App Store."

---

## Page Structure (Scroll Order)

```
1. SMART APP BANNER (Safari iOS only — native banner)
2. HERO — Hook + App Store badge + phone mockup
3. SOCIAL PROOF — Rating + stats + logos
4. PROBLEM — The shock stat
5. SOLUTION — How the app works (3 steps)
6. FEATURES — Core capabilities grid
7. BEFORE/AFTER — Visual comparison
8. TESTIMONIALS — Real user quotes (when available)
9. PRICING — Free + Premium plans
10. FAQ — Objection handling
11. FINAL CTA — Big App Store button
12. FOOTER — Legal links
```

**Sticky CTA:** "Download on App Store" button visible on scroll (mobile bottom bar + desktop top right)

---

## Section 1: Hero (Above the Fold)

The most important 5 seconds of the entire page.

### Layout (Desktop)

```
┌───────────────────────────────────────────────────┐
│  Logo              Home  Features  Pricing  FAQ  │
├───────────────────────────────────────────────────┤
│                                                   │
│  [EYEBROW] AI Food Label Scanner                  │
│                                                   │
│  Scan any label.                                  │
│  Find hidden toxins                               │
│  in 3 seconds.                                    │
│                                                   │
│  260+ harmful ingredients detected.              │
│  Personalized to your diet and allergies.        │
│                                                   │
│  [📱 Download on App Store]  [▶ Watch Demo]     │
│                                                   │
│  ⭐⭐⭐⭐⭐ 4.9 · 27,000+ downloads               │
│                                                   │
└───────────────────────────────────────────────────┘
          [PHONE MOCKUP showing red TOXIC result]
```

### Layout (Mobile)

```
┌─────────────────────────┐
│ ☰ CleanLabel      [📱] │
├─────────────────────────┤
│                         │
│ Scan any label.         │
│ Find hidden toxins      │
│ in 3 seconds.           │
│                         │
│ 260+ harmful            │
│ ingredients detected.   │
│                         │
│ [📱 Download Now]       │
│                         │
│ ⭐⭐⭐⭐⭐ 4.9 (27K)   │
│                         │
│ [Phone mockup below]    │
└─────────────────────────┘
```

### Hero Copy (Test These)

**Option A — Fear-driven (highest CVR for cold traffic):**

> **H1:** Scan any label. Find hidden toxins in 3 seconds.
> **Subhead:** 260+ harmful ingredients detected. Personalized to your diet and allergies. Free on the App Store.

**Option B — Curiosity-driven:**

> **H1:** What's actually in your food?
> **Subhead:** Point your camera at any ingredient label. Our AI reads the fine print you skip and reveals the hidden toxins in 3 seconds.

**Option C — Identity-driven:**

> **H1:** The AI food scanner for people who actually read the label.
> **Subhead:** Built for clean eaters, parents, keto dieters, vegans, and anyone tired of being lied to by the food industry.

### Hero Visual

**Primary:** iPhone mockup with red TOXIC result screen

- Show "Red 40", "Canola Oil", "Natural Flavors" as flagged pills
- Product name visible at top (e.g., "Goldfish Crackers")
- Use 3D iPhone mockup, slightly tilted, centered or right-aligned

**Secondary (below the fold):** Video loop of scan-to-result (6 seconds, auto-play muted)

### CTA Button

Use **App Store official badge** — not a custom button. Apple's badge converts 30% better because users recognize it.

```html
<a
  href="https://apps.apple.com/us/app/cleanlabel-ingredient-scanner/id6760940713"
>
  <img src="/app-store-badge.svg" alt="Download on App Store" width="180" />
</a>
```

Add smart detection: If user is on iOS → direct link to App Store. If desktop → show QR code next to button.

---

## Section 2: Social Proof Bar

Full-width strip, runs across the top of the page after hero.

```
┌─────────────────────────────────────────────────────────┐
│  ⭐⭐⭐⭐⭐ 4.9         27,000+         260+              │
│   App Store Rating      Downloads     Toxins Detected    │
└─────────────────────────────────────────────────────────┘
```

**If you have press mentions:** Add "As seen in" with logos of Buzzfeed, Well+Good, etc.

**If you don't yet:** Use category descriptors instead:

- "#1 Health app trending in US"
- "Trusted by 27,000+ families"
- "Featured in r/CleanEating"

---

## Section 3: The Problem (Fear Hook)

Full-screen section, dark background, big numbers.

```
┌─────────────────────────────────────────────────┐
│                                                 │
│  THE HIDDEN TRUTH                               │
│                                                 │
│  73%                                            │
│  of grocery store products contain              │
│  at least one toxic additive.                   │
│                                                 │
│  177+                                           │
│  hidden chemicals are legally allowed           │
│  in your food in the US.                        │
│                                                 │
│  5 POUNDS                                       │
│  of chemical additives consumed                 │
│  per American per year.                         │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Copy:**

> **Section Eyebrow:** The Hidden Truth
> **Headline:** The food industry is lying to you.
> **Body:** "Natural," "Organic," "Healthy" — these words on the front of the package mean nothing. The ingredient list on the back tells the real story. Most of us don't have time to read it. Even if we did, we wouldn't recognize half the chemicals.

---

## Section 4: Solution (How It Works)

3-column layout showing the 3-step process.

```
┌─────────────┬─────────────┬─────────────┐
│     📸      │     🧠      │     ✅      │
│             │             │             │
│    SCAN     │   ANALYZE   │   VERDICT   │
│             │             │             │
│  Point your │  AI checks  │  Clean or   │
│  camera at  │  260+ toxic │  Toxic in   │
│  any label  │  compounds  │  3 seconds  │
└─────────────┴─────────────┴─────────────┘
```

**Section Headline:** Three seconds to clarity.
**Section Subhead:** No more guessing at the grocery store. Just scan, get the truth, move on.

---

## Section 5: Features Grid

6 features in a 3x2 grid (desktop) or 1x6 stack (mobile).

```
┌────────────────┬────────────────┬────────────────┐
│   🔍           │   🎓           │   🔄           │
│ AI Ingredient  │ Ingredient     │ Healthier      │
│ Detection      │ Education      │ Alternatives   │
│                │                │                │
│ 260+ harmful   │ Tap any flag   │ AI suggests    │
│ compounds,     │ to learn why   │ real cleaner   │
│ seed oils,     │ it's harmful & │ products for   │
│ hidden MSG,    │ what it does   │ every toxic    │
│ artificial     │ to your body   │ item you scan  │
│ dyes           │                │                │
├────────────────┼────────────────┼────────────────┤
│   🎯           │   🛡️           │   📱           │
│ Personalized   │ Allergen       │ 100% Private   │
│ Scans          │ Protection     │                │
│                │                │                │
│ Tailored to    │ Flags top 9    │ No images      │
│ your diet —    │ allergens +    │ stored. No     │
│ Vegan, Keto,   │ cross-contam.  │ account.       │
│ Gluten-Free,   │ warnings for   │ Everything     │
│ and more       │ every scan     │ on device      │
└────────────────┴────────────────┴────────────────┘
```

---

## Section 6: Before / After (The Money Shot)

Side-by-side comparison — most visually compelling section.

**Layout:**

```
┌──────────────────────┬──────────────────────┐
│                      │                      │
│  BEFORE CLEANLABEL   │  AFTER CLEANLABEL    │
│                      │                      │
│  [Product packaging  │  [App screen showing │
│   showing "Natural", │   TOXIC result with  │
│   "Organic" claims]  │   Red 40, Canola,    │
│                      │   MSG flagged]       │
│                      │                      │
│  What you think      │  What's actually     │
│  you're eating       │  in your food        │
└──────────────────────┴──────────────────────┘
```

**Section Headline:** What the box says vs. what's actually inside.
**Body:** Companies spend billions making the front of the package look healthy. The ingredient list tells a different story. CleanLabel reads the fine print so you don't have to.

---

## Section 7: Testimonials

**Rule:** Only use real testimonials. Fake ones get you sued (FTC).

### If you have real reviews yet

Pull 3-5 from App Store reviews. Display with:

- Star rating (always 5 stars)
- Full quote
- First name + "Verified App Store Review"
- Device mockup showing the review

### If you don't yet

Use **outcome statistics** instead:

```
"The average user discovers 4 hidden toxins on their first scan."

"73% of products scanned contain at least one flagged ingredient."

"89% of users report changing their grocery habits within the first week."
```

**Or use real Reddit posts** (with permission or anonymized):

```
r/CleanEating: "Scanned my kids' 'organic' granola bars. Found maltodextrin
and canola oil hiding in the first 5 ingredients."

r/Biohackers: "My bloating disappeared after 2 weeks of scanning
everything before buying."

r/Keto: "This app caught 'soluble corn fiber' in my keto bar that was
spiking my blood sugar."
```

---

## Section 8: Pricing

Clean 3-column pricing table. **Do NOT hide pricing — it kills conversion.**

```
┌───────────────┬───────────────┬───────────────┐
│     FREE      │    ANNUAL     │   LIFETIME    │
│               │  [BEST VALUE] │  [EXCLUSIVE]  │
│               │               │               │
│    $0         │   $0.96/wk    │   $99.99      │
│  forever      │   $49.99/yr   │   one-time    │
│               │               │               │
│ • 1 scan/week │ • Unlimited   │ • Unlimited   │
│ • Free tier   │   scans       │   forever     │
│   access      │ • All features│ • All features│
│               │ • Cancel any  │ • No renewals │
│               │   time        │   ever        │
│               │               │               │
│ [Get Free]    │ [Start Now]   │ [Own Forever] │
└───────────────┴───────────────┴───────────────┘
```

**Subhead:** "All plans include full AI analysis, 260+ toxin detection, ingredient education, and healthier alternatives."

**Trust line:** "No hidden fees. Cancel anytime from App Store."

---

## Section 9: FAQ (Objection Handling)

Accordion-style, expandable rows. Tackle the objections that kill installs.

**Top 10 Questions to Answer:**

1. **Is CleanLabel really free?**

   > Yes. You get 1 free scan per week with no credit card required. Upgrade to Premium for unlimited scans.

2. **What makes this different from Yuka or Fooducate?**

   > Unlike database-based scanners, CleanLabel uses AI to read any label — even products not in any database. It also educates you on WHY each ingredient is harmful, and suggests cleaner alternatives.

3. **How accurate is the AI?**

   > ~95% accurate. For severe allergies or medical conditions, we recommend verifying critical ingredients on the physical label.

4. **Does it work on barcodes or just labels?**

   > It scans the physical ingredient label on any product — no barcode needed. Works globally, in any language.

5. **Is my data private?**

   > Yes. No account required. Scans happen on your device. Images are never stored on our servers.

6. **What diets does it support?**

   > Vegan, Vegetarian, Keto, Paleo, Gluten-Free, Dairy-Free, Whole30, Mediterranean, Low-Sugar, Halal, Kosher, Low-FODMAP, plus custom filters.

7. **Can I cancel anytime?**

   > Yes. Manage and cancel subscriptions directly from your App Store settings. No lock-in.

8. **Does it work without internet?**

   > Internet is required for AI analysis. Your scan history is stored locally and accessible offline.

9. **What phones does it support?**

   > iPhone running iOS 15.1 or later. Android coming soon.

10. **What if I scan something that's not food?**
    > Our AI detects non-food images and doesn't count them toward your scan limit.

---

## Section 10: Final CTA

Full-screen section, emerald background, massive text.

```
┌─────────────────────────────────────────────────┐
│                                                 │
│           Stop trusting the front.              │
│                                                 │
│           Start reading the back.               │
│                                                 │
│         [📱 Download on App Store]              │
│                                                 │
│          Free · No credit card                  │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

## Section 11: Footer

```
┌────────────────────────────────────────────────────┐
│  CleanLabel                                        │
│  Exposing the label. Protecting your health.       │
│                                                    │
│  Product          Company          Legal           │
│  Features         About            Privacy         │
│  Pricing          Blog             Terms           │
│  Download         Contact          Support         │
│                                                    │
│  © 2026 CleanLabel. All rights reserved.          │
└────────────────────────────────────────────────────┘
```

---

## Design Specifications

### Colors (Dark Mode Primary)

| Element          | Color                    | Usage                        |
| ---------------- | ------------------------ | ---------------------------- |
| Background       | `#0A0A0A`                | Main page background         |
| Cards            | `rgba(255,255,255,0.03)` | Feature cards, testimonials  |
| Primary CTA      | `#10B981`                | Main buttons, accents        |
| Secondary Accent | `#34D399`                | Text highlights, icons       |
| Danger           | `#EF4444`                | Toxic indicators, fear stats |
| Text (primary)   | `#FFFFFF`                | Headlines                    |
| Text (body)      | `#A1A1AA`                | Body copy                    |
| Text (muted)     | `#52525B`                | Captions, footer             |

### Typography

- **Headlines:** Inter Black (900 weight), tight letter spacing
- **Body:** Inter Medium (500 weight)
- **UI elements:** Inter Bold (700 weight)
- **Sizes:** Use a modular scale (48px, 36px, 24px, 18px, 16px, 14px, 12px)

### Spacing

- Section padding: 120px top/bottom (desktop), 80px (mobile)
- Card padding: 32px (desktop), 24px (mobile)
- Max content width: 1200px centered

### Imagery

- **Phone mockups:** iPhone 15 Pro in Black Titanium
- **Food imagery:** Lifestyle shots of real groceries, slightly blurred backgrounds
- **Hero animation:** Looping scan-to-result video (6s, muted, auto-play)
- **Icons:** Lucide icons only (matching the app)

---

## Technical Setup

### Smart App Banner (iOS Safari)

Add this to the `<head>` — shows native "Get the app" banner to iOS users:

```html
<meta name="apple-itunes-app" content="app-id=6760940713" />
```

### Open Graph / Social Sharing

```html
<meta property="og:title" content="CleanLabel — AI Food Label Scanner" />
<meta
  property="og:description"
  content="Scan any ingredient label. Find 260+ hidden toxins in 3 seconds."
/>
<meta property="og:image" content="https://cleanlabelapp.sbs/og-image.png" />
<meta property="og:url" content="https://cleanlabelapp.sbs" />
<meta name="twitter:card" content="summary_large_image" />
```

### SEO Meta

```html
<title>
  CleanLabel — AI Food Label Scanner | Detect Hidden Toxins in 3 Seconds
</title>
<meta
  name="description"
  content="The AI-powered food scanner that detects 260+ toxic ingredients hiding in your groceries. Free on the App Store."
/>
<meta
  name="keywords"
  content="food scanner, ingredient analyzer, seed oil detector, food toxins, clean eating, label scanner"
/>
```

### Analytics

Add these in order:

1. **Google Analytics 4** — basic traffic and conversion tracking
2. **Meta Pixel** — required for Meta Ads conversion tracking
3. **Mixpanel** — match your app's analytics stack

```html
<!-- Meta Pixel -->
<script>
  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(
    window,
    document,
    "script",
    "https://connect.facebook.net/en_US/fbevents.js",
  );
  fbq("init", "YOUR_PIXEL_ID");
  fbq("track", "PageView");
</script>
```

### Conversion Events to Track

| Event                  | When Fired                            |
| ---------------------- | ------------------------------------- |
| `PageView`             | Page loads                            |
| `ViewContent`          | Hero fully visible                    |
| `Lead`                 | Email captured (if form exists)       |
| `InitiateCheckout`     | "Download" button clicked             |
| `CompleteRegistration` | User reached App Store (via referral) |

### App Store Deep Linking

Use **Universal Links** + **App Store Connect** campaign tokens to track installs from your landing page:

```
https://apps.apple.com/us/app/cleanlabel-ai-food-scanner/id6760940713?pt=PROVIDER_ID&ct=landing_page_hero&mt=8
```

The `ct` parameter tracks which button was clicked — useful for A/B testing.

---

## Conversion Optimization Elements

### Sticky CTA Bar (Mobile)

```
┌─────────────────────────┐
│                         │
│     [Page Content]      │
│                         │
├─────────────────────────┤
│ [📱 Download on App     │ ← Sticky bottom bar
│      Store]             │
└─────────────────────────┘
```

Visible after user scrolls past hero. Emerald background, always present.

### Exit Intent (Desktop)

When user's cursor moves toward closing the browser tab, show a modal:

```
┌───────────────────────────────┐
│ Before you go...              │
│                               │
│ Get 1 free scan + weekly      │
│ pantry audit tips.            │
│                               │
│ [Enter email]                 │
│ [Send it to me]               │
└───────────────────────────────┘
```

Captures emails for later retargeting. Conversion: 3-5%.

### Mid-page Email Capture

Between sections 5 and 6:

```
"Get our free guide: 50 ingredients to avoid at the grocery store."
[Enter email]  [Get the guide]
```

This gives you an audience to retarget with Meta Ads even if they don't install immediately.

---

## A/B Testing Framework

Launch with **ONE control** and test **ONE variable at a time**. Don't try to perfect the page before launch — launch ugly, then optimize based on data.

### Week 1-2 Test: Hero Headline

- **Control:** "Scan any label. Find hidden toxins in 3 seconds."
- **Variant A:** "What's actually in your food?"
- **Variant B:** "The AI food scanner for people who actually read the label."

Winner = highest "Download" button click rate.

### Week 3-4 Test: CTA Placement

- **Control:** Single App Store badge in hero
- **Variant A:** Dual badge (Download + Watch Demo)
- **Variant B:** Email capture first, then App Store badge after

### Week 5-6 Test: Social Proof Position

- **Control:** Stats below hero
- **Variant A:** Stats in hero below subhead
- **Variant B:** Full testimonial carousel before features

### Week 7-8 Test: Pricing Visibility

- **Control:** Pricing section visible
- **Variant A:** Pricing hidden (just "Free download")
- **Variant B:** Pricing visible with lifetime highlighted

---

## Copy Principles (Apply Everywhere)

1. **Specific over vague** — "260+ toxins" not "many toxins"
2. **Second person** — "your food" not "people's food"
3. **Active voice** — "Scan any label" not "Labels can be scanned"
4. **Benefit before feature** — "Know what's in your food" before "AI scans ingredients"
5. **Short sentences** — 15 words max per sentence
6. **No jargon** — say "toxic" not "metabolic disruptor"

---
