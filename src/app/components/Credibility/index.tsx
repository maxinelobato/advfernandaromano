import CredibilityIcon from "../icons/credibilityicon"
import RatingIcon from "../icons/ratingicon"
import ReferenceIcon from "../icons/referenceicon"
import TrustIcon from "../icons/trusticon"

export function Credibility(){

    const features = {
        trust: "Confiança",
        credility: "Credibilidade",
        reference: "Referência",
        experience: "Experiência",
    }

    return(
        <>
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4 xl:justify-center">
            <div className="flex items-center  gap-x-2">
                <CredibilityIcon/>
                {features.credility}
                </div>
                <div className="flex items-center gap-x-2">
                <ReferenceIcon/>
                {features.reference}
                </div>
                <div className="flex items-center gap-x-2">
                <TrustIcon/>
                {features.trust}
                </div>
                <div className="flex items-center gap-x-2">
                <RatingIcon/>
                {features.experience}
                </div>
            </div>
            </>
    )
}