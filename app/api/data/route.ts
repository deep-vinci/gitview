export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const queryUsername = searchParams.get("username"); // default fallback

    async function fetchData(username: String | null): Promise<String> {
        let results = await fetch("https://api.github.com/graphql", {
            method: "POST",

            headers: {
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            },

            body: JSON.stringify({
                query: `query($userName: String!) {
                        user(login: $userName) {
                            name
                            login
                            avatarUrl
                            bio
                            company
                            location
                            createdAt
                            websiteUrl
                            twitterUsername
        
                            followers {
                            totalCount
                            }
                            following {
                            totalCount
                            }
        
                            contributionsCollection {
                            contributionCalendar {
                                totalContributions
                                weeks {
                                contributionDays {
                                    contributionCount
                                    date
                                    weekday
                                    color  # Only if supported (not in official schema but inferred by GitHub's frontend)
                                }
                                }
                            }
        
                            commitContributionsByRepository(maxRepositories: 5) {
                                repository {
                                nameWithOwner
                                url
                                }
                                contributions {
                                totalCount
                                }
                            }
        
                            issueContributions {
                                totalCount
                            }
        
                            pullRequestContributions {
                                totalCount
                            }
        
                            pullRequestReviewContributions {
                                totalCount
                            }
        
                            restrictedContributionsCount
                            }
        
                            repositories(first: 5, orderBy: {field: STARGAZERS, direction: DESC}) {
                            nodes {
                                name
                                description
                                url
                                stargazerCount
                                forkCount
                                updatedAt
                                primaryLanguage {
                                name
                                color
                                }
                            }
                            }
                        }
                    }`,
                variables: {
                    userName: username, // or just `id` if parameter name is same
                },
            }),
        });

        let characters = await results.json();
        return characters;
    }

    console.log(queryUsername);
    let results: String = await fetchData(queryUsername);
    return Response.json({ results });
}
