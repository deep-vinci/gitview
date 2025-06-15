export interface UserData {
    name: string;
    login: string;
    avatarUrl: string;
    bio: string;
    company: string;
    location: string;
    websiteUrl: string;
    createdAt: string;
    twitterUsername: string;
    followers: {
        totalCount: number;
    };
    following: {
        totalCount: number;
    };
    contributionsCollection: {
        contributionCalendar: {
            totalContributions: number;
            weeks: Array<{
                contributionDays: Array<{
                    contributionCount: number;
                    date: string;
                    weekday: number;
                    color: string;
                }>;
            }>;
        };
        commitContributionsByRepository: Array<{
            repository: {
                nameWithOwner: string;
                url: string;
            };
            contributions: {
                totalCount: number;
            };
        }>;
        issueContributions: {
            totalCount: number;
        };
        pullRequestContributions: {
            totalCount: number;
        };
        pullRequestReviewContributions: {
            totalCount: number;
        };
        restrictedContributionsCount: number;
    };
    repositories: {
        nodes: Array<{
            name: string;
            description: string;
            url: string;
            stargazerCount: number;
            forkCount: number;
            updatedAt: string;
            primaryLanguage: {
                name: string;
                color: string;
            } | null; // primaryLanguage can be null
        }>;
    };
}
