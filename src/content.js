// Map of emoji to text
const emojiMap = {
  "\ud83c\udfa8": "Improve structure / format of the code.",
  ":art:": "Improve structure / format of the code.",
  "\u26a1\ufe0f": "Improve performance.",
  ":zap:": "Improve performance.",
  "\ud83d\udd25": "Remove code or files.",
  ":fire:": "Remove code or files.",
  "\ud83d\udc1b": "Fix a bug.",
  ":bug:": "Fix a bug.",
  "\ud83d\ude91\ufe0f": "Critical hotfix.",
  ":ambulance:": "Critical hotfix.",
  "\u2728": "Introduce new features.",
  ":sparkles:": "Introduce new features.",
  "\ud83d\udcdd": "Add or update documentation.",
  ":memo:": "Add or update documentation.",
  "\ud83d\ude80": "Deploy stuff.",
  ":rocket:": "Deploy stuff.",
  "\ud83d\udc84": "Add or update the UI and style files.",
  ":lipstick:": "Add or update the UI and style files.",
  "\ud83c\udf89": "Begin a project.",
  ":tada:": "Begin a project.",
  "\u2705": "Add, update, or pass tests.",
  ":white_check_mark:": "Add, update, or pass tests.",
  "\ud83d\udd12\ufe0f": "Fix security or privacy issues.",
  ":lock:": "Fix security or privacy issues.",
  "\ud83d\udd10": "Add or update secrets.",
  ":closed_lock_with_key:": "Add or update secrets.",
  "\ud83d\udd16": "Release / Version tags.",
  ":bookmark:": "Release / Version tags.",
  "\ud83d\udea8": "Fix compiler / linter warnings.",
  ":rotating_light:": "Fix compiler / linter warnings.",
  "\ud83d\udea7": "Work in progress.",
  ":construction:": "Work in progress.",
  "\ud83d\udc9a": "Fix CI Build.",
  ":green_heart:": "Fix CI Build.",
  "\u2b07\ufe0f": "Downgrade dependencies.",
  ":arrow_down:": "Downgrade dependencies.",
  "\u2b06\ufe0f": "Upgrade dependencies.",
  ":arrow_up:": "Upgrade dependencies.",
  "\ud83d\udccc": "Pin dependencies to specific versions.",
  ":pushpin:": "Pin dependencies to specific versions.",
  "\ud83d\udc77": "Add or update CI build system.",
  ":construction_worker:": "Add or update CI build system.",
  "\ud83d\udcc8": "Add or update analytics or track code.",
  ":chart_with_upwards_trend:": "Add or update analytics or track code.",
  "\u267b\ufe0f": "Refactor code.",
  ":recycle:": "Refactor code.",
  "\u2795": "Add a dependency.",
  ":heavy_plus_sign:": "Add a dependency.",
  "\u2796": "Remove a dependency.",
  ":heavy_minus_sign:": "Remove a dependency.",
  "\ud83d\udd27": "Add or update configuration files.",
  ":wrench:": "Add or update configuration files.",
  "\ud83d\udd28": "Add or update development scripts.",
  ":hammer:": "Add or update development scripts.",
  "\ud83c\udf10": "Internationalization and localization.",
  ":globe_with_meridians:": "Internationalization and localization.",
  "\u270f\ufe0f": "Fix typos.",
  ":pencil2:": "Fix typos.",
  "\ud83d\udca9": "Write bad code that needs to be improved.",
  ":poop:": "Write bad code that needs to be improved.",
  "\u23ea\ufe0f": "Revert changes.",
  ":rewind:": "Revert changes.",
  "\ud83d\udd00": "Merge branches.",
  ":twisted_rightwards_arrows:": "Merge branches.",
  "\ud83d\udce6\ufe0f": "Add or update compiled files or packages.",
  ":package:": "Add or update compiled files or packages.",
  "\ud83d\udc7d\ufe0f": "Update code due to external API changes.",
  ":alien:": "Update code due to external API changes.",
  "\ud83d\ude9a": "Move or rename resources (e.g.: files, paths, routes).",
  ":truck:": "Move or rename resources (e.g.: files, paths, routes).",
  "\ud83d\udcc4": "Add or update license.",
  ":page_facing_up:": "Add or update license.",
  "\ud83d\udca5": "Introduce breaking changes.",
  ":boom:": "Introduce breaking changes.",
  "\ud83c\udf71": "Add or update assets.",
  ":bento:": "Add or update assets.",
  "\u267f\ufe0f": "Improve accessibility.",
  ":wheelchair:": "Improve accessibility.",
  "\ud83d\udca1": "Add or update comments in source code.",
  ":bulb:": "Add or update comments in source code.",
  "\ud83c\udf7b": "Write code drunkenly.",
  ":beers:": "Write code drunkenly.",
  "\ud83d\udcac": "Add or update text and literals.",
  ":speech_balloon:": "Add or update text and literals.",
  "\ud83d\uddc3\ufe0f": "Perform database related changes.",
  ":card_file_box:": "Perform database related changes.",
  "\ud83d\udd0a": "Add or update logs.",
  ":loud_sound:": "Add or update logs.",
  "\ud83d\udd07": "Remove logs.",
  ":mute:": "Remove logs.",
  "\ud83d\udc65": "Add or update contributor(s).",
  ":busts_in_silhouette:": "Add or update contributor(s).",
  "\ud83d\udeb8": "Improve user experience / usability.",
  ":children_crossing:": "Improve user experience / usability.",
  "\ud83c\udfd7\ufe0f": "Make architectural changes.",
  ":building_construction:": "Make architectural changes.",
  "\ud83d\udcf1": "Work on responsive design.",
  ":iphone:": "Work on responsive design.",
  "\ud83e\udd21": "Mock things.",
  ":clown_face:": "Mock things.",
  "\ud83e\udd5a": "Add or update an easter egg.",
  ":egg:": "Add or update an easter egg.",
  "\ud83d\ude48": "Add or update a .gitignore file.",
  ":see_no_evil:": "Add or update a .gitignore file.",
  "\ud83d\udcf8": "Add or update snapshots.",
  ":camera_flash:": "Add or update snapshots.",
  "\u2697\ufe0f": "Perform experiments.",
  ":alembic:": "Perform experiments.",
  "\ud83d\udd0d\ufe0f": "Improve SEO.",
  ":mag:": "Improve SEO.",
  "\ud83c\udff7\ufe0f": "Add or update types.",
  ":label:": "Add or update types.",
  "\ud83c\udf31": "Add or update seed files.",
  ":seedling:": "Add or update seed files.",
  "\ud83d\udea9": "Add, update, or remove feature flags.",
  ":triangular_flag_on_post:": "Add, update, or remove feature flags.",
  "\ud83e\udd45": "Catch errors.",
  ":goal_net:": "Catch errors.",
  "\ud83d\udcab": "Add or update animations and transitions.",
  ":dizzy:": "Add or update animations and transitions.",
  "\ud83d\uddd1\ufe0f": "Deprecate code that needs to be cleaned up.",
  ":wastebasket:": "Deprecate code that needs to be cleaned up.",
  "\ud83d\udec2":
    "Work on code related to authorization, roles and permissions.",
  ":passport_control:":
    "Work on code related to authorization, roles and permissions.",
  "\ud83e\ude79": "Simple fix for a non-critical issue.",
  ":adhesive_bandage:": "Simple fix for a non-critical issue.",
  "\ud83e\uddd0": "Data exploration/inspection.",
  ":monocle_face:": "Data exploration/inspection.",
  "\u26b0\ufe0f": "Remove dead code.",
  ":coffin:": "Remove dead code.",
  "\ud83e\uddea": "Add a failing test.",
  ":test_tube:": "Add a failing test.",
  "\ud83d\udc54": "Add or update business logic.",
  ":necktie:": "Add or update business logic.",
  "\ud83e\ude7a": "Add or update healthcheck.",
  ":stethoscope:": "Add or update healthcheck.",
  "\ud83e\uddf1": "Infrastructure related changes.",
  ":bricks:": "Infrastructure related changes.",
  "\ud83e\uddd1\u200d\ud83d\udcbb": "Improve developer experience.",
  ":technologist:": "Improve developer experience.",
  "\ud83d\udcb8": "Add sponsorships or money related infrastructure.",
  ":money_with_wings:": "Add sponsorships or money related infrastructure.",
  "\ud83e\uddf5":
    "Add or update code related to multithreading or concurrency.",
  ":thread:": "Add or update code related to multithreading or concurrency.",
  "\ud83e\uddba": "Add or update code related to validation.",
  ":safety_vest:": "Add or update code related to validation.",
};

