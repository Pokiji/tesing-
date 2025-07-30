import { HeroHeader } from './header'
import {Accordion, AccordionItem} from "@heroui/accordion";
const ProgrammingPurple = [
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

const BuildingPurple = [
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


const DesignPurple = [
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
                        {BuildingPurple.map((BuildingPurple, index) => (
                            <div key={index}>
                                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                                    <img className="aspect-square rounded-full object-cover" src={BuildingPurple.avatar} alt={BuildingPurple.name} height="460" width="460" loading="lazy" />
                                </div>
                                <span className="mt-2 block text-sm">{BuildingPurple.name}</span>
                                <span className="text-muted-foreground block text-xs">{BuildingPurple.role}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="mb-6 text-lg font-medium">Design</h3>
                    <div data-rounded="full" className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
                        {BuildingPurple.map((PurpleMembers, index) => (
                            <div key={index}>
                                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                                    <img className="aspect-square rounded-full object-cover" src={PurpleMembers.avatar} alt={PurpleMembers.name} height="460" width="460" loading="lazy" />
                                </div>
                                <span className="mt-2 block text-sm">{PurpleMembers.name}</span>
                                <span className="text-muted-foreground block text-xs">{PurpleMembers.role}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="mb-6 text-lg font-medium">Coding</h3>
                    <div data-rounded="full" className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
                        {ProgrammingPurple.map((ProgrammingPurple, index) => (
                            <div key={index}>
                                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                                    <img className="aspect-square rounded-full object-cover" src={ProgrammingPurple.avatar} alt={ProgrammingPurple.name} height="460" width="460" loading="lazy" />
                                </div>
                                <span className="mt-2 block text-sm">{ProgrammingPurple.name}</span>
                                <span className="text-muted-foreground block text-xs">{ProgrammingPurple.role}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="mb-6 text-lg font-medium">Outreach/marketing</h3>
                    <div data-rounded="full" className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
                        {BuildingPurple.map((BuildingPurple, index) => (
                            <div key={index}>
                                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                                    <img className="aspect-square rounded-full object-cover" src={BuildingPurple.avatar} alt={BuildingPurple.name} height="460" width="460" loading="lazy" />
                                </div>
                                <span className="mt-2 block text-sm">{BuildingPurple.name}</span>
                                <span className="text-muted-foreground block text-xs">{BuildingPurple.role}</span>
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
