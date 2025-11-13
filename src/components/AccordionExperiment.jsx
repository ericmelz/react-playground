import React from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import './AccordionExperiment.css'

function AccordionExperiment() {
  return (
    <div className="accordion-experiment">
      <h2>Accordion Widget Example</h2>
      <p>This demonstrates the Radix UI Accordion component with multiple items.</p>

      <Accordion.Root className="accordion-root" type="single" collapsible>
        <Accordion.Item className="accordion-item" value="item-1">
          <Accordion.Header className="accordion-header">
            <Accordion.Trigger className="accordion-trigger">
              <span>What is React?</span>
              <span className="accordion-chevron" aria-hidden>▼</span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="accordion-content">
            <div className="accordion-content-text">
              React is a JavaScript library for building user interfaces.
              It lets you compose complex UIs from small and isolated pieces of code called "components".
              React is maintained by Meta and a community of developers.
            </div>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item className="accordion-item" value="item-2">
          <Accordion.Header className="accordion-header">
            <Accordion.Trigger className="accordion-trigger">
              <span>What is Radix UI?</span>
              <span className="accordion-chevron" aria-hidden>▼</span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="accordion-content">
            <div className="accordion-content-text">
              Radix UI is a low-level UI component library with a focus on accessibility,
              customization, and developer experience. It provides unstyled, accessible components
              that you can style to match your design system.
            </div>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item className="accordion-item" value="item-3">
          <Accordion.Header className="accordion-header">
            <Accordion.Trigger className="accordion-trigger">
              <span>Why use component libraries?</span>
              <span className="accordion-chevron" aria-hidden>▼</span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="accordion-content">
            <div className="accordion-content-text">
              Component libraries save development time by providing pre-built, tested components.
              They help maintain consistency across your application and often include important
              features like accessibility support, keyboard navigation, and proper ARIA attributes.
            </div>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item className="accordion-item" value="item-4">
          <Accordion.Header className="accordion-header">
            <Accordion.Trigger className="accordion-trigger">
              <span>How do accordions improve UX?</span>
              <span className="accordion-chevron" aria-hidden>▼</span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="accordion-content">
            <div className="accordion-content-text">
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
