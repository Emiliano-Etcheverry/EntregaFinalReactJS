import { useState } from "react";
import { getFirestore, addDoc, collection, doc, getDoc,  updateDoc} from 'firebase/firestore';
import { useCartContext } from "../../Context/CartContext";

export const Checkout = () =>{
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [confirmacion, setConfirmacion] = useState('');
    const [error, setError] = useState('');
    const [ordenID, setOrdenID] = useState('');
    


const {cart, removeProduct, totalPrice, clear} = useCartContext();

const formulario = (event) => {
    event.preventDefault();
    
    if( !nombre || !apellido || !telefono || !email || !confirmacion){
        setError('Completar los campos obligatorios');
        return;
    }
    
    if( email !== confirmacion){
        setError('Los emails no coinciden');
        return
    }

    const total = totalPrice();

    const orden = {

        cards: cart.map((product)=>({
            id:product.id,
            tittle:product.name,
            price:product.price,
            quantity:product.quantity,
        })),
        total:total,
        fecha: new Date(),
        nombre,
        apellido,
        telefono,
        email,
    };

    Promise.all(
        orden.cards.map(async(productOrden)=>{
            const db = getFirestore();
            const productRef = doc (db , 'cards', productOrden.id);
            const productDoc = await getDoc(productRef);
            const stockActual = productDoc.data().stock;

            await updateDoc(productRef, {
                stock : stockActual - productOrden.quantity,
            });
        })
    )
    .then(() => {
        const db = getFirestore();
        addDoc(collection(db , 'orders'), orden)
        .then((docRef) => {
            setOrdenID(docRef.id);
            removeProduct();
            clear();
        })
        .catch((error) => {
            console.log('Ocurrio un error al crear su orden', error);
            setError('Error en la orden');
        })
        .catch((error) => {
            console.log('No es posible actualizar el stock', error);
            setError('No se actualizo el stock')
        })
    });

    setNombre('');
    setApellido('');
    setTelefono('');
    setEmail('');
    setConfirmacion('');
    
};

return (
    <div className="checkoutBox">
        <div className="checkoutPrimary">

            <h2>Datos de envio</h2>
            
            <form className="checkoutForm" onSubmit={formulario}>

                <div className="nameForm">

                    <div className="lab-2">
                    <label>Nombre</label>
                    <input
                        className="input-2"
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                    </div>

                    <div className="lab-2">
                    
                    <label>Apellido</label>
                    <input
                        className="input-2"
                        type="text"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                    />
                    </div>

                </div>
                

                <div className="lab">
                <label className="lab-check">Telefono</label>
                <input
                    className="input-check"
                    type="number"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                />
                </div>

                <div className="lab">
                <label className="lab-check">Email</label>
                <input
                    className="input-check"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </div>

                <div className="lab">
                <label className="lab-check">Confirmar Email</label>
                <input
                    className="input-check"
                    type="email"
                    value={confirmacion}
                    onChange={(e) => setConfirmacion(e.target.value)}
                />
                </div>

                    {cart.map((producto) => (
                        <div className="productForm" key={producto.id}>
                            <div className="productQuantity">
                                <h4>{producto.quantity}</h4>
                                <i class="bi bi-person-badge"></i>
                                {producto.name}
                            </div>
        
                            <h5> $ {producto.price} </h5>
                            
                        </div>
                    ))}

                <p>Total: $ {totalPrice().toFixed(2)}</p>

                {error && <p className="errores">{error}</p>}

                {ordenID && (
                <p className="orden">
                    ¡Gracias por tu compra! <br /> Este es tu numero de orden: <br />{' '}
                    {ordenID}{' '}
                </p>
                )}

                
                <button className="checkoutButton" type="submit">Enviar</button>
                

            </form>
        </div>
      
    </div>
  );
};

