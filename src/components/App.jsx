// src/components/App.jsx

// import Product from './Product';
import Alert from './Alert'; // Використовуй default import, оскільки Alert експортується за замовчуванням

export default function App() {
  return (
    <>
      {/* <div>
        <h1>Best selling</h1>
        <Product name="Tacos With Lime" price={10.99} />
        <Product
          name="Fries and Burger"
          imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
          price={14.29}
        />
      </div> */}
      <div>
        <Alert variant="info">
          Would you like to browse our recommended products?
        </Alert>
        <Alert variant="error">
          There was an error during your last transaction
        </Alert>
        <Alert variant="success">
          Payment received, thank you for your purchase
        </Alert>
        <Alert variant="warning">
          Please update your profile contact information
        </Alert>
      </div>
    </>
  );
}
