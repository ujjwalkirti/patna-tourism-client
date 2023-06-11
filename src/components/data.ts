const get_endpoints = [
  {
    route: "/types",
    desc: "Retrieve a list of all types or categories available in Patna. This endpoint allows you to fetch information about different types or categories that can be associated with venues or places in Patna, such as 'Tourist Places', 'Dining Places', or 'Worship Places'.",
    code_sample: `
      fetch("/types")
        .then(response => response.json())
        .then(data => {
          // Handle the response data
          // Process and use the retrieved types/categories
        })
        .catch(error => {
          // Handle any errors that occur during the request
        });
    `,
  },
  {
    route: "/venues",
    desc: "Retrieve a list of all venues in Patna. This endpoint provides details about all the venues available in Patna, including tourist places, dining places, eateries, worship places, and more. It gives a comprehensive overview of all the locations that users can explore or interact with.",
    code_sample: `
      fetch("/venues")
        .then(response => response.json())
        .then(data => {
          // Handle the response data
          // Process and use the retrieved venues
        })
        .catch(error => {
          // Handle any errors that occur during the request
        });
    `,
  },
  {
    route: "/types/:type/venues",
    desc: "Retrieve venues based on a specific type or category. This endpoint allows you to filter venues based on a particular type or category. For example, you can fetch all the tourist places in Patna or all the dining places in Patna by specifying the corresponding type in the URL.",
    code_sample: `
      const type = 'type'; // Replace with the actual type/category you want to filter
      
      fetch(\`/types/\${type}/venues\`)
        .then(response => response.json())
        .then(data => {
          // Handle the response data
          // Process and use the retrieved venues based on the specified type
        })
        .catch(error => {
          // Handle any errors that occur during the request
        });
    `,
  },
  {
    route: "/venues/:venue_id",
    desc: "Retrieve details of a specific venue by its ID. This endpoint allows you to retrieve detailed information about a particular venue in Patna based on its unique identifier. The :venue_id parameter should be replaced with the actual ID of the venue you want to fetch.",
    code_sample: `
      const venueId = 'venue_id'; // Replace with the actual ID of the venue you want to fetch
      
      fetch(\`/venues/\${venueId}\`)
        .then(response => response.json())
        .then(data => {
          // Handle the response data
          // Process and use the retrieved venue details
        })
        .catch(error => {
          // Handle any errors that occur during the request
        });
    `,
  },
  {
    route: "/venues/:venue_id/reviews",
    desc: "Retrieve reviews of a specific venue. This endpoint fetches reviews associated with a particular venue in Patna. By providing the venue_id parameter in the URL, you can retrieve all the reviews related to that specific venue.",
    code_sample: `
      const venueId = 'venue_id'; // Replace with the actual ID of the venue you want to fetch reviews for
      
      fetch(\`/venues/\${venueId}/reviews\`)
        .then(response => response.json())
        .then(data => {
          // Handle the response data
          // Process and use the retrieved reviews
        })
        .catch(error => {
          // Handle any errors that occur during the request
        });
    `,
  },
];

const post_endpoints = [
  {
    route: "/types",
    desc: "Create a new type or category for venues in Patna. This endpoint allows you to add a new venue type by sending a POST request to the `/types` route. Include the necessary data such as the type name and description in the request body.",
    code_sample: `
      fetch('/types', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': 'Your API Key'
          // Add any additional headers as needed
        },
        body: JSON.stringify({
          name: 'Type Name',
        }),
      })
        .then(response => {
          // Handle the response
          if (response.ok) {
            // Type creation successful
            // Handle the success case
          } else {
            // Type creation failed
            // Handle the failure case
          }
        })
        .catch(error => {
          // Handle any errors that occur during the request
        });
    `,
  },
  {
    route: "/venues",
    desc: "Create a new venue in Patna. This endpoint allows you to add a new venue by sending a POST request to the `/venues` route. Include the necessary data such as the venue name, address, and other required fields in the request body.",
    code_sample: `
      fetch('/venues', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': 'Your API Key'
          // Add any additional headers as needed
        },
        body: JSON.stringify({
          // Include the necessary data for creating a new venue
          type: 'Venue type',
          name: 'Venue name',
          description: 'Venue description',
          rating: 'Venue rating, provide on a scale of 10',
          lat: 'Venue latitude',
          long: 'Venue Longitude',
          img: 'Venue image url',
          website: 'Venue website'
        }),
      })
        .then(response => {
          // Handle the response
          if (response.ok) {
            // Venue creation successful
            // Handle the success case
          } else {
            // Venue creation failed
            // Handle the failure case
          }
        })
        .catch(error => {
          // Handle any errors that occur during the request
        });
    `,
  },
  {
    route: "/reviews",
    desc: "Create a new review for a venue in Patna. This endpoint allows you to add a new review by sending a POST request to the `/reviews` route. Include the necessary data such as the venue ID, rating, comment, and other required fields in the request body.",
    code_sample: `
      fetch('/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': 'Your API Key'
          // Add any additional headers as needed
        },
        body: JSON.stringify({
          // Include the necessary data for creating a new review
          venue: 'Venue ID',
          author: 'Review author',
          comment: 'Review comment',
          // Add any other required fields
        }),
      })
        .then(response => {
          // Handle the response
          if (response.ok) {
            // Review creation successful
            // Handle the success case
          } else {
            // Review creation failed
            // Handle the failure case
          }
        })
        .catch(error => {
          // Handle any errors that occur during the request
        });
    `,
  },
];

