import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar"
import { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import { Link } from "react-router-dom";

interface DataType{
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}

const columns:Column<DataType>[]=[
  {
    Header:"User",
    accessor: "user",
  },
  {
    Header:"Amount",
    accessor: "amount"
  },
  {
    Header:"Discount",
    accessor: "discount"
  },
  {
    Header:"Quantity",
    accessor: "quantity"
  },
  {
    Header:"Status",
    accessor: "status"
  },
  {
    Header:"Action",
    accessor: "action"
  }]

  const arr:DataType[] = [
  {
    user: "Ronaldo",
    amount: 4500,
    discount: 300,
    quantity: 3,
    status: <span className="red">Processing</span>,
    action: <Link to="/admin/transaction/dasda">Manage</Link>
  },
  {
    user: "Messi",
    amount: 450,
    discount: 30,
    quantity: 1,
    status: <span className="red">Processing</span>,
    action: <Link to="/admin/transaction/dasda">Manage</Link>
  },
  {
    user: "Neymar",
    amount: 1100,
    discount: 400,
    quantity: 2,
    status: <span className="red">Processing</span>,
    action: <Link to="/admin/transaction/dasda">Manage</Link>
  },
]

const Transactions = () => {

  const [data] = useState<DataType[]>(arr);
  const Table = useCallback(
    TableHOC<DataType>(
      columns,
      data,
      "dashboardProductBox",
      "Transactions",
      true,
    ),
    []
  );
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main>{Table()}</main>
    </div>
  )
}

export default Transactions;
