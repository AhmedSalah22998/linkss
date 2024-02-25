// Function to detect if the device is a mobile device
function isMobileDevice() {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1
  );
}

// Function to detect the operating system
function detectOS() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return "Windows Phone";
  }

  if (/android/i.test(userAgent)) {
    return "Android";
  }

  // iOS detection
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS";
  }

  return "unknown";
}

const app = detectOS();

// Example usage
if (isMobileDevice()) {
  console.log("This is a mobile device.");
  document.body.innerHTML = "This is a mobile device ......";
  document.body.innerHTML = "Operating System:..." + app;
  console.log("Operating System:", detectOS());
} else {
  document.body.innerHTML = "This is not a mobile device....";
  console.log("This is not a mobile device.");
}
