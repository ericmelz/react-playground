import React from 'react'
import * as Accordion from '@radix-ui/react-accordion'

function AccordionExperiment() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="mb-3 text-3xl text-violet-400">Accordion Widget Example</h2>
      <p className="mb-8 text-zinc-400">
        This demonstrates the Radix UI Accordion component with multiple items.
      </p>

      <Accordion.Root
        className="w-full bg-white/5 rounded-lg overflow-hidden"
        type="single"
        collapsible
      >
        <Accordion.Item className="overflow-hidden mt-px first:mt-0" value="item-1">
          <Accordion.Header className="flex">
            <Accordion.Trigger className="group flex flex-1 items-center justify-between px-6 py-5 text-lg text-white bg-transparent border-b border-white/10 transition-all duration-200 hover:bg-violet-500/10 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:-ring-offset-2">
              <span>What is React?</span>
              <span
                className="text-sm opacity-70 transition-transform duration-300 group-data-[state=open]:rotate-180"
                aria-hidden
              >
                ▼
              </span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden text-white/75 bg-black/15 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
            <div className="px-6 py-6 leading-relaxed">
              React is a JavaScript library for building user interfaces. It lets you compose
              complex UIs from small and isolated pieces of code called "components". React is
              maintained by Meta and a community of developers.
            </div>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item className="overflow-hidden mt-px" value="item-2">
          <Accordion.Header className="flex">
            <Accordion.Trigger className="group flex flex-1 items-center justify-between px-6 py-5 text-lg text-white bg-transparent border-b border-white/10 transition-all duration-200 hover:bg-violet-500/10 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:-ring-offset-2">
              <span>What is Radix UI?</span>
              <span
                className="text-sm opacity-70 transition-transform duration-300 group-data-[state=open]:rotate-180"
                aria-hidden
              >
                ▼
              </span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden text-white/75 bg-black/15 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
            <div className="px-6 py-6 leading-relaxed">
              Radix UI is a low-level UI component library with a focus on accessibility,
              customization, and developer experience. It provides unstyled, accessible components
              that you can style to match your design system.
            </div>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item className="overflow-hidden mt-px" value="item-3">
          <Accordion.Header className="flex">
            <Accordion.Trigger className="group flex flex-1 items-center justify-between px-6 py-5 text-lg text-white bg-transparent border-b border-white/10 transition-all duration-200 hover:bg-violet-500/10 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:-ring-offset-2">
              <span>Why use component libraries?</span>
              <span
                className="text-sm opacity-70 transition-transform duration-300 group-data-[state=open]:rotate-180"
                aria-hidden
              >
                ▼
              </span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden text-white/75 bg-black/15 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
            <div className="px-6 py-6 leading-relaxed">
              Component libraries save development time by providing pre-built, tested components.
              They help maintain consistency across your application and often include important
              features like accessibility support, keyboard navigation, and proper ARIA attributes.
            </div>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item className="overflow-hidden mt-px" value="item-4">
          <Accordion.Header className="flex">
            <Accordion.Trigger className="group flex flex-1 items-center justify-between px-6 py-5 text-lg text-white bg-transparent border-b border-white/10 transition-all duration-200 hover:bg-violet-500/10 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:-ring-offset-2">
              <span>How do accordions improve UX?</span>
              <span
                className="text-sm opacity-70 transition-transform duration-300 group-data-[state=open]:rotate-180"
                aria-hidden
              >
                ▼
              </span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden text-white/75 bg-black/15 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
            <div className="px-6 py-6 leading-relaxed">
              Accordions help organize content by allowing users to expand and collapse sections.
              This keeps interfaces clean and focused, letting users access information when needed
              without overwhelming them with everything at once.
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  )
}

export default AccordionExperiment
