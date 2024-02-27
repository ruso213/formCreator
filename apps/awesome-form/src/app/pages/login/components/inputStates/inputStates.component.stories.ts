import { Meta, StoryObj } from "@storybook/angular";

import { InputStatesComponent } from './inputStates.component';

const meta :Meta<InputStatesComponent> = {
    component:InputStatesComponent,
    title:'inputState'
}
export default meta
interface inputStatesProps {
    label: string;
    disabled: boolean;
  }
type Story = StoryObj<InputStatesComponent & inputStatesProps>

export const initial :Story= {
    render: (props) =>({
        props,
        template: '<ctr-input-states [(ngModel)]="a" [state]="state">gmail</ctr-input-states>'
    }),
    args:{
        state:'initial',
        
    }
}
