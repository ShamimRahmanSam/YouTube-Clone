document.addEventListener("DOMContentLoaded", function () {
  // Automatically set target="_blank" for all links
  var links = document.querySelectorAll("a");
  links.forEach(function (link) {
    link.setAttribute("target", "_blank");
  });

  const videoData = [
    {
      title: "Work hard Play Hard",
      channel: "SRS",
      views: "16M views",
      time: "11 hours ago",
    },
  ];

  const videoGrid = document.getElementById("video-grid");

  for (let i = 0; i < 100; i++) {
    videoData.forEach((video) => {
      const videoItem = document.createElement("div");
      videoItem.className = "video-item";

      videoItem.innerHTML = `
                <img src="assets/t1.jpg" alt="Video Thumbnail">
                <div class="video-info">
                    <div>
                        <button class="user">
                            <box-icon type='solid' name='user-circle'></box-icon>
                        </button>
                    </div>
                    <div class="video-details">
                        <div class="title">${video.title}</div>
                        <div class="channel-name">
                            ${video.channel}
                        </div>
                        <div class="views-time">${video.views} • ${video.time}</div>
                    </div>
                </div>
            `;

      videoGrid.appendChild(videoItem);
    });
  }
});
