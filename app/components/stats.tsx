import Image from "next/image";
import { Card } from "./ui/card";
import { useUserData } from "../context/UserDataContext";
import { useEffect, useMemo, useState } from "react";

export default function Stats() {
    const { userData, fetchData } = useUserData();
    const [streakInfo, setStreakInfo] = useState<{
        longestStreak: number;
        currentStreak: number;
    }>();

    const contributionDataForRender =
        userData?.contributionsCollection?.contributionCalendar?.weeks || [];

    useEffect(() => {
        if (!contributionDataForRender) return;

        let currentStreak = 0,
            longestStreak = 0;
        for (const week in contributionDataForRender) {
            let _week = contributionDataForRender[week]["contributionDays"];
            for (const day in _week) {
                let today = _week[day];
                if (today.contributionCount > 0) {
                    console.log("streak begins");
                    currentStreak++;
                } else if (today.contributionCount == 0) {
                    console.log("streak ends");
                    if (currentStreak > longestStreak) {
                        longestStreak = currentStreak;
                    }
                    currentStreak = 0;
                }
            }
        }

        setStreakInfo({ longestStreak, currentStreak });
    }, [userData]);

    return (
        <Card className="p-5 m-5">
            <div className="space-y-1">
                <h4 className="text-sm font-semibold">Commit Streak</h4>
                <div className="flex gap-1 items-center ">
                    <Image
                        src={"/streak.png"}
                        alt="streaks"
                        height={20}
                        width={25}
                    />
                    <p className="text-sm">
                        Current streak {streakInfo?.currentStreak} days
                    </p>
                </div>
                <div className="flex gap-1 items-center ">
                    <Image
                        src={"/best.png"}
                        alt="streaks"
                        height={20}
                        width={25}
                    />
                    <p className="text-sm">
                        Highest streak {streakInfo?.longestStreak} days
                    </p>
                </div>

                <div className="text-muted-foreground text-xs">
                    Joined {userData?.createdAt}
                </div>
            </div>{" "}
        </Card>
    );
}
