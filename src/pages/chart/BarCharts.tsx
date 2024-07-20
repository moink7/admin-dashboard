import AdminSidebar from "../../components/AdminSidebar"
import { BarChart } from "../../components/Charts"

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];


const BarCharts = () => {
  return (
    <div className="adminContainer">
        <AdminSidebar/>
      <main className="chartContainer">
        <h1>Bar Charts</h1>
        <section>
            <BarChart data_1={[200, 444, 343, 556, 778, 455, 990]} data_2={[300, 144, 433, 655, 237, 755, 190]} title_1="Products" title_2="Users"
            bgColor_1={`hsl(260,50%,30%)`}
            bgColor_2={`hsl(360,90%,90%)`}/>
            <h2>Top Selling Products & Top Customers</h2>
        </section>
        
        <section>
            <BarChart horizontal={true} data_1={[200, 444, 343, 556, 778, 455, 990, 220, 30, 723, 660, 385]} data_2={[]} title_1="Products" title_2="Users"
            bgColor_1={`hsl(260,50%,30%)`}
            bgColor_2=""
            labels={months}/>
            <h2>Orders throughout the year</h2>
        </section>
        
      </main>
    </div>
  )
}

export default BarCharts