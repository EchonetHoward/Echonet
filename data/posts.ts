export interface Post {
  id: string;
  date: string;
  title: string;
  content: string;
}

export const posts: Post[] = [
  {
    id: "personality-independence",
    date: "2026-02-02",
    title: "写给00后：何谓人格独立？",
    content: `
      <p>这里是关于“何谓人格独立”的详细内容...</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    `
  },
  {
    id: "your-hobby",
    date: "2026-01-26",
    title: "写给00后：你的爱好是什么？",
    content: `
      <p>这里是关于“你的爱好是什么”的详细内容...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    `
  },
  {
    id: "web3-opportunity",
    date: "2026-01-19",
    title: "「2」写给00后：为什么我们不能错过 Web3",
    content: `
      <p>这里是关于“为什么我们不能错过 Web3”的详细内容...</p>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    `
  }
];
