import { DateTime } from "../node_modules/luxon/src/luxon.js";

const date = () => {
  const dt = DateTime.local();
  const formattedDate = dt.toFormat("EEE MMM dd yyyy h:mm:ss a");
  const dateTime = document.getElementById("date");
  dateTime.innerHTML = formattedDate;
};

export default date;