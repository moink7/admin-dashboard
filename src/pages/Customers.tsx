import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar"
import { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import { FaTrash } from "react-icons/fa";


interface DataType{
  avatar: ReactElement;
  name: string;
  email: string;
  gender: string;
  role: string;
  action: ReactElement;
}

const columns:Column<DataType>[]=[
  {
    Header:"Avatar",
    accessor: "avatar",
  },
  {
    Header:"Name",
    accessor: "name"
  },
  {
    Header:"Gender",
    accessor: "gender"
  },
  {
    Header:"Email",
    accessor: "email"
  },
  {
    Header:"Role",
    accessor: "role"
  },
  {
    Header:"Action",
    accessor: "action"
  }]

  const image = "https://randomuser.me/portraits/women/54.jpg";
  const image2 = "https://randomuser.me/portraits/women/50.jpg";

  const arr:DataType[]=[
    {
      avatar:(
        <img style={{
          borderRadius: "50%",
        }} src={image} alt="Tee" />
      ),
      name: "Mynsa Palmer",
      email: "mynsa.palmer@example.com",
      gender: "female",
      role: "user",
      action:(
        <button>
          <FaTrash />
        </button>
      )
    },
    {
      avatar:(
        <img style={{
          borderRadius: "50%",
        }} src={image2} alt="Tee2" />
      ),
      name: "Zubia Scott",
      email: "zubia.scott@example.com",
      gender: "female",
      role: "user",
      action:(
        <button>
          <FaTrash />
        </button>
      )
    }
  ]

const Customers = () => {

  const [data] = useState<DataType[]>(arr)
  const Table = useCallback(
    TableHOC<DataType>(
      columns,
      data,
      "dashboardProductBox",
      "Customers",
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

export default Customers
