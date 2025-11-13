import React from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import AccordionExperiment from './components/AccordionExperiment'
import './App.css'

function App() {
  return (
    <div className="container">
      <h1>React Experiments Playground</h1>

      <Tabs.Root className="tabs-root" defaultValue="accordion">
        <Tabs.List className="tabs-list" aria-label="Experiments">
          <Tabs.Trigger className="tabs-trigger" value="accordion">
            Accordion
          </Tabs.Trigger>
          <Tabs.Trigger className="tabs-trigger" value="experiment2">
            Experiment 2
          </Tabs.Trigger>
          <Tabs.Trigger className="tabs-trigger" value="experiment3">
            Experiment 3
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content className="tabs-content" value="accordion">
          <AccordionExperiment />
        </Tabs.Content>

        <Tabs.Content className="tabs-content" value="experiment2">
          <div className="experiment-placeholder">
            <h2>Experiment 2</h2>
            <p>Add your second experiment here</p>
          </div>
        </Tabs.Content>

        <Tabs.Content className="tabs-content" value="experiment3">
          <div className="experiment-placeholder">
            <h2>Experiment 3</h2>
            <p>Add your third experiment here</p>
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  )
}

export default App
