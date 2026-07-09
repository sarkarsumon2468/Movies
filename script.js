fetch("videos.json")
.then(response => response.json())
.then(videos => {

    const container = document.getElementById("videos");

    videos.forEach(video => {

        container.innerHTML += `
        <div class="card">

            <h2>${video.title}</h2>

            <p>📅 ${video.date}</p>

            <p>📦 ${video.size}</p>

            <a href="${video.link}" target="_blank">
                <button>DOWNLOAD</button>
            </a>

        </div>
        `;

    });
    
    })
  .catch(error => {
    console.error("Error loading videos:", error);
  });
