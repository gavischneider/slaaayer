module.exports = function (n) {
  if (n <= 0) {
    return "SLAYER! 🤟🏻";
  } else {
    return "SL" + "A".repeat(n) + "YER! 🤟🏻";
  }
};

// "SL" + "A".repeat(n) + "YER! 🤟🏻

// "SL" + Array(slayer).join("A") + "YER! 🤟🏻"
