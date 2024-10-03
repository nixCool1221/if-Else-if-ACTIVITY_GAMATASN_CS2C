let day = "saturday"
let enteradayoftheweek = day
console.log("Enter a of the week:", enteradayoftheweek);
  switch (day) {
    case "monday":
      task = "Finish your assignments.";
      break;
    case "tuesday":
      task = "Attend class in DSA.";
      break;
    case "wednesday":
      task = "Work on the given tasks.";
      break;
    case "thursday":
      task = "Do your painting.";
      break;
    case "friday":
      task = "Submit the codes.";
      break;
    case "saturday":
      task = "Take a break!";
      break;
    case 'sunday':
      task = "Plan for the week.";
      break;
    default:
      task = "No task scheduled for this day.";
  }

  console.log(`Your task for ${day} is: ${task}`);
  