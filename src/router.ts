import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/doc/Doc.vue'
import Markdown from './components/Markdown.vue'
import SwitchDoc from "./views/doc/sub-doc/SwitchDoc.vue"
import ButtonDoc from "./views/doc/sub-doc/ButtonDoc.vue"
import ModalDoc from "./views/doc/sub-doc/ModalDoc.vue"
import TabsDoc from "./views/doc/sub-doc/TabsDoc.vue"
import IconDoc from './views/doc/sub-doc/IconDoc.vue'
import CascaderDoc from './views/doc/sub-doc/CascaderDoc.vue'
import CollapseDoc from './views/doc/sub-doc/CollapseDoc.vue'
import ContainerDoc from './views/doc/sub-doc/ContainerDoc.vue'
import DatePickerDoc from './views/doc/sub-doc/DatePickerDoc.vue'
import GridDoc from './views/doc/sub-doc/GridDoc.vue'
import InputDoc from './views/doc/sub-doc/InputDoc.vue'
import PagerDoc from './views/doc/sub-doc/PagerDoc.vue'
import PopoverDoc from './views/doc/sub-doc/PopoverDoc.vue'
import RadioDoc from './views/doc/sub-doc/RadioDoc.vue'
import SpreadDoc from './views/doc/sub-doc/SpreadDoc.vue'
import StickyDoc from './views/doc/sub-doc/StickyDoc.vue'
import TimePickerDoc from './views/doc/sub-doc/TimePickerDoc.vue'
import WaterfallDoc from './views/doc/sub-doc/WaterfallDoc.vue'

import { h } from 'vue'

const history = createWebHashHistory()

const md = (filename) => h(Markdown, { path: `../markdown/${filename}.md`, key: filename })

export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc', component: Doc, children: [
                { path: '', redirect: '/doc/into' },
                { path: "into", component: md("into") },
                { path: "fast", component: md("fast") },

                { path: 'switch', component: SwitchDoc },
                { path: "button", component: ButtonDoc },
                { path: "dialog", component: ModalDoc },
                { path: "tabs", component: TabsDoc },
                { path: "icon", component: IconDoc },
                { path: "cascader", component: CascaderDoc },
                { path: "collapse", component: CollapseDoc },
                { path: "datePicker", component: DatePickerDoc },
                { path: "grid", component: GridDoc },
                { path: "input", component: InputDoc },
                { path: "container", component: ContainerDoc },
                { path: "pager", component: PagerDoc },
                { path: "popover", component: PopoverDoc },
                { path: "radio", component: RadioDoc },
                { path: "spread", component: SpreadDoc },
                { path: "sticky", component: StickyDoc },
                { path: "timePicker", component: TimePickerDoc },
                { path: "waterfall", component: WaterfallDoc },
            ]
        }
    ]
})

