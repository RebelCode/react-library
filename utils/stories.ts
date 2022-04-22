import React, {ComponentType, JSXElementConstructor} from "react"
import {Meta, Story} from "@storybook/react"

export function addStoryCase<T extends {}>(template: Story<T>, args: T) {
  const story = template.bind({})
  story.args = args

  return story
}

type Builder<P extends {}> = {
  addCase: (args: P) => Story<P>
  addMultiple: (baseArgs: Partial<P>, cases: Record<string, Partial<P>>) => Record<keyof typeof cases, Story<P>>
}

export function newStory<C extends JSXElementConstructor<P>, P extends {}>(
  component: ComponentType<P>,
  meta: Omit<Meta<C>, "component">,
): { Meta: Meta<C>, Builder: Builder<P> } {
  const Template: Story<P> = (props: P) => React.createElement(component, props)

  const Builder: Builder<P> = {
    addCase: (args) => addStoryCase(Template, args),
    addMultiple: (baseProps, cases) => {
      // @ts-ignore
      const result: Record<keyof typeof baseProps, Story<P>> = {}

      for (const key of Object.keys(cases)) {
        // @ts-ignore
        result[key] = addStoryCase(Template, {...cases[key], ...baseProps})
      }

      return result
    },
  }

  return {
    Meta: {
      title: "Components/" + component.displayName,
      component,
      ...meta,
    },
    Builder,
  }
}
