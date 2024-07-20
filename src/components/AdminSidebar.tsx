import {  IconType } from "react-icons";
import { AiFillFileText } from "react-icons/ai";
import { FaChartBar, FaChartLine, FaChartPie, FaGamepad, FaStopwatch } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { RiCoupon3Fill, RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import { Link, Location, useLocation } from "react-router-dom"

const AdminSidebar = () => {
const Location = useLocation()

  return (
    <aside>
      <h2>Logo.</h2>
      
      <div>
        <h5>Dashboard</h5>
        <ul>
            <Li url="/admin/dashboard" text="Dashboard" Icon={RiDashboardFill} location={Location} />

            <Li url="/admin/products" text="Products" Icon={RiShoppingBag3Fill} location={Location} />

            <Li url="/admin/customers" text="Customers" Icon={IoIosPeople} location={Location} />

            <Li url="/admin/transactions" text="Transactions" Icon={AiFillFileText} location={Location} />
        </ul>
      </div>

      <div>
        <h5>Charts</h5>
        <ul>
            <Li url="/admin/chart/bar" text="Bar" 
            Icon={FaChartBar} 
            location={Location} />

            <Li url="/admin/chart/pie" text="Pie" 
            Icon={FaChartPie} 
            location={Location} />

            <Li url="/admin/chart/line" text="Line" 
            Icon={FaChartLine} 
            location={Location} />

        </ul>
      </div>

      <div>
        <h5>Apps</h5>
        <ul>
            <Li url="/admin/apps/stopwatch" text="Stopwatch" 
            Icon={FaStopwatch} location={Location} />

            <Li url="/admin/apps/coupons" text="Coupons" 
            Icon={RiCoupon3Fill} 
            location={Location} />

            <Li url="/admin/apps/toss" text="Toss" 
            Icon={FaGamepad} 
            location={Location} />
        </ul>
      </div>
    </aside>
  )
};

interface LiProps{
    url:string,
    text:string,
    location: Location;
    Icon: IconType
}
const Li = ({url, text, location, Icon}: LiProps)=> (
    <li style={
        {
            backgroundColor: location.pathname.includes(url) 
            ? "rgba(0, 115, 255, 0.1)"
            : "white",
        }
    }>
        <Link to={url} style={{
            color:location.pathname.includes(url)
            ?"rgb(0,115,255)"
            :"black"
        }}>
        <Icon />
        {text}
        </Link>
    </li>
)

export default AdminSidebar
