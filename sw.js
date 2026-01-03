self.addEventListener("push", event => {
  const data = event.data?.json() || {};
  self.registration.showNotification(
    data.title || "Notification",
    { body: data.body || "" }
  );
});
