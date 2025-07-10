type ContributionDay = {
    x: number;
    y: number;
    z: number;
    height: number;
    commits: number;
    date: string;
};

export function generateMockContributionData(): ContributionDay[] {
    const data: ContributionDay[] = [];

    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 364); // 365 days including today

    let currentDate = new Date(startDate);

    for (let i = 0; i < 365; i++) {
        const week = Math.floor(i / 7);
        const dayOfWeek = i % 7;

        const commits = Math.floor(Math.random() * 30); // Random commits between 0–29
        const height = Math.max(commits / 5, 0.1); // Scale height, min 0.1

        data.push({
            x: week * 1.2, // space between weeks
            y: height / 2, // so the cube base stays on ground (centered on Y)
            z: dayOfWeek * 1.2, // space between days
            height,
            commits,
            date: currentDate.toISOString().split("T")[0], // YYYY-MM-DD
        });

        currentDate.setDate(currentDate.getDate() + 1);
    }

    return data;
}
