import './ItemListContainer.scss';
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";
import { useProducts } from '../../Hook/useProducts';

const ItemListContainer = () => {

   const { productos, loading } = useProducts()

    return (
        <div className="itemlistcontainer" style={{minWidth:"600px"}}>
            <div className="container">
                <div className="row text-center">
                    {   
                        loading
                        ? <Loader/>
                        : <ItemList productos={productos}/>
                    }
                </div>
            </div>
        </div>    
    )
}
export default ItemListContainer