import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Suspense, lazy } from "react"
import Loader from "./components/Loader";
import Home from "./pages/Home";

const Dashboard = lazy(() => import("./pages/dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Customers = lazy(() => import("./pages/Customers"));
const Transactions = lazy(() => import("./pages/Transactions"));
const NewProduct = lazy(() => import("./pages/management/NewProduct"));
const ProductManagement = lazy(() => import("./pages/management/ProductManagement"));
const TransactionManagement = lazy(() => import("./pages/management/TransactionManagement"));
const BarCharts = lazy(() => import("./pages/chart/BarCharts"));
const LineCharts = lazy(() => import("./pages/chart/LineCharts"));
const PieCharts = lazy(() => import("./pages/chart/PieCharts"));

const Coupon = lazy(() => import("./apps/Coupon"));



const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/admin/Products" element={<Products />} />
        <Route path="/admin/Transactions" element={<Transactions />} />
        <Route path="/admin/Customers" element={<Customers />} />

        {/* Charts */}

        <Route path="/admin/chart/bar" element={<BarCharts/>}/>
        <Route path="/admin/chart/pie" element={<PieCharts/>}/>
        <Route path="/admin/chart/line" element={<LineCharts/>}/>


        {/* Apps */}
        <Route path="/admin/apps/coupons" element={<Coupon />} />


        {/* Management */}
        <Route path="/admin/product/new" element={<NewProduct/>} />
        <Route path="/admin/product/:id" element={<ProductManagement/>} />
        <Route path="/admin/product/transcations/:id" element={<TransactionManagement/>} />
      </Routes>
      </Suspense>
    </Router>
  )
}

export default App
