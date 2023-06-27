let section = document.querySelector(".movie");
let movieNames = document.querySelectorAll("span");
let mainContainer = document.querySelector(".main-container");

movieNames.forEach((movieName) => {
	movieName.addEventListener("click", showMovie);

	function showMovie() {
		mainContainer.innerHTML = "";
		// STEP 1
		const xhr = new XMLHttpRequest();

		// STEP 2
		xhr.open("GET", "movies.json");

		// STEP 4
		xhr.addEventListener("readystatechange", function () {
			if (xhr.readyState === xhr.DONE && xhr.status === 200) {
				const info = JSON.parse(xhr.responseText);
				for (let i = 0; i < info.movies.length; i++) {
					if (info.movies[i].title === movieName.textContent) {
						// CHANGING THE BACKGROUND
						section.style.backgroundImage = `url(./backgrounds/${info.movies[i].background})`;
						section.className = "background";

						// CONTAINER FOR A TEXT
						let watchContainer = document.createElement("div");
						watchContainer.className = "watchMain";
						mainContainer.appendChild(watchContainer);

						let textContainer = document.createElement("div");
						textContainer.className = "text";
						watchContainer.appendChild(textContainer);

						let text1 = document.createElement("h1");
						text1.className = "text1";
						text1.textContent = "Watch the best";
						let text2 = document.createElement("h1");
						text2.className = "text2";
						text2.textContent = "of Studio Ghibli";
						let text3 = document.createElement("h1");
						text3.className = "text3";
						text3.textContent = "now";
						textContainer.appendChild(text1);
						textContainer.appendChild(text2);
						textContainer.appendChild(text3);

						let title = document.createElement("h1");
						title.textContent = `"${info.movies[i].title}" (${info.movies[i].production_year})`;
						textContainer.appendChild(title);

						let description = document.createElement("p");
						description.className - "description";
						description.textContent = info.movies[i].description;
						textContainer.appendChild(description);

						let button = document.createElement("button");
						button.textContent = "Watch Trailer";
						textContainer.appendChild(button);

						button.addEventListener("click", function () {
							mainContainer.innerHTML = "";
							let video = document.createElement("video");
							video.className;
							video.setAttribute("src", `./videos/${info.movies[i].title}.mp4`);
							video.className = "video-poster";
							video.setAttribute("controls", "");
							video.setAttribute("width", "1080");
							video.setAttribute("height", "650");
							video.setAttribute("poster", `./posters/${info.movies[i].poster_video}`);
							mainContainer.appendChild(video);
						});

						// CONTAINER FOR A POSTER
						let pictureContainer = document.createElement("div");
						pictureContainer.className = "picture";
						mainContainer.appendChild(pictureContainer);

						let poster = document.createElement("div");
						poster.style.backgroundImage = `url(./posters/${info.movies[i].poster})`;
						poster.className = "poster";
						pictureContainer.appendChild(poster);

						let best_quote = document.createElement("h3");
						best_quote.className = "best-quote";
						best_quote.textContent = `"${info.movies[i].best_quote}"`;
						pictureContainer.appendChild(best_quote);

						// CREATING POSTERS FOR MORE MOVIES
						let moreMovies = document.createElement("div");
						moreMovies.className = "moreMovies";
						watchContainer.appendChild(moreMovies);

						for (let q = 0; q < info.movies.length; q++) {
							if (info.movies[q].title !== movieName.textContent) {
								let newMovie = document.createElement("div");
								newMovie.className = "newMovieCard";
								moreMovies.append(newMovie);

								let newPoster = document.createElement("div");
								newPoster.className = "newMoviePoster";
								newPoster.style.backgroundImage = `url(./posters/${info.movies[q].poster})`;
								newMovie.appendChild(newPoster);

								let newTitle = document.createElement("p");
								newTitle.textContent = info.movies[q].title;
								newMovie.appendChild(newTitle);
							}
						}
					}
				}
			}
		});

		// STEP 3
		xhr.send(null);
	}
});
