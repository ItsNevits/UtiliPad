export default {
  home: {
    title: "Your toolbox on the web.",
    description:
      "Convert, edit, and automate your files without installing anything. Drag and drop or explore the most used tools.",
  },
  news: {
    title: "News",
    description: "Stay up to date with the latest updates and improvements.",
    completeReading: "Complete Reading",
    readMore: "Read More",
    noPosts: "No posts available.",
    noPostsDesc: "We will soon add new updates about UtiliPad.",
    statisticsTitle: "Statistics",
    statisticsDescription: "Summary of published news",
    articles: "Articles",
    pagination: {
      previous: "Previous",
      next: "Next",
      page: "Page",
      of: "of",
    },
  },
  privacy: {
    title: "Privacy Policy",
    description: "How we handle and protect your information at UtiliPad",
    content: [
      {
        title: "Data Handling",
        paragraphs: [
          '<strong class="underline">Local processing:</strong> All tools (JSON Formatter, Word Counter, etc.) process your files locally in your browser.',
          '<strong class="underline">We do not store files:</strong> Your documents, images, and data are never stored on our servers.',
          '<strong class="underline">Analytics:</strong> We use Google Analytics to improve the user experience.',
        ],
      },
      {
        title: "Cookies and Storage",
        paragraphs: [
          "We only use technical cookies that are necessary for the application to function.",
        ],
      },
      {
        title: "User Anonymity",
        paragraphs: [
          "You can use all our tools without registration or personal identification.",
        ],
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    description: "The terms and conditions for using UtiliPad",
    content: [
      {
        title: "Service Usage",
        paragraphs: [
          '<strong class="underline">Free:</strong> All tools are completely free.',
          '<strong class="underline">No limits:</strong> There are no restrictions on using our tools.',
          '<strong class="underline">Responsibility:</strong> The user is responsible for the content they process.',
        ],
      },
      {
        title: "Limitations",
        paragraphs: [
          'The tools are provided "as is" without warranties of perfect operation.',
        ],
      },
      {
        title: "Intellectual Property",
        paragraphs: [
          "The source code is available under MIT license. Processed content belongs to the user.",
        ],
      },
    ],
  },
  contact: {
    title: "Contact",
    description:
      "Do you have a suggestion, found a bug, or want to propose a new tool?",
    contactInfo: {
      title: "Contact Information",
      helpWith: {
        title: "How can we help you?",
        items: [
          "Report bugs or errors",
          "Suggest new tools",
          "Improve existing tools",
          "Collaborate on the project",
          "General questions",
        ],
      },
      responseTime: {
        icon: "⚡",
        title: "Response Time",
        description: "24-48 hours",
      },
      options: [
        {
          icon: "📧",
          title: "Email",
          description: "bs.alvarado21@gmail.com",
          href: "mailto:bs.alvarado21@gmail.com",
        },
        {
          icon: "🐙",
          title: "GitHub",
          description: "https://github.com/ItsNevits/UtiliPad",
          href: "https://github.com/ItsNevits/UtiliPad",
        },
      ],
    },
    form: {
      title: "Send us a message",
      fields: {
        name: {
          label: "Name",
          placeholder: "Your name",
        },
        email: {
          label: "Email",
          placeholder: "your@email.com",
        },
        subject: {
          label: "Subject",
          placeholder: "Select a subject",
          options: [
            { value: "", label: "Select a subject" },
            { value: "bug", label: "Report bug" },
            { value: "feature", label: "Suggest tool" },
            { value: "improvement", label: "Existing improvement" },
            { value: "collaboration", label: "Collaboration" },
            { value: "other", label: "Other" },
          ],
        },
        message: {
          label: "Message",
          placeholder: "Describe your inquiry, suggestion or problem...",
        },
      },
      submit: {
        default: "Send message",
        sending: "Sending...",
        success: "✓ Message sent successfully. We will respond soon.",
        error: "✗ Error sending message. Please try again.",
      },
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "Is UtiliPad really free?",
          answer:
            "Yes, all tools are completely free with no usage limits. It's an open source project.",
        },
        {
          question: "Are my files sent to any server?",
          answer:
            "No, all processing is done in our open source API.\nYour files are never sent to any server.\nYou can review the code on GitHub.",
        },
        {
          question: "Can I suggest new tools?",
          answer:
            "Of course! Send us your ideas through the contact form or create an issue on GitHub.",
        },
        {
          question: "How can I contribute to the project?",
          answer:
            "You can contribute by reporting bugs, suggesting improvements.",
        },
      ],
    },
  },
};
