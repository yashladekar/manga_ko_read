const publicVapidKey = process.env.Next_PUBLIC_VAPID_PUBLIC_KEY;

export const register = async () => {
  try {
    const register = await navigator.serviceWorker.register("/sw.js");

    let subscription = await register.pushManager.getSubscription();

    if (!subscription) {
      subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: publicVapidKey,
      });
    }

    return subscription;
  } catch (error) {
    console.error(error);
  }
};
