import * as Tabs from '@radix-ui/react-tabs'
import AccordionExperiment from './components/AccordionExperiment'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './components/accordion'



function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <div className="container mx-auto max-w-6xl p-8">
        <h1 className="mb-8 text-center text-5xl font-bold bg-gradient-to-r from-violet-500 to-purple-600 bg-clip-text text-transparent">
          React Experiments Playground
        </h1>

        <Tabs.Root
          className="flex flex-col w-full"
          defaultValue="accordion"
        >
          <Tabs.List
            className="flex gap-2 mb-8 border-b-2 border-zinc-700"
            aria-label="Experiments"
          >
            <Tabs.Trigger
              className="flex-1 px-6 py-3 text-base text-zinc-400 transition-all duration-200 border-b-2 border-transparent relative top-0.5 hover:text-zinc-300 hover:bg-violet-500/5 data-[state=active]:text-violet-400 data-[state=active]:border-violet-500 data-[state=active]:font-semibold focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
              value="accordion"
            >
              Accordion
            </Tabs.Trigger>
            <Tabs.Trigger
              className="flex-1 px-6 py-3 text-base text-zinc-400 transition-all duration-200 border-b-2 border-transparent relative top-0.5 hover:text-zinc-300 hover:bg-violet-500/5 data-[state=active]:text-violet-400 data-[state=active]:border-violet-500 data-[state=active]:font-semibold focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
              value="experiment2"
            >
              Lovable Accordion
            </Tabs.Trigger>
            <Tabs.Trigger
              className="flex-1 px-6 py-3 text-base text-zinc-400 transition-all duration-200 border-b-2 border-transparent relative top-0.5 hover:text-zinc-300 hover:bg-violet-500/5 data-[state=active]:text-violet-400 data-[state=active]:border-violet-500 data-[state=active]:font-semibold focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
              value="experiment3"
            >
              Experiment 3
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content
            className="flex-grow p-6 bg-white/5 rounded-lg outline-none animate-fadeIn focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
            value="accordion"
          >
            <AccordionExperiment />
          </Tabs.Content>

          <Tabs.Content
            className="flex-grow p-6 bg-white/5 rounded-lg outline-none animate-fadeIn focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
            value="experiment2"
          >
            <div className="text-center py-12">
              <h2 className="mb-4 text-2xl text-violet-400">Lovable Accordion</h2>
              <p className="text-zinc-400">Ported from fincat/frontend</p>
            </div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>Yes. It adheres to WAI-ARIA design patterns.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Does this rock?</AccordionTrigger>
                <AccordionContent>Yes. It rocks mightily.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </Tabs.Content>

          <Tabs.Content
            className="flex-grow p-6 bg-white/5 rounded-lg outline-none animate-fadeIn focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
            value="experiment3"
          >
            <div className="text-center py-12">
              <h2 className="mb-4 text-2xl text-violet-400">Experiment 3</h2>
              <p className="text-zinc-400">Add your third experiment here</p>
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  )
}

export default App
