
function showSection(section) {
  const content = document.getElementById("content");

  const sections = {
    "Monster Collection": {
      title: "👾 Monster Collection",
      text: "Your monster collection hub is coming soon!"
    },
    "Music Center": {
      title: "🎶 Music Center",
      text: "Your musical hub is coming soon!"
    },
    "Settings": {
      title: "⚙️ Settings",
      text: "MSM Nexus settings will appear here."
    }
  };

  const selected = sections[section];

  if (!selected) return;

  content.innerHTML = `
    <h2>${selected.title}</h2>
    <p>${selected.text}</p>
    <button onclick="showSection('Home')">🏠 Home</button>
  `;

  if (section === "Home") {
    content.innerHTML = `
      <h2>Welcome to MSM Nexus!</h2>
      <p>Select a menu option to get started.</p>
    `;
  }
}
