
async function searchMovie() {
  const query = document.getElementById("searchInput").value;
  const resultsDiv = document.getElementById("movieResults");
  resultsDiv.innerHTML = ""; // Clear previous results

  if (!query) {
    resultsDiv.innerHTML = "<p>Please enter a movie name.</p>";
    return;
  }

  const url = `https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.Response === "False") {
      resultsDiv.innerHTML = `<p>No results found for "${query}".</p>`;
      return;
    }

    data.Search.forEach(movie => {
      const card = document.createElement("div");
      card.className = "movie-card";

      card.innerHTML = `
        <img src="${movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/200x300?text=No+Image'}" alt="${movie.Title}" />
        <h3>${movie.Title}</h3>
        <p>${movie.Year} | ${movie.Type}</p>
      `;

      resultsDiv.appendChild(card);
    });
  } catch (error) {
    resultsDiv.innerHTML = `<p>Error fetching data. Please try again later.</p>`;
  }
}

