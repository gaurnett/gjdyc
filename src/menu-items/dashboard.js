// assets
import { CreditCardOutlined, DashboardOutlined, LineChartOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  UserOutlined,
  LineChartOutlined,
  ShoppingCartOutlined,
  CreditCardOutlined
};

// npm install react-credit-cards-2 bootstrap --legacy-peer-deps
// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'customers',
      title: 'Customers',
      type: 'item',
      url: '/customers',
      icon: icons.UserOutlined,
      breadcrumbs: false
    },
    {
      id: 'transactions',
      title: 'Transactions',
      type: 'item',
      url: '/transactions',
      icon: icons.LineChartOutlined,
      breadcrumbs: false
    },
    {
      id: 'products',
      title: 'Products',
      type: 'item',
      url: '/products',
      icon: icons.ShoppingCartOutlined,
      breadcrumbs: false
    },
    {
      id: 'payment',
      title: 'Payment',
      type: 'item',
      url: '/payment',
      icon: icons.CreditCardOutlined,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
