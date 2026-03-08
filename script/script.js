// count issues
const countIssues = document.getElementById("count-issues");

const issuesContainer = document.getElementById("issues-container");

// btns
const btnAll = document.getElementById("all-filter-btn");
const btnOpen = document.getElementById("open-filter-btn");
const btnClosed = document.getElementById("closed-filter-btn");

// filter btn
let allIssues = [];
btnAll.addEventListener("click", () => {
  displayIssues(allIssues);

  const allCount = allIssues.length;
  countIssues.textContent = `${allCount} Issues`;
});
btnOpen.addEventListener("click", () => {
  const openIssues = allIssues.filter((issue) => issue.status === "open");
  displayIssues(openIssues);

  const openCount = openIssues.length;
  countIssues.textContent = `${openCount} Issues`;
});
btnClosed.addEventListener("click", () => {
  const closedIssues = allIssues.filter((issue) => issue.status === "closed");
  displayIssues(closedIssues);

  const closedCount = closedIssues.length;
  countIssues.textContent = `${closedCount} Issues`;
});

// Issues from API
const loadIssues = async () => {
  const res = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/issues",
  );
  const issues = await res.json();
  allIssues = issues.data;
  displayIssues(allIssues);
};
const displayIssues = (issues) => {
  issuesContainer.innerHTML = "";
  issues.forEach((issue) => {
    const card = document.createElement("div");
    card.className = "bg-white rounded-lg shadow-lg p-4 w-full";

    // label Styles
    const labelStyles = {
      bug: {
        class: "px-3 py-1 text-sm border bg-red-200 text-red-500 rounded-full",
        icon: "fa-bug",
      },
      "help wanted": {
        class:
          "px-3 py-1 text-sm border bg-yellow-100 text-yellow-600 rounded-full",
        icon: "fa-life-ring",
      },
      enhancement: {
        class:
          "px-3 py-1 text-sm border bg-green-100 text-green-600 rounded-full",
        icon: "fa-wand-magic-sparkles",
      },
      "good first issue": {
        class:
          "px-3 py-1 text-sm border bg-blue-100 text-blue-600 rounded-full",
        icon: "fa-star",
      },
      documentation: {
        class:
          "px-3 py-1 text-sm border bg-gray-200 text-gray-700 rounded-full",
        icon: "fa-book",
      },
    };

    const labelsHTML = issue.labels
      .map((label) => {
        const style = labelStyles[label] || {
          class:
            "px-3 py-1 text-sm border bg-gray-100 text-gray-700 rounded-full",
          icon: "",
        };

        return `
      <span class="${style.class}">
        <i class="fa-solid ${style.icon}"></i> ${label.toUpperCase()}
      </span>
      `;
      })
      .join("");

    card.innerHTML = `
<div class="${issue.status === "open" ? "border-t-3 border-green-500" : "border-t-3 border-purple-500"} rounded-lg p-4">
  <div class="flex justify-between items-center mb-3">
                        <div class="w-8 h-8 flex items-center justify-center">
                            <img src="./assets/${issue.status === "open" ? "Open-Status.png" : "Closed- Status .png"}">
                        </div>

                       <span class="px-3 py-1 text-xs font-medium rounded-full 
      ${
        issue.priority === "high"
          ? "bg-red-100 text-red-500"
          : issue.priority === "medium"
            ? "bg-yellow-100 text-yellow-600"
            : "bg-green-100 text-green-600"
      }">
${issue.priority.toUpperCase()}
</span>
                    </div>

                    <!-- Title -->
                    <h2 class="font-semibold text-lg text-gray-800">
                        ${issue.title}
                    </h2>

                    <!-- Description -->
                    <p class="text-gray-500 text-sm mt-1 line-clamp-2">
                        ${issue.description}
                    </p>
                   
<div class="flex gap-2 mt-3 flex-wrap">
${labelsHTML}
</div>

                    <!-- Footer -->
                    <div class="border-t border-gray-300 w-full mt-4 pt-3 text-sm text-gray-500">
                        <p>#${issue.id} by ${issue.author}</p>
                        <p>${new Date(issue.createdAt).toLocaleDateString()}</p>
                    </div>
</div>
`;
    issuesContainer.append(card);
  });
};
loadIssues();
