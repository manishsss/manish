export const contentFilters = ['All','Videos','Articles','X Posts'] as const;
export type ContentCategory = typeof contentFilters[number];
export interface ContentImage {src:string;alt:string;width:number;height:number}
export interface ContentItem {
  preview:{title:string;label?:string;excerpt?:string;order:number};
  id:string; category:ContentCategory; title:string; description:string; platform:string;
  url:string; thumbnail:string; images:ContentImage[]; videoUrl:string|null;
  caption:string; publishedAt:string; views:string|null; engagement:string|null;
}
// Text, dates, article cover, video posters and media URLs fetched from X's public syndication data.
// The Polymarket perps referral image is an owner-supplied replacement for the original post image.
// No view or engagement counts are inferred. Local WebP files keep previews fast and reliable.
// Preview copy and ordering supplied by the owner in the reference screenshots.
export const content:ContentItem[] = [
  {
    "id": "2071121247719796770",
    "category": "Videos",
    "title": "Nobody cares how the internet works",
    "description": "Why crypto could become as seamless as the internet we use every day.",
    "platform": "X",
    "url": "https://x.com/Web3Manish/status/2071121247719796770",
    "thumbnail": "/content/2071121247719796770-1.webp",
    "images": [
      {
        "src": "/content/2071121247719796770-1.webp",
        "width": 848,
        "height": 478,
        "alt": "Video poster for Nobody cares how the internet works"
      }
    ],
    "videoUrl": "https://video.twimg.com/amplify_video/2071109158590701568/vid/avc1/848x478/3lJr1s_iAUSK36_y.mp4",
    "caption": "Nobody cares how the internet works\n\nthey just use it\n\ncrypto is heading the same way\n\nsoon we'll stop caring how money moves too",
    "publishedAt": "2026-06-28T06:39:19.000Z",
    "views": null,
    "engagement": null,
    "preview": {
      "title": "Crypto, explained simply.",
      "order": 0
    }
  },
  {
    "id": "2074717587523420449",
    "category": "Videos",
    "title": "Propfunded AI trading competition",
    "description": "A short-form explainer on Propfunded AI’s trading competition.",
    "platform": "X",
    "url": "https://x.com/Web3Manish/status/2074717587523420449",
    "thumbnail": "/content/2074717587523420449-1.webp",
    "images": [
      {
        "src": "/content/2074717587523420449-1.webp",
        "width": 1200,
        "height": 675,
        "alt": "Video poster for Propfunded AI trading competition"
      }
    ],
    "videoUrl": "https://video.twimg.com/amplify_video/2074710783645319168/vid/avc1/1280x720/-B9PVxs7vLDk9Jj7.mp4",
    "caption": "Everyone crying about $0 airdrops \n\nwhile a $10,000 pool is sitting right in front of them\n\n@propfundedai launched a trading competition\n\n> join for $10\n> trade for 3 days\n> climb the p&l leaderboard\n> top 300 users win\n\nentries close july 13, winners announced july 17",
    "publishedAt": "2026-07-08T04:49:53.000Z",
    "views": null,
    "engagement": null,
    "preview": {
      "title": "Trading opportunities.",
      "order": 1
    }
  },
  {
    "id": "2059133951969759537",
    "category": "Articles",
    "title": "How I Turn $100 Into Daily Income on Polymarket",
    "description": "My experience with Polymarket LP rewards, starting with a $100 portfolio.",
    "platform": "X",
    "url": "https://x.com/Web3Manish/status/2059133951969759537",
    "thumbnail": "/content/2059133951969759537-1.webp",
    "images": [
      {
        "src": "/content/2059133951969759537-1.webp",
        "width": 1200,
        "height": 480,
        "alt": "Cover image for How I Turn $100 Into Daily Income on Polymarket"
      }
    ],
    "videoUrl": null,
    "caption": "2 weeks ago I had $100 on Polymarket and no idea what LP rewards were.\nI was talking with @AmanXBT and getting some tips from bro\nI didn't even know what spread meant.\n2 weeks later:\n$300 portfolio",
    "publishedAt": "2026-05-26T04:46:05.000Z",
    "views": null,
    "engagement": null,
    "preview": {
      "label": "03 / EDUCATIONAL CONTENT",
      "title": "Polymarket LP rewards",
      "excerpt": "2 weeks ago I had $100 on Polymarket and no idea what LP rewards were....",
      "order": 4
    }
  },
  {
    "id": "2108058524198863023",
    "category": "X Posts",
    "title": "A paid partnership, in motion",
    "description": "A look at the activity behind a paid partnership shared on X.",
    "platform": "X",
    "url": "https://x.com/Web3Manish/status/2108058524198863023",
    "thumbnail": "/content/2108058524198863023-1.webp",
    "images": [
      {
        "src": "/content/2108058524198863023-1.webp",
        "width": 407,
        "height": 132,
        "alt": "Image 1 from A paid partnership, in motion"
      }
    ],
    "videoUrl": null,
    "caption": "I posted about a project yesterday with \"paid partnership\" tag\n\nand 350+ users joined with my link\n\nis this what we call motion? 👀",
    "publishedAt": "2026-10-08T04:54:52.000Z",
    "views": null,
    "engagement": null,
    "preview": {
      "label": "01 / CAMPAIGN RESULTS",
      "title": "350+ users joined",
      "excerpt": "I posted about a project yesterday with \"paid partnership\" tag\nand 350+ users joined with my link",
      "order": 2
    }
  },
  {
    "id": "2084597716802232428",
    "category": "X Posts",
    "title": "Polymarket perps referral update",
    "description": "An update on users and trading volume coming through my Polymarket referral link.",
    "platform": "X",
    "url": "https://x.com/Web3Manish/status/2084597716802232428",
    "thumbnail": "/content/polymarket-perps-referrals.png",
    "images": [
      {
        "src": "/content/polymarket-perps-referrals.png",
        "width": 967,
        "height": 286,
        "alt": "Updated Polymarket perps referrals: 25/100 sign-ups and $201,941.75 in volume."
      }
    ],
    "videoUrl": null,
    "caption": "Polymarket perps referral update\n\n> 22 users joined\n> $45k volume created through my link\n\nthank you everyone who joined\n\nit's still invite only nd i have last 3 referrals left\n\nif you haven't joined yet: \n\nwill share my next trade soon 👀",
    "publishedAt": "2026-08-04T11:10:00.000Z",
    "views": null,
    "engagement": null,
    "preview": {
      "label": "02 / TRADING COMMUNITY",
      "title": "$200K+ volume",
      "excerpt": "> 25 users joined\n> $200K+ volume",
      "order": 3
    }
  },
  {
    "id": "2087400088520061328",
    "category": "X Posts",
    "title": "Paid comments on X",
    "description": "A take on paid comments, incentives and the X timeline.",
    "platform": "X",
    "url": "https://x.com/Web3Manish/status/2087400088520061328",
    "thumbnail": "/content/2087400088520061328-1.webp",
    "images": [
      {
        "src": "/content/2087400088520061328-1.webp",
        "width": 845,
        "height": 1024,
        "alt": "Image 1 from Paid comments on X"
      },
      {
        "src": "/content/2087400088520061328-2.webp",
        "width": 994,
        "height": 1200,
        "alt": "Image 2 from Paid comments on X"
      }
    ],
    "videoUrl": null,
    "caption": "Pump fun paying $0.05 per comment\n\nFomo paying $0.15 per comment\n\njust make 100 X accounts \n\ndo 100 comments on each account\n\nearn $2000 daily \n\nwhat's stopping you?",
    "publishedAt": "2026-08-12T04:45:37.000Z",
    "views": null,
    "engagement": null,
    "preview": {
      "label": "04 / CRYPTO CULTURE",
      "title": "Shitpost",
      "excerpt": "Pump fun paying $0.05 per comment\nFomo paying $0.15 per comment",
      "order": 5
    }
  }
];
