function saklar() {
  const toggles = ["default-toggle1", "default-toggle2", "default-toggle3"];
  const lamps = ["lampu1", "lampu2", "lampu3"];

  toggles.forEach((toggleId, index) => {
      const toggle = document.getElementById(toggleId);
      const lamp = document.getElementById(lamps[index]);
      lamp.src = toggle.checked ? "public/images/on.gif" : "public/images/off.gif";
  });
}