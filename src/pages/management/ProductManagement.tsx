import { ChangeEvent, useState, FormEvent } from "react"
import AdminSidebar from "../../components/AdminSidebar"


const ProductManagement = () => {

  const[name, setName] = useState<string>("Oversized tee");
  const[price, setPrice] = useState<number>(2000);
  const[stock, setStock] = useState<number>(10);
  const[photo, setPhoto] = useState<string>("img");

  const[nameUpdate, setNameUpdate] = useState<string>(name);
  const[priceUpdate, setPriceUpdate] = useState<number>(price);
  const[stockUpdate, setStockUpdate] = useState<number>(stock);
  const[photoUpdate, setPhotoUpdate] = useState<string>(photo);

  const changeImageHandler = (e:ChangeEvent<HTMLInputElement>) => {
    const file:File | undefined = e.target.files?.[0];
    const reader: FileReader  = new FileReader();

    if(file){
        reader.readAsDataURL(file);
        reader.onloadend = () =>{
            if(typeof reader.result==="string") setPhotoUpdate(reader.result);
        }
    }
  }


  const submitHandler = (e:FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    setName(nameUpdate);
    setPrice(priceUpdate);
    setStock(stockUpdate);
    setPhoto(photoUpdate);
  }
  return (
    <div>
       <div className="adminContainer">
            <AdminSidebar />
            <main className="productManagement">
            <section>
              <strong>
                ID - sdadasdadas
              </strong>

              <img src={photo} alt="Product" />
              <p>{name}</p>
              {stock > 0? (
                <span className="green">{stock} Available</span>
              ): <span className="red">Not Available</span>}
              <h3>${price}</h3>
            </section>

                <article>
                    <form onSubmit={submitHandler}>
                        <h2>Manage</h2>
                        <div>
                            <label>Name</label>
                            <input
                                required 
                                type="text" 
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setNameUpdate(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Price</label>
                            <input
                                required 
                                type="number" 
                                placeholder="Price"
                                value={priceUpdate}
                                onChange={(e) => setPriceUpdate(Number(e.target.value))}
                            />
                        </div>
                        <div>
                            <label>Stock</label>
                            <input
                                required 
                                type="number" 
                                placeholder="Stock"
                                value={stockUpdate}
                                onChange={(e) => setStockUpdate(Number(e.target.value))}
                            />
                        </div>
                        <div>
                            <label>Photo</label>
                            <input
                                required 
                                type="file" 
                                onChange={changeImageHandler}
                            />
                        </div>

                        {
                            photo && <img src={photoUpdate} alt="New Image" />
                        }
                        <button type="submit" >Update</button>
                    </form>
                </article>
            </main>
        </div>
    </div>
  )
}

export default ProductManagement