// Function to create a tooltip
function createTooltip(text, tooltipX, tooltipY) {
  const tooltip = document.createElement("div");
  tooltip.textContent = `gitmoji: ${text}`;
  tooltip.style.position = "absolute";
  tooltip.style.left = `${tooltipX}px`;
  tooltip.style.top = `${tooltipY}px`;
  tooltip.classList.add("emoji-tooltip");
  document.body.appendChild(tooltip);
  return tooltip;
}

// Function to check if a string contains an emoji from the emojiMap
function checkForEmoji(str) {
  for (const emoji in emojiMap) {
    if (str.includes(emoji)) {
      return emoji;
    }
  }
  return null;
}

// Handle hover event
function handleHover(event) {
  const element = event.target;
  const textContent = element.textContent || "";

  // Check for emoji in the element's text content
  const emoji = checkForEmoji(textContent);

  if (emoji) {
    const tooltipText = emojiMap[emoji];
    let tooltip;
    let showTooltipTimeout;

    // Delay tooltip creation
    showTooltipTimeout = setTimeout(() => {
      tooltip = createTooltip(tooltipText, event.pageX, event.pageY - 40);

      // Update tooltip position on mousemove
      const mouseMoveHandler = (e) => {
        tooltip.style.left = `${e.pageX}px`;
        tooltip.style.top = `${e.pageY - 40}px`;
      };

      element.addEventListener("mousemove", mouseMoveHandler);

      // Clean up on mouseleave
      const cleanup = () => {
        tooltip.remove();
        clearTimeout(showTooltipTimeout);
        element.removeEventListener("mousemove", mouseMoveHandler);
        element.removeEventListener("mouseleave", cleanup);
      };

      element.addEventListener("mouseleave", cleanup);
    }, 500);

    // Cancel tooltip if mouse leaves before timeout
    element.addEventListener("mouseleave", () => {
      clearTimeout(showTooltipTimeout);
    });
  }
}

// Add hover listeners to elements containing emojis
function addHoverListenersToElements() {
  const elements = document.querySelectorAll("*");
  elements.forEach((node) => {
    const text = [].reduce.call(
      node.childNodes,
      (a, b) => a + (b.nodeType === 3 ? b.textContent : ""),
      ""
    );

    if (checkForEmoji(text)) {
      node.removeEventListener("mouseenter", handleHover); // Prevent duplicate listeners
      node.addEventListener("mouseenter", handleHover);
    }
  });
}

// Use MutationObserver to detect DOM changes
const observer = new MutationObserver(() => {
  addHoverListenersToElements(); // Reapply event listeners on DOM changes
});

// Observe changes in the document body
observer.observe(document.body, { childList: true, subtree: true });

// Run the script after the document has loaded
window.addEventListener("DOMContentLoaded", () => {
  addHoverListenersToElements();
});
