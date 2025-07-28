export default async (request, response) => {
  // This function simulates getting the latest YouTube video details.
  // In a real application, this would fetch data from YouTube's API.

  response.status(200).json({
    title: "How I Built My AI Assistant Demo (and You Can Too!)",
    url: "https://www.youtube.com/watch?v=mock-ai-demo-video-id",
    description: "A comprehensive walkthrough of setting up AI-actionable websites with agent.json and Vercel functions."
  });
};
