import { AccordionCard } from "./accordion"
import { CardImage } from "./card"

export default function Page() {
return <>

    <div className="mt-6 mb-6 flex flex-col items-center gap-8">
        <CardImage/>
        <AccordionCard/>
    </div>

</>
}