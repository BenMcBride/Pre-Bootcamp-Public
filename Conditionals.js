function reward(day, time) {
  if (time < 10 && time >= 0) {
    return "latte";
  } else if (time < 15 && time >= 10) {
    return "hot chocolate";
  } else if (time < 18 && time >= 15) {
    if (time % 2 === 0) {
      var even = ["ice cream", "cookies", "candy"];
      return even[Math.floor(Math.random() * 3)];
    } else {
      var odd = ["hot chocolate", "tea", "cake"];
      return odd[Math.floor(Math.random() * 3)];
    }
  } else if (time < 22 && time >= 18) {
    if (day === "Wednesday" || day === "wednesday" || day === "wed") {
      return "Strawberry ice cream";
    } else {
      return "Vanilla ice cream";
    }
  } else if (time < 24 && time >= 22) {
    return "Sleep!";
  }
}
// time must be a value between 0 and 24, or 0
// day is only relevant if it's wednesday. Can input "wednesday", "Wednesday", or "wed"
console.log(reward("wed", 18));