const patch_endpoints = [
  {
    route: "/venues/:id",
    desc: "Update a specific venue in Patna. This endpoint allows you to modify the details of a venue by sending a PATCH request to the `/venues/:id` route. Replace `:id` in the route with the actual ID of the venue you want to update. Include the updated data for the venue in the request body.",
    code_sample: `
      const venueId = 'venue_id'; // Replace with the actual ID of the venue you want to update
      
      fetch(\`/venues/\${venueId}\`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': 'Your API Key'
          // Add any additional headers as needed
        },
        body: JSON.stringify({
          // Include the updated data for the venue
          // Add any other fields you want to update
        }),
      })
        .then(response => {
          // Handle the response
          if (response.ok) {
            // Venue update successful
            // Handle the success case
          } else {
            // Venue update failed
            // Handle the failure case
          }
        })
        .catch(error => {
          // Handle any errors that occur during the request
        });
    `,
  },
  {
    route: "/reviews/:review_id",
    desc: "Update a specific review in Patna. This endpoint allows you to modify the details of a review by sending a PATCH request to the `/reviews/:review_id` route. Replace `:review_id` in the route with the actual ID of the review you want to update. Include the updated data for the review in the request body.",
    code_sample: `
      const reviewId = 'review_id'; // Replace with the actual ID of the review you want to update
      
      fetch(\`/reviews/\${reviewId}\`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': 'Your API Key'
          // Add any additional headers as needed
        },
        body: JSON.stringify({
          // Include the updated data for the review
          // Add any other fields you want to update
        }),
      })
        .then(response => {
          // Handle the response
          if (response.ok) {
            // Review update successful
            // Handle the success case
          } else {
            // Review update failed
            // Handle the failure case
          }
        })
        .catch(error => {
          // Handle any errors that occur during the request
        });
    `,
  },
];

const delete_endpoints = [
  {
    route: "/venues/:id",
    desc: "Delete a specific venue by its ID. This endpoint allows you to remove a venue from the city's database.",
    code_sample: `
      const venueId = 'venue_id'; // Replace with the actual ID of the venue you want to delete
      
      fetch(\`/venues/\${venueId}\`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': 'Your API Key'
          // Add any additional headers as needed
        }
      })
        .then(response => {
          // Handle the response
          if (response.ok) {
            // Venue deletion successful
            // Handle the success case
          } else {
            // Venue deletion failed
            // Handle the failure case
          }
        })
        .catch(error => {
          // Handle any errors that occur during the request
        });
    `,
  },
  {
    route: "/reviews/:review_id",
    desc: "Delete a specific review by its ID. This endpoint allows you to remove a review from the city's database.",
    code_sample: `
      const reviewId = 'review_id'; // Replace with the actual ID of the review you want to delete
      
      fetch(\`/reviews/\${reviewId}\`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': 'Your API Key'
          // Add any additional headers as needed
        }
      })
        .then(response => {
          // Handle the response
          if (response.ok) {
            // Review deletion successful
            // Handle the success case
          } else {
            // Review deletion failed
            // Handle the failure case
          }
        })
        .catch(error => {
          // Handle any errors that occur during the request
        });
    `,
  },
];

export { get_endpoints, post_endpoints, patch_endpoints, delete_endpoints };
