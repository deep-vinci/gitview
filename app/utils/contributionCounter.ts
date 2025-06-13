import { UserData } from "../types/userData";

export default function contributionCounter(
    contributionWeeks: UserData["contributionsCollection"]["contributionCalendar"]["weeks"]
) {
    let lowestContributionCount = Infinity;
    let highestContributionCount = -Infinity;

    if (contributionWeeks) {
        for (const week of contributionWeeks) {
            for (const day of week.contributionDays ?? []) {
                if (day.contributionCount < lowestContributionCount)
                    lowestContributionCount = day.contributionCount;
                if (day.contributionCount > highestContributionCount)
                    highestContributionCount = day.contributionCount;
            }
        }
    }
    // highestContributionCount += 10;
    // lowestContributionCount += 10;
    return { lowestContributionCount, highestContributionCount };
}
