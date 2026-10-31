# Date Planner (installable app)

This folder is a PWA: it installs on your phone like an app, with its own icon and full screen, and works offline. No Play Store or App Store needed.

## 1. Put it online (HTTPS is required for installing)
Upload this whole folder to any free static host, for example:
- **Netlify Drop**: drag the folder onto the drop page.
- **GitHub Pages**: upload the files to a repo, then enable Pages.
- **Cloudflare Pages**: create a project and upload the folder.

You get a link like `https://yourname.netlify.app`.

## 2. Install it
- **Android (Chrome)**: open the link, then tap **Install** in the app menu, or the Install app button.
- **iPhone (Safari)**: open the link, tap **Share**, then **Add to Home Screen**.
- **Desktop (Chrome/Edge)**: click the install icon in the address bar.

## Good to know
- On iPhone, install first and then create invitations inside the installed app. The installed app keeps its own storage, separate from Safari.
- Invitation links you send open in her browser. She does not need to install anything.
- Photos and drafts are stored on the device only. They are not synced between devices.
- To update: replace `index.html`, change `V` in `sw.js` (for example `sunflower-v2`), and upload again.
