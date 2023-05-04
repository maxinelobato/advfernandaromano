import CredibilityIcon from "../icons/credibilityicon"
import RatingIcon from "../icons/ratingicon"
import ReferenceIcon from "../icons/referenceicon"
import TrustIcon from "../icons/trusticon"

export function Credibility(){

    const features = {
        trust: "Confiança",
        credility: "Credibilidade",
        reference: "Referência",
    }

    return(
        <>
<section className="-mb-12">
        <div className="flex items-center justify-center md:box-content">
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4 xl:justify-start">
                <div className="space-y-2 max-w-2xl mx-auto text-center xl:text-left">
                <div className="card min-w-full w-full h-auto backdrop-blur-sm bg-rose-300/30 shadow-lg">
                <div className="card-body">
                    <div className="flex flex-wrap items-center justify-center gap-4 xl:justify-start">
                    <div className="flex items-center gap-x-2 text-rose-950 text-lg">
                                <CredibilityIcon/>
                                {features.credility}
                                </div>
                                <div className="flex items-center gap-x-2 text-rose-950 text-lg">
                                <ReferenceIcon/>
                                {features.reference}
                                </div>
                                <div className="flex items-center gap-x-2 text-rose-950 text-lg">
                                <TrustIcon/>
                                {features.trust}
                                </div>
                                </div>
                                </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </section>
     {/* <section className="-mb-12">
        <div className="flex items-center justify-center box-border md:box-content backdrop-blur-sm bg-white/5 shadow-lg">
        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 xl:justify-start">
        <ul className="grid gap-y-6 gap-x-4 sm:grid-cols-2 lg:grid-cols-3">
            <li className="space-y-3 p-4">
                                <div className="flex items-center gap-x-2 text-[#2C1718] text-lg font-bold">
                                    <div className="w-12 h-12 mx-auto">
                                    <CredibilityIcon/>
                                    </div>
                                    {features.credility}
                        </div>
                        </li>
                        <li className="space-y-3 p-4">
                                <div className="flex items-center gap-x-2 text-[#2C1718] text-lg font-bold">
                                    <div className="w-12 h-12 mx-auto">
                                    <ReferenceIcon/>
                                    </div>
                                    {features.reference}
                        </div>
                        </li>
                        <li className="space-y-3 p-4">
                                <div className="flex items-center gap-x-2 text-[#2C1718] text-lg font-bold">
                                    <div className="w-12 h-12 mx-auto">
                                    <TrustIcon/>
                                    </div>
                                    {features.trust}
                        </div>
                        </li>
                        </ul>
                </div>
                </div>
                </section> */}
            </>
    )
}