/* SIL WIKI — CATEGORY ICONS
   One clean, consistent SVG illustration per category, shown at the top of
   every page in that category. All use the site's purple/amber palette. */

const SIL_CATEGORY_ICONS = {
  start: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="30" fill="#EFE9FC"/>
    <path d="M32 14L46 22V40L32 48L18 40V22L32 14Z" stroke="#6B3FD4" stroke-width="2.5" stroke-linejoin="round" fill="#F7F4FD"/>
    <circle cx="32" cy="31" r="6" fill="#F5A623"/>
    <path d="M24 40L32 44L40 40" stroke="#4D2F8F" stroke-width="2" stroke-linecap="round"/>
  </svg>`,
  products: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="30" fill="#EFE9FC"/>
    <rect x="16" y="24" width="16" height="20" rx="2" fill="#F7F4FD" stroke="#6B3FD4" stroke-width="2.5"/>
    <rect x="34" y="18" width="14" height="26" rx="2" fill="#F7F4FD" stroke="#4D2F8F" stroke-width="2.5"/>
    <circle cx="41" cy="41" r="1.6" fill="#4D2F8F"/>
    <path d="M20 30H28M20 34H28" stroke="#F5A623" stroke-width="2" stroke-linecap="round"/>
  </svg>`,
  pricing: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="30" fill="#EFE9FC"/>
    <path d="M20 40L27 30L34 35L44 21" stroke="#6B3FD4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M37 21H44V28" stroke="#F5A623" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="17" y="42" width="30" height="3" rx="1.5" fill="#4D2F8F"/>
  </svg>`,
  vas: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="30" fill="#EFE9FC"/>
    <path d="M32 44C32 44 18 36 18 26C18 20.5 22 17 26.5 17C29 17 31 18.5 32 20.5C33 18.5 35 17 37.5 17C42 17 46 20.5 46 26C46 36 32 44 32 44Z" fill="#F5A623" stroke="#4D2F8F" stroke-width="2"/>
    <path d="M26 27L30 27L32 23L34 31L36 27L38 27" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  onboarding: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="30" fill="#EFE9FC"/>
    <rect x="18" y="16" width="28" height="34" rx="2.5" fill="#F7F4FD" stroke="#6B3FD4" stroke-width="2.5"/>
    <circle cx="32" cy="27" r="5" fill="#F5A623"/>
    <path d="M24 40C24 36 27.5 34 32 34C36.5 34 40 36 40 40" stroke="#4D2F8F" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M40 20L44 24L52 14" stroke="#4D2F8F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  servicing: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="30" fill="#EFE9FC"/>
    <path d="M22 42V26C22 24 23.5 22 26 22H38C40.5 22 42 24 42 26V42" stroke="#6B3FD4" stroke-width="2.5" stroke-linejoin="round" fill="#F7F4FD"/>
    <path d="M18 42H46" stroke="#4D2F8F" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="32" cy="31" r="4.5" fill="#F5A623"/>
    <path d="M27 16L32 20L37 16" stroke="#4D2F8F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  support: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="30" fill="#EFE9FC"/>
    <path d="M18 30C18 22 24.5 16 32 16C39.5 16 46 22 46 30V38C46 40 44.5 42 42.5 42H40" stroke="#6B3FD4" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    <rect x="15" y="30" width="8" height="10" rx="2" fill="#F5A623"/>
    <rect x="41" y="30" width="8" height="10" rx="2" fill="#4D2F8F"/>
    <path d="M40 42C40 45 37.5 47 34.5 47H31" stroke="#6B3FD4" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="29" cy="47" r="2.5" fill="#F5A623"/>
  </svg>`,
  incentives: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="30" fill="#EFE9FC"/>
    <circle cx="32" cy="30" r="14" fill="#F5A623" stroke="#4D2F8F" stroke-width="2"/>
    <text x="32" y="35" font-family="Georgia, serif" font-size="14" font-weight="bold" fill="#FFFFFF" text-anchor="middle">₱</text>
    <path d="M24 42L20 50M40 42L44 50" stroke="#6B3FD4" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`,
  strategy: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="30" fill="#EFE9FC"/>
    <rect x="17" y="19" width="30" height="24" rx="2" fill="#F7F4FD" stroke="#6B3FD4" stroke-width="2.5"/>
    <path d="M22 36L28 28L33 33L42 22" stroke="#F5A623" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22 46H42" stroke="#4D2F8F" stroke-width="2" stroke-linecap="round"/>
    <circle cx="47" cy="17" r="6" fill="#4D2F8F"/>
    <path d="M44.5 17L46.5 19L49.5 15" stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  tools: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="30" fill="#EFE9FC"/>
    <path d="M39 17C42.5 17 45.5 19.5 46 23L40 29L35 24L41 18C40.3 17.5 39.7 17 39 17Z" fill="#F5A623" stroke="#4D2F8F" stroke-width="1.8" stroke-linejoin="round"/>
    <path d="M35 24L18 41C17 42 17 44 18 45C19 46 21 46 22 45L39 28" stroke="#6B3FD4" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="#F7F4FD"/>
  </svg>`,
  marketing: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="30" fill="#EFE9FC"/>
    <path d="M18 26H26L36 18V46L26 38H18V26Z" fill="#F7F4FD" stroke="#6B3FD4" stroke-width="2.5" stroke-linejoin="round"/>
    <path d="M40 26C42.5 28 42.5 36 40 38" stroke="#F5A623" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M44 21C48.5 25 48.5 39 44 43" stroke="#4D2F8F" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`,
  hr: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="30" fill="#EFE9FC"/>
    <circle cx="25" cy="24" r="6" fill="#F5A623"/>
    <path d="M15 42C15 36 19.5 33 25 33C30.5 33 35 36 35 42" stroke="#4D2F8F" stroke-width="2.2" stroke-linecap="round" fill="none"/>
    <circle cx="41" cy="26" r="5" fill="#F7F4FD" stroke="#6B3FD4" stroke-width="2"/>
    <path d="M33 44C33 39.5 36.5 37 41 37C45.5 37 49 39.5 49 44" stroke="#6B3FD4" stroke-width="2.2" stroke-linecap="round" fill="none"/>
  </svg>`,
  changelog: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="30" fill="#EFE9FC"/>
    <path d="M32 16C40.8 16 48 23.2 48 32C48 40.8 40.8 48 32 48C23.2 48 16 40.8 16 32" stroke="#6B3FD4" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    <path d="M12 32L16 26L20 32" stroke="#6B3FD4" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M32 23V32L38 36" stroke="#F5A623" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
};

window.SIL_CATEGORY_ICONS = SIL_CATEGORY_ICONS;
