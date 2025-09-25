const channels = [
  { name: "Diema Sport", url: "https://www.gledaitv.fan/diema-sport-live-tv.html" },
  { name: "Diema Sport 2", url: "https://www.gledaitv.fan/diema-sport-2-live-tv.html" },
  { name: "Diema Sport 3", url: "https://www.gledaitv.fan/diema-sport-3-live-tv.html" },
  { name: "Eurosport 1", url: "https://www.gledaitv.fan/eurosport-1-bg-live-tv.html" },
  { name: "Eurosport 2", url: "https://www.gledaitv.fan/eurosport-2-bg-live-tv.html" },
  { name: "Max Sport 1", url: "https://www.gledaitv.fan/max-sport-1-live-tv.html" },
  { name: "Max Sport 2", url: "https://www.gledaitv.fan/max-sport-2-live-tv.html" },
  { name: "Max Sport 3", url: "https://www.gledaitv.fan/max-sport-3-live-tv.html" },
  { name: "Max Sport 4", url: "https://www.gledaitv.fan/max-sport-4-live-tv.html" },
  { name: "Nova Sport", url: "https://www.gledaitv.fan/nova-sport-live-tv.html" }
];

function getChannels() {
  return channels.map(c => ({
    name: c.name,
    url: c.url
  }));
}

module.exports = {
  name: "bushidorepo",
  getChannels: getChannels
};