import { HeroHeader } from './header'
import {Accordion, AccordionItem} from "@heroui/accordion";
const ProgrammingYellow = [
    {
        name: 'Alex',
        role: 'Programming Lead',
        avatar: '',
    },
    {
        name: '',
        role: '',
        avatar: '',
    },
    {
        name: ' ',
        role: ' ',
        avatar: '',
    },
    {
        name: ' ',
        role: ' ',
        avatar: ':',
    },
]

const BuildingYellow = [
    {
        name: 'Alex',
        role: 'Programming Lead',
        avatar: '',
    },
    {
        name: '',
        role: '',
        avatar: '',
    },
    {
        name: ' ',
        role: ' ',
        avatar: '',
    },
    {
        name: ' ',
        role: ' ',
        avatar: ':',
    },
]


const DesignYellow = [
    {
        name: 'Alex',
        role: 'Programming Lead',
        avatar: '',
    },
    {
        name: '',
        role: '',
        avatar: '',
    },
    {
        name: ' ',
        role: ' ',
        avatar: '',
    },
    {
        name: ' ',
        role: ' ',
        avatar: ':',
    },
]




export default function TeamSection() {
    return (
        <>
        <HeroHeader />
       {/* to do add accrodian to for each team */}
       {/* ex: <accordian> */}
        <section className="py-12 md:py-32">
            <div className="mx-auto max-w-3xl px-8 lg:px-0">
                <h2 className="mb-8 text-4xl font-bold md:mb-16 lg:text-5xl">Our team</h2>

                <div>
                    <h3 className="mb-6 text-lg font-medium">Building</h3>
                    <div className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
                        {BuildingYellow.map((BuildingYellow, index) => (
                            <div key={index}>
                                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                                    <img className="aspect-square rounded-full object-cover" src={BuildingYellow.avatar} alt={BuildingYellow.name} height="460" width="460" loading="lazy" />
                                </div>
                                <span className="mt-2 block text-sm">{BuildingYellow.name}</span>
                                <span className="text-muted-foreground block text-xs">{BuildingYellow.role}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="mb-6 text-lg font-medium">Design</h3>
                    <div data-rounded="full" className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
                        {DesignYellow.map((DesignYellow, index) => (
                            <div key={index}>
                                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                                    <img className="aspect-square rounded-full object-cover" src={DesignYellow.avatar} alt={DesignYellow.name} height="460" width="460" loading="lazy" />
                                </div>
                                <span className="mt-2 block text-sm">{DesignYellow.name}</span>
                                <span className="text-muted-foreground block text-xs">{DesignYellow.role}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="mb-6 text-lg font-medium">Coding</h3>
                    <div data-rounded="full" className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
                        {ProgrammingYellow.map((ProgrammingYellow, index) => (
                            <div key={index}>
                                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                                    <img className="aspect-square rounded-full object-cover" src={ProgrammingYellow.avatar} alt={ProgrammingYellow.name} height="460" width="460" loading="lazy" />
                                </div>
                                <span className="mt-2 block text-sm">{ProgrammingYellow.name}</span>
                                <span className="text-muted-foreground block text-xs">{ProgrammingYellow.role}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="mb-6 text-lg font-medium">Outreach/marketing</h3>
                    <div data-rounded="full" className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
                        {DesignYellow.map((DesignYellow, index) => (
                            <div key={index}>
                                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                                    <img className="aspect-square rounded-full object-cover" src={DesignYellow.avatar} alt={DesignYellow.name} height="460" width="460" loading="lazy" />
                                </div>
                                <span className="mt-2 block text-sm">{DesignYellow.name}</span>
                                <span className="text-muted-foreground block text-xs">{DesignYellow.role}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        {/* ex: </accordian> */}
        </>
    )
}
