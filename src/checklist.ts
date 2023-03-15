export interface ChecklistItem {
  text: string;
  checked: boolean;
}

export interface ChecklistSection {
  title: string;
  items: ChecklistItem[];
}

export default [
  {
    title: "Optimize Product Offerings",
    items: [
      {
        text:
          "Continuously improve the flight search algorithm to provide the most accurate and up-to-date prices and options.",
        checked: false
      },
      {
        text:
          "Enhance the user interface and experience, making it more user-friendly, intuitive, and visually appealing.",
        checked: false
      },
      {
        text:
          "Develop a mobile app to make flight search and booking more accessible and convenient for users on the go.",
        checked: false
      },
      {
        text:
          "Introduce personalized recommendations based on users' search history, preferences, and travel habits.",
        checked: false
      }
    ]
  },
  {
    title: "Expand User Base",
    items: [
      {
        text:
          "Offer exclusive deals and incentives for first-time users to encourage sign-ups and trial usage.",
        checked: false
      },
      {
        text:
          "Implement a referral program that rewards users for inviting friends and family to join Skiplagged.",
        checked: false
      },
      {
        text:
          "Cater to different market segments by offering customized tools and features for business travelers, budget-conscious backpackers, and luxury-seeking tourists.",
        checked: false
      },
      {
        text:
          "Launch a multilingual platform to tap into international markets and increase global reach.",
        checked: false
      }
    ]
  },
  {
    title: "Foster Strategic Partnerships",
    items: [
      {
        text:
          "Collaborate with airlines, hotels, and travel agencies to secure exclusive deals and offers for Skiplagged users.",
        checked: false
      },
      {
        text:
          "Partner with travel influencers and bloggers to promote Skiplagged and share their experiences using the platform.",
        checked: false
      },
      {
        text:
          "Establish affiliations with travel-related companies (such as luggage brands, travel insurance providers, and tour operators) to create bundled offers and cross-promotional opportunities.",
        checked: false
      }
    ]
  },
  {
    title: "Launch Targeted Marketing Campaigns",
    items: [
      {
        text:
          "Invest in digital advertising through platforms like Google Ads, Facebook, Instagram, and TikTok to reach potential users effectively.",
        checked: false
      },
      {
        text:
          "Utilize search engine optimization (SEO) and content marketing strategies to improve Skiplagged's visibility and organic search rankings.",
        checked: false
      },
      {
        text:
          "Engage with users on social media platforms by sharing travel tips, destination highlights, and user-generated content to create a sense of community and foster brand loyalty.",
        checked: false
      },
      {
        text:
          "Leverage email marketing to nurture leads, re-engage inactive users, and promote special offers and deals.",
        checked: false
      }
    ]
  },
  {
    title: "Monitor and Analyze Performance",
    items: [
      {
        text:
          "Track key performance indicators (KPIs) and metrics to gauge the success of the various initiatives and identify areas for improvement.",
        checked: false
      },
      {
        text:
          "Use data-driven insights to refine strategies and make informed decisions about product development, marketing efforts, and partnership opportunities.",
        checked: false
      },
      {
        text:
          "Conduct regular competitor analysis to stay ahead of market trends and maintain a competitive edge in the flight search industry.",
        checked: false
      }
    ]
  }
];
