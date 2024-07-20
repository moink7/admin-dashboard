import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar"
import TableHOC from "../components/TableHOC"
import { Column } from "react-table";
import img from "../assets/Grey Front.png";
import img2 from "../assets/PURPLE.png";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

interface DataType{
  photo: ReactElement;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}

const columns:Column<DataType>[]=[
  {
    Header:"Photo",
    accessor: "photo"
  },
  {
    Header:"Name",
    accessor: "name"
  },
  {
    Header:"Price",
    accessor: "price"
  },
  {
    Header:"Stock",
    accessor: "stock"
  },
  {
    Header:"Action",
    accessor: "action"
  }]

  const image = img;
  const image2 =img2;


  const arr:DataType[] = [
    {
      photo: <img src={image} alt="Tee" />,
      name: "Grey Oversized Tee 2024",
      price: 799,
      stock: 6,
      action: <Link to="/admin/product/greytee">Manage</Link>
    },
    {
      photo: <img src={image2} alt="Tee" />,
      name: "Purple Oversized Tee Limited",
      price: 699,
      stock: 14,
      action: <Link to="/admin/product/purpletee">Manage</Link>
    },
    {
      photo: <img src={image} alt="Tee" />,
      name: "Grey Oversized Tee 2024",
      price: 799,
      stock: 6,
      action: <Link to="/admin/product/greytee">Manage</Link>
    },
    {
      photo: <img src={image2} alt="Tee" />,
      name: "Purple Oversized Tee Limited",
      price: 699,
      stock: 14,
      action: <Link to="/admin/product/purpletee">Manage</Link>
    },
    {
      photo: <img src={image} alt="Tee" />,
      name: "Grey Oversized Tee 2024",
      price: 799,
      stock: 6,
      action: <Link to="/admin/product/greytee">Manage</Link>
    },
    {
      photo: <img src={image2} alt="Tee" />,
      name: "Purple Oversized Tee Limited",
      price: 699,
      stock: 14,
      action: <Link to="/admin/product/purpletee">Manage</Link>
    },
    {
      photo: <img src={image} alt="Tee" />,
      name: "Grey Oversized Tee 2024",
      price: 799,
      stock: 6,
      action: <Link to="/admin/product/greytee">Manage</Link>
    },
    {
      photo: <img src={image2} alt="Tee" />,
      name: "Purple Oversized Tee Limited",
      price: 699,
      stock: 14,
      action: <Link to="/admin/product/purpletee">Manage</Link>
    },
    {
      photo: <img src={image} alt="Tee" />,
      name: "Grey Oversized Tee 2024",
      price: 799,
      stock: 6,
      action: <Link to="/admin/product/greytee">Manage</Link>
    },
    {
      photo: <img src={image2} alt="Tee" />,
      name: "Purple Oversized Tee Limited",
      price: 699,
      stock: 14,
      action: <Link to="/admin/product/purpletee">Manage</Link>
    },
    

  ]

const Products = () => {

  const [ data ]= useState<DataType[]>(arr)

  const Table = useCallback(
    TableHOC<DataType>(
      columns,
      data,
      "dashboardProductBox",
      "Products",
      true,
    ),
    []
  );
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main>{Table()}</main>
      <Link to="/admin/product/new" className="createProductBtn">
        <FaPlus/>
      </Link>
    </div>
  )
}

export default Products
