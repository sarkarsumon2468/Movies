fetch("videos.json")
.then(response => response.json())
.then(videos => {

    const container = document.getElementById("videos");

    videos.forEach(video => {

        container.innerHTML += `
        <div class="card">

            <h2>${video.title}</h2>

            <p><strong>📅 Upload Date:</strong> ${video.date}</p>

            <p><strong>📦 Video Size:</strong> ${video.size}</p>

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
