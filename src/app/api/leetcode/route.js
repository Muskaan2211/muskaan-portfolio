const USERNAME = "Muskaan2422";
const FALLBACK = {
  username: USERNAME,
  url: `https://leetcode.com/u/${USERNAME}/`,
  solved: "89",
  total: "3977",
  rank: "1,715,852",
  activeDays: "32",
  streak: "3",
  focus: ["Arrays", "Strings", "SQL", "Sliding Window", "Graphs", "DP"],
  levels: [
    ["Easy", "7%", "71 / 951"],
    ["Medium", "1%", "17 / 2077"],
    ["Hard", "0.1%", "1 / 949"]
  ]
};

function pct(count, total) {
  if (!total) return "0%";
  return `${Math.max(1, Math.round((count / total) * 100))}%`;
}

function formatNumber(value) {
  if (value === null || value === undefined) return "-";
  return Number(value).toLocaleString("en-US");
}

export async function GET() {
  const query = `
    query getLeetCodeProfile($username: String!) {
      allQuestionsCount {
        difficulty
        count
      }
      matchedUser(username: $username) {
        username
        profile {
          ranking
        }
        submitStats {
          acSubmissionNum {
            difficulty
            count
            submissions
          }
        }
        userCalendar {
          streak
          totalActiveDays
        }
      }
    }
  `;

  try {
    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Referer": "https://leetcode.com",
        "User-Agent": "Mozilla/5.0"
      },
      body: JSON.stringify({ query, variables: { username: USERNAME } }),
      next: { revalidate: 3600 }
    });

    if (!response.ok) {
      return Response.json(FALLBACK, { status: 200 });
    }

    const payload = await response.json();
    const user = payload?.data?.matchedUser;

    if (!user) {
      return Response.json(FALLBACK, { status: 200 });
    }

    const totals = Object.fromEntries(
      (payload.data.allQuestionsCount || []).map((item) => [item.difficulty, item.count])
    );
    const solved = Object.fromEntries(
      (user.submitStats?.acSubmissionNum || []).map((item) => [item.difficulty, item.count])
    );

    const easy = solved.Easy || 0;
    const medium = solved.Medium || 0;
    const hard = solved.Hard || 0;
    const easyTotal = totals.Easy || 951;
    const mediumTotal = totals.Medium || 2077;
    const hardTotal = totals.Hard || 949;
    const total = totals.All || easyTotal + mediumTotal + hardTotal;
    const allSolved = solved.All || easy + medium + hard;

    return Response.json({
      username: user.username || USERNAME,
      url: `https://leetcode.com/u/${USERNAME}/`,
      solved: formatNumber(allSolved),
      total: formatNumber(total),
      rank: formatNumber(user.profile?.ranking),
      activeDays: formatNumber(user.userCalendar?.totalActiveDays),
      streak: formatNumber(user.userCalendar?.streak),
      focus: ["Arrays", "Strings", "SQL", "Sliding Window", "Graphs", "DP"],
      levels: [
        ["Easy", pct(easy, easyTotal), `${easy} / ${easyTotal}`],
        ["Medium", pct(medium, mediumTotal), `${medium} / ${mediumTotal}`],
        ["Hard", pct(hard, hardTotal), `${hard} / ${hardTotal}`]
      ]
    });
  } catch (error) {
    return Response.json(FALLBACK, { status: 200 });
  }
}
