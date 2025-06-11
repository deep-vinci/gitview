// "use client";

import { geist, instrument_Serif } from "../components/fonts";
import Search from "../components/search/search";
import { Graph } from "../components/model";
import BoxScene from "../components/threeDemo/box-scene";
import Image from "next/image";
import fetchData from "../utils/data";
import ContributionGrid from "../components/three-instanced-mesh";
import { generateMockContributionData } from "../utils/mockData";
import Heatmap from "../components/three-heatmap-test";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "../components/ui/tabs";
import SwitchModel from "../components/switchModel";
import { useModel } from "../context/modelProvider";
import DeterminedModel from "../components/DeterminedModel";
export default async function Page({ params }: { params: { user: string } }) {
    // const data = await fetch("https://api.vercel.app/blog");
    // const posts = await data.json();
    // console.log(posts);
    // console.log(await fetchData());
    // console.dir(await fetchData(), { depth: null });
    let p = await params;
    return (
        <div className="w-full max-w-[1400px]  my-0 mx-auto h-[100vh] ">
            {/* nav */}
            {/* <div className="flex justify-start flex-row-reverse items-center gap-10 py-8">
                <div className="w-12 h-12 ">
                    <Image
                        src="https://avatars.githubusercontent.com/u/1206493?v=4"
                        width={500}
                        height={500}
                        alt="test"
                        className="rounded-full shadow-sm"
                    />
                </div>
                <div className="">
                    <Search user={param.user} />
                </div>

                <div
                    className={`${geist.className} font-bold text-6xl ml-0 mr-auto`}
                >
                    <h1>
                        Hello,{" "}
                        <span className={`${instrument_Serif.className} `}>
                            {[await params.user]}
                        </span>
                    </h1>
                </div>
            </div> */}
            <div className="flex justify-start gap-10 canvasbg">
                <SwitchModel />
                <DeterminedModel username={await params.user} />
                {/* <BoxScene /> */}
                {/* <Graph /> */}
                {/* <ContributionGrid data={generateMockContributionData()} /> */}
                {/* <Graph /> */}
                {/* <Graph username={await params.user} /> */}

                {/* <Heatmap /> */}
            </div>
        </div>
    );
}
