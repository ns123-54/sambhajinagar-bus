self.addEventListener('install', (e) => {
  console.log('App Installed Setup');
});

self.addEventListener('fetch', (e) => {
  // Offline support fetch handler
});