import { dashboard } from "../Utilities/icons"
import { expenses } from "../Utilities/icons"
import { income } from "../Utilities/icons"
import { settings} from "../Utilities/icons"



export const menuItems = [
    {
        id: 1,
        title: 'Dashboard',
        icon: dashboard,
        link: '/',

    },

    {
        id: 2,
        title: 'Expenses',
        icon: expenses,
        link: '/expenses',

    },

    {
        id: 3,
        title: 'Income',
        icon: income,
        link: '/income',

    },

    {
        id: 4,
        title: 'Settings',
        icon: settings,
        link: '/settings',

    }

]