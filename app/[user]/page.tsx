import SwitchModel from "../components/switchModel";
import DeterminedModel from "../components/DeterminedModel";

type Params = Promise<{ user: String }>;

export default async function Page({ params }: { params: Params }) {
    const { user } = await params;

    return (
        <div className="w-full max-w-[1400px] mx-auto canvasbg h-full">
            <div className="h-full">
                <SwitchModel />
                <DeterminedModel username={user} />
            </div>
        </div>
    );
}
