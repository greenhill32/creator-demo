export default async (request, response) => {
  // This function simulates getting details for a specific merchandise item.
  // In a real application, this would query a store's product database.

  // We'll extract the 'item_name' from the query parameters, as declared in agent.json
  const itemName = request.query.item_name || 'unknown item';

  let merchDetails;
  if (itemName.toLowerCase() === 'new t-shirt') {
    merchDetails = {
      name: "Awesome AI Creator T-Shirt",
      url: "https://yourmerchstore.com/ai-tshirt",
      price: "$29.99"
    };
  } else if (itemName.toLowerCase() === 'creator mug') {
     merchDetails = {
      name: "Creator's Coffee Mug",
      url: "https://yourmerchstore.com/creator-mug",
      price: "$14.50"
    };
  } else {
    merchDetails = {
      name: itemName,
      url: "https://yourmerchstore.com/item-not-found",
      price: "N/A - Item not found"
    };
  }

  response.status(200).json(merchDetails);
};
